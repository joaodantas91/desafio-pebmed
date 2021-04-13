import styled from 'styled-components';

const Container = styled.div`
  width: 1110px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  align-items: center;

  .LinkBack {
    color: #151516;
  }

  .Brand {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Container;
