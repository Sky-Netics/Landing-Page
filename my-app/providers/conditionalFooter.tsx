"use client"

import { Footer } from "@/components/Footer"
import { usePathname } from "next/navigation"

export function ConditionalFooter() {
  const pathname= usePathname()
  if (pathname=== "/login" || pathname=== "/signup") return null;
  return <Footer />
}