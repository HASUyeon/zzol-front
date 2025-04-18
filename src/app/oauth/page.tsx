"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OAuthPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  console.log(searchParams);
  const code = searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/auth/sign-in/kakao",
          { params: { code } },
        );
        console.log(data);
        const kakaoId = data.kakaoId;
        const email = data.kakaoAccount.email;
        if (!data.isRegistered) {
          router.push(
            `/sign-up?${new URLSearchParams({ kakaoId, email }).toString()}`,
          ); // ✅ query를 URL 문자열로 변환
        }
      } catch (err) {
        console.log(err);
      }
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
