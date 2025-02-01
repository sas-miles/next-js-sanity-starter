// app/experience/layout.tsx
"use client";
import { R3FProvider } from "@/experience/providers/R3FContext";
import { ReactNode } from "react";
import { Leva } from "leva";

export default function ExperienceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <R3FProvider>
      {/* Non-R3F components render here */}

      <main className="h-screen w-screen mt-8">{children}</main>
      <Leva hidden={false} />
    </R3FProvider>
  );
}
