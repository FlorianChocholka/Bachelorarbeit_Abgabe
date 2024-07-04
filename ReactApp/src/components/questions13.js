const questions = [
  {
    question: "Warum betont das dreizehnte Prinzip der NCSC-Richtlinien die Wichtigkeit von Auditinformationen und Sicherheitswarnungen?",
    options: [
      'Um die Kosten zu senken',
      'Um Sicherheitsvorfälle effektiv erkennen, untersuchen und darauf reagieren zu können',
      'Um die Benutzerfreundlichkeit zu erhöhen',
      'Um die Anzahl der Nutzer zu erhöhen'
    ],
    correctAnswer: 'Um Sicherheitsvorfälle effektiv erkennen, untersuchen und darauf reagieren zu können',
    explanation: "Das dreizehnte Prinzip zielt darauf ab, Nutzern die notwendigen Werkzeuge und Daten zur Verfügung zu stellen, um Sicherheitsvorfälle effektiv erkennen, untersuchen und darauf reagieren zu können. Die anderen Optionen sind nicht das Hauptziel dieses Prinzips."
  },
  {
    question: "Welche Informationen sollten Nutzern zur Verfügung gestellt werden, um Vorfälle zu untersuchen?",
    options: [
      'Keine Informationen',
      'Auditdaten, die notwendig sind, um Vorfälle zu untersuchen',
      'Nur grundlegende Benutzerdaten',
      'Marketingdaten'
    ],
    correctAnswer: 'Auditdaten, die notwendig sind, um Vorfälle zu untersuchen',
    explanation: "Das Ziel des Prinzips ist es, den Nutzern die Auditdaten zur Verfügung zu stellen, die notwendig sind, um Vorfälle zu untersuchen. Die anderen Optionen sind entweder irrelevant oder unzureichend."
  },
  {
    question: "Wie lange sollten Auditinformationen aufbewahrt werden?",
    options: [
      'Sie können jederzeit gelöscht werden',
      'Nur für einen Tag',
      'Während eines definierten Aufbewahrungszeitraums, der bei Bedarf verlängert werden kann',
      'Für immer'
    ],
    correctAnswer: 'Während eines definierten Aufbewahrungszeitraums, der bei Bedarf verlängert werden kann',
    explanation: "Auditinformationen sollten während eines definierten Aufbewahrungszeitraums aufbewahrt werden, der bei Bedarf verlängert werden kann, um eine gründliche Untersuchung zu ermöglichen. Die anderen Optionen sind entweder nicht praktikabel oder ungenau."
  },
  {
    question: "Welche Formate sollten Auditinformationen haben?",
    options: [
      'Nur maschinenlesbare Formate',
      'Nur menschenlesbare Formate',
      'Maschinenlesbare und menschenlesbare Formate',
      'Nur PDF-Dokumente'
    ],
    correctAnswer: 'Maschinenlesbare und menschenlesbare Formate',
    explanation: "Die Auditinformationen sollten sowohl in maschinenlesbaren Formaten für automatisierte Analysen als auch in menschenlesbaren Formaten in Analysetools bereitgestellt werden. Die anderen Optionen sind zu einschränkend."
  },
  {
    question: "Warum sollten Auditinformationen weder vom Kunden noch von einem Angreifer verändert oder gelöscht werden können?",
    options: [
      'Um die Datenmenge zu reduzieren',
      'Um nachträgliche Untersuchungen zu ermöglichen und Spurenverwischung zu verhindern',
      'Um die Geschwindigkeit der Cloud-Dienste zu erhöhen',
      'Um Kosten zu sparen'
    ],
    correctAnswer: 'Um nachträgliche Untersuchungen zu ermöglichen und Spurenverwischung zu verhindern',
    explanation: "Auditinformationen sollten unveränderlich sein, um nachträgliche Untersuchungen zu ermöglichen und Spurenverwischung zu verhindern. Die anderen Optionen sind nicht relevant für die Sicherheit."
  },
  {
    question: "Was sollte ein Cloud-Anbieter tun, wenn er Angriffe auf die Daten oder Dienste eines Kunden erkennt?",
    options: [
      'Nichts tun',
      'Die Angriffe ignorieren',
      'Die Kunden benachrichtigen und als erste Verteidigungslinie gegen gängige Angriffe agieren',
      'Die Dienste sofort abschalten'
    ],
    correctAnswer: 'Die Kunden benachrichtigen und als erste Verteidigungslinie gegen gängige Angriffe agieren',
    explanation: "Ein Cloud-Anbieter sollte die Kunden benachrichtigen, wenn er Angriffe erkennt, und als erste Verteidigungslinie gegen gängige Angriffe agieren. Die anderen Optionen sind entweder unzureichend oder nicht praktikabel."
  },
  {
    question: "Warum sollten Kunden auch bei Sicherheitsproblemen durch fehlerhafte Dienstkonfigurationen benachrichtigt werden?",
    options: [
      'Um Marketingdaten zu erhalten',
      'Um Vorfälle zu identifizieren und schnell mit der Untersuchung zu beginnen',
      'Um ihre Passwörter zu ändern',
      'Um mehr Benutzer zu gewinnen'
    ],
    correctAnswer: 'Um Vorfälle zu identifizieren und schnell mit der Untersuchung zu beginnen',
    explanation: "Kunden sollten bei Sicherheitsproblemen durch fehlerhafte Dienstkonfigurationen benachrichtigt werden, um Vorfälle zu identifizieren und schnell mit der Untersuchung zu beginnen. Die anderen Optionen sind nicht das Hauptziel dieser Benachrichtigungen."
  }
];
export default questions;