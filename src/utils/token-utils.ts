import { setCookie, getCookie, deleteCookie } from "cookies-next";

type TokenParamsType = {
  token?: string;
  tokenDueDt?: string;
  refreshToken?: string;
  refreshTokenDueDt?: string;
  userInfo?: object;
};

const accessTokenName = process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? "token";
const refreshTokenName =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME ?? "refreshToken";
const userInfoName = process.env.NEXT_PUBLIC_USER_INFO_NAME ?? "userInfo";

export class TokenUtils {
  static getTokenName() {
    return { accessTokenName, refreshTokenName, userInfoName };
  }

  static setToken({ token, refreshToken, userInfo }: TokenParamsType) {
    if (token) {
      setCookie(accessTokenName, token);
    }
    if (refreshToken) {
      setCookie(refreshTokenName, refreshToken);
    }
    if (userInfo) {
      setCookie(userInfoName, JSON.stringify(userInfo));
    }
  }

  static async getToken() {
    const token = (await getCookie(accessTokenName)) as string;
    const refreshToken = (await getCookie(refreshTokenName)) as string;
    const userInfo = await getCookie(userInfoName);
    return { token, refreshToken, userInfo };
  }

  static removeAllToken() {
    deleteCookie(accessTokenName);
    deleteCookie(refreshTokenName);
    deleteCookie(userInfoName);
  }
}
