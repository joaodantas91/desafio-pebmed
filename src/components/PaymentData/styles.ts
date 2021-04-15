import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  color: #151516;

  h2 {
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  p {
    margin-bottom: 0.9rem;
  }

  .FlagsWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    & > div {
      width: 50px;
      height: 50px;
      position: relative;
    }
  }

  .iugu {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e1dee8;
    margin-bottom: 30px;

    div {
      margin-left: 5px;
      width: 43px;
      height: 25px;
      position: relative;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
    font-size: 0.9rem;
    color: #666173;
    &:last-child {
      margin-bottom: 0;
    }
    input {
      border: none;
      border-bottom: 1px solid #e1dee8;
      outline: none;
      padding: 5px 0 10px;
      width: 100%;
      font-size: 1.2rem;
      ::placeholder {
        color: #e1dee8;
      }

      &:focus {
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
    }
  }

  .InputGroup {
    display: flex;
    justify-content: space-between;
    & > label {
      width: 46%;
    }
  }

  .react-select {
    .react-select__control {
      border: none;
      box-shadow: none;
      border-radius: 0;
      border-bottom: 1px solid #e1dee8;
      &.react-select__control--is-focused {
        border-color: rgba(0, 0, 0, 0.4);
      }
      .react-select__value-container {
        padding: 0;
        & > div {
          margin-left: 0;
        }
      }
    }
  }
`;
