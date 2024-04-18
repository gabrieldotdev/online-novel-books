import React from "react";
import { Icons } from "@/islands/icons";
import { Button } from "@/islands/primitives/button";

export function UserWithOption({ isLoading }) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.loaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          // <Github className="mr-2 h-4 w-4" />
          <Icons.google className="h-4 w-4" />
        )}{" "}
      </Button>
      <Button variant="outline" type="button" disabled={isLoading} className="w-full">
        {isLoading ? (
          <Icons.loaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  );
}
