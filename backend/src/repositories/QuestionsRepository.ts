import { EntityRepository, Repository } from 'typeorm';
import Question from '../models/Question';

interface Params {
  orderByQuestion: string;
  orderByAnswer: string;
  text: string;
}

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {
  public async findById(id: string, params: Params): Promise<Question | null> {
    const { orderByAnswer } = params;
    const orderAnswer =
      orderByAnswer === 'like' ? 'answers.likes' : 'answers.createdAt';

    const findQuestion = await this.createQueryBuilder('questions')
      .leftJoinAndSelect('questions.answers', 'answers')
      .where('questions.id = :id', { id })
      .orderBy('questions.createdAt', 'DESC')
      .addOrderBy(orderAnswer, 'DESC')
      .getOne();

    return findQuestion || null;
  }

  public async like(id: string): Promise<Question | null> {
    const question = await this.findOne({
      where: { id },
    });

    if (!question) return null;

    question.likes += 1;
    this.update(id, { likes: question.likes });

    return question;
  }

  public async findAll(params: Params): Promise<Question[] | null> {
    const { text } = params;
    const { orderByQuestion } = params;
    const { orderByAnswer } = params;

    const orderQuestion =
      orderByQuestion === 'like' ? 'questions.likes' : 'questions.createdAt';

    const orderAnswer =
      orderByAnswer === 'like' ? 'answers.likes' : 'answers.createdAt';

    const query = this.createQueryBuilder('questions')
      .leftJoinAndSelect('questions.answers', 'answers')
      .orderBy(orderQuestion, 'DESC')
      .addOrderBy(orderAnswer, 'DESC');

    if (text)
      query.where('LOWER(questions.text) like :text', {
        text: `%${text.toLowerCase()}%`,
      });

    const findAll = await query.getMany();

    return findAll || null;
  }
}

export default QuestionsRepository;
