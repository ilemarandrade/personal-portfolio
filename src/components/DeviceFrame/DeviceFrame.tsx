import { styled } from "@mui/material";
import { ReactNode } from "react";

export type Variant = "mobile" | "tablet";

interface Props {
  variant: Variant;
  children: ReactNode;
}

const FRAME_CONFIG = {
  mobile: {
    width: "180px",
    height: "360px",
    borderRadius: "32px",
    notchWidth: "60px",
    notchHeight: "20px",
    indicatorWidth: "48px",
    indicatorHeight: "4px",
  },
  tablet: {
    width: "360px",
    height: "220px",
    borderRadius: "16px",
    notchWidth: "8px",
    notchHeight: "8px",
    indicatorWidth: "32px",
    indicatorHeight: "4px",
  },
};

const Outer = styled("div")<{ variant: Variant }>(({ variant }: { variant: Variant }) => {
  const cfg = FRAME_CONFIG[variant];
  const isTablet = variant === "tablet";
  return `
    position: relative;
    width: ${cfg.width};
    height: ${cfg.height};
    border: 6px solid #3a3d40;
    border-radius: ${cfg.borderRadius};
    background: #1a1d1f;
    box-shadow:
      inset 0 0 0 2px #555,
      0 8px 32px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: ${isTablet ? "row" : "column"};
    align-items: center;
    justify-content: space-between;
    padding: ${isTablet ? "0 10px" : "14px 0 10px"};
    flex-shrink: 0;
  `;
});

const Notch = styled("div")<{ variant: Variant }>(({ variant }: { variant: Variant }) => {
  const cfg = FRAME_CONFIG[variant];
  return `
    width: ${cfg.notchWidth};
    height: ${cfg.notchHeight};
    background: #3a3d40;
    border-radius: 999px;
    flex-shrink: 0;
  `;
});

const Screen = styled("div")`
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Indicator = styled("div")<{ variant: Variant }>(({ variant }: { variant: Variant }) => {
  const cfg = FRAME_CONFIG[variant];
  return `
    width: ${cfg.indicatorWidth};
    height: ${cfg.indicatorHeight};
    background: #3a3d40;
    border-radius: 999px;
    flex-shrink: 0;
  `;
});

const DeviceFrame = ({ variant, children }: Props) => (
  <Outer variant={variant}>
    <Notch variant={variant} />
    <Screen>{children}</Screen>
    <Indicator variant={variant} />
  </Outer>
);

export default DeviceFrame;
