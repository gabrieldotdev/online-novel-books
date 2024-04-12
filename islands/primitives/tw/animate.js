const { tv } = require("tailwind-variants");

export const animateVariants = tv({
  base: "animate-none",
  variants: {
    effect: {
      fade: "animate-fade",
      slide: "animate-slide",
      spin: "animate-spin",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      jump: "animate-jump",
    },
  },
});

export const speedVariants = tv({
  base: "transition",
  variants: {
    speed: {
      fast: "duration-100",
      normal: "duration-300",
      slow: "duration-700",
    },
  },
  defaultVariants: {
    speed: "normal",
  },
});
