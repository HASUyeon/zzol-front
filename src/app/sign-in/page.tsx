"use client";

import kakaoLoginImg from "@/assets/images/kakao_login_medium_wide.png"

const SignInPage = () => {
  const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
  const kakaoLoginRedirectUri = process.env.KAKAO_LOGIN_REDIRECT_URI;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=${kakaoLoginRedirectUri}&response_type=code`;

  return (
    <a href={kakaoAuthUrl}>
     <img src={kakaoLoginImg.src} alt="카카오 로그인"/>
    </a>
  );
};

export default SignInPage;
