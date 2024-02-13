"use client";
import React from "react";
import NextProgress from "next-progress";
import NextNProgress from "nextjs-progressbar";

const ProgressBar = () => {
  return <NextNProgress options={{ showSpinner: false }} />;
};

export default ProgressBar;
