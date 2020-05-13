import styled from 'styled-components';

export const ContainerStyled = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ContainerQuestionStyled = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;

export const FormStyled = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const FormSearchStyled = styled.form`
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 5px;
      border-radius: 4px;
      font-size: 12px;
    }
  }
`;

export const CheckStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButtonStyled = styled.button.attrs({
  type: 'submit',
})`
  background: #4bde95;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  outline: none !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnswerListStyled = styled.ul`
  list-style: none;
  color: #1c2022;
`;

export const ContainerAnswerStyled = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;

export const WrapperButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonFilterStyled = styled.button.attrs({
  type: 'button',
})`
  background: #4bde95;
  color: #fff;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  outline: none !important;
`;
