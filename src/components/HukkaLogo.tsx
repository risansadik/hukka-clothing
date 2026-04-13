"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HukkaLogoProps {
  className?: string;
}

export default function HukkaLogo({ className }: HukkaLogoProps) {
  return (
    <div 
      className={cn("inline-flex items-center justify-center transition-all duration-500", className)} 
      style={{ filter: "drop-shadow(0px 0px 10px rgba(193,154,107,0.35))" }}
    >
      {/* 
        This is a highly-advanced CSS trick: 
        It essentially turns your transparent PNG into a custom colored vector mask! 
        It ignores original colors and stamps the logo with the exact premium gold gradient.
      */}
      <div 
        className="w-32 h-10 md:w-36 md:h-12 lg:w-40 lg:h-14 bg-gradient-to-b from-[#FFF2D8] via-[#C19A6B] to-[#755530] hover:brightness-125 transition-all duration-300"
        style={{
          maskImage: 'url(/images/hukka-transparent-logo.png)',
          WebkitMaskImage: 'url(/images/hukka-transparent-logo.png)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'left center',
          WebkitMaskPosition: 'left center'
        }}
        title="HUKKA"
        aria-label="HUKKA Logo"
      />
    </div>
  );
}
