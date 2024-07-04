const questions = [
  {
    question: "Welches Prinzip betont die Notwendigkeit, Benutzerdaten gegen unbefugtes Abhören und Manipulation zu sichern, besonders über unsichere Netzwerke?",
    options: [
      "Schutz von Daten in Ruhe",
      "Schutz von Daten bei der Verarbeitung",
      "Schutz von Daten bei der Speicherung",
      "Schutz von Daten während der Übertragung"
    ],
    correctAnswer: "Schutz von Daten während der Übertragung",
    explanation: "Das Prinzip des Schutzes von Daten während der Übertragung betont die Notwendigkeit, Benutzerdaten gegen unbefugtes Abhören und Manipulation zu sichern, besonders über unsichere Netzwerke. Dies wird durch Verschlüsselung, Netzwerkschutz und Authentifizierung erreicht. Die anderen Optionen beziehen sich auf verschiedene andere Phasen des Datenschutzes, wie Ruhe, Verarbeitung und Speicherung."
  },
  {
    question: "Welche Technologie wird empfohlen, um Daten während der Übertragung zu verschlüsseln und vor unbefugtem Zugriff zu schützen?",
    options: [
      "FTP",
      "SMTP",
      "TLS",
      "HTTP"
    ],
    correctAnswer: "TLS",
    explanation: "TLS (Transport Layer Security) wird empfohlen, um Daten während der Übertragung zu verschlüsseln und vor unbefugtem Zugriff zu schützen. HTTP, FTP und SMTP sind Protokolle zur Datenübertragung, bieten jedoch ohne zusätzliche Sicherheitsmaßnahmen keine Verschlüsselung oder Schutz vor unbefugtem Zugriff."
  },
  {
    question: "Welche Zertifizierung bietet zusätzliche Sicherheit, dass die Maßnahmen eines Cloud-Anbieters effektiv und vertrauenswürdig sind?",
    options: [
      "PCI DSS",
      "ISO 9001",
      "GDPR",
      "CSA STAR"
    ],
    correctAnswer: "CSA STAR",
    explanation: "CSA STAR (Cloud Security Alliance Security, Trust & Assurance Registry) ist eine Zertifizierung, die zusätzliche Sicherheit bietet, dass die Maßnahmen eines Cloud-Anbieters effektiv und vertrauenswürdig sind. ISO 9001 ist eine Qualitätsmanagementnorm, PCI DSS ist eine Sicherheitsnorm für Kreditkartendaten, und GDPR ist eine Datenschutzverordnung."
  },
  {
    question: "Welche Implementierungsansätze werden empfohlen, um das Prinzip des Schutzes von Daten während der Übertragung zu erfüllen?",
    options: [
      "Zugriffskontrolle, Datenmaskierung, Datenarchivierung",
      "Verschlüsselung, Netzwerkschutz, Authentifizierung",
      "Backup, Wiederherstellung, Datenlöschung",
      "Datenminimierung, Datenpseudonymisierung, Datenanonymisierung"
    ],
    correctAnswer: "Verschlüsselung, Netzwerkschutz, Authentifizierung",
    explanation: "Die empfohlenen Implementierungsansätze für den Schutz von Daten während der Übertragung sind Verschlüsselung, Netzwerkschutz und Authentifizierung. Diese Methoden helfen, Daten vor unbefugtem Zugriff und Manipulation zu schützen. Die anderen Optionen beziehen sich auf verschiedene andere Datenschutzmaßnahmen."
  },
  {
    question: "Welche Art von Zertifikaten wird zur Authentifizierung und Sicherstellung, dass nur autorisierte Benutzer Zugang haben, verwendet?",
    options: [
      "SSL-Zertifikate",
      "X.509-Zertifikate",
      "TLS-Zertifikate",
      "PGP-Zertifikate"
    ],
    correctAnswer: "TLS-Zertifikate",
    explanation: "TLS-Zertifikate werden zur Authentifizierung verwendet und helfen sicherzustellen, dass nur autorisierte Benutzer Zugang haben. SSL-Zertifikate sind ein älterer Standard, während X.509 ein allgemeiner Standard für öffentliche Schlüsselzertifikate und PGP-Zertifikate für E-Mail-Verschlüsselung verwendet werden."
  },
  {
    question: "Warum sind unabhängige Audits und Zertifizierungen wie CSA STAR, SOC2 und ISO 27017:2015 wichtig für Cloud-Anbieter?",
    options: [
      "Sie verbessern die Benutzerfreundlichkeit der Cloud-Dienste.",
      "Sie bieten zusätzliche Sicherheit, dass die Maßnahmen des Anbieters effektiv und vertrauenswürdig sind.",
      "Sie erhöhen die Geschwindigkeit der Datenübertragung.",
      "Sie reduzieren die Kosten für den Cloud-Anbieter."
    ],
    correctAnswer: "Sie bieten zusätzliche Sicherheit, dass die Maßnahmen des Anbieters effektiv und vertrauenswürdig sind.",
    explanation: "Unabhängige Audits und Zertifizierungen wie CSA STAR, SOC2 und ISO 27017:2015 sind wichtig, weil sie zusätzliche Sicherheit bieten, dass die Sicherheitsmaßnahmen eines Cloud-Anbieters effektiv und vertrauenswürdig sind. Sie haben keinen direkten Einfluss auf die Geschwindigkeit der Datenübertragung, die Kosten oder die Benutzerfreundlichkeit der Dienste."
  },
  {
    question: "Welche Maßnahmen sollten getroffen werden, um Datenübertragungen zwischen internen Komponenten und zu externen Diensten zu schützen?",
    options: [
      "Einsatz von unverschlüsselten Verbindungen",
      "Verwendung einfacher Passwörter für alle Verbindungen",
      "Implementierung sicherer Netzwerkverbindungen und Überwachung des Netzwerkverkehrs auf Anomalien",
      "Deaktivierung aller Sicherheitsprotokolle"
    ],
    correctAnswer: "Implementierung sicherer Netzwerkverbindungen und Überwachung des Netzwerkverkehrs auf Anomalien",
    explanation: "Um Datenübertragungen zwischen internen Komponenten und zu externen Diensten zu schützen, sollten sichere Netzwerkverbindungen implementiert und der Netzwerkverkehr auf Anomalien überwacht werden. Einfache Passwörter und unverschlüsselte Verbindungen bieten keinen ausreichenden Schutz, und die Deaktivierung von Sicherheitsprotokollen würde die Sicherheit gefährden."
  },
  {
    question: "Welche zusätzliche Überlegung ist wichtig, wenn Datenträger zur Datenübertragung verwendet werden?",
    options: [
      "Die Datenträger sollten regelmäßig formatiert werden.",
      "Die Datenträger sollten nicht verschlüsselt werden.",
      "Die Datenträger sollten öffentlich zugänglich sein.",
      "Die Datenträger sollten gemäß Prinzip 2 zum Schutz von Daten in Ruhe gesichert sein."
    ],
    correctAnswer: "Die Datenträger sollten gemäß Prinzip 2 zum Schutz von Daten in Ruhe gesichert sein.",
    explanation: "Wenn Datenträger zur Datenübertragung verwendet werden, sollten sie gemäß Prinzip 2 zum Schutz von Daten in Ruhe gesichert sein. Dies stellt sicher, dass die Daten auch während der Speicherung auf den Datenträgern geschützt sind. Öffentlich zugängliche oder unverschlüsselte Datenträger stellen ein Sicherheitsrisiko dar, und regelmäßiges Formatieren bietet keinen Schutz für die Daten."
  }
];

export default questions;
