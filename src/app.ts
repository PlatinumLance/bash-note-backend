import express, {type Express, type Request, type Response} from 'express';

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World Or Else!');
});

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`);
});