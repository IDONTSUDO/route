process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import { routes } from './routes/routes';

const app = new App([new IndexRoute(), ...routes]);
app.listen();
