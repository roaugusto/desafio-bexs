import { getCustomRepository } from 'typeorm';

import Answer from '../models/Answer';
import AnswersRepository from '../repositories/AnswersRepository';
import QuestionRepository from '../repositories/QuestionsRepository';

interface Request {
  questionId: string;
  text: string;
  user: string;
}

class CreateAnswerService {
  public async execute({ questionId, text, user }: Request): Promise<Answer> {
    const answersRepository = getCustomRepository(AnswersRepository);
    const questionRepository = getCustomRepository(QuestionRepository);

    if (questionId === '') throw Error('Question ID should be informed!');
    if (text === '') throw Error('Answer should be informed!');
    if (user === '') throw Error('Name user should be informed!');

    const findQuestion = await questionRepository.findOne(questionId);

    if (!findQuestion) throw Error('Question not found!');

    const answer = answersRepository.create({
      questionId,
      text,
      user,
      likes: 0,
    });

    await answersRepository.save(answer);

    return answer;
  }
}

export default CreateAnswerService;
