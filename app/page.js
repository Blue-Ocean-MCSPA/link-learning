"use client";
import LandingPage from "./(Components)/LandingPage.jsx";
import { AppWrapper } from "./context/index.jsx";

export default function Home() {
  return (
    <AppWrapper>
      <LandingPage />
    </AppWrapper>
  );
}
