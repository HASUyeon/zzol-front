"use client";
import { useGetMe } from "@/api/hooks/auth";

const MyPage = () => {
  const { data } = useGetMe();
  return <div>{data?.result?.nickname}님</div>;
};
export default MyPage;
