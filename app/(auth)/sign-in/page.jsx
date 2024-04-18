import { AuthFormContent } from "@/core/auth/shared";
import { fullURL } from "@/data/meta/builder";
import { UserAuthForm } from "@/forms/user-auth-form";

export const metadata = {
  metadataBase: fullURL(),
  title: "Sign In",
  description: "Sign into your account",
};

export default function SignIn() {
  return (
    <AuthFormContent imageUrl="/assets/auth/sign-in.jpg">
      <UserAuthForm />
    </AuthFormContent>
  );
}
