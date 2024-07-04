const questions = [
  {
    question: "Warum ist es gemäß Prinzip 6 wichtig, die Aktionen des Personals eines Dienstanbieters zu überwachen und einzuschränken?",
    options: [
      "Um das Marketing des Dienstes zu verbessern",
      "Um die Produktivität des Personals zu steigern",
      "Um das Risiko von Datenlecks oder anderen sicherheitsrelevanten Vorfällen zu minimieren",
      "Um die Betriebskosten zu senken"
    ],
    correctAnswer: "Um das Risiko von Datenlecks oder anderen sicherheitsrelevanten Vorfällen zu minimieren",
    explanation: "Gemäß Prinzip 6 ist es wichtig, die Aktionen des Personals eines Dienstanbieters zu überwachen und einzuschränken, um das Risiko von Datenlecks oder anderen sicherheitsrelevanten Vorfällen zu minimieren. Die anderen Optionen betreffen verschiedene andere Unternehmensziele."
  },
  {
    question: "Was ist ein Ziel von Prinzip 6 im Zusammenhang mit dem Zugriff auf Daten?",
    options: [
      "Verzicht auf jegliche Zugriffsbeschränkungen",
      "Erhöhung der Betriebskosten",
      "Maximierung des Zugriffs für alle Mitarbeiter",
      "Minimierung des Zugriffs auf das notwendige Minimum"
    ],
    correctAnswer: "Minimierung des Zugriffs auf das notwendige Minimum",
    explanation: "Ein Ziel von Prinzip 6 ist die Minimierung des Zugriffs auf Daten auf das notwendige Minimum, um das Risiko von Datenlecks oder anderen sicherheitsrelevanten Vorfällen zu minimieren. Die anderen Optionen würden die Sicherheit des Dienstes beeinträchtigen."
  },
  {
    question: "Wie sollte ein Dienstanbieter gemäß Prinzip 6 eine positive Sicherheitskultur pflegen?",
    options: [
      "Durch die Erhöhung der Arbeitsstunden",
      "Durch regelmäßige Sicherheitsschulungen und angemessene Sicherheitsüberprüfungen",
      "Durch die Kürzung des Schulungsbudgets",
      "Durch die Reduzierung der Mitarbeiterzahl"
    ],
    correctAnswer: "Durch regelmäßige Sicherheitsschulungen und angemessene Sicherheitsüberprüfungen",
    explanation: "Gemäß Prinzip 6 sollte ein Dienstanbieter eine positive Sicherheitskultur pflegen, die durch regelmäßige Sicherheitsschulungen und angemessene Sicherheitsüberprüfungen unterstützt wird. Die anderen Optionen tragen nicht zur Förderung einer positiven Sicherheitskultur bei."
  },
  {
    question: "Welche technischen Kontrollen sollten gemäß Prinzip 6 implementiert werden?",
    options: [
      "Reduzierung der Sicherheitskontrollen",
      "Freier Zugriff auf alle Daten für alle Mitarbeiter",
      "Protokollierung und Überwachung aller Zugriffe, sowie rollenbasierte Zugriffskontrollen (RBAC)",
      "Verschlüsselung aller Daten ohne Protokollierung"
    ],
    correctAnswer: "Protokollierung und Überwachung aller Zugriffe, sowie rollenbasierte Zugriffskontrollen (RBAC)",
    explanation: "Gemäß Prinzip 6 sollten technische Kontrollen wie die Protokollierung und Überwachung aller Zugriffe sowie rollenbasierte Zugriffskontrollen (RBAC) implementiert werden, um sicherzustellen, dass Mitarbeiter nur Zugriff auf für ihre Rolle relevante Ressourcen haben. Freier Zugriff, Verschlüsselung ohne Protokollierung und Reduzierung der Sicherheitskontrollen würden die Sicherheit beeinträchtigen."
  },
  {
    question: "Welche Maßnahmen sollten Entscheidungsträger gemäß Prinzip 6 vom Dienstanbieter fordern?",
    options: [
      "Erhöhung der Marketingausgaben",
      "Verzicht auf Sicherheitsüberprüfungen",
      "Angemessene Hintergrundüberprüfungen für das Personal und kontinuierliche Schulungen",
      "Erhöhung der Gehälter für alle Mitarbeiter"
    ],
    correctAnswer: "Angemessene Hintergrundüberprüfungen für das Personal und kontinuierliche Schulungen",
    explanation: "Entscheidungsträger sollten gemäß Prinzip 6 vom Dienstanbieter angemessene Hintergrundüberprüfungen für das Personal und kontinuierliche Schulungen fordern, um sicherzustellen, dass die Mitarbeiter die Sicherheitsprotokolle verstehen und einhalten. Die anderen Optionen sind nicht relevant für die Personalsicherheit."
  },
  {
    question: "Wie sollten zusätzliche administrative Fähigkeiten gemäß Prinzip 6 verwaltet werden?",
    options: [
      "Nur nach Abschluss von Kundenanfragen",
      "Nur zeitlich begrenzt und streng an spezifische Aufgaben oder Kundenanfragen gebunden",
      "Ohne jegliche Einschränkungen",
      "Dauerhaft für alle Administratoren"
    ],
    correctAnswer: "Nur zeitlich begrenzt und streng an spezifische Aufgaben oder Kundenanfragen gebunden",
    explanation: "Gemäß Prinzip 6 sollten zusätzliche administrative Fähigkeiten nur zeitlich begrenzt und streng an spezifische Aufgaben oder Kundenanfragen gebunden sein, um die Sicherheit zu gewährleisten. Dauerhafte oder uneingeschränkte administrative Fähigkeiten würden die Sicherheitsrisiken erhöhen."
  },
  {
    question: "Warum sind regelmäßige Sicherheitsschulungen für Mitarbeiter wichtig gemäß Prinzip 6?",
    options: [
      "Um die Arbeitszeiten der Mitarbeiter zu reduzieren",
      "Um die Gehälter der Mitarbeiter zu erhöhen",
      "Um sicherzustellen, dass die Mitarbeiter die Sicherheitsprotokolle verstehen und einhalten",
      "Um die Anzahl der Mitarbeiter zu verringern"
    ],
    correctAnswer: "Um sicherzustellen, dass die Mitarbeiter die Sicherheitsprotokolle verstehen und einhalten",
    explanation: "Regelmäßige Sicherheitsschulungen sind wichtig, um sicherzustellen, dass die Mitarbeiter die Sicherheitsprotokolle verstehen und einhalten. Die anderen Optionen betreffen nicht die Schulungsanforderungen und Sicherheitsprotokolle."
  },
  {
    question: "Welche Rolle spielen Hintergrundüberprüfungen für das Personal gemäß Prinzip 6?",
    options: [
      "Sie sind notwendig, um sicherzustellen, dass nur vertrauenswürdige Mitarbeiter Zugang zu sensiblen Daten haben",
      "Sie dienen der Erhöhung der Mitarbeiterzahl",
      "Sie sind wichtig, um die Betriebskosten zu senken",
      "Sie sind unwichtig und können vernachlässigt werden"
    ],
    correctAnswer: "Sie sind notwendig, um sicherzustellen, dass nur vertrauenswürdige Mitarbeiter Zugang zu sensiblen Daten haben",
    explanation: "Hintergrundüberprüfungen für das Personal sind notwendig, um sicherzustellen, dass nur vertrauenswürdige Mitarbeiter Zugang zu sensiblen Daten haben. Die anderen Optionen betreffen nicht die Sicherheitsanforderungen und die Vertrauenswürdigkeit der Mitarbeiter."
  },
  {
    question: "Welche Maßnahmen sollten Administratoren und privilegierte Nutzer gemäß Prinzip 6 befolgen?",
    options: [
      "Nur minimale Schulungen erhalten",
      "Ohne jegliche Sicherheitskontrollen arbeiten",
      "Freien Zugriff auf alle Systeme und Daten haben",
      "Zusätzliche administrative Fähigkeiten nur zeitlich begrenzt erhalten"
    ],
    correctAnswer: "Zusätzliche administrative Fähigkeiten nur zeitlich begrenzt erhalten",
    explanation: "Administrator und privilegierte Nutzer sollten gemäß Prinzip 6 zusätzliche administrative Fähigkeiten nur zeitlich begrenzt erhalten, die streng an spezifische Aufgaben oder Kundenanfragen gebunden sind. Freier Zugriff und minimale Schulungen oder fehlende Sicherheitskontrollen würden die Sicherheitsrisiken erhöhen."
  }
];

export default questions;
