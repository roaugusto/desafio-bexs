import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import questionsRouter from './questions.routes';
import answersRouter from './answers.routes';
import * as specs from '../../swagger.json'

const routes = Router();

routes.use('/questions', questionsRouter);
routes.use('/answers', answersRouter);

routes.use('/api-docs', swaggerUi.serve);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default routes;
