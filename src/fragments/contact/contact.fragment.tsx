import React from "react";
import { contactStyles as classes } from "fragments/contact/contact.styles";
import { ContactFragmentProps } from "fragments/contact/interfaces";
import { useContactController } from "fragments/contact/contact.controller";
import {
  Button,
  Grid,
  Grow,
  IconButton,
  FormControl,
  Typography,
  Slide,
  Snackbar,
  Alert,
} from "@mui/material";
import { useAnimationContext } from "context/animations.context";
import {
  globalStyles,
  SecondaryTextField,
  RalewayTypography,
} from "theming/global.styles";
import { GitHub, LinkedIn, Send } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useTranslator } from "tools/view-hooks/translator-hook";

export const ContactFragment: React.FC<ContactFragmentProps> = (props) => {
  const { useController = useContactController } = props;
  const controller = useController();

  const { contact, contactAnimation } = useAnimationContext();
  const contactSection: any = contact;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { translate } = useTranslator();

  const { ref: nameInputRef, ...nameInputProps } = register("name", {
    required: "Este campo es obligatorio",
  });

  const { ref: subjectInputRef, ...subjectInputProps } = register("subject", {
    required: "Este campo es obligatorio",
  });

  const { ref: emailInputRef, ...emailInputProps } = register("email", {
    required: "Este campo es obligatorio",
  });
  const { ref: messageInputRef, ...messageInputProps } = register("message", {
    required: "Este campo es obligatorio",
  });

  // Render
  return (
    <Grid container sx={classes.root} ref={contactSection}>
      <Grow
        in={contactAnimation}
        {...(contactAnimation ? { timeout: 1000 } : {})}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              ...classes.title,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {translate({ key: "contact.title" })}
          </Typography>
        </Grid>
      </Grow>
      <Slide
        direction="left"
        in={contactAnimation}
        {...(contactAnimation ? { timeout: 1000 } : {})}
      >
        <Grid container justifyContent="center">
          <RalewayTypography
            variant="h4"
            sx={{ ...classes.subtitle, textAlign: "center" }}
          >
            {translate({ key: "contact.subtitle" })}
          </RalewayTypography>
        </Grid>
      </Slide>
      <Grid container sx={{ ...classes.contact, textAlign: "center" }}>
        <form
          onSubmit={handleSubmit(controller.onSendContactForm)}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            direction="column"
            rowGap={0}
            sx={{ width: { xs: "100%", lg: "25%" } }}
          >
            <SecondaryTextField
              inputRef={nameInputRef}
              required
              label={translate({ key: "label.name" })}
              error={!!errors.name}
              helperText={errors?.name?.message}
              variant={"filled"}
              {...nameInputProps}
              fullWidth
              color="secondary"
            />
            <SecondaryTextField
              inputRef={subjectInputRef}
              required
              label={translate({ key: "label.subject" })}
              error={!!errors.subject}
              helperText={errors?.subject?.message}
              variant={"filled"}
              {...subjectInputProps}
              fullWidth
              color="secondary"
            />{" "}
            <SecondaryTextField
              inputRef={emailInputRef}
              required
              label={translate({ key: "label.email" })}
              error={!!errors.email}
              helperText={errors?.email?.message}
              variant={"filled"}
              {...emailInputProps}
              fullWidth
              color="secondary"
            />{" "}
            <SecondaryTextField
              inputRef={messageInputRef}
              required
              label={translate({ key: "label.message" })}
              error={!!errors.message}
              helperText={errors?.message?.message}
              variant={"filled"}
              {...messageInputProps}
              multiline
              rows={3}
              fullWidth
              color="secondary"
            />{" "}
            <FormControl
              sx={{
                alignItems: "flex-end",
              }}
            >
              <Button
                sx={{
                  ...globalStyles.buttonOutlinedSecondary,
                  marginTop: "1rem",
                  width: { xs: "100%", lg: "150px" },
                }}
                endIcon={<Send />}
                type="submit"
              >
                {translate({ key: "general.send" })}
              </Button>
            </FormControl>
          </Grid>
        </form>
      </Grid>

      <Grid container sx={{ ...classes.footer }}>
        <IconButton
          href="https://www.linkedin.com/in/miragaya-ivan/"
          sx={classes.mediaButton}
        >
          <LinkedIn sx={classes.icon} />
        </IconButton>
        <IconButton href="https://github.com/m-ivan" sx={classes.mediaButton}>
          <GitHub sx={classes.icon} />
        </IconButton>
        <Grid item xs={12}>
          <Box>
            <RalewayTypography
              variant="subtitle1"
              sx={{
                ...classes.watermark,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Iván Miragaya
              <span style={classes.watermarkColor}>©2021</span>
            </RalewayTypography>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={controller.isSuccessNotificacionVisible}
        autoHideDuration={6000}
        onClose={controller.onCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={controller.onCloseNotification}
          severity="success"
          sx={{ width: "100%" }}
        >
          {translate({ key: "notifications.email-success" })}
        </Alert>
      </Snackbar>
      <Snackbar
        open={controller.isErrorNotificacionVisible}
        autoHideDuration={6000}
        onClose={controller.onCloseNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={controller.onCloseNotification}
          severity="error"
          sx={{ width: "100%" }}
        >
          {translate({ key: "notifications.email-error" })}
        </Alert>
      </Snackbar>
    </Grid>
  );
};
