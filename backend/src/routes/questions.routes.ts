import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import QuestionsRepository from '../repositories/QuestionsRepository';
import CreateQuestionService from '../services/CreateQuestionService';

const questionsRouter = Router();

interface Params {
  orderByQuestion: string;
  orderByAnswer: string;
  text: string;
}

questionsRouter.get('/', async (request, response) => {
  const questionsRepository = getCustomRepository(QuestionsRepository);
  const { query } = request;

  const orderByQuestion: string =
    typeof query.orderByQuestion === 'string' ? query.orderByQuestion : '';
  const orderByAnswer: string =
    typeof query.orderByAnswer === 'string' ? query.orderByAnswer : '';

  const text: string = typeof query.text === 'string' ? query.text : '';

  const params: Params = {
    orderByQuestion,
    orderByAnswer,
    text,
  };

  const questions = await questionsRepository.findAll(params);
  return response.json(questions);
});

questionsRouter.get('/:questionId', async (request, response) => {
  const { questionId } = request.params;

  const { query } = request;
  const orderByAnswer: string =
    typeof query.orderByAnswer === 'string' ? query.orderByAnswer : '';

  const params: Params = {
    orderByQuestion: '',
    orderByAnswer,
    text: '',
  };

  const questionsRepository = getCustomRepository(QuestionsRepository);
  const question = await questionsRepository.findById(questionId, params);
  return response.json(question);
});

questionsRouter.post('/:questionId/like', async (request, response) => {
  const { questionId } = request.params;
  const questionsRepository = getCustomRepository(QuestionsRepository);
  const question = await questionsRepository.like(questionId);
  request.io.emit('questionlikes', question);
  return response.json(question);
});

questionsRouter.post('/', async (request, response) => {
  try {
    const { text, user } = request.body;

    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({ text, user });
    request.io.emit('question', question);
    return response.json(question);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default questionsRouter;
