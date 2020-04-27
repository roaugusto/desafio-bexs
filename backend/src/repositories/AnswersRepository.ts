import { EntityRepository, Repository } from 'typeorm';
import Answer from '../models/Answer';

@EntityRepository(Answer)
class AnswersRepository extends Repository<Answer> {
  public async like(id: string): Promise<Answer | null> {
    const answer = await this.findOne({
      where: { id },
    });

    if (!answer) return null;

    answer.likes += 1;
    this.update(id, { likes: answer.likes });

    return answer;
  }
}

export default AnswersRepository;
