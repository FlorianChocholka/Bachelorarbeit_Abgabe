const questions2 = [
  {
    question: "Warum ist es wichtig, den physischen Standort der Daten zu kennen?",
    options: [
      'Um die Verfügbarkeit der Daten zu erhöhen.',
      'Um die Transportkosten der Daten zu reduzieren.',
      'Um die Steuervorteile zu maximieren.',
      'Um sicherzustellen, dass die Daten den geltenden Datenschutzbestimmungen entsprechen.'
    ],
    correctAnswer: 'Um sicherzustellen, dass die Daten den geltenden Datenschutzbestimmungen entsprechen.',
    explanation: "Der physische Standort der Daten ist wichtig, um sicherzustellen, dass die Daten den lokalen Datenschutzgesetzen entsprechen. Steuervorteile und Transportkosten sind keine primären Bedenken, und die Verfügbarkeit der Daten ist unabhängig vom Standort."
  },
  {
    question: "Welche Zertifizierungen können die physische Sicherheit von Datencentern bestätigen?",
    options: [
      'ISO 14001',
      'ISO 45001',
      'CSA CCM',
      'ISO 9001'
    ],
    correctAnswer: 'CSA CCM',
    explanation: "CSA CCM (Cloud Security Alliance Cloud Controls Matrix) ist eine spezifische Zertifizierung, die sich auf die Sicherheit von Cloud-Diensten konzentriert. ISO 9001 bezieht sich auf Qualitätsmanagement, ISO 14001 auf Umweltmanagement und ISO 45001 auf Arbeitssicherheit."
  },
  {
    question: "Was muss ein Cloud-Anbieter sicherstellen, wenn er personenbezogene Daten in Drittländern verarbeitet?",
    options: [
      'Dass die Daten sicher und im Einklang mit GDPR und Data Protection Act 2018 verarbeitet werden.',
      'Dass die Daten ohne Zustimmung des Benutzers verarbeitet werden.',
      'Dass die Datenverarbeitung billiger ist.',
      'Dass die Daten schneller verarbeitet werden.'
    ],
    correctAnswer: 'Dass die Daten sicher und im Einklang mit GDPR und Data Protection Act 2018 verarbeitet werden.',
    explanation: "Die Verarbeitung personenbezogener Daten muss sicher und im Einklang mit Datenschutzbestimmungen wie GDPR und dem Data Protection Act 2018 erfolgen. Kosten und Geschwindigkeit sind nicht die Hauptfaktoren, und die Zustimmung des Benutzers ist erforderlich."
  },
  {
    question: "Welche Maßnahme trägt zur physischen Sicherheit von Datencentern bei?",
    options: [
      'Lagerung von sensiblen Daten in unsicheren Bereichen',
      'Offene Zugangsbereiche für alle Mitarbeiter',
      'Regelmäßige Sicherheitstests und Überwachungen',
      'Verwendung von Standardtüren ohne Sicherheitsschlösser'
    ],
    correctAnswer: 'Regelmäßige Sicherheitstests und Überwachungen',
    explanation: "Regelmäßige Sicherheitstests und Überwachungen tragen zur physischen Sicherheit von Datencentern bei. Offene Zugangsbereiche und unsichere Lagerung sind Sicherheitsrisiken, und Standardtüren ohne Schlösser bieten keinen ausreichenden Schutz."
  },
  {
    question: "Warum sollte die Angemessenheit des Datenschutzniveaus in Drittländern geprüft werden?",
    options: [
      'Um die Verfügbarkeit von IT-Fachkräften zu erhöhen.',
      'Um die Kosten der Datenspeicherung zu senken.',
      'Um das Klima des Landes zu bewerten.',
      'Um sicherzustellen, dass personenbezogene Daten nicht missbraucht werden.'
    ],
    correctAnswer: 'Um sicherzustellen, dass personenbezogene Daten nicht missbraucht werden.',
    explanation: "Die Angemessenheit des Datenschutzniveaus in Drittländern muss geprüft werden, um sicherzustellen, dass personenbezogene Daten sicher und im Einklang mit Datenschutzbestimmungen verarbeitet werden. Kosten, IT-Fachkräfte und Klima sind keine relevanten Faktoren."
  },
  {
    question: "Welche rechtlichen Bestimmungen müssen bei der Datenverarbeitung berücksichtigt werden?",
    options: [
      'Keine besonderen Bestimmungen',
      'Nur lokale Datenschutzgesetze',
      'Sowohl GDPR als auch der Data Protection Act 2018',
      'Nur internationale Datenschutzgesetze'
    ],
    correctAnswer: 'Sowohl GDPR als auch der Data Protection Act 2018',
    explanation: "Bei der Datenverarbeitung müssen sowohl internationale Datenschutzgesetze wie GDPR als auch lokale Gesetze wie der Data Protection Act 2018 berücksichtigt werden. Es reicht nicht aus, nur eine dieser Regelungen zu beachten."
  },
  {
    question: "Was umfasst der Schutz digitaler Assets?",
    options: [
      'Nur Konfigurationsdaten',
      'Anmeldeinformationen, Konfigurationsdaten und Protokolle',
      'Nur Protokolle',
      'Nur Anmeldeinformationen'
    ],
    correctAnswer: 'Anmeldeinformationen, Konfigurationsdaten und Protokolle',
    explanation: "Der Schutz digitaler Assets umfasst Anmeldeinformationen, Konfigurationsdaten und Protokolle. Es ist wichtig, alle diese Komponenten zu sichern, um die Integrität und Sicherheit von Systemen und Daten zu gewährleisten."
  },
  {
    question: "Warum ist die Kenntnis der rechtlichen Zuständigkeit wichtig?",
    options: [
      'Um die Transportkosten der Daten zu reduzieren.',
      'Um die Steuervorteile zu maximieren.',
      'Um die Verfügbarkeit der Daten zu erhöhen.',
      'Um sicherzustellen, dass die Daten den geltenden Datenschutzbestimmungen entsprechen.'
    ],
    correctAnswer: 'Um sicherzustellen, dass die Daten den geltenden Datenschutzbestimmungen entsprechen.',
    explanation: "Die Kenntnis der rechtlichen Zuständigkeit ist wichtig, um sicherzustellen, dass die Daten den geltenden Datenschutzbestimmungen entsprechen. Steuervorteile, Transportkosten und Verfügbarkeit sind nicht die primären Bedenken."
  },
  {
    question: "Was ist bei der Verarbeitung personenbezogener Daten gemäß GDPR zu beachten?",
    options: [
      'Die Daten dürfen nur in verschlüsselter Form gespeichert werden.',
      'Die Daten müssen innerhalb von 24 Stunden gelöscht werden.',
      'Die Daten dürfen nicht ins Ausland übertragen werden.',
      'Die Verarbeitung muss sicher und im Einklang mit gesetzlichen Vorschriften erfolgen.'
    ],
    correctAnswer: 'Die Verarbeitung muss sicher und im Einklang mit gesetzlichen Vorschriften erfolgen.',
    explanation: "Die Verarbeitung personenbezogener Daten muss sicher und im Einklang mit gesetzlichen Vorschriften erfolgen. Verschlüsselung, Löschfristen und Auslandsübertragungen sind wichtige Aspekte, aber die Einhaltung der gesetzlichen Vorschriften ist entscheidend."
  },
  {
    question: "Welche Zertifizierung könnte die Einhaltung von Datenschutzbestimmungen bestätigen?",
    options: [
      'ISO 14001',
      'ISO 45001',
      'ISO 9001',
      'ISAE 3402'
    ],
    correctAnswer: 'ISAE 3402',
    explanation: "ISAE 3402 ist eine Zertifizierung, die sich auf die Einhaltung von Datenschutzbestimmungen konzentriert. ISO 9001 bezieht sich auf Qualitätsmanagement, ISO 45001 auf Arbeitssicherheit und ISO 14001 auf Umweltmanagement."
  }
];

export default questions2;
