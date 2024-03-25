"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/form/user-auth-form";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";
import { ArrowBigLeftDash } from "lucide-react";

export function AuthPagesContent({ className, ...props }) {
  return (
    <Shell
      className={cls(
        "relative flex items-center justify-center self-center min-h-screen sm:max-w-lg lg:max-w-none lg:grid-cols-2 lg:px-0",
        className,
      )}
      {...props}
    >
      {/* Section for the logo and additional information */}
      <div className="relative hidden flex-col p-10 text-white lg:flex dark:border-r h-[calc(100dvh-4rem)] w-1/3 rounded-3xl overflow-hidden">
        {/* <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900" /> */}
        <Image
          src="/images/premium_photo-1677337459537-4af0da479a84.avif"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
        <div className="z-20 flex relative items-center justify-between text-lg font-medium">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/" className="group flex items-center space-x-2">
            <ArrowBigLeftDash className="w-6 h-6" />
            <span className="flex items-center space-x-2 text-base text-white/80 group-hover:underline">
              Back
            </span>
          </Link>
        </div>
      </div>
      {/* Section for the authentication form */}
      <div className="relative flex flex-col items-center justify-center w-full h-screen p-10 lg:w-2/3 overflow-hidden">
        <div className="mx-auto h-full flex flex-shrink-0 w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign-In to your account
            </h1>
            <p className="text-muted-foreground">
              or{" "}
              <Link
                href="/auth/register"
                className="underline hover:text-white"
              >
                Create an account
              </Link>
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Shell>
  );
}
