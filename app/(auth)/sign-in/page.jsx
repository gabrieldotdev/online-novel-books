import { AuthPagesContent } from "@/core/shared";
import { fullURL } from "@/data/meta/builder";

export const metadata = {
  metadataBase: fullURL(),
  title: "Sign In",
  description: "Sign into your account",
};

export default function SignInPage() {
  return <AuthPagesContent />;
}
