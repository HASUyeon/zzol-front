import TestButton from "@/components/TestButton";
import React from "react";

export default function Home() {
  const testarray = [
    [1, 1],
    [2, 2],
    [1, 2, 3, 4, 5],
    [2, 3, 3, 3, 3],
    [1, 2],
    [2],
  ];
  console.log("test");
  return (
    <div>
      <div>ddd</div>
      <div className="w-4 bg-black">test</div>
      <div>test</div>
      <div>test</div>
      <TestButton />
    </div>
  );
}
