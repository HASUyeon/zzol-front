"use client";

import { useSearchParams } from "next/navigation";

const OAuthPage = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const authorizationCode = searchParams.get("code");
  return (
    <div>
      <h1>OAuth Page</h1>
      <p>Authorization Code: {authorizationCode}</p>
    </div>
  );
};

export default OAuthPage;
