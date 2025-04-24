import { Member } from "@/api/model";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { env } from "process";

const tokenName = env.TOKEN || "token";
const refreshTokenName = env.REFRESH_TOKEN || "refreshToken";
const memberName = env.MEMBER || "member";

export const setAuthInfoCookie = ({
  accessToken,
  refreshToken,
  member,
}: {
  accessToken: string;
  refreshToken: string;
  member: Member;
}) => {
  setCookie(tokenName, accessToken);
  setCookie(refreshTokenName, refreshToken);
  setCookie(memberName, member);
};

export const getAuthInfoCookie = async () => {
  const token = await getCookie(tokenName);
  const refreshToken = await getCookie(refreshTokenName);
  const member = await getCookie(memberName);

  return { token, refreshToken, member };
};

export const removeAuthInfoCookie = () => {
  deleteCookie(tokenName);
  deleteCookie(refreshTokenName);
  deleteCookie(memberName);
};
