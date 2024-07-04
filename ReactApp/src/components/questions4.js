const questions = [
  {
    question: "Welches Prinzip unterstreicht die Bedeutung eines strukturierten Governance-Rahmens zur effektiven Steuerung und Überwachung des Cloud-Services?",
    options: [
      "Schutz und Resilienz von Vermögenswerten",
      "Trennung zwischen den Benutzern",
      "Schutz von Daten während der Übertragung",
      "Governance und Betriebsmanagement"
    ],
    correctAnswer: "Governance und Betriebsmanagement",
    explanation: "Prinzip 4 unterstreicht die Bedeutung eines strukturierten Governance-Rahmens zur effektiven Steuerung und Überwachung des Cloud-Services. Es stellt sicher, dass organisatorische, personelle, physische und technische Kontrollen funktionsfähig bleiben und sich an neue technologische Entwicklungen und Bedrohungen anpassen. Die anderen Optionen betreffen verschiedene andere Aspekte des Cloud-Dienstmanagements."
  },
  {
    question: "Welche Rolle sollte eine explizit verantwortliche Führungskraft gemäß Prinzip 4 übernehmen?",
    options: [
      "Chief Financial Officer",
      "Chief Operations Officer",
      "Chief Marketing Officer",
      "Chief Security Officer, Chief Information Officer oder Chief Technical Officer"
    ],
    correctAnswer: "Chief Security Officer, Chief Information Officer oder Chief Technical Officer",
    explanation: "Gemäß Prinzip 4 sollte eine explizit verantwortliche Führungskraft wie der Chief Security Officer, Chief Information Officer oder Chief Technical Officer direkt für die Sicherheit des Cloud-Services zuständig sein. Der Chief Financial Officer, Chief Marketing Officer und Chief Operations Officer sind für andere Unternehmensbereiche verantwortlich."
  },
  {
    question: "Was ist essenziell für das Sicherheits-Governance- und Risikomanagementsystem gemäß Prinzip 4?",
    options: [
      "Ein informelles System basierend auf Best Practices",
      "Ein System ohne formale Dokumentation",
      "Ein ausschließlich technisches System",
      "Ein formal dokumentiertes System, das die wesentlichen Bereiche der Informationssicherheit abdeckt"
    ],
    correctAnswer: "Ein formal dokumentiertes System, das die wesentlichen Bereiche der Informationssicherheit abdeckt",
    explanation: "Ein formal dokumentiertes Sicherheits-Governance- und Risikomanagementsystem, das die wesentlichen Bereiche der Informationssicherheit abdeckt, ist gemäß Prinzip 4 essenziell. Informelle Systeme, Systeme ohne Dokumentation und rein technische Systeme erfüllen diese Anforderungen nicht vollständig."
  },
  {
    question: "Welche Sicherheitsstandards werden für die Bewertungskriterien eines Governance-Rahmenwerks empfohlen?",
    options: [
      "ISO 9001 und PCI DSS",
      "GDPR und Data Protection Act 2018",
      "TLS und SSL",
      "CSA CCM v3.0.1, SOC2 und ISO/IEC 27001"
    ],
    correctAnswer: "CSA CCM v3.0.1, SOC2 und ISO/IEC 27001",
    explanation: "Die Sicherheitsstandards CSA CCM v3.0.1, SOC2 und ISO/IEC 27001 werden für die Bewertungskriterien eines Governance-Rahmenwerks empfohlen. ISO 9001 und PCI DSS betreffen Qualitätsmanagement und Kreditkartensicherheit, GDPR und Data Protection Act 2018 sind Datenschutzgesetze, und TLS und SSL sind Verschlüsselungstechnologien."
  },
  {
    question: "Welche Verantwortung trägt der Datenschutzbeauftragte gemäß Prinzip 4?",
    options: [
      "Er ist für die Finanzen des Cloud-Services zuständig",
      "Er verwaltet die Kundenbeziehungen des Cloud-Services",
      "Er kümmert sich um das Marketing des Cloud-Services",
      "Er trägt die Verantwortung für die Sicherheit des Cloud-Services"
    ],
    correctAnswer: "Er trägt die Verantwortung für die Sicherheit des Cloud-Services",
    explanation: "Für Services, die der DSGVO unterliegen, kann der Datenschutzbeauftragte des Dienstanbieters die Verantwortung für die Sicherheit des Cloud-Services tragen, wie in Prinzip 4 beschrieben. Die anderen Optionen beziehen sich auf verschiedene nicht sicherheitsbezogene Verantwortlichkeiten."
  },
  {
    question: "Warum ist es wichtig, dass die Integration von Sicherheits- und Informationsrisiken in die Risikoberichterstattung des Anbieters erfolgt?",
    options: [
      "Um die Benutzerfreundlichkeit des Cloud-Services zu verbessern",
      "Um die Kosten des Cloud-Services zu senken",
      "Um die Geschwindigkeit des Cloud-Services zu erhöhen",
      "Um den Vorstand kontinuierlich zu informieren"
    ],
    correctAnswer: "Um den Vorstand kontinuierlich zu informieren",
    explanation: "Die Integration von Sicherheits- und Informationsrisiken in die Risikoberichterstattung des Anbieters ist wichtig, um den Vorstand kontinuierlich über die aktuellen Risiken und Sicherheitsmaßnahmen zu informieren. Dies ist notwendig für eine fundierte Entscheidungsfindung. Die anderen Optionen sind nicht der primäre Zweck dieser Maßnahme."
  },
  {
    question: "Welche anerkannten Sicherheitsstandards beinhalten Bewertungskriterien für die Risikosteuerung durch ein Governance-Rahmenwerk?",
    options: [
      "ISO 9001 und PCI DSS",
      "GDPR und Data Protection Act 2018",
      "TLS und SSL",
      "CSA CCM v3.0.1, SOC2 und ISO/IEC 27001"
    ],
    correctAnswer: "CSA CCM v3.0.1, SOC2 und ISO/IEC 27001",
    explanation: "Die anerkannten Sicherheitsstandards CSA CCM v3.0.1, SOC2 und ISO/IEC 27001 beinhalten Bewertungskriterien für die Risikosteuerung durch ein Governance-Rahmenwerk. ISO 9001 und PCI DSS betreffen Qualitätsmanagement und Kreditkartensicherheit, GDPR und Data Protection Act 2018 sind Datenschutzgesetze, und TLS und SSL sind Verschlüsselungstechnologien."
  },
  {
    question: "Welche Zertifizierungen sollten Entscheidungsträger gemäß Prinzip 4 für die Einhaltung eines Governance-Rahmenwerks suchen?",
    options: [
      "Zertifizierungen zu Finanzstandards",
      "Keine Zertifizierungen",
      "Unabhängige Zertifizierungen zu Sicherheitsstandards wie CSA CCM v3.0.1, SOC2 und ISO/IEC 27001",
      "Zertifizierungen zu Marketingstandards"
    ],
    correctAnswer: "Unabhängige Zertifizierungen zu Sicherheitsstandards wie CSA CCM v3.0.1, SOC2 und ISO/IEC 27001",
    explanation: "Entscheidungsträger sollten gemäß Prinzip 4 unabhängige Zertifizierungen zu Sicherheitsstandards wie CSA CCM v3.0.1, SOC2 und ISO/IEC 27001 suchen, um sicherzustellen, dass das Governance-Rahmenwerk die erforderlichen Sicherheitskriterien erfüllt. Zertifizierungen zu Marketing- oder Finanzstandards sind in diesem Kontext nicht relevant, und keine Zertifizierungen zu suchen, würde die Governance-Anforderungen nicht erfüllen."
  }
];

export default questions;
