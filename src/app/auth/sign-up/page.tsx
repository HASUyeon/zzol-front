"use client";

import { usePostSignUp } from "@/api/hooks/auth";
import { KakaoSignUpRequest } from "@/api/model";
import { Form } from "@/components/Form";
import { FormItem } from "@/components/FormItem";
import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SignUpPage = () => {
const SignUpPage = () => {
  const router = useRouter();

  const { mutate } = usePostSignUp();

  const searchParams = useSearchParams();
  const kakaoId = searchParams.get("kakaoId");
  const email = searchParams.get("email");

  const { mutate } = usePostSignUp();

  const handleOnSubmit = async (values: KakaoSignUpRequest) => {
    console.log(values);

    mutate(values, {
      onSuccess: (data) => {
        setCookie("member", data.result?.member);
        setCookie("token", data.result?.accessToken);
        router.push("/me");
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  useEffect(() => {
    const kakaoIdInput = document.getElementById("kakaoId") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    kakaoIdInput.value = kakaoId || "";
    emailInput.value = email || "";
  }, [email, kakaoId]);

  return (
    <Form onSubmit={handleOnSubmit}>
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
      <button type="submit">카카오 회원가입</button>
    </Form>
  );
};

export default SignUpPage;
export default SignUpPage;
