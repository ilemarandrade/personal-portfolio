import { Grid, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';

const IconLink = styled(Link)`
    color: white;
    margin: 0rem 1rem;
`;
const FooterStyles = styled(Grid)`
    margin-top: 3rem;
    margin-bottom: 3rem;
`
const Footer = () => (
  <FooterStyles container justifyContent="center" alignItems="center">
    <IconLink href="https://www.linkedin.com/in/ilemar-andrade-0b261818b/" target="_blank">
      <LinkedInIcon fontSize="medium" />
    </IconLink>
    <IconLink href="https://www.instagram.com/ilemar_andrade07/" target="_blank">
    <InstagramIcon fontSize="medium" />
    </IconLink>
  </FooterStyles>
);

export default Footer;
