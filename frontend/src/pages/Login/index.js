import React, { Component } from 'react';

import {
  LoginWrapperStyled,
  FormStyled,
  SubmitButtonStyled,
  TitleStyled,
  MessageStyled,
} from './styles';

import assets from './assets';

export default class Login extends Component {
  state = {
    username: '',
    showMessage: false,
  };

  componentDidMount() {
    localStorage.removeItem('@BexsQuestions:username');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username } = this.state;
    if (!username.length) {
      this.setState({ showMessage: true });
      return;
    }

    localStorage.setItem('@BexsQuestions:username', username);

    const { history } = this.props;
    history.push('/questions');
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value, showMessage: false });
  };

  render() {
    const { username, showMessage } = this.state;

    return (
      <LoginWrapperStyled>
        <TitleStyled>Desafio Fórum de Perguntas e Respostas</TitleStyled>
        <img src={assets.imgLogo} alt="Bexs" />
        <FormStyled onSubmit={this.handleSubmit}>
          <input
            value={username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          {showMessage && <MessageStyled>Nome não informado!</MessageStyled>}

          <SubmitButtonStyled>Entrar</SubmitButtonStyled>
        </FormStyled>
      </LoginWrapperStyled>
    );
  }
}
