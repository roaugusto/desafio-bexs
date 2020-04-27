import CreateQuestionService from '../../src/services/CreateQuestionService';

describe('Questions', () => {
  it('text parameter should be informed', async () => {
    try {
      const createQuestion = new CreateQuestionService();
      await createQuestion.execute({ text: '', user: '' });
    } catch (err) {
      expect(err.message).toBe('Question should be informed!');
    }
  });
  it('user parameter should be informed', async () => {
    try {
      const createQuestion = new CreateQuestionService();
      await createQuestion.execute({ text: 'question', user: '' });
    } catch (err) {
      expect(err.message).toBe('Name user should be informed!');
    }
  });
  it('question should be created', async () => {
    const createQuestion = new CreateQuestionService();
    const question = await createQuestion.execute({
      text: 'question',
      user: 'user',
    });

    expect(question.text).toBe('question');
    expect(question.user).toBe('user');
  });
});
