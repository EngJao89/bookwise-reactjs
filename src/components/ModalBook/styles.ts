import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(100px, 0)' },
  '100%': { opacity: 1, transform: 'translate(0, 0)' },
})

export const DialogRoot = Dialog.Root

export const DialogTrigger = Dialog.Trigger

export const DialogPortal = Dialog.Portal

export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 40px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 660px;
  padding: 48px;
  overflow-y: auto;
  background: ${(props) => props.theme['gray-800']};
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.5);
  animation: ${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogTitle = Dialog.Title

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  margin-left: 538px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const BookSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 64px;
  padding: 24px 32px 16px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme['gray-700']};
`;

export const BookContent = styled.div`
  display: flex;
  gap: 32px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookTitle = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  color: ${(props) => props.theme.white};
`;

export const BookSubtitle = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  color: ${(props) => props.theme['gray-300']};
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BookAbout = styled.div`
  display: flex;
  gap: 276px;
  padding: 24px 0;
  border-top: 1px solid;
  border-color: ${(props) => props.theme['gray-300']};
`;

export const BookStats = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 4px;
  gap: 16px;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusSubtitles = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  color: ${(props) => props.theme.white};
`;

export const EvaluateContent = styled.section`
  display: flex;
  flex-direction: row-reverse;
  gap: 444px;
`;

export const EvaluateButton = styled.button`
  all: unset;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
`;


export const EvaluateTitles = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: bold;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  color: ${(props) => props.theme['purple-100']};
  &:hover {
    color: ${(props) => props.theme['gray-200']};
  }
`;

export const EvaluateCard = styled.div`
  background: ${(props) => props.theme['gray-700']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
`;

export const EvaluateHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const EvaluateUser = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  flex: 1 0 0;
`;

export const EvaluateDate = styled.span`
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  flex: 1 0 0;
`;

export const EvaluateText = styled.span`
  color: ${(props) => props.theme['gray-300']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  padding-top: 8px;
  align-self: stretch;
`;
