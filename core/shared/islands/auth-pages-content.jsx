"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/form/user-auth-form";
import { buttonVariants } from "@/islands/primitives/button";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";

export function AuthPagesContent({ className, ...props }) {
  return (
    <Shell
      className={cls(
        "relative flex items-center justify-center min-h-screen self-center sm:max-w-lg lg:max-w-none lg:grid-cols-2 lg:px-0",
        className,
      )}
      {...props}
    >
      <div className="relative hidden flex-col p-10 text-white lg:flex dark:border-r h-[calc(100vh-4rem)] w-1/3 rounded-3xl">
        {/* <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900" /> */}
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/">
            Quay lại
            </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Nocelsweb</footer>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto flex flex-shrink-0 w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Đăng nhập vào tài khoản của bạn
          </h1>
          <p className="text-muted-foreground">
            or{" "}
            <Link href="/auth/register" className="underline hover:text-white">
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
    </Shell>
  );
}
