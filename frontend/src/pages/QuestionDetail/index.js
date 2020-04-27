import React, { Component } from 'react';
import { MdPersonPin } from 'react-icons/md';
import Collapse from '@kunukn/react-collapse';
import moment from 'moment-timezone';
import { FaPlus } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { TiArrowBack } from 'react-icons/ti';
import socket from 'socket.io-client';

import assets from './assets';
import { api, baseURL } from '../../services/api';

import {
  AnswerStyled,
  ButtonStyled,
  AnswerListStyled,
  ButtonAnswerStyled,
  WrapperAnswerStyled,
  WrapperTitleStyled,
  DateStyled,
  TextStyled,
  FormStyled,
  SubmitButtonStyled,
  SubmitButtonCancelStyled,
  CardQuestionStyled,
  ContainerQuestionStyled,
  ButtonBackStyled,
  TitleStyled,
  WrapperButtonStyled,
  CheckStyled,
} from './styles';

export default class QuestionDetail extends Component {
  state = {
    isOpen: false,
    showButton: true,
    answer: '',
    question: '',
    user: '',
    radioDataChecked: true,
    radioLikeChecked: false,
  };

  componentDidMount() {
    this.subscribeToEvents();

    const { location } = this.props;
    const user = localStorage.getItem('@BexsQuestions:username');

    if (!location.query) {
      const { history } = this.props;
      history.push('/questions');
      return;
    }

    const { question } = location.query;
    this.setState({ question, user });
  }

  subscribeToEvents = () => {
    const io = socket(baseURL);

    io.on('answer', async (data) => {
      const { questionId } = data;
      const response = await api.get(`questions/${questionId}`);
      const newQuestion = response.data;
      this.setState({ question: newQuestion });
    });
  };

  toggle = () => {
    const { isOpen, showButton } = this.state;
    this.setState({ isOpen: !isOpen, showButton: !showButton });
  };

  handleAddAnswer = async (questionId) => {
    const { answer, isOpen, showButton, user } = this.state;

    if (answer === '') return;
    if (questionId === '') return;

    await api.post('answers', { text: answer, user, questionId });
    this.setState({ answer: '', isOpen: !isOpen, showButton: !showButton });
  };

  handleInputAnswer = (e) => {
    this.setState({ answer: e.target.value });
  };

  handleBack = () => {
    const { history } = this.props;
    history.push('/questions');
  };

  handleLike = async (id) => {
    await api.post(`answers/${id}/like`);
  };

  handleCheck = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  handleRadio = async (id) => {
    const { radioDataChecked, radioLikeChecked } = this.state;
    this.setState({
      radioDataChecked: !radioDataChecked,
      radioLikeChecked: !radioLikeChecked,
    });

    const orderBy = radioLikeChecked ? '' : 'like';

    const response = await api.get(`questions/${id}`, {
      params: { orderByAnswer: orderBy },
    });
    const newQuestion = response.data;
    this.setState({ question: newQuestion });
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
    const { question, isOpen, radioDataChecked, radioLikeChecked } = this.state;
    const { answers } = question;

    return (
      <ContainerQuestionStyled>
        <CardQuestionStyled>
          <DateStyled>
            Criada em {moment(question.createdAt).format('DD/MM/YYYY')} às{' '}
            {moment(question.createdAt).format('HH:mm:ss')}
          </DateStyled>

          <WrapperTitleStyled>
            <h1>
              <ButtonBackStyled onClick={this.handleBack}>
                <TiArrowBack size={30} color="#4bde95" />
              </ButtonBackStyled>

              {question.text}
            </h1>
            <div>
              <MdPersonPin size={20} />
              {question.user}
            </div>
          </WrapperTitleStyled>

          <CheckStyled>
            <div>Ordenar:</div>
            <input
              type="radio"
              name="orderBy"
              value="data"
              checked={radioDataChecked}
              onChange={() => this.handleRadio(question.id)}
            />
            <div>Data de Criação</div>
            <input
              type="radio"
              name="orderBy"
              value="like"
              checked={radioLikeChecked}
              onChange={() => this.handleRadio(question.id)}
            />
            <div className="form-check-label">Like</div>
          </CheckStyled>

          <div className="card card-body">
            <WrapperAnswerStyled />

            <WrapperButtonStyled>
              <div />
              <ButtonAnswerStyled type="button" onClick={this.toggle}>
                Responder
              </ButtonAnswerStyled>
            </WrapperButtonStyled>

            <Collapse
              isOpen={isOpen}
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
              aria-hidden={isOpen ? 'false' : 'true'}
              elementType="article"
              render={() => this.showAnswers(question.id)}
            />

            <TitleStyled>Respostas</TitleStyled>

            {answers && (
              <AnswerListStyled>
                {answers.map((item) => (
                  <AnswerStyled key={item.id}>
                    <div>
                      <TextStyled>{item.text}</TextStyled>
                      <ButtonStyled onClick={() => this.handleLike(item.id)}>
                        <img src={assets.imgLike} alt="Like" />
                        {item.likes}
                      </ButtonStyled>
                    </div>
                    <WrapperAnswerStyled>
                      <div>
                        <MdPersonPin size={20} />
                        {item.user}
                      </div>
                      <DateStyled>
                        Respondida em{' '}
                        {moment(item.createdAt).format('DD/MM/YYYY')} às{' '}
                        {moment(item.createdAt).format('HH:mm:ss')}
                      </DateStyled>
                    </WrapperAnswerStyled>
                    <hr />
                  </AnswerStyled>
                ))}
              </AnswerListStyled>
            )}
          </div>
        </CardQuestionStyled>
      </ContainerQuestionStyled>
    );
  }
}
