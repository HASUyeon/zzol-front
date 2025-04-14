"use client";

import { Modal } from "@/components/Modal/Modal";
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
    <div>
      <button onClick={handleOnOpenRoomMakeModal}>방 만들기</button>
      <button disabled>랜덤 대전</button>
      <Modal open={open} onClose={handleOnCloseRoomMakeModal}>
        방 만들기 모달
      </Modal>
    </div>
  );
};

export default GameChoicePage;
