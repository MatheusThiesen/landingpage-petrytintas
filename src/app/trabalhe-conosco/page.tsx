"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HiringForm } from "./_components/form-hiring";

export default function Page() {
  return (
    <div className="overflow-x-hidden h-screen ">
      <Header />
      <div className=" p-10">
        <HiringForm />
      </div>

      <Footer />
    </div>
  );
}
