export const SERVER = process.env.NEXT_PUBLIC_SERVER || "";

export const apiRoutes = {
  signInKakao: `${SERVER}/auth/sign-in/kakao`,
  signUpKakao: `${SERVER}/auth/sign-up/kakao`,
};
