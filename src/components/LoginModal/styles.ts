import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogRoot = Dialog.Root

export const DialogTrigger = Dialog.Trigger

export const DialogPortal = Dialog.Portal

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: ${overlayShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 56px 72px;
  border-radius: 12px;
  background: ${(props) => props.theme['gray-700']};
  box-shadow: -4px 0px 30px rgba(0, 0, 0, 0.5);
  animation: ${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogTitle = styled(Dialog.Title)`
  color: ${(props) => props.theme.white};
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
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

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
