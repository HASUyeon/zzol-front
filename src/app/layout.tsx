import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "ZZOL",
  description: "playing game with ZZOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={clsx("bg-slate-200", "flex flex-row justify-center")}>
        <div
          className={clsx(
            "content",
            "bg-white",
            "max-w-[480px] w-full overflow-hidden break-all",
            "min-h-screen",
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
