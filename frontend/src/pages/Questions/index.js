import React, { Component } from 'react';
import Collapse from '@kunukn/react-collapse';

import { FaQuestionCircle, FaPlus, FaSearch } from 'react-icons/fa';
import socket from 'socket.io-client';

import {
  ContainerStyled,
  ContainerQuestionStyled,
  FormStyled,
  SubmitButtonStyled,
  AnswerListStyled,
  ContainerAnswerStyled,
  FormSearchStyled,
  CheckStyled,
  WrapperButtonStyled,
  ButtonFilterStyled
} from './styles';

import QuestionComponent from '../../components/QuestionComponent';
import { api, baseURL } from '../../services/api';

export default class Login extends Component {
  state = {
    username: '',
    question: '',
    questions: [],
    filter: '',
    isChecked: false,
    radioDataChecked: true,
    radioLikeChecked: false,
    orderByQuestion: '',
    orderByAnswer: '',
    isOpen: false,
    showButton: true,
  };

  componentDidMount = async () => {
    this.subscribeToEvents();
    const { orderByQuestion, orderByAnswer, filter } = this.state;
    const username = localStorage.getItem('@BexsQuestions:username');
    if (!username) {
      const { history } = this.props;
      history.push('/');
    }

    const response = await api.get('questions', {
      params: {
        orderByQuestion,
        orderByAnswer,
        text: filter,
      },
    });

    const questions = response.data;

    this.setState({ username, questions });
  };

  subscribeToEvents = () => {
    const io = socket(baseURL);
    io.on('question', (data) => {
      const { questions } = this.state;
      this.setState({ questions: [data, ...questions] });
    });

    io.on('questionlikes', async () => {
      const { orderByQuestion, orderByAnswer, filter } = this.state;
      const response = await api.get('questions', {
        params: {
          orderByQuestion,
          orderByAnswer,
          text: filter,
        },
      });

      const questions = response.data;
      this.setState({ questions });
    });

    io.on('answer', async () => {
      const { orderByQuestion, orderByAnswer, filter, isChecked } = this.state;
      const response = await api.get('questions', {
        params: {
          orderByQuestion,
          orderByAnswer,
          text: filter,
        },
      });

      let questions = response.data;
      if (isChecked) {
        const newQuestions = questions.filter(
          (item) => item.answers.length === 0
        );
        if (newQuestions.length > 0) {
          questions = newQuestions;
        }
      }

      this.setState({ questions });
    });
  };

  handleInputQuestion = (e) => {
    this.setState({ question: e.target.value });
  };

  handleFilterQuestion = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { question, username } = this.state;
    if (question === '') return;
    await api.post('questions', { text: question, user: username });
    this.setState({ question: '' });
  };

  handleFilterSubmit = async (e) => {
    e.preventDefault();
    const { filter, isChecked, radioLikeChecked } = this.state;

    const orderBy = radioLikeChecked ? 'like' : '';

    const response = await api.get('questions', {
      params: {
        text: filter,
        orderByQuestion: orderBy,
        orderByAnswer: orderBy,
      },
    });

    let questions = response.data;
    if (isChecked) {
      const newQuestions = questions.filter(
        (item) => item.answers.length === 0
      );

      if (newQuestions.length === 0) {
        alert('Todas as perguntas foram respondidas!');
        this.setState({ isChecked: false });
        return;
      }

      questions = newQuestions;
    }

    this.setState({
      questions,
      orderByQuestion: orderBy,
      orderByAnswer: orderBy,
    });
  };

  handleCheck = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  handleRadio = () => {
    const { radioDataChecked, radioLikeChecked } = this.state;
    this.setState({
      radioDataChecked: !radioDataChecked,
      radioLikeChecked: !radioLikeChecked,
    });
  };

  toggle = () => {
    const { isOpen, showButton } = this.state;
    this.setState({ isOpen: !isOpen, showButton: !showButton });
  };

  showFilters = () => {
    const { filter, isChecked, radioDataChecked, radioLikeChecked, } = this.state;

    return (
      <>
        <FormSearchStyled onSubmit={this.handleFilterSubmit}>
          <div>
            <input
              type="text"
              placeholder="Filtrar pergunta"
              value={filter}
              onChange={this.handleFilterQuestion}
            />

            <SubmitButtonStyled>
              <FaSearch color="#fff" size={16} />
            </SubmitButtonStyled>
          </div>
          <CheckStyled>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={isChecked}
                onChange={this.handleCheck}
              />
              <button
                type="button"
                className="mt-1"
                style={{ border: 'none', outline: 'none' }}
                onClick={this.handleCheck}
              >
                Somente sem respostas
              </button>
              <div className="ml-4 mr-2 mt-1">Ordenar:</div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="orderBy"
                  value="data"
                  checked={radioDataChecked}
                  onChange={this.handleRadio}
                />
                <div className="form-check-label mt-1">Data de Criação</div>
              </div>
              <div className="form-check ml-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="orderBy"
                  value="like"
                  checked={radioLikeChecked}
                  onChange={this.handleRadio}
                />
                <div className="form-check-label mt-1">Like</div>
              </div>
            </div>
          </CheckStyled>
        </FormSearchStyled>
      </>
    );
  };


  render() {
    const {
      username,
      question,
      questions,
      isOpen
    } = this.state;

    return (
      <ContainerStyled>
        <ContainerQuestionStyled>
          <h1>
            Olá {username}! Alguma nova pergunta
            <FaQuestionCircle color="#4bde95" />
          </h1>

          <FormStyled onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Digite aqui sua pergunta"
              value={question}
              onChange={this.handleInputQuestion}
            />

            <SubmitButtonStyled>
              <FaPlus color="#fff" size={16} />
            </SubmitButtonStyled>
          </FormStyled>
        </ContainerQuestionStyled>

        {questions.length > 0 && (
          <ContainerAnswerStyled>

            <WrapperButtonStyled>
              <div />
              <ButtonFilterStyled type="button" onClick={this.toggle}>
                Filtros
              </ButtonFilterStyled>
            </WrapperButtonStyled>

            <Collapse
              isOpen={isOpen}
              transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
              aria-hidden={isOpen ? 'false' : 'true'}
              elementType="article"
              render={this.showFilters}
            />

            <h1>Lista de Perguntas</h1>

            <AnswerListStyled>
              {questions.map((item) => (
                <QuestionComponent
                  key={item.id}
                  question={item}
                  user={username}
                  questions={questions}
                />
              ))}
            </AnswerListStyled>
          </ContainerAnswerStyled>
        )}
      </ContainerStyled>
    );
  }
}
