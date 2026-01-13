import { Button, IconButton, Stack, Tooltip } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={2}>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<MailIcon />}
        href="mailto:clement.lecoeur34@gmail.com"
      >
        Contact Me
      </Button>
      <Tooltip title="LinkedIn">
        <IconButton 
          color="primary" 
          href="https://www.linkedin.com/in/clement-lecoeur-b94000109/" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{"& .MuiSvgIcon-root": { fontSize: "2.5rem" } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton 
          color="primary" 
          href="https://github.com/Daemon34" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{"& .MuiSvgIcon-root": { fontSize: "2.5rem" } }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>

    </Stack>
  );
};

export default ContactSection;