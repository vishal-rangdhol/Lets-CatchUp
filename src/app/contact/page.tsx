"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact-us");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  );
}
