import app from './App';
import serverConfig from './config/server';

app.listen(serverConfig.port, () => console.log(`Listening on port : ${serverConfig.port}`));