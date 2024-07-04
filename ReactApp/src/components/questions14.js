const questions = [
  {
    question: "Was ist das Hauptziel des vierzehnten Prinzips der NCSC-Richtlinien?",
    options: [
      'Cloud-Anbieter sollen die Verantwortung für alle Sicherheitsmaßnahmen übernehmen',
      'Cloud-Anbieter sollen Nutzern helfen, ihre Daten angemessen zu schützen',
      'Cloud-Anbieter sollen nur die Daten verschlüsseln',
      'Cloud-Anbieter sollen die Kosten für Sicherheitsmaßnahmen senken'
    ],
    correctAnswer: 'Cloud-Anbieter sollen Nutzern helfen, ihre Daten angemessen zu schützen',
    explanation: "Das Hauptziel des vierzehnten Prinzips ist es, dass Cloud-Anbieter den Nutzern helfen, ihre Daten durch sicher gestaltete und standardmäßig sichere Dienste zu schützen. Die anderen Optionen sind entweder nicht umfassend genug oder nicht korrekt."
  },
  {
    question: "Wie sollten Cloud-Anbieter ihre Dienste standardmäßig konfigurieren?",
    options: [
      'Ohne Sicherheitsmaßnahmen',
      'Standardmäßig sicher, um gegen gängige Angriffe geschützt zu sein',
      'Mit minimalen Sicherheitsvorkehrungen',
      'Nur mit grundlegenden Sicherheitsmaßnahmen'
    ],
    correctAnswer: 'Standardmäßig sicher, um gegen gängige Angriffe geschützt zu sein',
    explanation: "Cloud-Anbieter sollten ihre Dienste standardmäßig sicher konfigurieren, um gegen gängige Angriffe geschützt zu sein. Die anderen Optionen bieten nicht den notwendigen Schutz."
  },
  {
    question: "Was sollten Nutzer regelmäßig tun, um ihre Sicherheitsverantwortlichkeiten zu erfüllen?",
    options: [
      'Sich ausschließlich auf den Cloud-Anbieter verlassen',
      'Ihre Dienstkonfigurationen regelmäßig überprüfen und anpassen',
      'Nichts tun und die Standardkonfigurationen nutzen',
      'Nur externe Berater konsultieren'
    ],
    correctAnswer: 'Ihre Dienstkonfigurationen regelmäßig überprüfen und anpassen',
    explanation: "Nutzer sollten regelmäßig ihre Dienstkonfigurationen überprüfen und anpassen, um sicherzustellen, dass ihre Sicherheitsanforderungen erfüllt werden. Sich ausschließlich auf den Cloud-Anbieter zu verlassen oder nichts zu tun, ist nicht ausreichend."
  },
  {
    question: "Welche Hilfsmittel sollten Cloud-Anbieter bereitstellen, um Nutzern bei der sicheren Nutzung der Dienste zu helfen?",
    options: [
      'Nur Textdokumentationen',
      'Dashboards und voreingestellte Warnungen',
      'Nur Telefon-Support',
      'Nur E-Mail-Benachrichtigungen'
    ],
    correctAnswer: 'Dashboards und voreingestellte Warnungen',
    explanation: "Cloud-Anbieter sollten Dashboards und voreingestellte Warnungen bereitstellen, um Nutzern bei der sicheren Nutzung der Dienste zu helfen. Diese Tools bieten eine visuelle und direkte Unterstützung, die über einfache Textdokumentationen hinausgeht."
  },
  {
    question: "Was sollten Cloud-Anbieter tun, wenn sie nicht alle Sicherheitsziele direkt erfüllen können?",
    options: [
      'Nichts tun',
      'Auf ein Ökosystem von Drittanbietern verweisen, die zusätzliche Sicherheitsdienste anbieten',
      'Die Nutzer allein lassen',
      'Nur die günstigsten Optionen anbieten'
    ],
    correctAnswer: 'Auf ein Ökosystem von Drittanbietern verweisen, die zusätzliche Sicherheitsdienste anbieten',
    explanation: "Cloud-Anbieter sollten auf ein Ökosystem von Drittanbietern verweisen, die zusätzliche Sicherheitsdienste anbieten, wenn sie nicht alle Sicherheitsziele direkt erfüllen können. Dies stellt sicher, dass Nutzer Zugang zu umfassenden Sicherheitslösungen haben."
  },
  {
    question: "Warum ist es wichtig, dass Nutzer sich ihrer Sicherheitsverantwortlichkeiten bewusst sind?",
    options: [
      'Um Kosten zu sparen',
      'Um sicherzustellen, dass ihre Daten während der gesamten Lebensdauer geschützt sind',
      'Um die Benutzerfreundlichkeit zu erhöhen',
      'Um mehr Nutzer anzuziehen'
    ],
    correctAnswer: 'Um sicherzustellen, dass ihre Daten während der gesamten Lebensdauer geschützt sind',
    explanation: "Nutzer müssen sich ihrer Sicherheitsverantwortlichkeiten bewusst sein, um sicherzustellen, dass ihre Daten während der gesamten Lebensdauer ihrer Workloads und Daten geschützt sind. Kostenersparnis und Benutzerfreundlichkeit sind wichtige Faktoren, aber der Hauptfokus sollte auf Sicherheit liegen."
  },
  {
    question: "Wie sollten Nutzer auf neue Bedrohungen reagieren?",
    options: [
      'Nichts tun',
      'Ihre Servicekonfigurationen regelmäßig überprüfen und neuere Sicherheitsmaßnahmen aktivieren',
      'Auf den Cloud-Anbieter warten',
      'Nur auf externe Berater vertrauen'
    ],
    correctAnswer: 'Ihre Servicekonfigurationen regelmäßig überprüfen und neuere Sicherheitsmaßnahmen aktivieren',
    explanation: "Nutzer sollten ihre Servicekonfigurationen regelmäßig überprüfen und neuere Sicherheitsmaßnahmen aktivieren, um auf neue Bedrohungen reagieren zu können. Passivität oder vollständige Abhängigkeit von externen Quellen ist nicht ausreichend."
  },
  {
    question: "Was ist ein wichtiger Bestandteil des sicheren Dienstdesigns laut Prinzip 14?",
    options: [
      'Keine Sicherheitsvorkehrungen treffen',
      'Einfache Überprüfungen und Auditierungen der Dienstkonfigurationen ermöglichen',
      'Alle Sicherheitsverantwortungen an die Nutzer übertragen',
      'Nur grundlegende Sicherheitsmaßnahmen implementieren'
    ],
    correctAnswer: 'Einfache Überprüfungen und Auditierungen der Dienstkonfigurationen ermöglichen',
    explanation: "Ein wichtiger Bestandteil des sicheren Dienstdesigns ist die Möglichkeit für Nutzer, einfache Überprüfungen und Auditierungen der Dienstkonfigurationen durchzuführen. Die anderen Optionen sind entweder zu unsicher oder zu unpraktisch."
  }
];

export default questions;