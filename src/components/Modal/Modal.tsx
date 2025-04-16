import clsx from "clsx";
import { ReactNode } from "react";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode | ReactNode[];
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div
      className={clsx(
        open ? "flex items-center justify-center" : "hidden",
        "absolute top-0 left-0 w-full h-full",
        "bg-[#0000004C]",
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "max-w-[480px] max-h-full",
          "bg-white",
          "p-[16px] rounded-[8px]",
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
