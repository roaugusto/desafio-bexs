import CreateAnswerService from '../../src/services/CreateAnswerService';
import CreateQuestionService from '../../src/services/CreateQuestionService';

describe('Answers', () => {
  it('questionId parameter should be informed', async () => {
    try {
      const createAnswer = new CreateAnswerService();
      await createAnswer.execute({ questionId: '', text: '', user: '' });
    } catch (err) {
      expect(err.message).toBe('Question ID should be informed!');
    }
  });
  it('text parameter should be informed', async () => {
    try {
      const createAnswer = new CreateAnswerService();
      await createAnswer.execute({ questionId: '123456', text: '', user: '' });
    } catch (err) {
      expect(err.message).toBe('Answer should be informed!');
    }
  });
  it('user parameter should be informed', async () => {
    try {
      const createAnswer = new CreateAnswerService();
      await createAnswer.execute({
        questionId: '123456',
        text: 'answer',
        user: '',
      });
    } catch (err) {
      expect(err.message).toBe('Name user should be informed!');
    }
  });
  it('answer should be created', async () => {
    const createQuestion = new CreateQuestionService();
    const question = await createQuestion.execute({
      text: 'question - test answer',
      user: 'user answer',
    });

    const createAnswer = new CreateAnswerService();
    const answer = await createAnswer.execute({
      questionId: question.id,
      text: 'answer',
      user: 'user2',
    });

    expect(answer.text).toBe('answer');
    expect(answer.user).toBe('user2');
  });
});
