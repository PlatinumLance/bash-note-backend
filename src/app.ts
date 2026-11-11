import express, {type Express, type Request, type Response} from 'express';
import usersRoutes from "./modules/users/users.routes";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.use("/users", usersRoutes)

export {app};