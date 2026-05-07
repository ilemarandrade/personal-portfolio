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
            scale: 0.9,
            y: -70,
          },
        },
        initial: {
          scale: 1,
          y: 0,
        },
      },
      imgTablet: {
        variants: {
          worksWithMobileExample: {
            scale: 0.9,
            y: -100,
          },
        },
        initial: {
          scale: 1,
          y: 12,
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
