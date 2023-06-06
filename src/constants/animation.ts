const animation = {
  enterTextFromBottom: {
    name: "enterTextFromBottom",
    variants: {
      firstBox: {
        variants: {
          enterTextFromBottom: {
            opacity: 0,
            top: "100px",
            transition: { duration: 0.2 },
          },
        },
      },
      secondBox: {
        variants: {
          enterTextFromBottom: {
            opacity: 1,
            top: "0px",
            transition: { duration: 0.2 },
          },
        },
        initial: { top: "10%", opacity: 0 },
      },
    },
  },
  worksWithMobileExample: {
    name: "worksWithMobileExample",
    variants: {
      textBox: {
        variants: {
          worksWithMobileExample: {
            opacity: 0,
          },
        },
        initial: {
          opacity: 1,
        },
      },
      img: {
        variants: {
          worksWithMobileExample: {
            transform: "scale(0.5)",
            top: "-85%",
          },
        },
        initial: {
          transform: "scale(1)",
          top: "0%",
        },
      },
      imgDesktop: {
        variants: {
          worksWithMobileExample: {
            top: "-50%",
          },
        },
        initial: {
          top: "0%",
        },
      },
      seeMore: {
        variants: {
          worksWithMobileExample: {
            opacity: 1,
          },
        },
        initial: {
          opacity: 0,
        },
      },
    },
  },
};
export default animation;
