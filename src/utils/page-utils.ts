export const pageRoutes = {
  root: "/",
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
  auth: "/auth/oauth",
};

/**
 * 로그인하지 않은 사용자만 허용하는 페이지 목록
 */
export const pageForOnlyGuest: string[] = [
  pageRoutes.auth,
  pageRoutes.signIn,
  pageRoutes.signUp,
];

/**
 * 로그인한 사용자만 허용하는 페이지 목록
 */
export const pageForOnlyMember: string[] = [pageRoutes.root];
