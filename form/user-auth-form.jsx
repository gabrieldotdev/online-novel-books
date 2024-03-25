"use client";

import * as React from "react";
import { authSchema } from "@/data/validations/auth";
import { Icons } from "@/islands/icons";
import { Button } from "@/islands/primitives/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/islands/primitives/form";
import { Input } from "@/islands/primitives/input";
import { toast } from "@/islands/primitives/use-toast";
import { cls } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";

export function UserAuthForm({ className, ...props }) {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
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
      // signIn("credentials", {
      //   email: data.email,
      //   password: data.password,
      //   callbackUrl: callbackUrl ?? "/",
      // });
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
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue with Email
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {/* <UserFormWith isLoading={isLoading} /> */}
      <div className="flex gap-2">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            // <Github className="mr-2 h-4 w-4" />
            <Icons.google className="h-4 w-4" />
          )}{" "}
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
      </div>
    </div>
  );
}
