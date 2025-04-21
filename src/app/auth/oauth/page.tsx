"use client";

import { useGetSignIn } from "@/api/hooks/auth";
import { pageRoutes } from "@/utils/page-utils";
import { setAuthInfoCookie } from "@/utils/token-utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OAuthPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { mutate } = useGetSignIn();

  useEffect(() => {
    const kakaoLogin = async () => {
      if (code)
        mutate(
          { code },
          {
            onSuccess: (res) => {
              const kakaoId = res.kakaoId.toString();
              const email = res?.kakaoAccount?.email;
              if (!res.isRegistered && kakaoId && email) {
                router.push(
                  `${pageRoutes.signUp}?${new URLSearchParams({
                    kakaoId,
                    email,
                  }).toString()}`,
                );
              } else {
                if (
                  res.token?.accessToken &&
                  res.token.refreshToken &&
                  res.member
                ) {
                  setAuthInfoCookie({
                    accessToken: res.token.accessToken,
                    refreshToken: res.token.refreshToken,
                    member: res.member,
                  });
                  router.push("/");
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
  }, []);

  return (
    <div>
      <h1>OAuth Page</h1>
      <p>Authorization Code: {code}</p>
    </div>
  );
};

export default OAuthPage;
