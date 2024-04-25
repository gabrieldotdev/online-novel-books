"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/primitives/form";
import { Input } from "@/components/primitives/input";
import { toast } from "@/hooks/use-toast";
import { cls } from "@/utils";
import { authSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function UserAuthForm({ className, type = "sign-in", ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "dev@novels.com",
      password: "11111118",
    },
  });

  async function onSubmit(data) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }, 3000);
  }

  return (
    <div className={cls("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
          {type === "sign-up" ? (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Vui lòng nhập tên..."
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
          ) : null}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Vui lòng nhập email..."
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nhập mật khẩu..."
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
          <Button disabled={isLoading} type="submit">
            {isLoading && <Icons.loaderCircle className="mr-2 h-4 w-4 animate-spin" />}
            Continue with Email
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      {/* <UserWithOption isLoading={isLoading} /> */}
    </div>
  );
}
