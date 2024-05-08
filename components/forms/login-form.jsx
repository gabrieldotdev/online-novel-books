"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/primitives/form";
import { Input } from "@/components/primitives/input";
import { toast } from "@/hooks/use-toast";
import { loginSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const loginResponse = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      if (!loginResponse.ok) {
        toast({
          title: "Đăng nhập thất bại!",
          description: loginResponse.message || "Vui lòng thử lại sau.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Đăng nhập thành công!",
          description: "Chuyển hướng...",
        });
        router.push("/");
      }
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
        <Button variant="default" size="lg" disabled={isLoading} type="submit">
          {isLoading && <Icons.loaderCircle className="w-4 h-4 mr-2 animate-spin" />}
          Đăng nhập
        </Button>
      </form>
    </Form>
  );
}
