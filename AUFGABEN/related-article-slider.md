# Related Articles - It's Slider Time!

### Fachliche Anforderung:

Unsere Anwendung soll einen Slider bekommen, der "related articles" für einen Artikel
(auf der Artikel-Detail-Seite) darstellt
- Der Slider zeigt jeweils immer *einen* "Related Artikel" 
- Außerdem gibt es einen "Vor"- und "Zurück"-Button
  - Wenn man auf dem letzten "Related Artikel angekommen ist, und "Vor" drückt, soll wieder der erste "Related Artikel" angezeigt werden
  - Wenn man auf dem ersten "Related Artikel" steht und "Zurück" drückt, soll der letzte
   "Related Artikel" angezeigt werden

### Technische Umsetzung

- In der `page.tsx`-Datei für die Einzelartikel-Darstellung kannst du die `relatedArticles` zum aktuellen Artikel mit `fetchRelatedArticles` laden
- Ein Related Article wird durch den TypeScript-Typen `RelatedArticle` beschrieben, der in der `types.ts` bereits vorhanden ist.
- Baue zwei Komponenten:
  - eine `RelatedArticleCard`-Komponente, die einen einzelnen "Related Artikel" darstellt (z.B. dessen Titel und Bild). Ohne Buttons etc.
  - die Client-Komponente `RelatedArticleSlider` die eine Liste von `RelatedArticle`-Objekten übergeben bekommt und die `RelatedArticleCard` verwendet, um den jeweils ausgewählten "Related Artikel" darzustellen
  - Die `RelatedArticleSlider`-Komponente braucht einen State mit dem aktuellen "Related Article" und zwei Buttons ("Vor" und "Zurück").
  - Zum Verhalten der Buttons siehe "Fachliche Anforderung" :-)

### Ausbau-Stufe

- Die `RelatedArticleCard`-Komponente ist (implizit) eine Client-Komponente, weil sie innerhalb der Client-Komponente `RelatedArticleSlider`-Komponente gerendert wird
- Kannst du dafür sorgen, dass sie als Server Component gerendert wird? 🙀
  - Tipp: du musst dafür die Properties von `RelatedArticleSlider` anpassen... 

# Material

- "use client": https://react.dev/reference/rsc/use-client
