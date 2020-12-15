import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../model/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6)
        .max(30)
        .required('password is required'),
      email: Yup.string()
        .email()
        .max(50)
        .required('email is required')
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: 400, errorMessage: err.message });
    }

    const { email, password } = req.body;

    let userExists = null;

    try {
      userExists = await User.findOne({
        where: { email }
      });
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: 500, errorMessage: err.message });
    }

    if (!userExists) {
      return res.status(401)
        .json({ errorCode: 401, errorMessage: 'User not found' });
    }

    if (!(await userExists.checkPassword(password))) {
      return res.status(401)
        .json({ errorCode: 401, errorMessage: 'Password does not match' });
    }

    const { id, name } = userExists;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();