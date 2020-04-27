import { getCustomRepository } from 'typeorm';

import Question from '../models/Question';
import QuestionsRepository from '../repositories/QuestionsRepository';

interface Request {
  text: string;
  user: string;
}

class CreateQuestionService {
  public async execute({ text, user }: Request): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    if (text === '') throw Error('Question should be informed!');
    if (user === '') throw Error('Name user should be informed!');

    let question = new Question();
    try {
      question = questionsRepository.create({ text, user, likes: 0 });
      await questionsRepository.save(question);
    } catch (err) {
      Error(err.message);
    }

    return question;
  }
}

export default CreateQuestionService;
