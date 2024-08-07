import StreamVideoProvider from "@/lib/streamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "LinkStop",
  description: "video-Web Conferencing",
  icons: ["/icons/logo.png"],
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default layout;
