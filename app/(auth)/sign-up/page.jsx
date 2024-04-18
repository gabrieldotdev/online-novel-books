import { AuthFormContent } from "@/core/auth/shared";
import { fullURL } from "@/data/meta/builder";
import { UserAuthForm } from "@/forms/user-auth-form";

export const metadata = {
  metadataBase: fullURL(),
  title: "Sign Up",
  description: "Sign up for an account",
};

export default function SignUp() {
  return (
    <AuthFormContent type="sign-up" imageUrl="/assets/auth/sign-up.jpg">
      <UserAuthForm type="sign-up" />
    </AuthFormContent>
  );
}
