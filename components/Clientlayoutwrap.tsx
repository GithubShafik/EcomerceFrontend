"use client";

import React from "react";
import { useLanguage } from "@/service/translation";

export const ClientDirectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useLanguage();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="w-full">
      {children}
    </div>
  );
};
