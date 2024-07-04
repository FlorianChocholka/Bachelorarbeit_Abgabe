const questions7 = [
  {
    question: "Was betont das siebte Prinzip der NCSC-Richtlinien?",
    options: [
      "Die Reduktion der Betriebskosten",
      "Die Verbesserung der Benutzerfreundlichkeit",
      "Die Notwendigkeit von Marketingstrategien",
      "Die Wichtigkeit der sicheren Softwareentwicklung"
    ],
    correctAnswer: "Die Wichtigkeit der sicheren Softwareentwicklung",
    explanation: "Das siebte Prinzip der NCSC-Richtlinien betont die Bedeutung der sicheren Softwareentwicklung, um Sicherheitsrisiken zu minimieren. Marketingstrategien, Benutzerfreundlichkeit und Kostensenkung sind nicht die Hauptfokusse dieses Prinzips."
  },
  {
    question: "Warum ist sichere Softwareentwicklung wichtig?",
    options: [
      "Um die Benutzeroberfläche zu verbessern",
      "Um neue Funktionen schneller zu implementieren",
      "Um die Entwicklungskosten zu senken",
      "Um Sicherheitslücken zu vermeiden, die Daten kompromittieren können"
    ],
    correctAnswer: "Um Sicherheitslücken zu vermeiden, die Daten kompromittieren können",
    explanation: "Sichere Softwareentwicklung ist entscheidend, um Sicherheitslücken zu vermeiden, die Daten kompromittieren könnten. Kostensenkung, Benutzeroberfläche und Implementierung neuer Funktionen sind sekundäre Ziele."
  },
  {
    question: "Was sollten Entscheidungsträger vom Dienstanbieter erwarten?",
    options: [
      "Einen Fokus auf kostengünstige Entwicklung",
      "Einen schnellen Entwicklungszyklus ohne Rücksicht auf Sicherheit",
      "Einen Softwareentwicklungszyklus, der den Richtlinien für sichere Softwareentwicklung entspricht",
      "Eine vollständige Offenlegung aller Entwicklungsdetails"
    ],
    correctAnswer: "Einen Softwareentwicklungszyklus, der den Richtlinien für sichere Softwareentwicklung entspricht",
    explanation: "Entscheidungsträger sollten erwarten, dass der Anbieter einen sicheren Softwareentwicklungszyklus einhält. Kostengünstigkeit und Schnelligkeit dürfen nicht auf Kosten der Sicherheit gehen, und vollständige Offenlegung aller Details ist nicht immer praktikabel."
  },
  {
    question: "Welche Maßnahmen sollten vom Anbieter gefördert werden?",
    options: [
      "Sichere Entwicklungsschulungen, Codeüberprüfungen und die Verwendung zuverlässiger Bibliotheken",
      "Nur kostenreduzierende Maßnahmen",
      "Regelmäßige Marketing-Updates",
      "Ausschließlich interne Schulungen ohne Codeüberprüfungen"
    ],
    correctAnswer: "Sichere Entwicklungsschulungen, Codeüberprüfungen und die Verwendung zuverlässiger Bibliotheken",
    explanation: "Der Anbieter sollte sichere Entwicklungsschulungen, Codeüberprüfungen und die Nutzung zuverlässiger Bibliotheken fördern, um die Software sicher zu halten. Marketing, Kostenreduktion und interne Schulungen ohne Überprüfungen sind nicht ausreichend."
  },
  {
    question: "Warum ist eine klare Trennung zwischen Produktions-, Test- und Entwicklungsumgebungen wichtig?",
    options: [
      "Um die Integrität des Cloud-Services zu sichern",
      "Um schneller neue Funktionen zu implementieren",
      "Um die Betriebskosten zu senken",
      "Um die Benutzerfreundlichkeit zu verbessern"
    ],
    correctAnswer: "Um die Integrität des Cloud-Services zu sichern",
    explanation: "Eine klare Trennung dieser Umgebungen verhindert, dass Fehler oder unsichere Änderungen in die Produktionsumgebung gelangen, was die Integrität des Services schützt. Kosten, Benutzerfreundlichkeit und Implementierungsgeschwindigkeit sind weniger relevant."
  },
  {
    question: "Welche Standards können zur Sicherstellung der sicheren Softwareentwicklung genutzt werden?",
    options: [
      "ISO/IEC 9001 und CSA CCM v1.0",
      "Nur interne Entwicklungsrichtlinien",
      "ISO/IEC 27034, ISO/IEC 30111:2019 und CSA CCM v3.0.1",
      "Keine Standards"
    ],
    correctAnswer: "ISO/IEC 27034, ISO/IEC 30111:2019 und CSA CCM v3.0.1",
    explanation: "Standards wie ISO/IEC 27034, ISO/IEC 30111:2019 und CSA CCM v3.0.1 bieten bewährte Praktiken für die sichere Softwareentwicklung. Interne Richtlinien und veraltete Standards sind weniger umfassend."
  },
  {
    question: "Wie sollte die vom Cloud-Anbieter bereitgestellte Software entwickelt und getestet werden?",
    options: [
      "Manuell ohne automatisierte Prozesse",
      "Nur durch externe Dienstleister",
      "Ohne Tests",
      "In einem automatisierten Build-Prozess und mittels Infrastruktur als Code"
    ],
    correctAnswer: "In einem automatisierten Build-Prozess und mittels Infrastruktur als Code",
    explanation: "Automatisierte Build-Prozesse und Infrastruktur als Code gewährleisten konsistente und überprüfbare Entwicklungs- und Testverfahren. Manuelle Prozesse und fehlende Tests sind weniger zuverlässig."
  },
  {
    question: "Warum ist die kontinuierliche Überwachung und Verwaltung von Drittanbietersoftware wichtig?",
    options: [
      "Um die Entwicklungskosten zu senken",
      "Um die Benutzerfreundlichkeit zu verbessern",
      "Um Risiken zu verwalten und Sicherheitspatches anzuwenden",
      "Um neue Funktionen schneller zu implementieren"
    ],
    correctAnswer: "Um Risiken zu verwalten und Sicherheitspatches anzuwenden",
    explanation: "Kontinuierliche Überwachung und Verwaltung sind notwendig, um Sicherheitslücken zu schließen und Risiken zu minimieren. Kosten, Funktionen und Benutzerfreundlichkeit sind nachrangige Aspekte."
  },
  {
    question: "Was sollte der Dienstanbieter zusätzlich zur sicheren Softwareentwicklung tun?",
    options: [
      "Seine Dienste fortlaufend warten und auf neue Bedrohungen reagieren",
      "Die Entwicklungskosten senken",
      "Die Benutzeroberfläche verbessern",
      "Marketingstrategien entwickeln"
    ],
    correctAnswer: "Seine Dienste fortlaufend warten und auf neue Bedrohungen reagieren",
    explanation: "Kontinuierliche Wartung und schnelle Reaktion auf Bedrohungen sind entscheidend für die Sicherheit. Marketing, Benutzeroberfläche und Kostensenkung sind weniger dringlich."
  },
  {
    question: "Wie sollten potenzielle Angriffe während der Entwicklung neuer Funktionen behandelt werden?",
    options: [
      "Sie sollten nur dokumentiert werden",
      "Sie sollten analysiert und effektive Gegenmaßnahmen entwickelt werden",
      "Sie sollten ignoriert werden",
      "Sie sollten an externe Dienstleister weitergegeben werden"
    ],
    correctAnswer: "Sie sollten analysiert und effektive Gegenmaßnahmen entwickelt werden",
    explanation: "Potenzielle Angriffe müssen analysiert und durch Gegenmaßnahmen adressiert werden, um die Sicherheit zu gewährleisten. Ignorieren oder Weitergabe an Dritte ist nicht ausreichend."
  }
];

export default questions7;
