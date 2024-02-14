import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme['gradient-vertical']};
  width: 232px;
  height: 988px;
  margin: 12px;
  flex-shrink: 0;
  border-radius: 12px;
`;

export const Logo = styled.div`
  padding-top: 2em;
  padding-left: 3em;
`;

export const InitButton = styled.label`
  color: ${(props) => props.theme['gray-400']};
  display: flex;
  padding-top: 64px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: ${(props) => props.theme.white};
  }
`;

export const ExplorerButton = styled.label`
  color: ${(props) => props.theme['gray-400']};
  display: flex;
  padding-top: 64px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  &:hover {
    color: ${(props) => props.theme.white};
  }
`;

export const LoginButton = styled.label`
  color: ${(props) => props.theme["green-100"]};
  display: flex;
  font-family: 'Roboto';
  padding-top: 694px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &:hover {
    color: ${(props) => props.theme.white};
  }
`;
