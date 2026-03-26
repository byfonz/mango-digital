"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { linkResolver } from "@/lib/link-resolver";
import type { NavigationMenu } from "@/types/documents/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { NavigationItems, NavMenu } from "./navigation-menu";
import { LucideMenu, LucideX } from "lucide-react";
import { ImageAssetType } from "@/types/objects/image-item";
import { SocialsMenu } from "../socials-menu";

interface Props {
  navigation: NavigationMenu | null;
}

export function Header() {
  
  return (
    <header className="fixed w-full max-w-7xl top-4 lg:top-6 left-0 right-0 z-50  ">
      <div className="mx-auto flex min-w-full items-center justify-between px-6 py-3 bg-background border rounded-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image
              src='/images/logo-mango-digital.png'
              alt='logo'
              width='96'
              height='40'
            />
          </Link>
        {/* Navigation Menu */}
        <NavMenu/>
        {/* CTAs */}
        <div className="hidden md:flex items-center">
          <Button className="py-2.5">
            Descargar Propuesta
          </Button>
          
        </div>
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="md:hidden rounded-full"
            >
              <LucideMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-screen p-6">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            {/* Nav Menu */}
            <nav className="mt-2 flex flex-col gap-6">
              <NavMenu/>
            </nav>
            {/* Socials Menu */}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
