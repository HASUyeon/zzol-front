/* eslint-disable @next/next/no-img-element */
"use client";

import kakaoLoginImg from "@/assets/images/kakao_login_medium_wide.png";
import clsx from "clsx";

const SignInPage = () => {
  const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
  const kakaoLoginRedirectUri = process.env.KAKAO_LOGIN_REDIRECT_URI;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=${kakaoLoginRedirectUri}&response_type=code`;

  return (
    <div
      className={clsx(
        "min-h-screen p-[24px]",
        "flex flex-col items-center justify-center gap-[48px]",
      )}
    >
      <div
        className={clsx(
          "bg-slate-200",
          "w-[50%] aspect-square",
          "flex items-center justify-center",
        )}
      >
        로고
      </div>
      <a href={kakaoAuthUrl}>
        <img
          width="300px"
          height="auto"
          src={kakaoLoginImg.src}
          alt="카카오 로그인"
        />
      </a>
    </div>
  );
};

export default SignInPage;
