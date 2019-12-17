import 'reflect-metadata';
import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: { body: string }) => {
  ctx.body = 'abdul-kareem';
});

app.listen(3000, () => console.log('Server started...'));
