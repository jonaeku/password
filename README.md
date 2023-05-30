# Password Encryption App

Die Password Encryption App ist eine webbasierte Anwendung, mit der Benutzer Passwörter verschlüsseln, speichern und wiederherstellen können. Die App verwendet die AES-Verschlüsselungstechnik, um die Passwörter zu schützen.

## Funktionen

- Eingabe eines Passworts
- Verschlüsselung des Passworts
- Speichern des verschlüsselten Passworts in einer Datenbank
- Generierung eines eindeutigen Links zum Anzeigen des Passworts
- Countdown-Timer, der das Passwort nach Ablauf der Zeit aus der Datenbank löscht

## Technologien

Die App basiert auf dem React-Framework und verwendet die Bibliothek "crypto-js" für die AES-Verschlüsselung. Die Datenbankanbindung erfolgt über HTTP-Anfragen mit Axios.

## Installation

1. Stellen Sie sicher, dass Node.js auf Ihrem System installiert ist.
2. Klone das GitHub-Repository der App: `git clone https://github.com/jonaeku/password.git`
3. Navigiere in das Projektverzeichnis: `cd password`
4. Installiere die Abhängigkeiten: `npm install`

## Server starten

1. Stelle sicher, dass du im Hauptverzeichnis der App bist.
2. Starte den Server: `npx json-server --watch db.json --port 3001`

## Verwendung

1. Starte die App: `npm start` (im Hauptverzeichnis der App)
2. Öffne deinen Webbrowser und gehe zur Adresse `http://localhost:3000`
3. Du wirst zur Startseite der App weitergeleitet, wo du ein Passwort eingeben kannst.
4. Klicke auf "Encrypt and save password", um das Passwort zu verschlüsseln und in der Datenbank zu speichern.
5. Du erhältst einen eindeutigen Link, den du kopieren und an andere Benutzer weitergeben kannst.
6. Der Empfänger kann den Link aufrufen und das Passwort anzeigen.
7. Das Passwort wird für eine festgelegte Zeit angezeigt, die durch den Countdown-Timer angezeigt wird.
8. Nach Ablauf der Zeit wird das Passwort automatisch aus der Datenbank gelöscht.

## Hinweis

- Bitte beachte, dass das Passwort nach Ablauf der Zeit nicht wiederhergestellt werden kann.
- Sorge dafür, dass du den Link oder das Passwort an einem sicheren Ort speicherst.

---
