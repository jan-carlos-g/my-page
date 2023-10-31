import { TextField, Button, Container, Typography, Box, Grid, Card, CardContent } from '@material-ui/core';
import './styles/Contact.css';
import nupi from './assets/nupi.jpg';
import nupi2 from './assets/nupi2.jpg';

function Contact() {
  return (
    <div className="background">
      <section className="projects">
        <Container className="container">
          <Typography variant="h4" align="center" className="title">
            O que estou fazendo atualmente
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={12}>
              <Card className="project-card">
                <img src={nupi2} alt="Projeto 1" className="project-image" />
                <CardContent>
                  <Typography variant="h6" gutterBottom className="title">
                    Sistema NUPI
                  </Typography>
                  <Typography variant="body2" className="subtitle" style={{marginTop:'-10px'}}>
                    Sistema de gestão de informações e atendimento do Núcleo de Políticas inclusivas da UFRB, em que utilizo NodeJs, ReactJs, Sequelize, MySQL e Redux.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container className="container">
        <Typography variant="h4" align="center" gutterBottom className="subtitleForm">
          Me mande uma mensagem :)
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" className="formContainer">
            <TextField
              label="Nome"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              className="input"
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              className="input"
            />
            <TextField
              label="Mensagem"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
              fullWidth
              className="input"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              className="button"
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default Contact;