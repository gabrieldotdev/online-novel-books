"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/primitives/form";
import { Input } from "@/components/primitives/input";
import { env } from "@/configs/env.mjs";
import { toast } from "@/hooks/use-toast";
import { registerSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function RegisterForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const hmacSignature = await fetch("/api/auth/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => res.hmacSignature);
      // biome-ignore lint/style/useTemplate: <explanation>
      const response = await fetch(env.NEXT_PUBLIC_API_URL + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-hmac-sign": hmacSignature,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        toast({
          title: "Đăng ký thất bại!",
          description: responseData.message,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Đăng ký thành công!",
        description: "Chuyển hướng...",
        variant: "success",
      });
      router.push("/login");
    } catch (error) {
      toast({
        title: "Đã có lỗi xảy ra!",
        description: error.message || "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên hiển thị</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Tuyết Sơn"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="off"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="username@htl.com"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="off"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="*********"
                  autoCorrect="off"
                  autoComplete="off"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nhập lại mật khẩu</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="*********"
                  autoCorrect="off"
                  autoComplete="off"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" size="lg" disabled={isLoading} type="submit">
          {isLoading && <Icons.loaderCircle className="w-4 h-4 mr-2 animate-spin" />}
          Đăng ký
        </Button>
      </form>
    </Form>
  );
}
