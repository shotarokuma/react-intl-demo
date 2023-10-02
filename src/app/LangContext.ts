"use client";

import React from "react";
export type Lang = "ja" | "en";

type LangContext = {
  lang?: Lang;
  switchLang?: () => void;
};

const LangContext = React.createContext<LangContext>({});

export default LangContext;
