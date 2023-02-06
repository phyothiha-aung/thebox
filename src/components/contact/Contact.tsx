import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./contact.css";

const theme = createTheme({
  typography: {
    fontSize: 20,
  },
});

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h3 className="contact__header" data-aos="fade-right">
          What can we do for you?
        </h3>
        <p className="contact__text" data-aos="fade-left">
          We are ready to work on a project of any complexity, whether it's
          commercial or residential.
        </p>
        <ThemeProvider theme={theme}>
          <div className="form-container" data-aos="zoom-in-up">
            <div className="text-field-container">
              <TextField label="Name" className="text-field" variant="filled" />
              <TextField
                label="Email"
                className="text-field"
                variant="filled"
              />
            </div>
            <TextField
              label="Message"
              className="text-area"
              multiline
              rows={4}
              variant="filled"
            />
            <button>Submit</button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Contact;
