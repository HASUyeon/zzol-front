import { useMutation, useQuery } from "@tanstack/react-query";
import {
  BaseResponseKakaoSignInResponse,
  BaseResponseKakaoSignUpResponse,
  BaseResponseMemberResponse,
  KakaoSignUpRequest,
} from "../model";
import { api } from "../requests";
import { apiRoutes } from "../routes";
import { AxiosError } from "axios";

export const useGetSignIn = () => {
  return useMutation<
    BaseResponseKakaoSignInResponse,
    AxiosError,
    { code: string }
  >({
    mutationFn: (params) => api.get(apiRoutes.getKakaoSignIn, { params }),
  });
};

export const usePostSignUp = () => {
  return useMutation<
    BaseResponseKakaoSignUpResponse,
    AxiosError,
    KakaoSignUpRequest
  >({
    mutationFn: (data) => api.post(apiRoutes.postSignUpKakao, data),
  });
};

export const useGetMe = () => {
  return useQuery<BaseResponseMemberResponse>({
    queryKey: [apiRoutes.membersMe],
    queryFn: () => api.get(apiRoutes.membersMe),
  });
};
