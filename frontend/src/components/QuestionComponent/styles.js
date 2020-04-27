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

export const WrapperTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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

export const WrapperAnswerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallStyled = styled.div`
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
  margin-top: 5px;
  margin-bottom: 5px;
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

export const CardBoardStyled = styled.div`
  padding: 10px 20px;
`;
