import { AuthPagesContent } from "@/core/auth/shared";
import { fullURL } from "@/data/meta/builder";
import { UserAuthForm } from "@/forms/user-auth-form";

export const metadata = {
  metadataBase: fullURL(),
  title: "Sign Up",
  description: "Sign into your account",
};

export default function SignUpPage() {
  return (
    <AuthPagesContent imageSrc="/assets/auth/sign-up.jpg" title="Sign-Up to your account" type="signUp">
      <UserAuthForm />
    </AuthPagesContent>
  );
}
