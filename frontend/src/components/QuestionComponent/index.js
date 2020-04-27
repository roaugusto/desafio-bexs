import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdPersonPin } from 'react-icons/md';
import moment from 'moment-timezone';
import { FaPlus } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import assets from './assets';
import { api } from '../../services/api';

import {
  ButtonStyled,
  CardBoardStyled,
  WrapperAnswerStyled,
  WrapperTitleStyled,
  SmallStyled,
  FormStyled,
  SubmitButtonStyled,
  SubmitButtonCancelStyled,
  CardQuestionStyled,
} from './styles';

export default class QuestionComponent extends Component {
  state = {
    isOpen: false,
    showButton: true,
    answer: '',
  };

  toggle = () => {
    const { isOpen, showButton } = this.state;
    this.setState({ isOpen: !isOpen, showButton: !showButton });
  };

  handleQuestionDetail = () => {};

  handleAddAnswer = async (questionId) => {
    const { answer, isOpen, showButton } = this.state;
    const { user } = this.props;

    if (answer === '') return;
    if (questionId === '') return;

    await api.post('answers', { text: answer, user, questionId });
    this.setState({ answer: '', isOpen: !isOpen, showButton: !showButton });
  };

  handleInputAnswer = (e) => {
    this.setState({ answer: e.target.value });
  };

  handleLike = async (questionId) => {
    await api.post(`questions/${questionId}/like`);
  };

  showAnswers = (questionId) => {
    const { answer } = this.state;

    return (
      <FormStyled>
        <input
          type="text"
          placeholder="Digite aqui sua resposta!"
          value={answer}
          onChange={this.handleInputAnswer}
        />

        <SubmitButtonStyled onClick={() => this.handleAddAnswer(questionId)}>
          <FaPlus color="#fff" size={16} />
        </SubmitButtonStyled>
        <SubmitButtonCancelStyled onClick={this.toggle}>
          <GiCancel color="#fff" size={20} />
        </SubmitButtonCancelStyled>
      </FormStyled>
    );
  };

  render() {
    const { question, questions } = this.props;
    const { answers } = question;

    const qtdAnswered = answers ? answers.length : 0;
    const textAnswered = qtdAnswered > 1 ? 'Respondidas' : 'Respondida';

    return (
      <CardQuestionStyled>
        <CardBoardStyled className="card">
          <WrapperAnswerStyled>
            <SmallStyled>
              Criada em {moment(question.createdAt).format('DD/MM/YYYY')} às{' '}
              {moment(question.createdAt).format('HH:mm:ss')}
            </SmallStyled>
            <SmallStyled>
              {qtdAnswered} {textAnswered}
            </SmallStyled>
          </WrapperAnswerStyled>

          <WrapperTitleStyled>
            <h1>{question.text}</h1>
            <div>
              <MdPersonPin size={20} />
              {question.user}
            </div>
          </WrapperTitleStyled>

          <WrapperAnswerStyled>
            <ButtonStyled onClick={() => this.handleLike(question.id)}>
              <img src={assets.imgLike} alt="Like" />
              {question.likes}
            </ButtonStyled>
            <Link
              to={{
                pathname: '/question-detail',
                query: { question, questions },
              }}
            >
              Respostas
            </Link>
          </WrapperAnswerStyled>
        </CardBoardStyled>
      </CardQuestionStyled>
    );
  }
}
