import { Grid, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';

const IconLink = styled(Link)`
    color: white;
`;
const Footer = () => (
  <Grid container justifyContent="center" alignItems="center">
    <IconLink href="https://www.linkedin.com/in/ilemar-andrade-0b261818b/" target="_blank">
      <LinkedInIcon />
    </IconLink>
    <IconLink href="https://www.instagram.com/stories/highlights/17988958438734237/" target="_blank">
    <InstagramIcon />
    </IconLink>
  </Grid>
);

export default Footer;
