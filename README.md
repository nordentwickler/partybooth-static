# PartyBooth (statisch)

Statische Version von party-booth.de. Kein PHP, kein CMS, kein Build auf dem Server.
Der Webroot ist `public/`. Alles darin ist eingecheckt, auch das gebaute CSS und JavaScript.

## Änderungen

- **Inhalte:** direkt in `public/*.html` bearbeiten. Header und Footer stehen in jeder Datei.
- **CSS und JavaScript:** Quellen liegen in `src/`. PurgeCSS liest die Klassen aus `public/**/*.html`.

```
nvm use              # Node 16 aus der .nvmrc, der Build läuft nicht mit neueren Versionen
npm install          # einmalig
npm run build        # baut public/assets/css und public/assets/js
npm run preview      # Vorschau auf http://127.0.0.1:8765
```

Der Build schreibt die neuen `?v=...` Werte für CSS und JavaScript selbst in alle HTML-Dateien.
Danach committen und pushen.

## Unterschiede zur Craft-Seite

- Die Seite war lokal und live bis auf CSRF-Token und Dev-Modus identisch, daran wurde nichts geändert.
- `404.html` ist die 404-Seite von live mit ihrem Platzhaltertext "We have a 404 here.".
- Live hat keine `robots.txt` und nur eine leere Sitemap, beides gibt es hier nicht.
- Das Kontaktformular war schon vor dem Umbau entfernt. Sein JavaScript (`form.js`, `bootstrap.js`, axios) ist weg.
- `src/styles/app.scss` endet mit einem `revert` Block für `<ol>` und `<strong>`. Der alte Build hatte deren
  Reset entfernt, die Seite zeigt sie deshalb mit Browser-Standard. Der Block erhält dieses Aussehen.
- `webpack.mix.js` hält `button` auf der PurgeCSS-Whitelist, weil der Slider seine Buttons erst im Browser erzeugt.

## Forge

- Site-Typ Static HTML, Web Directory `/public`, Deploy Script nur `git pull origin $FORGE_SITE_BRANCH`.
- In der nginx-Config der Site den von Forge erzeugten `location / { ... }` Block durch diese Zeilen ersetzen:

```nginx
rewrite ^/(.+)/$ /$1 permanent;

location = / {
    try_files /index.html =404;
}

location / {
    try_files $uri $uri.html =404;
}

error_page 404 /404.html;
```

- `rewrite` leitet alte Links mit Slash am Ende weiter (`/impressum/` auf `/impressum`).
- Die beiden `location` Blöcke liefern `/impressum` aus `impressum.html`.
- `error_page` zeigt bei unbekannten Pfaden die `404.html`.
- Kein `$uri/` in `try_files`, sonst entsteht mit der `rewrite` Zeile eine Schleife bei Ordner-URLs wie `/assets`.

Danach prüfen: Startseite, `/impressum`, `/impressum/`, `/assets`, und ein unbekannter Pfad.
