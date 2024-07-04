const questions = [
  {
    question: "Was ist das Hauptziel des elften Prinzips der NCSC-Richtlinien?",
    options: [
      'Schutz von Daten in der Übertragung',
      'Regelmäßige Software-Updates',
      'Erstellung von Backup-Strategien',
      'Identifizierung und Absicherung aller externen oder weniger vertrauenswürdigen Schnittstellen'
    ],
    correctAnswer: 'Identifizierung und Absicherung aller externen oder weniger vertrauenswürdigen Schnittstellen',
    explanation: "Das elfte Prinzip der NCSC-Richtlinien befasst sich mit der Identifizierung und Absicherung aller externen oder weniger vertrauenswürdigen Schnittstellen zu Cloud-Diensten. Die anderen Optionen betreffen andere Aspekte der Sicherheit, aber nicht das Hauptziel dieses Prinzips."
  },
  {
    question: "Welche Arten von Schnittstellen sollten laut Prinzip 11 besonders geschützt werden?",
    options: [
      'Nur APIs',
      'Nur Kommandozeilen-Schnittstellen (CLIs)',
      'APIs, Webkonsolen, Kommandozeilen-Schnittstellen (CLIs) und direkte Verbindungsdienste',
      'Nur Webkonsolen'
    ],
    correctAnswer: 'APIs, Webkonsolen, Kommandozeilen-Schnittstellen (CLIs) und direkte Verbindungsdienste',
    explanation: "Prinzip 11 betont die Notwendigkeit, alle externen oder weniger vertrauenswürdigen Schnittstellen zu Cloud-Diensten abzusichern, einschließlich APIs, Webkonsolen, Kommandozeilen-Schnittstellen (CLIs) und direkter Verbindungsdienste."
  },
  {
    question: "Warum ist es wichtig, dass ein Cloud-Anbieter nachweisen kann, welche Schnittstellen oder Dienste dem Internet ausgesetzt sind?",
    options: [
      'Um die Sicherheit zu erhöhen und den Schutz gegen gängige Angriffe zu gewährleisten',
      'Um die Kosten zu senken',
      'Um die Benutzerfreundlichkeit zu erhöhen',
      'Um mehr Schnittstellen verfügbar zu machen'
    ],
    correctAnswer: 'Um die Sicherheit zu erhöhen und den Schutz gegen gängige Angriffe zu gewährleisten',
    explanation: "Ein Cloud-Anbieter sollte nachweisen können, welche Schnittstellen oder Dienste dem Internet ausgesetzt sind, um die Sicherheit zu erhöhen und den Schutz gegen gängige Angriffe zu gewährleisten. Die anderen Optionen sind nicht das Hauptziel dieser Anforderung."
  },
  {
    question: "Welche Netzwerkschutzmethoden werden in Prinzip 11 empfohlen?",
    options: [
      'Proxy-Server und Router',
      'Firewalls und Antiviren-Software',
      'WLAN und Ethernet',
      'MPLS, SD-WAN und VPNs'
    ],
    correctAnswer: 'MPLS, SD-WAN und VPNs',
    explanation: "Prinzip 11 empfiehlt Netzwerkschutzmethoden wie MPLS, SD-WAN und VPNs, um die Sicherheit der externen Schnittstellen zu gewährleisten. Die anderen Optionen sind nicht spezifisch genug oder nicht relevant für diesen Kontext."
  },
  {
    question: "Welche Angriffe sollten laut Prinzip 11 besonders berücksichtigt werden?",
    options: [
      'DoS-Angriffe, Passwort-Spraying und Anwendungsebene-Angriffe',
      'Phishing-Angriffe und Social Engineering',
      'Ransomware und Malware',
      'Man-in-the-Middle-Angriffe und SQL-Injection'
    ],
    correctAnswer: 'DoS-Angriffe, Passwort-Spraying und Anwendungsebene-Angriffe',
    explanation: "Prinzip 11 betont die Notwendigkeit, Schutzmaßnahmen gegen gängige Angriffe wie DoS-Angriffe, Passwort-Spraying und Anwendungsebene-Angriffe zu implementieren. Die anderen Angriffe sind ebenfalls wichtig, werden aber in diesem Prinzip nicht speziell hervorgehoben."
  },
  {
    question: "Warum sollte ein Cloud-Anbieter unsichere, veraltete Protokolle standardmäßig deaktivieren?",
    options: [
      'Um die Nutzung zu vereinfachen',
      'Um die Sicherheit zu erhöhen und mögliche Schwachstellen zu reduzieren',
      'Um die Leistung zu verbessern',
      'Um Kompatibilitätsprobleme zu vermeiden'
    ],
    correctAnswer: 'Um die Sicherheit zu erhöhen und mögliche Schwachstellen zu reduzieren',
    explanation: "Ein Cloud-Anbieter sollte unsichere, veraltete Protokolle standardmäßig deaktivieren, um die Sicherheit zu erhöhen und mögliche Schwachstellen zu reduzieren. Die anderen Optionen sind nicht die Hauptgründe für diese Maßnahme."
  },
  {
    question: "Welche zusätzliche Maßnahme wird zur Verbesserung der Sicherheit durch zentrale Implementierung und Überwachung empfohlen?",
    options: [
      'Regelmäßige Sicherheits-Updates',
      'Einsatz von Single Sign-On (SSO)',
      'Einsatz von Firewalls',
      'Verwendung von Antiviren-Software'
    ],
    correctAnswer: 'Einsatz von Single Sign-On (SSO)',
    explanation: "Der Einsatz von Single Sign-On (SSO) wird empfohlen, um Benutzeridentitäten an ein unternehmensweites Identitätsverzeichnis anzubinden und dadurch die Sicherheit durch zentrale Implementierung und Überwachung robuster Authentifizierungsprozesse zu verbessern. Die anderen Maßnahmen sind wichtig, aber nicht speziell in diesem Kontext hervorgehoben."
  },
  {
    question: "Warum ist das Verständnis der Abhängigkeiten zwischen den Diensten wichtig?",
    options: [
      'Um sicherzustellen, dass ein Ausfall des Authentifizierungsmechanismus die Verfügbarkeit des Zugangs zu Cloud-Diensten nicht beeinträchtigt',
      'Um die Kosten zu senken',
      'Um mehr Dienste hinzufügen zu können',
      'Um die Benutzerfreundlichkeit zu verbessern'
    ],
    correctAnswer: 'Um sicherzustellen, dass ein Ausfall des Authentifizierungsmechanismus die Verfügbarkeit des Zugangs zu Cloud-Diensten nicht beeinträchtigt',
    explanation: "Das Verständnis der Abhängigkeiten zwischen den Diensten ist wichtig, um sicherzustellen, dass ein Ausfall des Authentifizierungsmechanismus die Verfügbarkeit des Zugangs zu Cloud-Diensten nicht beeinträchtigt. Die anderen Optionen sind nicht die Hauptgründe für diese Anforderung."
  }
];

export default questions;
