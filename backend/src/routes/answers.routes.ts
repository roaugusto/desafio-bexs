import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import QuestionsRepository from '../repositories/QuestionsRepository';
import AnswersRepository from '../repositories/AnswersRepository';

import CreateAnswerService from '../services/CreateAnswerService';

const answersRouter = Router();

answersRouter.post('/:id/like', async (request, response) => {
  const { id } = request.params;
  const answersRepository = getCustomRepository(AnswersRepository);
  const answer = await answersRepository.like(id);
  request.io.emit('answer', answer);
  return response.json(answer);
});

answersRouter.post('/', async (request, response) => {
  try {
    const { questionId, text, user } = request.body;
    const createAnswer = new CreateAnswerService();
    const answer = await createAnswer.execute({ questionId, text, user });

    request.io.emit('answer', answer);

    return response.json(answer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default answersRouter;
