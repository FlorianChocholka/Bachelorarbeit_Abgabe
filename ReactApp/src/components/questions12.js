const questions = [
    {
      question: "Warum ist es wichtig, Cloud-Dienste sicher zu verwalten, laut Prinzip 12 der NCSC-Richtlinien?",
      options: [
        'Weil Verwaltungssysteme unbedeutend sind',
        'Weil Verwaltungssysteme für Angreifer von hohem Wert sind',
        'Weil Verwaltungssysteme einfach zu warten sind',
        'Weil Verwaltungssysteme keine Sicherheitskontrollen benötigen'
      ],
      correctAnswer: 'Weil Verwaltungssysteme für Angreifer von hohem Wert sind',
      explanation: "Verwaltungssysteme bieten privilegierten Zugriff auf die Dienste, und deren Kompromittierung kann schwerwiegende Folgen haben. Die anderen Optionen sind falsch, da sie die Bedeutung der Verwaltungssysteme nicht korrekt wiedergeben."
    },
    {
      question: "Was sollten Entscheidungsträger laut Prinzip 12 sicherstellen?",
      options: [
        'Dass der Cloud-Anbieter eine moderne Passwortpolitik hat',
        'Dass der Cloud-Anbieter robuste Maßnahmen zur Sicherung der Verwaltungssysteme implementiert',
        'Dass der Cloud-Anbieter keine Backups durchführt',
        'Dass der Cloud-Anbieter alle Daten verschlüsselt'
      ],
      correctAnswer: 'Dass der Cloud-Anbieter robuste Maßnahmen zur Sicherung der Verwaltungssysteme implementiert',
      explanation: "Entscheidungsträger sollten darauf vertrauen können, dass der Cloud-Anbieter robuste Maßnahmen zur Sicherung der Verwaltungssysteme implementiert. Die anderen Optionen betreffen zwar Sicherheitsaspekte, sind aber nicht das Hauptziel dieses Prinzips."
    },
    {
      question: "Welche Strategien des Privileged Access Managements werden in Prinzip 12 empfohlen?",
      options: [
        'Always-On Administration',
        'Just-in-Time und Just-Enough Administration',
        'Einmalige Passwortverwendung',
        'Keine speziellen Strategien'
      ],
      correctAnswer: 'Just-in-Time und Just-Enough Administration',
      explanation: "Prinzip 12 empfiehlt Strategien des Privileged Access Managements wie „Just-in-Time“ und „Just-Enough“ Administration, um die Sicherheit zu erhöhen. Die anderen Optionen sind entweder nicht ausreichend oder nicht relevant."
    },
    {
      question: "Warum sind detaillierte Audit-Informationen für Verwaltungsschnittstellen wichtig?",
      options: [
        'Um die Benutzerfreundlichkeit zu erhöhen',
        'Um anomales Verhalten zu erkennen und die Sicherheit zu gewährleisten',
        'Um die Kosten zu senken',
        'Um die Geschwindigkeit der Schnittstellen zu verbessern'
      ],
      correctAnswer: 'Um anomales Verhalten zu erkennen und die Sicherheit zu gewährleisten',
      explanation: "Detaillierte Audit-Informationen helfen dabei, anomales Verhalten zu erkennen und die Sicherheit und Integrität des Cloud-Services zu gewährleisten. Die anderen Optionen sind nicht die Hauptgründe für die Bedeutung von Audit-Informationen."
    },
    {
      question: "Wie sollten privilegierte Zugriffe laut Prinzip 12 erfolgen?",
      options: [
        'Über öffentliche APIs ohne Authentifizierung',
        'Über interne APIs, die detaillierte Audit-Informationen erfassen',
        'Über unsichere Netzwerke',
        'Ohne jegliche Nachvollziehbarkeit'
      ],
      correctAnswer: 'Über interne APIs, die detaillierte Audit-Informationen erfassen',
      explanation: "Privilegierte Zugriffe sollten über interne APIs erfolgen, die detaillierte Audit-Informationen erfassen, um Nachvollziehbarkeit und Überprüfbarkeit zu gewährleisten. Die anderen Optionen sind unsicher und nicht empfehlenswert."
    },
    {
      question: "Was erfordern hochprivilegierte Zugänge laut Prinzip 12?",
      options: [
        'Keine speziellen Maßnahmen',
        'Autorisierung durch mehrere verantwortliche Personen und phishing-resistente Mehrfaktorauthentifizierung',
        'Nur ein starkes Passwort',
        'Nur eine einfache E-Mail-Verifizierung'
      ],
      correctAnswer: 'Autorisierung durch mehrere verantwortliche Personen und phishing-resistente Mehrfaktorauthentifizierung',
      explanation: "Hochprivilegierte Zugänge erfordern strenge Verwaltungsmaßnahmen wie die Autorisierung durch mehrere verantwortliche Personen und den Einsatz von phishing-resistenter Mehrfaktorauthentifizierung, um die Sicherheit zu erhöhen. Die anderen Optionen sind nicht ausreichend sicher."
    },
    {
      question: "Warum sollten besonders kritische APIs auf privilegierte Zugriffsarbeitsplätze beschränkt sein?",
      options: [
        'Um die Benutzerfreundlichkeit zu erhöhen',
        'Um Missbrauch zu erschweren und die Sicherheit zu erhöhen',
        'Um Kosten zu senken',
        'Um die Anzahl der Zugriffe zu erhöhen'
      ],
      correctAnswer: 'Um Missbrauch zu erschweren und die Sicherheit zu erhöhen',
      explanation: "Besonders kritische APIs sollten auf privilegierte Zugriffsarbeitsplätze beschränkt sein, um Missbrauch zu erschweren und die Sicherheit zu erhöhen. Die anderen Optionen sind nicht die Hauptgründe für diese Maßnahme."
    }
  ];
  
export default questions;  