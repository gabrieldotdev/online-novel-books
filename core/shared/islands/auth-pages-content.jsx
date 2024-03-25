"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";
import { ArrowBigLeftDash } from "lucide-react";

export function AuthPagesContent({
  imageSrc,
  title,
  type = "signIn",
  className,
  children,
  ...props
}) {
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
        <div className="absolute z-20 inset-0 bg-background/20" />
        <Image src={imageSrc} alt="" layout="fill" objectFit="cover" />
        <div className="z-20 flex relative items-center justify-between text-lg font-medium">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] invert"
            src="/icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/" className="group flex items-center space-x-2">
            <ArrowBigLeftDash className="w-4 h-4" />
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
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {type === "signIn" ? (
              <p className="text-muted-foreground">
                or{" "}
                <Link
                  href="/sign-up"
                  className="underline hover:text-foreground duration-100 transition-colors"
                >
                  Create an account
                </Link>
              </p>
            ) : type === "signUp" ? (
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="underline hover:text-foreground duration-100 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            ) : null}
          </div>
          {children}
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
