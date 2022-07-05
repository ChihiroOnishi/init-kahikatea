import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { ContactSubmit, Form } from './ContactElements';
import { TextField, Grid, Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../InfoSection/InfoElements';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

export default function Contact() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_37xoskr', 'template_icx6mej', e.target, 'user_wx5pGqL7cj6I6jerBeoiF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  return (
    <>
      <InfoContainer lightBg={true} id="contact">
          <InfoWrapper>
              <InfoRow imgStart={false}>
                  <Column1>
                      <TextWrapper>
                        <TopLine>contact us</TopLine>
                        <Heading lightText={false}>Contact Us</Heading>
                        <Subtitle darkText={true}>description here</Subtitle>
                      </TextWrapper>
                      
            <Form className={classes.root} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="Name" 
                      variant="outlined" 
                      name="name"
                      fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="Email" 
                      variant="outlined" 
                      name="email"
                      fullWidth
                      required 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="Phone" 
                      variant="outlined" 
                      name="phone"
                      fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                      id="outlined-full-width"
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="message"
                  />
                </Grid>
                <ContactSubmit 
                    type="submit"
                    value="send"
                    onClick={handleClick}
                />
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert severity="success" id="alert">
                    <AlertTitle>Success</AlertTitle>
                    Your message successfully sent.
                  </Alert>
                </Snackbar>
              </Grid>
            </Form>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img alt="contact" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
  );
}