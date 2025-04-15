import clsx from "clsx";
import { FormEvent, ReactNode } from "react";

interface FormProps<T> {
  children: ReactNode;
  onSubmit?: (values: T) => void | Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = <T extends Record<string, any>>({
  onSubmit,
  children,
}: FormProps<T>) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    if (onSubmit) {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      const formObject = Object.fromEntries(formData.entries()) as T;
      onSubmit(formObject);
    }
  };

  return (
    <form
      className={clsx("flex flex-col gap-[16px]")}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};
