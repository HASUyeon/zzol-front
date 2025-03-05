"use client";

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
        <input name="kakaoId" id="kakaoId" required disabled />
        <br />
        <input name="nickname" id="nickname" required />
        <br />
        <input type="email" id="email" name="email" required />
        <br />
        <input type="date" name="birthDate" id="birthDate" required />
        <br />
        <button type="submit">카카오 회원가입</button>
      </form>
    </div>
  );
};

export default SignInPage;
