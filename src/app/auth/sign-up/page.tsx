"use client";

import request from "@/api/request";
import { apiRoutes } from "@/api/routes";
import { Form } from "@/components/Form";
import { FormItem } from "@/components/FormItem";
import { setAuthInfoCookie } from "@/utils/token-utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface SignUpRequest {
  kakaoId: string;
  nickname: string;
  email: string;
  birthDate: string;
}

const SignInPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  console.log(searchParams);
  const kakaoId = searchParams.get("kakaoId");
  const email = searchParams.get("email");

  const handleOnSubmit = async (values: SignUpRequest) => {
    console.log(values);
    try {
      const data = await request.post(apiRoutes.signInKakao, values);
      if (data.token) {
        console.log("sign-up token", data.token);
        setAuthInfoCookie({
          accessToken: data.token.accessToken,
          refreshToken: data.token.refreshToken,
          member: data.member,
        });
        router.push("/");
      }
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

export default SignInPage;
