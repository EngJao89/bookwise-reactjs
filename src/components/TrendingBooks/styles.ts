import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 324px;
  margin-left: 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const SeeButton = styled.button`
  background-color: transparent !important;
  border: none;
  color: ${(props) => props.theme['purple-100']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  align-items: center;
  padding: 6px 8px;
`;

export const CardBook = styled.div`
  background: ${(props) => props.theme['gray-700']};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-radius: 8px;
`;

export const CardBookTitle = styled.span`
color: ${(props) => props.theme.white};
font-family: 'Roboto';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
`;

export const BookAuthor = styled.h5`
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 34px;
  gap: 4px;
`;
