import useTranslation from "@/hooks/useTranslation";
import { Button, TextField } from "@mui/material";

const FormContact = () => {
  const { t } = useTranslation();
  return (
    <>
      <TextField placeholder={t("contact.form.name")} variant="outlined" />
      <TextField placeholder={t("contact.form.email")} variant="outlined" />
      <TextField
        placeholder={t("contact.form.type_your_message")}
        variant="outlined"
        multiline
        rows={6}
      />
      <Button type="submit" variant="contained">
        {t("contact.form.button")}
      </Button>
    </>
  );
};

export default FormContact;
