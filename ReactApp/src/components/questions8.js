const questions8 = [
  {
    question: "Was betont das achte Prinzip der NCSC-Richtlinien?",
    options: [
      "Die Optimierung von Cloud-Ressourcen",
      "Die Erhöhung der Netzwerkauslastung",
      "Die Senkung der Betriebskosten",
      "Die Sicherheit der Lieferkette"
    ],
    correctAnswer: "Die Sicherheit der Lieferkette",
    explanation: "Das achte Prinzip betont die Notwendigkeit, dass Drittanbieter und deren Lieferketten alle Sicherheitsprinzipien unterstützen, um die Sicherheit des Dienstes nicht zu gefährden. Optimierung, Kostensenkung und Netzwerkauslastung sind nicht die Hauptfokusse dieses Prinzips."
  },
  {
    question: "Warum ist die Sicherheit der Lieferkette wichtig?",
    options: [
      "Um die Geschwindigkeit der Datenverarbeitung zu erhöhen",
      "Um die Benutzerfreundlichkeit zu verbessern",
      "Um die Sicherheit des Dienstes nicht zu untergraben",
      "Um die Effizienz der Datenspeicherung zu erhöhen"
    ],
    correctAnswer: "Um die Sicherheit des Dienstes nicht zu untergraben",
    explanation: "Die Sicherheit der Lieferkette ist entscheidend, um sicherzustellen, dass die gesamte Sicherheitsarchitektur des Dienstes nicht gefährdet wird. Effizienz, Benutzerfreundlichkeit und Geschwindigkeit sind sekundäre Aspekte."
  },
  {
    question: "Was müssen Entscheidungsträger verstehen, wenn es um Drittanbieter und deren Lieferketten geht?",
    options: [
      "Wie die Skalierbarkeit des Dienstes verbessert werden kann",
      "Wie die Netzwerksicherheit erhöht werden kann",
      "Wie die Kosten der Datenverarbeitung reduziert werden können",
      "Wie ihre Daten geteilt oder zugänglich gemacht werden"
    ],
    correctAnswer: "Wie ihre Daten geteilt oder zugänglich gemacht werden",
    explanation: "Entscheidungsträger müssen wissen, wie und unter welchen Umständen ihre Daten mit Drittanbietern geteilt oder ihnen zugänglich gemacht werden, um die Sicherheit zu gewährleisten. Skalierbarkeit, Kostenreduktion und Netzwerksicherheit sind weniger relevant."
  },
  {
    question: "Was sollten Entscheidungsträger sicherstellen bezüglich des Dienstanbieters und seiner Drittanbieter?",
    options: [
      "Dass die Dienstverfügbarkeit maximiert wird",
      "Dass Sicherheitsanforderungen an Drittanbieter gestellt werden",
      "Dass die Betriebskosten minimiert werden",
      "Dass die Benutzerfreundlichkeit priorisiert wird"
    ],
    correctAnswer: "Dass Sicherheitsanforderungen an Drittanbieter gestellt werden",
    explanation: "Es ist wichtig, dass der Dienstanbieter Sicherheitsanforderungen an Drittanbieter stellt und die Einhaltung dieser Anforderungen überwacht. Dienstverfügbarkeit, Kostenminimierung und Benutzerfreundlichkeit sind nachrangig."
  },
  {
    question: "Warum ist es entscheidend zu identifizieren, welche Partei für die Implementierung welcher Sicherheitsfunktionen verantwortlich ist?",
    options: [
      "Um die Speicherkapazität zu erhöhen",
      "Um die Benutzerfreundlichkeit zu optimieren",
      "Um die Sicherheit in geschichteten Diensten zu gewährleisten",
      "Um die Gesamtleistung des Netzwerks zu verbessern"
    ],
    correctAnswer: "Um die Sicherheit in geschichteten Diensten zu gewährleisten",
    explanation: "In geschichteten Diensten ist es wichtig zu wissen, wer für welche Sicherheitsmaßnahmen verantwortlich ist, um die Gesamtsicherheit zu gewährleisten. Netzwerkleistung, Speicherkapazität und Benutzerfreundlichkeit sind nachrangig."
  },
  {
    question: "Welche Herausforderung kann eine komplexere Situation hinsichtlich der Trennung darstellen?",
    options: [
      "Hochverfügbare Netzwerkarchitekturen",
      "Geschichtete Dienste",
      "Automatisierte Benutzerverwaltung",
      "Zentralisierte Datenverarbeitung"
    ],
    correctAnswer: "Geschichtete Dienste",
    explanation: "Geschichtete Dienste können die Trennung von Ressourcen und die Implementierung von Sicherheitsmaßnahmen komplizierter machen. Hochverfügbare Netzwerkarchitekturen, zentralisierte Datenverarbeitung und automatisierte Benutzerverwaltung sind weniger relevant."
  },
  {
    question: "Was sollten Entscheidungsträger tun, wenn die Anwendung oder Daten besonders sensibel sind?",
    options: [
      "Die Daten nur in lokalen Netzwerken speichern",
      "Den gesamten darunterliegenden Dienststapel als Teil jeder Sicherheitsbewertung betrachten",
      "Nur zertifizierte Hardware verwenden",
      "Die Anwendung regelmäßig aktualisieren"
    ],
    correctAnswer: "Den gesamten darunterliegenden Dienststapel als Teil jeder Sicherheitsbewertung betrachten",
    explanation: "Bei sensiblen Daten sollte der gesamte Dienststapel in die Sicherheitsbewertung einbezogen werden, um alle potenziellen Schwachstellen zu identifizieren. Lokale Speicherung, regelmäßige Updates und zertifizierte Hardware sind nachrangig."
  },
  {
    question: "Was passiert, wenn die Operation der Cloud-Dienste an einen Drittanbieter wie einen Managed Service Provider (MSP) ausgelagert wird?",
    options: [
      "Die Datenübertragungsrate wird erhöht",
      "Die Netzwerkarchitektur wird optimiert",
      "Die Service-Levels werden verbessert",
      "Der MSP und seine Lieferketten werden Teil der eigenen Lieferkette"
    ],
    correctAnswer: "Der MSP und seine Lieferketten werden Teil der eigenen Lieferkette",
    explanation: "Wenn ein MSP eingeschaltet wird, müssen auch dessen Sicherheitsmaßnahmen und Lieferketten überwacht werden, um die Gesamtsicherheit zu gewährleisten. Service-Levels, Netzwerkarchitektur und Datenübertragungsrate sind weniger relevant."
  },
  {
    question: "Warum sollten Entscheidungsträger die Überlegungen im Modell der gemeinsamen Verantwortung in der Cloud berücksichtigen?",
    options: [
      "Um die Benutzerfreundlichkeit zu verbessern",
      "Um die Skalierbarkeit des Dienstes zu erhöhen",
      "Um die Kosten der Datenspeicherung zu senken",
      "Um sicherzustellen, dass die Lieferketten der Dienstleister den Sicherheitsanforderungen entsprechen"
    ],
    correctAnswer: "Um sicherzustellen, dass die Lieferketten der Dienstleister den Sicherheitsanforderungen entsprechen",
    explanation: "Das Modell der gemeinsamen Verantwortung hilft, sicherzustellen, dass alle Parteien ihre Sicherheitsverpflichtungen einhalten. Skalierbarkeit, Kosten und Benutzerfreundlichkeit sind weniger relevant."
  }
];

export default questions8;
