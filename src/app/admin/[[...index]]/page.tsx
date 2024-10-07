"use client";
import { NextStudio } from "next-sanity/studio";
import React from "react";
import config from "../../../../sanity.config";

export default function page() {
  return <NextStudio config={config} />;
}
