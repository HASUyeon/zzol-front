"use client";
import Image from "next/image";
import kakaotalk from "../../asset/kakao_login_medium_wide.png";

const SignInPage = () => {
  const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
  const kakaoLoginRedirectUri = process.env.KAKAO_LOGIN_REDIRECT_URI;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=${kakaoLoginRedirectUri}&response_type=code`;

  return (
    <a href={kakaoAuthUrl}>
      <Image src={kakaotalk} alt={""} />
    </a>
  );
};

export default SignInPage;
