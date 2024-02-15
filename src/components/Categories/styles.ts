import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 996px;
  align-items: center;
  gap: 12px;
`;

export const TagCard = styled.span`
  padding: 4px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${(props) => props.theme['purple-100']};
`;

export const TextTag = styled.h3`
  color: ${(props) => props.theme['purple-100']};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
`;
