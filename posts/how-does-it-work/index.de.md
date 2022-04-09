---
title: "Wie funktioniert es?"
date: "9 April 2022"
excerpt: "Über den für dieses Projekt verwendeten Tech-Stack"
topic: "Entwicklung"
---

Dieses Projekt kommt mit der Unterstützung der Sprachen Englisch (EN) und Deutsch (DE) sofort ein. Die Daten befinden sich im Ordner Beiträge, der zusätzlich durch ein bestimmtes Thema getrennt ist. Code ist einfach und leicht zu verstehen, mit Blick auf die Anpassung. Sie können Farben, Schriftarten und sogar Sprachen ändern, die mit nur wenigen Codezeilen unterstützt werden.

Dieses Projekt verwendet Next.js mit Internalisierungsunterstützung (i18n) und generiert Daten mit getStaticProps und getStaticPaths.

Um einen neuen Beitrag zu generieren, müssen Sie nur einen neuen Ordner im Beitragsordner erstellen, der den Namen des Artikels enthält. Der Name des Ordners ist das, was als Link angezeigt wird.

Wenn Sie planen, zusätzliche Sprachen hinzuzufügen, die auch sehr einfach sind, fügen Sie diese Sprache einfach in der Datei i18n.json im Gebietsschema-Array hinzu. Innerhalb des Gebietsschemaordners fügen Sie dieses Gebietsschema auch mit einer bestimmten Übersetzung hinzu. Und in anderen, damit die Beiträge diese neue Sprache direkt im spezifischen Beitragsordner unterstützen, fügen Sie einen index.[locale].md

Die Farben befinden sich in der Datei \_variables.scss und sind sowohl für den Dunkel- als auch für den hellen Modus getrennt, der leicht geändert werden kann, damit er sich einzigartig anfühlt.
