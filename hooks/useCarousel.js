import * as React from "react";

export const useCarousel = () => {
  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onThumbClick = React.useCallback(
    (index) => {
      api.scrollTo(index);
    },
    [api],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return {
    api,
    setApi,
    selectedIndex,
    onThumbClick,
  };
};
