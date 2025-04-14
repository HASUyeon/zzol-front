import { ReactNode } from "react";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode | ReactNode[];
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return <div>{children}</div>;
};
