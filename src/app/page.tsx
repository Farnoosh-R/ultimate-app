"use client"
import { twMerge } from 'tailwind-merge'




export default function Home() {
  const color = 'bg-red-800'
  return (
    <div className={twMerge(`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`,color)}>
      ultimate app

      <div
   
  >
    Hover to change color.
  </div>
    </div>
  );
}
