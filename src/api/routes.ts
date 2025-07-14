import { API_HOST } from "./hosts";

export const apiRoutes = {
  getKakaoSignIn: `${API_HOST}/auth/sign-in/kakao`,
  postSignUpKakao: `${API_HOST}/auth/sign-up/kakao`,
  membersMe: `${API_HOST}/members/me`,
};
