"use client";

import { Form } from "@/components/Form";
import { FormItem } from "@/components/FormItem";
import { Modal } from "@/components/Modal/Modal";
import clsx from "clsx";
import { useState } from "react";

const GameChoicePage = () => {
  const [open, setOpen] = useState(false);

  const handleOnOpenRoomMakeModal = () => {
    setOpen(true);
  };

  const handleOnCloseRoomMakeModal = () => {
    setOpen(false);
  };

  return (
    <div className={clsx("h-full", "flex flex-col justify-center")}>
      <div className={clsx("flex flex-col gap-[16px]")}>
        <button
          className={clsx("bg-slate-400 text-slate-50")}
          onClick={handleOnOpenRoomMakeModal}
        >
          방 만들기
        </button>
        <button className={clsx("cursor-not-allowed", "bg-slate-100")} disabled>
          랜덤 대전
        </button>
      </div>
      <Modal open={open} onClose={handleOnCloseRoomMakeModal}>
        <Form>
          <FormItem name="roomName" label="방 제목">
            <input placeholder="방 제목을 입력해 주세요." />
          </FormItem>
          <FormItem name="gameMode" label="게임 모드">
            <select>
              <option>가위바위보</option>
              <option>가위바위보 하나 빼기</option>
            </select>
          </FormItem>
          <FormItem name="betMode" label="내기 모드">
            <select>
              <option>다함께</option>
              <option>따로따로</option>
            </select>
          </FormItem>
          <div className={clsx("flex flex-row gap-[8px]")}>
            <button
              className={clsx("w-[100%]", "bg-slate-100")}
              onClick={handleOnCloseRoomMakeModal}
            >
              취소
            </button>
            <button className={clsx("w-[100%]", "bg-slate-400 text-slate-50")}>
              시작하기
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default GameChoicePage;
