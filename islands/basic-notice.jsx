"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/islands/primitives/toast";
import { useToast } from "@/islands/primitives/use-toast";

export function BasicNotice() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {/* biome-ignore lint/complexity/useArrowFunction: <explanation> */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
