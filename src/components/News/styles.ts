import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    font-size: 14px;

    > span {
      color: var(--gray);

      margin-bottom: 3px;
    }
  }

  img {
    height: 60px;
    width: 65px;
    border-radius: 14px;
  }
`;
