import * as Yup from 'yup';
import User from '../model/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6)
        .max(30)
        .required('password is required'),
      email: Yup.string()
        .email()
        .max(50)
        .required('email is required'),
      name: Yup.string()
        .min(2)
        .max(50)
        .required('name is required'),
    });

    try {
      await schema.validate(req.body);
    } catch(err) {
      return res.status(400)
        .json({ errorCode: 400, errorMessage: err.message });
    }

    const { email } = req.body;

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

    if (userExists) {
      return res.status(400)
        .json({ errorCode: 400, errorMessage: 'User already exists' });
    }

    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch(err) {
      console.log(err);
      return res.status(500)
        .json({ errorCode: 500, errorMessage: err.message });
    }
  }    
}

export default new UserController();
