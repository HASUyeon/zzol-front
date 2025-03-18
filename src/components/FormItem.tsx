import clsx from "clsx";
import React, { cloneElement, ReactElement } from "react";
import { ReactNode } from "react";

interface FormItemProps {
  label?: ReactNode;
  name: string;
  hidden?: boolean;
  required?: boolean;
  children: ReactElement;
}

export const FormItem = ({
  label,
  children,
  name,
  hidden,
  required,
}: FormItemProps) => {
  return (
    <div className={clsx(hidden ? "hidden" : "")}>
      <div>{label}</div>
      <div>
        {React.Children.map(children, (child: ReactElement) =>
          cloneElement(child, {
            name: name,
            id: name,
            required: required,
          }),
        )}
      </div>
    </div>
  );
};
