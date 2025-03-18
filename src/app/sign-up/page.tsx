"use client";

import { FormItem } from "@/components/FormItem";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect } from "react";

const SignInPage = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const kakaoId = searchParams.get("kakaoId");
  const email = searchParams.get("email");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    const kakaoIdInputValue = (
      document.getElementById("kakaoId") as HTMLInputElement
    ).value;
    const nicknameInputValue = (
      document.getElementById("nickname") as HTMLInputElement
    ).value;
    const emailInputValue = (
      document.getElementById("email") as HTMLInputElement
    ).value;
    const birthDateInputValue = (
      document.getElementById("birthDate") as HTMLInputElement
    ).value;

    console.log(kakaoIdInputValue);
    console.log(nicknameInputValue);
    console.log(emailInputValue);
    console.log(birthDateInputValue);

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/sign-up/kakao",
        {
          kakaoId: kakaoIdInputValue,
          nickname: nicknameInputValue,
          email: emailInputValue,
          birthDate: birthDateInputValue,
        },
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const kakaoIdInput = document.getElementById("kakaoId") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    kakaoIdInput.value = kakaoId || "";
    emailInput.value = email || "";
  }, [email, kakaoId]);

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <FormItem name="kakaoId" required hidden>
          <input />
        </FormItem>
        <FormItem label="닉네임" name="nickname" required>
          <input />
        </FormItem>
        <FormItem label="이메일" name="email" required>
          <input type="email" />
        </FormItem>
        <FormItem label="생년월일" name="birthDate" required>
          <input type="date" />
        </FormItem>
        <br />
        <button type="submit">카카오 회원가입</button>
      </form>
    </div>
  );
};

export default SignInPage;
