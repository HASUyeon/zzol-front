"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const handleOnCloseDevTool = () => {
    setIsOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        열고닫기
      </button> */}
      {isOpen && <ReactQueryDevtoolsPanel onClose={handleOnCloseDevTool} />}
    </QueryClientProvider>
  );
}
