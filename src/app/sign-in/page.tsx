"use client";

const SignInPage = () => {
  const kakaoRestApiKey = process.env.KAKAO_REST_API_KEY;
  const kakaoLoginRedirectUri = process.env.KAKAO_LOGIN_REDIRECT_URI;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=${kakaoLoginRedirectUri}&response_type=code`;

  return (
    <a href={kakaoAuthUrl}>
      <button>카카오 로그인</button>
    </a>
  );
};

export default SignInPage;
