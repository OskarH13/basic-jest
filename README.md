# Grundlagen Unit-Testing mit Jest anhand einer Taschenrechneranwendung

## Installation

Um alle Abhängigkeiten zu installieren, kann folgender Befehl ausgeführt werden:

```bash
npm install
```

Dadurch werden alle notwendigen Pakete installiert, die in der `package.json`-Datei aufgelistet sind.

### Jest

[Jest](https://jestjs.io/) ist ein Test-Framework für JavaScript, das eine einfache und effektive Möglichkeit bietet, Tests zu schreiben und auszuführen. Jest ist in der `package.json`-Datei als Abhängigkeit aufgeführt und wird automatisch installiert, wenn der Befehl `npm install` ausgeführt wird.

### jest.config.js

In der Datei `jest.config.js` sind die Konfigurationen für Jest definiert. Hier können verschiedene Einstellungen für Jest festgelegt werden, wie z.B. die Dateiendungen, die Jest verwenden soll, oder die Pfade zu den Testdateien.

Weitere Informationen zu den Jest-Konfigurationen finden Sie in der [Jest-Dokumentation](https://jestjs.io/docs/configuration).

### ts-jest

`ts-jest` ist ein Jest-Transformer, der TypeScript-Dateien in JavaScript-Dateien umwandelt, damit sie von Jest ausgeführt werden können. `ts-jest` ist in der `jest.config.js`-Datei konfiguriert und wird automatisch verwendet, wenn die Tests ausgeführt werden.

Unter der Website [https://kulshekhar.github.io/ts-jest/](https://kulshekhar.github.io/ts-jest/) gibt es weitere Informationen zu `ts-jest`.

## Skripte

In der `package.json`-Datei sind verschiedene Skripte definiert, die im Projekt verwendet werden können. Die Skripte können mit dem Befehl `npm run <script>` ausgeführt werden.

### `start`

Der Befehl `start` startet die Taschenrechneranwendung und ermöglicht es, Rechenaufgaben einzugeben und das Ergebnis auf der Konsole auszugeben. Hierbei wird die Eingabe der Rechenaufgabe mittels Kommandozeilenargumenten unterstützt.

Das sind einige Beispiele, wie der Befehl `start` ausgeführt werden kann:

```bash
npm run start -- "-4*8.5"
npm run start -- "10/2"
npm run start -- "-5+-3.24"

# Fehlerhafte Eingabe
npm run start -- "10/0"
npm run start -- "10+"
npm run start -- "10+5+3"
```

Die `--`-Option wird verwendet, um die Argumente an das Skript zu übergeben. Die Rechenaufgabe wird als ein einzelnes Argument übergeben. Das ist leider ein notwendiges Übel, wenn wir Kommandozeilenargumente in npm-Skripten verwenden wollen. Eine andere Möglichkeit wäre ein direkter Aufruf der JavaScript-Datei mit Node.js.

```bash
node dist/index.js "-4*8.5"
node dist/index.js "10/2"
node dist/index.js "-5+-3.24"
```

### `test`

Der Befehl `test` führt alle Tests im Projekt aus und gibt das Ergebnis auf der Konsole aus.

```bash
npm run test
```

### `test:coverage`

Der Befehl `test:coverage` generiert einen Coverage-Report für das Projekt und zeigt an, wie viel Prozent des Codes von den Tests abgedeckt sind.

```bash
npm run test:coverage
```

### `build`

Der Befehl `build` kompiliert das TypeScript-Projekt und erzeugt die JavaScript-Dateien im `dist`-Ordner. Dieser Schritt wird nicht für die Tests benötigt. Er wird nur benötigt, wenn die Anwendung ausgeführt werden soll.

```bash
npm run build
```

## Aufbau des Projekts

Das Projekt ist in verschiedene Dateien und Ordner unterteilt. Jede Datei hat eine spezifische Aufgabe und ist für einen bestimmten Teil des Projekts verantwortlich.

### `index.ts`

Die `index.ts`-Datei ist die Einstiegsdatei des Projekts.

### `/calculations`

In dem Ordner `/calculations` befinden sich die verschiedenen Operationen, die der Taschenrechner unterstützt. Jede Operation ist in einer eigenen Datei definiert.

### `/utils`

In dem Ordner `/utils` befinden sich verschiedene Hilfsfunktionen, die in verschiedenen Teilen des Projekts verwendet werden.

### `/types`

In dem Ordner `/types` werden verschiedene Typen definiert. Typen sind eine Möglichkeit, um die Struktur von Daten zu definieren und sicherzustellen, dass die richtigen Daten verwendet werden.

### `/__tests__`

In dem Ordner `/__tests__` befinden sich die Tests für das Projekt. Die Tests sind in Jest geschrieben und testen die verschiedenen Teile des Projekts.

## Tests ausführen

Um die Tests auszuführen, kann folgender Befehl ausgeführt werden:

```bash
npm run test
```

Dadurch werden alle Tests im Projekt ausgeführt und das Ergebnis wird auf der Konsole ausgegeben.

Um einen Coverage-Report zu generieren, kann folgender Befehl ausgeführt werden:

```bash
npm run test:coverage
```

Dadurch wird ein Coverage-Report generiert, der anzeigt, wie viel Prozent des Codes von den Tests abgedeckt sind.

## Anleitung

Um die Taschenrechneranwendung zu starten, kann folgender Befehl ausgeführt werden:

```bash
npm start
```

Dadurch wird die Anwendung gestartet und es können Rechenaufgaben eingegeben werden. Die Anwendung gibt das Ergebnis der Berechnung auf der Konsole aus.

## Unit-Tests mit Jest

In diesem Projekt werden Unit-Tests mit Jest durchgeführt. Jest ist ein Test-Framework für JavaScript, das eine einfache und effektive Möglichkeit bietet, Tests zu schreiben und auszuführen.

Die Tests sind entsprechend der zu testenden Quelldatei im Ordner `/__tests__` definiert.

Die Tests überprüfen, ob die Operationen korrekt funktionieren und das richtige Ergebnis zurückgeben. Die Tests sind so geschrieben, dass sie die Funktionalität der Operationen sicherstellen und sicherstellen, dass die Anwendung korrekt arbeitet.

Weiterhin sind die Tests so geschrieben, dass die gesamte Anwendung abgedeckt wird und alle Teile der Anwendung getestet werden.

## Coverage-Report

Ein Coverage-Report ist eine Möglichkeit, um zu überprüfen, wie viel Prozent des Codes von den Tests abgedeckt sind. Der Coverage-Report zeigt an, welche Teile des Codes von den Tests abgedeckt sind und welche Teile noch nicht getestet wurden.

Der Coverage-Report kann genutzt werden, um sicherzustellen, dass alle Teile des Codes getestet wurden und dass die Tests die Funktionalität der Anwendung sicherstellen.

## Lernziele

- Unit-Tests mit Jest schreiben
- Coverage-Report generieren
- Funktionalität einer Anwendung sicherstellen
- Fehlermeldungen testen
- Anwendung vollständig abdecken
