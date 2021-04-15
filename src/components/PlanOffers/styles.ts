import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: #151516;

  h2 {
    font-weight: 400;
  }

  .UserEmail {
    border: 1px solid #e1dee8;
    width: fit-content;
    height: 26px;
    border-radius: 13px;
    padding: 0 12px;
    margin-bottom: 20px;
  }
`;

export const Offer = styled.label`
  margin: 10px 0;
  border: 1px solid var(--blue);
  border-radius: 16px;
  padding: 25px 30px 25px 25px;
  color: var(--blue);

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & > div > div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    margin-bottom: 6px;
  }

  input {
    cursor: pointer;
    height: 0;
    width: 0;
    position: relative;

    &::after,
    &::before {
      box-sizing: border-box;
      content: '';
      display: block;
      position: absolute;
      opacity: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      transition: all 0.2s;
    }
    &::before {
      width: 20px;
      height: 20px;
      border: 3px solid #e1dee8;
    }

    &:checked::after {
      width: 8px;
      height: 8px;
      background-color: var(--blue);
    }
  }

  .Disccount {
    background-color: var(--orange);
    color: #fff;
    border-radius: 12px;
    font-size: 0.9rem;
    padding: 0 9px;
    margin-left: 11px;
    height: 24px;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Installments {
    color: var(--orange);
  }
`;
