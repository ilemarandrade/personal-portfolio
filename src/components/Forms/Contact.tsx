import { Button, TextField } from "@mui/material";

const FormContact = () => {
  return (
    <>
      <TextField placeholder="Name" variant="outlined" />
      <TextField placeholder="Email" variant="outlined" />
      <TextField
        placeholder="Type your message"
        variant="outlined"
        multiline
        rows={6}
      />
      <Button type="submit" variant="contained">
        SEND ME MESSAGE
      </Button>
    </>
  );
};

export default FormContact;
