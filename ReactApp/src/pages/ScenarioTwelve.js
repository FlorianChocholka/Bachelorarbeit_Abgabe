import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Fade, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import { green, lightGreen, red } from '@mui/material/colors';
import { Alert, Collapse } from '@mui/material';

import questions from '../components/questions12';

const styles = {
  scenario: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    maxWidth: '700px',
    margin: '20px auto',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-in-out'
  },
  title: {
    color: '#005a9c',
    marginBottom: '15px'
  },
  question: {
    margin: '20px 0',
    fontWeight: 'bold'
  },
  options: {
    listStyleType: 'none',
    padding: 0
  },
  option: {
    margin: '10px 0',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOption: {
    border: `2px solid ${green[500]}`
  },
  checkIcon: {
    marginLeft: '10px',
    color: green[500],
    fontSize: '20px'
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    '&:disabled': {
      backgroundColor: '#a0c4ff',
      cursor: 'not-allowed'
    }
  },
  iconButton: {
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '50%',
    padding: '10px',
    marginTop: '20px',
    '&:disabled': {
      backgroundColor: '#a0c4ff',
      cursor: 'not-allowed'
    }
  },
  summary: { 
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '100%', 
    margin: '20px auto',
    textAlign: 'left',
    animation: 'fadeIn 1s ease-in-out',
  },
  table: {
    minWidth: 650,
  },
  correctAnswer: {
    color: green[500],
  },
  incorrectAnswer: {
    color: red[500],
  },
  progressContainer: {
    width: '100%',
    marginBottom: '20px'
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  }
};

function ScenarioTwelve() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [fade, setFade] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNextQuestion = () => {
    if (!selected) {
      setShowAlert(true);
      return;
    }

    const updatedAnswers = [
      ...answers,
      { 
        question: questions[currentQuestionIndex].question, 
        selected, 
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
        explanation: questions[currentQuestionIndex].explanation
      }
    ];
    setAnswers(updatedAnswers);
    setFade(false);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelected(null);
        setFade(true);
        setShowAlert(false); 
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFade(true);
      }
    }, 500); 
  };

  const correctAnswersCount = answers.filter(answer => answer.selected === answer.correctAnswer).length;
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div style={styles.scenario}>
      <Typography variant="h4" style={styles.title}>Prinzip 12: Sichere Dienstverwaltung</Typography>
      <div style={styles.progressContainer}>
        <Collapse in={showAlert}>
          <Alert severity="info" onClose={() => setShowAlert(false)}>
            Bitte beantworte die Frage, bevor du fortfährst.
          </Alert>
        </Collapse>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="textSecondary">{currentQuestionIndex + 1} / {questions.length + 1}</Typography>
      </div>
      {currentQuestionIndex < questions.length ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Fade in={fade} timeout={1000}>
            <div>
              <Typography variant="h6" style={styles.question}>Frage {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}</Typography>
              <ul style={styles.options}>
                {questions[currentQuestionIndex].options.map(option => (
                  <li
                    key={option}
                    style={{ ...styles.option, ...(selected === option ? styles.selectedOption : {}) }}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                    {selected === option && <CheckIcon style={styles.checkIcon} />}
                  </li>
                ))}
              </ul>
              <IconButton 
                style={styles.iconButton} 
                onClick={handleNextQuestion} 
              >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </Fade>
        </Box>
      ) : (
        <div style={styles.summary}>
          <Typography variant="h5">Zusammenfassung</Typography>
          <Typography variant="body1">Du hast {correctAnswersCount} von {questions.length} Fragen richtig beantwortet.</Typography>
          <TableContainer component={Paper}>
            <Table style={styles.table} aria-label="Ergebnis Tabelle">
              <TableHead>
                <TableRow>
                  <TableCell>Frage</TableCell>
                  <TableCell align="center">Deine Antwort</TableCell>
                  <TableCell align="center">Richtige Antwort</TableCell>
                  <TableCell align="center">Ergebnis</TableCell>
                  <TableCell align="center">Erklärung</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {answers.map((answer, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {answer.question}
                    </TableCell>
                    <TableCell align="center" style={answer.selected === answer.correctAnswer ? styles.correctAnswer : styles.incorrectAnswer}>
                      {answer.selected}
                    </TableCell>
                    <TableCell align="center" style={styles.correctAnswer}>
                      {answer.correctAnswer}
                    </TableCell>
                    <TableCell align="center">
                      {answer.selected === answer.correctAnswer ? <CheckCircleOutlineIcon style={styles.correctAnswer} /> : <CancelOutlinedIcon style={styles.incorrectAnswer} />}
                    </TableCell>
                    <TableCell align="left">
                      {answer.explanation}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Link to="/" style={{ textDecoration: 'none', marginTop: '20px' }}>
            <IconButton aria-label="back to home" style={styles.iconButton}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ScenarioTwelve;
