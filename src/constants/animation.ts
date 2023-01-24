const animation = {
  enterTextFromBottom: {
    name: "enterTextFromBottom",
    variants: {
      firstBox: {
        variant: {
          enterTextFromBottom: {
            opacity: 0,
            top: "100px",
            transition: { duration: 0.2 },
          },
        },
      },
      secondBox: {
        variant: {
          enterTextFromBottom: {
            opacity: 1,
            top: "0px",
            transition: { duration: 0.2 },
          },
        },
        initial: { top: "10%", opacity: 0 }
      },
    },
  },
};
export default animation;
