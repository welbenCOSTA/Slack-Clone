import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin: 10px 0px;
    border: 1px solid #49274b;
  }
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > svg {
    padding: 8px;
    color: #49274b;
    background-color: white;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    > svg {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > svg {
    margin: 10px;
  }
`;

export const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  > span {
    padding: 15px;
  }
`;
