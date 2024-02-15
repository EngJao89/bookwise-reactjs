import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const TextHeader = styled.span`
  display: flex;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
`;

export const InputSearch = styled.div`
  display: flex;
  width: 433px;
  height: 48px;
  padding: 14px 20px;
  margin-left: 420px;
  gap: 8px;
  flex-shrink: 0;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${(props) => props.theme['gray-500']};
`;

export const TextSearch = styled.span`
  flex: 1 0 0;
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const ContentTag =styled.div`
  display: flex;
  margin-top: 24px;
`;

export const ListContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;

export const BookCard = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 20px;
`;

export const BookTitle = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  &:hover {
    color: ${(props) => props.theme['gray-400']};
  }
`;

export const BookSubtitle = styled.span`
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
