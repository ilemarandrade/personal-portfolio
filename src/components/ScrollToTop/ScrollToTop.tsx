import { styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const Button = styled(motion.button)(
  ({ theme }) => `
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid ${theme.palette.primary.main};
  background: #111111;
  color: ${theme.palette.primary.main};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  &:hover {
    background: ${theme.palette.primary.main};
    color: #111111;
  }
`
);

const SCROLL_THRESHOLD = 400;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
