const questions = [
  {
    question: "Was betont das zehnte Prinzip der NCSC-Richtlinien?",
    options: [
      'Die Notwendigkeit der Datenverschlüsselung',
      'Die Notwendigkeit der Sicherung physischer Geräte',
      'Die Notwendigkeit der regelmäßigen Software-Updates',
      'Die Notwendigkeit der Zugangsbeschränkung auf authentifizierte und autorisierte Personen'
    ],
    correctAnswer: 'Die Notwendigkeit der Zugangsbeschränkung auf authentifizierte und autorisierte Personen',
    explanation: "Das zehnte Prinzip der NCSC-Richtlinien betont die Notwendigkeit, den Zugang zu Dienstschnittstellen auf authentifizierte und autorisierte Personen zu beschränken. Die anderen Optionen sind zwar wichtig, aber nicht das Hauptthema dieses Prinzips."
  },
  {
    question: "Was sollte ein Cloud-Anbieter gemäß Prinzip 10 für Benutzerzugriffe verlangen?",
    options: [
      'Keine Authentifizierung',
      'Zwei-Faktor-Authentifizierung',
      'Multi-Faktor-Authentifizierung (MFA)',
      'Nur ein starkes Passwort'
    ],
    correctAnswer: 'Multi-Faktor-Authentifizierung (MFA)',
    explanation: "Der Cloud-Anbieter sollte eine Multi-Faktor-Authentifizierung (MFA) für Benutzerzugriffe verlangen, um die Sicherheit zu erhöhen. Ein starkes Passwort allein reicht nicht aus, und die anderen Optionen sind entweder unzureichend oder unsicher."
  },
  {
    question: "Welche Methoden sollten für die Authentifizierung von Dienstidentitäten verwendet werden?",
    options: [
      'Einfaches Passwort',
      'E-Mail-Verifizierung',
      'Kryptografische Methoden wie Signaturen oder sichere Schlüsselaustausche',
      'Biometrische Daten'
    ],
    correctAnswer: 'Kryptografische Methoden wie Signaturen oder sichere Schlüsselaustausche',
    explanation: "Für Dienstidentitäten sollten kryptografische Methoden wie Signaturen oder sichere Schlüsselaustausche genutzt werden, da sie eine höhere Sicherheit bieten. Die anderen Methoden sind entweder nicht geeignet oder nicht sicher genug für Dienstidentitäten."
  },
  {
    question: "Was sollte passieren, wenn Dienstidentitäten von außerhalb der Cloud-Umgebung verwendet werden?",
    options: [
      'Sie sollten weiter verwendet werden dürfen',
      'Sie sollten mit einem einfachen Passwort gesichert werden',
      'Sie sollten abgelehnt werden',
      'Sie sollten auf manuelle Überprüfung warten'
    ],
    correctAnswer: 'Sie sollten abgelehnt werden',
    explanation: "Dienstidentitäten sollten als kompromittiert gelten und abgelehnt werden, wenn sie von außerhalb der Cloud-Umgebung verwendet werden. Dies erhöht die Sicherheit und verhindert unautorisierte Zugriffe."
  },
  {
    question: "Welche Maßnahmen sollte ein Cloud-Anbieter gegen Authentifizierungsangriffe ergreifen?",
    options: [
      'Nur regelmäßige Passwörter ändern',
      'Keine speziellen Maßnahmen erforderlich',
      'Benutzeranmeldedaten einmal jährlich überprüfen',
      'Sicherheitswarnungen bei entdeckten kompromittierten Daten bereitstellen'
    ],
    correctAnswer: 'Sicherheitswarnungen bei entdeckten kompromittierten Daten bereitstellen',
    explanation: "Der Cloud-Anbieter sollte Maßnahmen gegen Authentifizierungsangriffe ergreifen und Sicherheitswarnungen bei entdeckten kompromittierten Daten bereitstellen. Die anderen Maßnahmen sind entweder unzureichend oder nicht spezifisch genug."
  },
  {
    question: "Warum wird die Implementierung von Single Sign-On (SSO) empfohlen?",
    options: [
      'Um die Anzahl der Passwörter zu erhöhen',
      'Um weniger sichere Authentifizierungsmethoden zu verwenden',
      'Um Identitäten zu einem Unternehmensverzeichnis zu verknüpfen',
      'Um Passwörter vollständig abzuschaffen'
    ],
    correctAnswer: 'Um Identitäten zu einem Unternehmensverzeichnis zu verknüpfen',
    explanation: "Die Implementierung von Single Sign-On (SSO) wird empfohlen, um Identitäten zu einem Unternehmensverzeichnis zu verknüpfen und ein robustes Authentifizierungsmanagement zu ermöglichen. Es hilft nicht, die Anzahl der Passwörter zu erhöhen oder Passwörter abzuschaffen, sondern verbessert die Sicherheit und Benutzerfreundlichkeit."
  },
  {
    question: "Was sollte ein gut überwachtes Notfall-Administratorkonto sicherstellen?",
    options: [
      'Das Deaktivieren der MFA',
      'Den Zugang zu Cloud-Diensten im Bedarfsfall wiederherzustellen',
      'Das Entfernen aller Benutzerkonten',
      'Das Erstellen von neuen Benutzeridentitäten'
    ],
    correctAnswer: 'Den Zugang zu Cloud-Diensten im Bedarfsfall wiederherzustellen',
    explanation: "Ein gut überwachtes Notfall-Administratorkonto sollte vorhanden sein, um den Zugang zu Cloud-Diensten im Bedarfsfall wiederherzustellen. Die anderen Optionen sind entweder nicht relevant oder kontraproduktiv."
  },
  {
    question: "Welche Protokolle sollten verwendet werden, um Nachahmerdienste und Man-in-the-Middle-Angriffe zu verhindern?",
    options: [
      'SMTP',
      'HTTP',
      'FTP',
      'Standard-Sicherheitsprotokolle wie TLS'
    ],
    correctAnswer: 'Standard-Sicherheitsprotokolle wie TLS',
    explanation: "Standard-Sicherheitsprotokolle wie TLS sollten verwendet werden, um Nachahmerdienste und Man-in-the-Middle-Angriffe zu verhindern. Die anderen Protokolle bieten nicht den gleichen Sicherheitsstandard."
  }
];

export default questions;
