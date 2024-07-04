const questions = [
  {
    question: "Was beschreibt das fünfte Prinzip der NCSC-Richtlinien?",
    options: [
      "Die Governance und das Betriebsmanagement",
      "Die Trennung zwischen den Benutzern",
      "Die Schutzmaßnahmen für Daten während der Übertragung",
      "Den sicheren Betrieb und die Verwaltung von Cloud-Diensten"
    ],
    correctAnswer: "Den sicheren Betrieb und die Verwaltung von Cloud-Diensten",
    explanation: "Das fünfte Prinzip der NCSC-Richtlinien beschreibt den sicheren Betrieb und die Verwaltung von Cloud-Diensten. Die anderen Optionen beziehen sich auf verschiedene andere Prinzipien."
  },
  {
    question: "Welche Prozesse sind Teil des Schwachstellenmanagements gemäß Prinzip 5?",
    options: [
      "Marketingstrategien und Budgetplanung",
      "Kundensupport und Feedbacksammlung",
      "Design und Entwicklung neuer Funktionen",
      "Identifizierung, Priorisierung und Minderung von Schwachstellen"
    ],
    correctAnswer: "Identifizierung, Priorisierung und Minderung von Schwachstellen",
    explanation: "Das Schwachstellenmanagement gemäß Prinzip 5 umfasst die Identifizierung, Priorisierung und Minderung von Schwachstellen. Marketingstrategien, Budgetplanung, Kundensupport und Feedbacksammlung sind nicht Teil dieses Prozesses."
  },
  {
    question: "Was ist das Ziel der Schutzüberwachung gemäß Prinzip 5?",
    options: [
      "Verbesserung der Benutzeroberfläche",
      "Überwachung von Angriffen, Missbrauch und Fehlfunktionen",
      "Reduzierung der Betriebskosten",
      "Erhöhung der Netzwerkgeschwindigkeit"
    ],
    correctAnswer: "Überwachung von Angriffen, Missbrauch und Fehlfunktionen",
    explanation: "Das Ziel der Schutzüberwachung gemäß Prinzip 5 ist die Überwachung von Angriffen, Missbrauch und Fehlfunktionen, um erfolgreiche sowie erfolglose Angriffe auf den Dienst erkennen zu können. Die anderen Optionen sind keine Ziele der Schutzüberwachung."
  },
  {
    question: "Welche Zertifizierungen können die Effektivität des Schwachstellenmanagements bestätigen?",
    options: [
      "ISO 9001 und PCI DSS",
      "GDPR und Data Protection Act 2018",
      "ISO/IEC 30111:2019 und CSA CCM v3.0.1",
      "TLS und SSL"
    ],
    correctAnswer: "ISO/IEC 30111:2019 und CSA CCM v3.0.1",
    explanation: "Die Zertifizierungen ISO/IEC 30111:2019 und CSA CCM v3.0.1 können die Effektivität des Schwachstellenmanagements bestätigen. ISO 9001 und PCI DSS betreffen Qualitätsmanagement und Kreditkartensicherheit, GDPR und Data Protection Act 2018 sind Datenschutzgesetze, und TLS und SSL sind Verschlüsselungstechnologien."
  },
  {
    question: "Was sollte der Anbieter gemäß Prinzip 5 tun, um schnell und effektiv auf Sicherheitsvorfälle zu reagieren?",
    options: [
      "Neue Produkte entwickeln",
      "Marketingkampagnen starten",
      "Vordefinierte Vorfallmanagementprozesse aktivieren",
      "Finanzberichte erstellen"
    ],
    correctAnswer: "Vordefinierte Vorfallmanagementprozesse aktivieren",
    explanation: "Um schnell und effektiv auf Sicherheitsvorfälle zu reagieren, sollte der Anbieter gemäß Prinzip 5 vordefinierte Vorfallmanagementprozesse aktivieren. Marketingkampagnen, Produktentwicklung und Finanzberichte sind nicht relevant für das Vorfallmanagement."
  },
  {
    question: "Warum ist Konfigurations- und Änderungsmanagement wichtig gemäß Prinzip 5?",
    options: [
      "Um die Betriebskosten zu senken",
      "Um sicherheitsrelevante Änderungen zu identifizieren und zu verwalten",
      "Um die Netzwerklatenz zu verringern",
      "Um die Benutzerfreundlichkeit zu erhöhen"
    ],
    correctAnswer: "Um sicherheitsrelevante Änderungen zu identifizieren und zu verwalten",
    explanation: "Konfigurations- und Änderungsmanagement ist wichtig gemäß Prinzip 5, um sicherheitsrelevante Änderungen zu identifizieren und zu verwalten. Die anderen Optionen betreffen verschiedene andere Aspekte des Cloud-Dienstmanagements."
  },
  {
    question: "Was sollte der Anbieter gemäß den zusätzlichen Überlegungen von Prinzip 5 tun, wenn der Service viele Abhängigkeiten von verschiedenen Softwarekomponenten hat?",
    options: [
      "Nur Open-Source-Software verwenden",
      "Die Abhängigkeiten ignorieren",
      "Nur proprietäre Software verwenden",
      "Einen Überblick über diese externen Abhängigkeiten haben und deren Sicherheitsanforderungen überprüfen"
    ],
    correctAnswer: "Einen Überblick über diese externen Abhängigkeiten haben und deren Sicherheitsanforderungen überprüfen",
    explanation: "Gemäß den zusätzlichen Überlegungen von Prinzip 5 sollte der Anbieter einen Überblick über die externen Abhängigkeiten haben und deren Sicherheitsanforderungen überprüfen, um die Sicherheit und Funktionsfähigkeit des Dienstes zu gewährleisten. Nur eine Art von Software zu verwenden oder die Abhängigkeiten zu ignorieren, würde die Flexibilität und Sicherheit des Dienstes einschränken."
  },
  {
    question: "Welche Prozesse sollten gemäß den zusätzlichen Überlegungen von Prinzip 5 automatisiert sein?",
    options: [
      "Marketing- und Vertriebsprozesse",
      "Finanz- und Buchhaltungsprozesse",
      "Kundenservice- und Supportprozesse",
      "Vulnerability-Management- und Änderungsmanagementprozesse"
    ],
    correctAnswer: "Vulnerability-Management- und Änderungsmanagementprozesse",
    explanation: "Effektive Vulnerability-Management- und Änderungsmanagementprozesse sollten gemäß den zusätzlichen Überlegungen von Prinzip 5 automatisiert sein, um Konsistenz und zeitnahe Anwendung von Sicherheitsupdates und Konfigurationsänderungen zu gewährleisten. Die anderen Optionen betreffen verschiedene andere Unternehmensprozesse."
  }
];
export default questions;
