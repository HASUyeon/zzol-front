"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const OAuthPage = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const code = searchParams.get("code");

  useEffect(()=>{
const kakaoLogin = async () => {
  try {
      const data = await axios.get("http://localhost:8080/auth/sign-in/kakao", {params: {code}})
console.log(data)
  }
  catch(err){
    console.log(err)
  }

}
kakaoLogin();
  }, [])
  return (
    <div>
      <h1>OAuth Page</h1>
      <p>Authorization Code: {code}</p>
    </div>
  );
};

export default OAuthPage;
