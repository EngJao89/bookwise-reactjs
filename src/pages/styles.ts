import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 146px;
  align-items: center;
  gap: 12px;
`;

export const TextHeader = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  gap: 16px;
`;

export const ContentBook = styled.div`
  display: flex;
  width: 608px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const TextSubtitle = styled.span`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const ContainerTrend = styled.div`
  display: flex;
  width: 324px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
