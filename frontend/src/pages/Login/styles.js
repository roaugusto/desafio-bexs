import styled from 'styled-components';

export const LoginWrapperStyled = styled.div`
  margin-top: 80px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleStyled = styled.h1`
  color: #3c3c3c;
  margin-bottom: 40px;
  width: 400px;
  text-align: center;
`;

export const FormStyled = styled.form`
  margin: 20px 0 0;
  width: 100%;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
  }
`;

export const MessageStyled = styled.small`
  color: #3c3c3c;
  margin-left: 5px;
  margin-top: 5px;
  color: #f28686;
`;

export const SubmitButtonStyled = styled.button.attrs({
  type: 'submit',
})`
  margin: 10px 0 0;
  background: #4bde95;
  border-radius: 5px;
  height: 44px;
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
