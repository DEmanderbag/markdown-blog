---
title: "Sprachunterstützung"
date: "9 April 2022"
excerpt: "Erfahren Sie, welche Sprachen unterstützt werden und wie Sie neue hinzufügen können"
topic: "Entwicklung"
---

Dieses Projekt kommt mit der Unterstützung der Sprachen Englisch (EN) und Deutsch (DE) sofort ein. Aber wenn Sie andere Sprachen kennen, die auch einfach einzurichten sind.

Fügen Sie innerhalb der Datei i18n.json innerhalb des Gebietsschema-Arrays einfach ein Lokales für die Sprache hinzu, die Sie unterstützen möchten.

```
 {
 "locales": ["en", "de", "new locale"],
 "defaultLocale": "en",
 "pages": {
   "*": ["common"]
 }
```

Der nächste Schritt besteht darin, eine Übersetzung für UI-Elemente auf der Website hinzuzufügen. Erstellen Sie dazu einen neuen Ordner mit dem Namen Ihres Gebietsschemas, der zuvor in der Datei i18n.json hinzugefügt wurde.

Sie sind jetzt startklar, Sie unterstützen jetzt eine neue Sprache. Wenn Sie Beiträge im Beitragsordner erstellen, vergessen Sie einfach nicht, eine Datei für Ihre neue unterstützte Sprache hinzuzufügen, die Datei sollte index.[locale].md
