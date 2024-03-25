import * as React from "react";

export function useIsClient() {
  const [isClient, setClient] = React.useState(false);

  /**
   * Mark the app as mounted in the client
   */
  React.useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}
