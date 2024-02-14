import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${(props) => props.theme['gray-700']};
  display: flex;
  padding: 24px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const TextName = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  display: flex;
  flex: 1 0 0;
`;

export const TextDate = styled.h5`
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BookDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  justify-content: flex-start;
  align-self: stretch;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const BookName = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
`;

export const AuthorName = styled.p`
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const TextComment = styled.h5`
  color: ${(props) => props.theme['gray-300']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  padding-top: 8px;
`;
