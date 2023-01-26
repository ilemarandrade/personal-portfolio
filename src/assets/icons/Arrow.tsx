import { styled } from "@mui/material";
import { BaseCSSProperties } from "@mui/material/styles/createMixins";

const ArrowStyled = styled("svg")`
  position: absolute;
  right: 0px;
`;
interface Props {
  className?: string;
  style?: BaseCSSProperties;
}
const Arrow = ({ className, style }: Props) => (
  <ArrowStyled
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    color="rgb(224, 223, 220)"
    style={{
      userSelect: "none",
      width: "40px",
      display: "inline-block",
      fill: "rgb(224, 223, 220)",
      flexShrink: 0,
      cursor: "auto",
      ...style,
    }}
    className={className}
  >
    <g color="rgb(224, 223, 220)">
      <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="rgb(224, 223, 220)"
        stroke-miterlimit="10"
        stroke-width="16"
      ></circle>
      <polyline
        points="134.1 161.9 168 128 134.1 94.1"
        fill="none"
        stroke="rgb(224, 223, 220)"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="16"
      ></polyline>
      <line
        x1="88"
        y1="128"
        x2="168"
        y2="128"
        fill="none"
        stroke="rgb(224, 223, 220)"
        stroke-linecap="round"
        strokeLinejoin="round"
        stroke-width="16"
      ></line>
    </g>
  </ArrowStyled>
);

export default Arrow;
