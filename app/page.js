"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/words");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white h-screen"></main>
  );
}
