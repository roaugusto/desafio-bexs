import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: transparent;
  outline: none !important;
  /* color: #697882; */

  img {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonAnswerStyled = styled.button.attrs({
  type: 'button',
})`
  background: #4bde95;
  color: #fff;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  outline: none !important;
`;

export const WrapperTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;

  h1 {
    font-size: 22px;
    font-weight: bold;
    /* color: #697882; */
  }

  div {
    justify-content: flex-end;

    svg {
      margin-left: 5px;
    }
  }
`;

export const TitleStyled = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const WrapperAnswerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const WrapperButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerListStyled = styled.div``;

export const AnswerStyled = styled.div`
  margin: 10px 10px 5px 10px;
  /* color: #697882; */

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #697882;
  }
`;

export const DateStyled = styled.div`
  font-size: 12px;
  font-style: italic;
  color: #697882;
`;

export const TextStyled = styled.div`
  font-size: 14px;
  font-weight: bold;
  /* color: #697882; */
`;

export const CardQuestionStyled = styled.div`
  margin-bottom: 10px;
  /* color: #697882; */
`;

export const FormStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const SubmitButtonStyled = styled.button.attrs({
  type: 'button',
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

export const SubmitButtonCancelStyled = styled.button.attrs({
  type: 'button',
})`
  background: #f28686;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  outline: none !important;

  display: flex;
  justify-content: center;
  align-items: center;
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

export const ButtonBackStyled = styled.button.attrs({
  type: 'button',
})`
  /* background: #4bde95; */
  border: 1;
  padding-right: 4px;
  /* margin-left: 10px; */
  margin-right: 10px;
  border-radius: 4px;
  outline: none !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  input {
    margin-top: 2px;
    margin-left: 15px;
    margin-right: 5px;
  }
`;
