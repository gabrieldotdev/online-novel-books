import * as React from "react";
import Link from "next/link";
import PageLayout from "@/islands/wrappers/page-layout";

export default function NotFound() {
  return (
    <PageLayout title="404 - Không tồn tại">
      <p className="mx-auto mt-4 !block leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Trang bạn đang tìm không tồn tại.
        <br />
        <Link href="/" passHref className="no-underline">
          <span className="text-blue-500 underline-offset-2 hover:underline">Hải quay xe!</span>
        </Link>
      </p>
    </PageLayout>
  );
}
