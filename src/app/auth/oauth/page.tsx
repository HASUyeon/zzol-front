"use client";

import { useGetSignIn } from "@/api/hooks/auth";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OAuthPage = () => {
  const router = useRouter();

  const { mutate: signIn } = useGetSignIn();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { mutate } = useGetSignIn();

  useEffect(() => {
    const kakaoLogin = () => {
      if (code)
        signIn(
          { code },
          {
            onSuccess: (data) => {
              const kakaoId = data.result?.kakaoId;
              const email = data.result?.kakaoAccount.email;
              if (!data.result?.isRegistered) {
                router.push(
                  `/auth/sign-up?${new URLSearchParams({
                    kakaoId: kakaoId?.toString() || "",
                    email: email || "",
                  }).toString()}`,
                ); // ✅ query를 URL 문자열로 변환
              } else {
                if (data.result.accessToken) {
                  setCookie("member", data.result.member);
                  setCookie("token", data.result.accessToken);
                  router.push("/me");
                }
              }
            },
            onError: (err) => {
              console.log(err);
            },
          },
        );
    };

    kakaoLogin();
  }, [code, router, signIn]);

  return (
    <div>
      <h1>OAuth Page</h1>
      <p>Authorization Code: {code}</p>
    </div>
  );
};

export default OAuthPage;
