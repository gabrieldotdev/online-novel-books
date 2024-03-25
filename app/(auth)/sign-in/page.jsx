import { AuthPagesContent } from "@/core/shared";
import { fullURL } from "@/data/meta/builder";
import { UserAuthForm } from "@/form/user-auth-form";

export const metadata = {
  metadataBase: fullURL(),
  title: "Sign In",
  description: "Sign into your account",
};

export default function SignInPage() {
  return (
    <AuthPagesContent
      imageSrc={"/auth/sign-in.jpg"}
      title={"Sign-In to Your Account"}
    >
      <UserAuthForm />
    </AuthPagesContent>
  );
}
