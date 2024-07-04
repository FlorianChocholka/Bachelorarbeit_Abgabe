const questions = [
  {
    question: "Was fordert das neunte Prinzip der NCSC-Richtlinien von Dienstanbietern?",
    options: [
      "Höhere Verfügbarkeit der Dienste zu garantieren",
      "Werkzeuge zur Verfügung zu stellen, die es Nutzern ermöglichen, ihren Zugriff auf den Dienst sicher zu verwalten",
      "Kostenlose Cloud-Services anzubieten",
      "Die Netzwerkkapazität zu erweitern"
    ],
    correctAnswer: "Werkzeuge zur Verfügung zu stellen, die es Nutzern ermöglichen, ihren Zugriff auf den Dienst sicher zu verwalten",
    explanation: "Das neunte Prinzip fordert Dienstanbieter auf, Werkzeuge bereitzustellen, mit denen Nutzer ihren Zugriff auf den Dienst sicher verwalten können, um unbefugten Zugriff und Änderungen zu verhindern. Kostenlose Cloud-Services, höhere Verfügbarkeit und erweiterte Netzwerkkapazität sind wichtig, aber sie betreffen nicht direkt das Management von Benutzerzugriffen."
  },
  {
    question: "Was soll durch das sichere Benutzermanagement verhindert werden?",
    options: [
      "Erhöhte Wartungskosten",
      "Unbefugter Zugriff und unerlaubte Änderungen an Ressourcen, Anwendungen und Daten",
      "Verzögerungen bei der Datenverarbeitung",
      "Reduzierte Netzwerkkapazität"
    ],
    correctAnswer: "Unbefugter Zugriff und unerlaubte Änderungen an Ressourcen, Anwendungen und Daten",
    explanation: "Sicheres Benutzermanagement soll verhindern, dass unbefugte Personen Zugriff auf Ressourcen haben oder Änderungen an Anwendungen und Daten vornehmen können. Erhöhte Wartungskosten, Verzögerungen bei der Datenverarbeitung und reduzierte Netzwerkkapazität sind keine direkten Ziele des sicheren Benutzermanagements."
  },
  {
    question: "Was müssen Entscheidungsträger sicherstellen, um ein sicheres Benutzermanagement zu gewährleisten?",
    options: [
      "Erhöhte Benutzerfreundlichkeit",
      "Vereinfachte Netzwerkkonfiguration",
      "Optimierung der Datenbankleistung",
      "Ein klar definiertes Benutzerkontenmodell und vollständiges Verständnis der Mechanismen zur Zugriffsautorisierung"
    ],
    correctAnswer: "Ein klar definiertes Benutzerkontenmodell und vollständiges Verständnis der Mechanismen zur Zugriffsautorisierung",
    explanation: "Entscheidungsträger müssen ein klares Benutzerkontenmodell und ein vollständiges Verständnis der Authentifizierungsmechanismen sicherstellen, um ein sicheres Benutzermanagement zu gewährleisten. Erhöhte Benutzerfreundlichkeit, vereinfachte Netzwerkkonfiguration und Optimierung der Datenbankleistung sind zwar wichtig, betreffen aber nicht direkt die Zugriffskontrolle."
  },
  {
    question: "Welche Art der Zugriffskontrolle wird empfohlen?",
    options: [
      "Freier Zugriff für alle Benutzer",
      "Zeitlich unbegrenzte Zugriffskontrollen",
      "Rollenbasierte Zugriffskontrollen (RBAC)",
      "Zugriffskontrollen basierend auf IP-Adressen"
    ],
    correctAnswer: "Rollenbasierte Zugriffskontrollen (RBAC)",
    explanation: "RBAC wird empfohlen, weil es sicherstellt, dass Benutzer nur auf die Ressourcen zugreifen können, die für ihre jeweilige Rolle relevant sind. Freier Zugriff für alle Benutzer und zeitlich unbegrenzte Zugriffskontrollen sind unsicher, während IP-basierte Zugriffskontrollen weniger flexibel und oft weniger sicher sind."
  },
  {
    question: "Welche Werkzeuge sollte der Anbieter bereitstellen?",
    options: [
      "Werkzeuge zur Verbesserung der Serverleistung",
      "Werkzeuge, die helfen, die Identitäten der Nutzer zu verwalten und nur notwendige Berechtigungen zu gewähren",
      "Werkzeuge zur Erhöhung der Netzwerkgeschwindigkeit",
      "Werkzeuge zur Datenkompression"
    ],
    correctAnswer: "Werkzeuge, die helfen, die Identitäten der Nutzer zu verwalten und nur notwendige Berechtigungen zu gewähren",
    explanation: "Der Anbieter sollte Werkzeuge bereitstellen, die es ermöglichen, Nutzeridentitäten zu verwalten und nur die notwendigen Berechtigungen zu gewähren, um die Sicherheit zu gewährleisten. Die Erhöhung der Netzwerkgeschwindigkeit, Verbesserung der Serverleistung und Datenkompression sind nicht direkt auf die Verwaltung von Nutzeridentitäten und Berechtigungen bezogen."
  },
  {
    question: "Warum sind zeitlich begrenzte Berechtigungen besonders wichtig?",
    options: [
      "Um die Netzwerkbandbreite zu erhöhen",
      "Um das Risiko zu minimieren, dass hochprivilegierte Berechtigungen nach einem Vorfall weiterhin genutzt werden",
      "Um die Serverwartung zu erleichtern",
      "Um die Datenspeicherung zu optimieren"
    ],
    correctAnswer: "Um das Risiko zu minimieren, dass hochprivilegierte Berechtigungen nach einem Vorfall weiterhin genutzt werden",
    explanation: "Zeitlich begrenzte Berechtigungen sind wichtig, um sicherzustellen, dass hochprivilegierte Zugriffsrechte nach einem Vorfall nicht weiterhin missbraucht werden können. Die Erhöhung der Netzwerkbandbreite, Optimierung der Datenspeicherung und Erleichterung der Serverwartung sind keine direkten Sicherheitsmaßnahmen."
  },
  {
    question: "Was sollten Entscheidungsträger über die Servicekonfiguration sicherstellen?",
    options: [
      "Dass die Datenkompression aktiviert ist",
      "Dass andere Kunden keinen Zugriff darauf haben",
      "Dass die Netzwerklatenz minimiert wird",
      "Dass die Marketingstrategien verbessert werden"
    ],
    correctAnswer: "Dass andere Kunden keinen Zugriff darauf haben",
    explanation: "Entscheidungsträger sollten sicherstellen, dass die Servicekonfiguration so gestaltet ist, dass andere Kunden keinen unbefugten Zugriff darauf haben. Marketingstrategien, Datenkompression und Netzwerklatenz betreffen nicht die Sicherheitsaspekte der Servicekonfiguration."
  },
  {
    question: "Warum ist ein einheitliches Zugriffskontrollsystem vorzuziehen?",
    options: [
      "Weil es die Verwaltung vereinfacht und Missverständnisse vermeidet",
      "Weil es die Netzwerkauslastung erhöht",
      "Weil es die Datenverarbeitung beschleunigt",
      "Weil es die Serverkosten senkt"
    ],
    correctAnswer: "Weil es die Verwaltung vereinfacht und Missverständnisse vermeidet",
    explanation: "Ein einheitliches Zugriffskontrollsystem ist vorzuziehen, weil es die Verwaltung vereinfacht und die Gefahr von Missverständnissen und Fehlern reduziert. Die Beschleunigung der Datenverarbeitung, Senkung der Serverkosten und Erhöhung der Netzwerkauslastung sind keine direkten Vorteile eines einheitlichen Zugriffskontrollsystems."
  }
];

export default questions;
