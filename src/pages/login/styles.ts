import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: space-between;
  gap: 40px;
`;

export const MainSection = styled.section`
  margin-top: 245px;
  margin-left: 194px;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  text-align: center;
`;

export const SubTitleSection = styled.span`
  color: ${(props) => props.theme['gray-200']};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  margin-bottom: 40px;
`;

export const CardLogin = styled.button`
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme.white};
  display: flex;
  width: 372px;
  padding: 20px 24px;
  margin-bottom: 16px;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  border: 0;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`;
