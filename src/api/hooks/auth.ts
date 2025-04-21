import { useMutation } from "@tanstack/react-query";
import request from "../request";
import { apiRoutes } from "../routes";
import { AxiosError } from "axios";
import {
  SignInResponseDto,
  SignUpRequestDto,
  SignUpResponseDto,
} from "../model";

export const useGetSignIn = () => {
  return useMutation<SignInResponseDto, AxiosError, { code?: string }>({
    mutationFn: (data) => request.get(apiRoutes.signInKakao, { params: data }),
    retry: false,
  });
};

export const usePostSignUp = () => {
  return useMutation<SignUpResponseDto, AxiosError, SignUpRequestDto>({
    mutationFn: (data) => request.post(apiRoutes.signUpKakao, data),
    retry: false,
  });
};
