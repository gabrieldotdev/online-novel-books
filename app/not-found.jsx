import * as React from "react";
import Link from "next/link";
import PageLayout from "@/islands/wrappers/page-layout";
import Balancer from "react-wrap-balancer";

export default function NotFound() {
  return (
    <PageLayout title="404 - Page Not Found">
      <Balancer
        as="p"
        className="mx-auto mt-4 !block leading-normal text-muted-foreground sm:text-lg sm:leading-7"
      >
        The page you are looking for does not exist. {""}
        <Link href="/" passHref>
          <span className="mx-auto mt-4 text-blue-500 hover:underline">
            Please go back to the previous page
          </span>
        </Link>
      </Balancer>
    </PageLayout>
  );
}
