import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScenarioOne from './pages/ScenarioOne.js'; 
import ScenarioTwo from './pages/ScenarioTwo.js'; 
import ScenarioThree from './pages/ScenarioThree.js'; 
import ScenarioFour from './pages/ScenarioFour.js'; 
import ScenarioFive from './pages/ScenarioFive.js'; 
import ScenarioSix from './pages/ScenarioSix.js'; 
import ScenarioSeven from './pages/ScenarioSeven.js'; 
import ScenarioEight from './pages/ScenarioEight.js'; 
import ScenarioNine from './pages/ScenarioNine.js'; 
import ScenarioTen from './pages/ScenarioTen.js'; 
import ScenarioEleven from './pages/ScenarioEleven.js'; 
import ScenarioTwelve from './pages/ScenarioTwelve.js'; 
import Scenario13 from './pages/Scenario13.js'; 
import Scenario14 from './pages/Scenario14.js'; 

import { Card, CardContent, CardActions, Typography, Box, Container, Grid ,AppBar, CssBaseline, IconButton, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import q1 from './components/questions1.js';
import q2 from './components/questions2.js';
import q3 from './components/questions3.js';
import q4 from './components/questions4.js';
import q5 from './components/questions5.js';
import q6 from './components/questions6.js';
import q7 from './components/questions7.js';
import q8 from './components/questions8.js';
import q9 from './components/questions9.js';
import q10 from './components/questions10.js';
import q11 from './components/questions11.js';
import q12 from './components/questions12.js';
import q13 from './components/questions13.js';
import q14 from './components/questions14.js';


const theme = createTheme({
  palette: {
    primary: {
      main: '#005a9c',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginTop: '10px',
          color: '#005a9c',
        },
      },
    },
  },
});

function Scenario({ title, description, link, image, questionCount }) {
  return (
    <Card >
      <CardMedia
        component="img"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to={link} style={{ textDecoration: 'none' }}>
          <IconButton aria-label="start scenario" color="primary">
            <ArrowForwardIcon />
          </IconButton>
        </Link>
        <Typography variant="body2" color="textSecondary" sx={{fontSize: '1.1em', marginRight: 1}}>
          {questionCount} Fragen
        </Typography>
      </CardActions>
    </Card>
  );
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
        </AppBar>
      </Box>
      <Container>
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Willkommen zu den interaktiven Cloud-Security Fallstudien
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Hier können Sie verschiedene Szenarien durchspielen, Entscheidungen treffen und lernen, wie diese Entscheidungen mit den NCSC-Prinzipien übereinstimmen.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 1: Schutz von Daten während der Übertragung" 
              description="Verstehen und Anwenden von Verschlüsselungsprotokollen wie TLS und IPsec, um Daten während der Übertragung zu sichern." 
              link="/prinzip1" 
              image="/prinzip1Foto.webp"
              questionCount={q1.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 2: Schutz und Resilienz von Vermögenswerten" 
              description="Implementierung von Maßnahmen zur Sicherung physischer und digitaler Assets gegen Bedrohungen und Ausfälle." 
              link="/prinzip2" 
              image="/prinzip2Foto.webp"
              questionCount={q2.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 3: Trennung zwischen den Benutzern" 
              description="Verstehen der Notwendigkeit und Umsetzung von Sicherheitsgrenzen und robusten Isolationsmechanismen zwischen den Cloud-Nutzern." 
              link="/prinzip3" 
              image="/prinzip3Foto.webp"
              questionCount={q3.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 4: Governance und Betriebsmanagement" 
              description="Etablierung eines effektiven Governance-Rahmenwerks zur Steuerung und Überwachung des Cloud-Services." 
              link="/prinzip4" 
              image="/prinzip4Foto.webp"
              questionCount={q4.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 5: Betriebssicherheit" 
              description="Erfahren, wie man Sicherheitsvorfälle effektiv verwaltet und proaktive Sicherheitsmaßnahmen implementiert." 
              link="/prinzip5" 
              image="/prinzip5Foto.webp"
              questionCount={q5.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 6: Personalsicherheit" 
              description="Maßnahmen zur Sicherung des Personals, das Zugang zu sensiblen Daten hat, durch Überprüfungen und Schulungen." 
              link="/prinzip6" 
              image="/prinzip6Foto.webp"
              questionCount={q6.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 7: Sichere Softwareentwicklung" 
              description="Integration von Sicherheitspraktiken in den Softwareentwicklungsprozess zur Minimierung von Risiken." 
              link="/prinzip7" 
              image="/prinzip7Foto.webp"
              questionCount={q7.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 8: Sicherheit der Lieferkette" 
              description="Überwachung und Sicherung der Supply Chain und der Drittanbieter, um das Gesamtsicherheitsniveau zu erhöhen." 
              link="/prinzip8" 
              image="/prinzip8Foto.webp"
              questionCount={q8.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 9: Sicheres Benutzermanagement" 
              description="Entwicklung von Strategien für ein sicheres Benutzer- und Zugriffsmanagement zur Vermeidung unbefugter Zugriffe." 
              link="/prinzip9" 
              image="/prinzip9Foto.webp"
              questionCount={q9.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 10: Identität und Authentifizierung" 
              description="Implementierung starker Authentifizierungsprotokolle und Zugriffskontrollen zur Sicherung der Dienst-Schnittstellen." 
              link="/prinzip10" 
              image="/prinzip10Foto.webp"
              questionCount={q10.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 11: Schutz externer Schnittstellen" 
              description="Sicherung der Zugangspunkte zu Cloud-Diensten, um sicherzustellen, dass der Zugriff sicher und kontrolliert erfolgt." 
              link="/prinzip11" 
              image="/prinzip11Foto.webp"
              questionCount={q11.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 12: Sichere Dienstverwaltung" 
              description="Verstehen der Bedeutung einer sicheren Verwaltung von Cloud-Services und Implementierung entsprechender Maßnahmen." 
              link="/prinzip12" 
              image="/prinzip12Foto.webp"
              questionCount={q12.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 13: Auditinformationen und Sicherheitswarnungen" 
              description="Bereitstellung notwendiger Werkzeuge und Daten für die effektive Erkennung, Untersuchung und Reaktion auf Sicherheitsvorfälle." 
              link="/prinzip13" 
              image="/prinzip13Foto.webp"
              questionCount={q13.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Scenario 
              title="Prinzip 14: Sichere Nutzung des Dienstes" 
              description="Unterstützung der Nutzer bei der sicheren Konfiguration und Nutzung der Cloud-Services, um Daten angemessen zu schützen." 
              link="/prinzip14" 
              image="/prinzip14Foto.webp"
              questionCount={q14.length}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/prinzip1" element={<ScenarioOne />} />
        <Route path="/prinzip2" element={<ScenarioTwo />} />
        <Route path="/prinzip3" element={<ScenarioThree />} />
        <Route path="/prinzip4" element={<ScenarioFour />} />
        <Route path="/prinzip5" element={<ScenarioFive />} />
        <Route path="/prinzip6" element={<ScenarioSix />} />
        <Route path="/prinzip7" element={<ScenarioSeven />} />
        <Route path="/prinzip8" element={<ScenarioEight />} />
        <Route path="/prinzip9" element={<ScenarioNine />} />
        <Route path="/prinzip10" element={<ScenarioTen />} />
        <Route path="/prinzip11" element={<ScenarioEleven />} />
        <Route path="/prinzip12" element={<ScenarioTwelve />} />
        <Route path="/prinzip13" element={<Scenario13 />} />
        <Route path="/prinzip14" element={<Scenario14 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
