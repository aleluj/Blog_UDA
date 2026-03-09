# 🌐 Digital Pulse — Blog di Tecnologia e Consapevolezza Digitale

Blog statico realizzato in **HTML5 e CSS3**, senza JavaScript. Tutte le interazioni (menu mobile, hover, animazioni) sono gestite in puro CSS.

---

## 📋 Informazioni progetto

| Campo | Dettaglio |
|-------|-----------|
| **Versione** | 2.0 |
| **Data** | Marzo 2026 |
| **Stack** | HTML5, CSS3 |
| **File CSS** | `style.css` (unico, condiviso da tutte le pagine) |
| **Tema** | Dark Mode |
| **Font** | Outfit (titoli) + DM Sans (corpo) — Google Fonts |
| **Icone** | Font Awesome 6.5 (via CDN) |

---

## 🌐 Siti di ispirazione

| Sito | Ispirazione |
|------|-------------|
| **Morpheus Education Blog** | Struttura blog: menu in alto, Home con ultimi articoli (titolo + anteprima + immagine), footer con contatti |
| **DeepCharts** | Grafica moderna blu scuro, titoli verdi, testo bianco, layout squadrato con bordi arrotondati, hover effects |
| **Unger Academy About** | Layout pulito per pagina "Chi siamo", sezioni ben divise, stile professionale educativo |

---

## ✅ Requisiti funzionali

### 1. Menu di navigazione principale

- Menu posizionato nella parte superiore della pagina (header fisso con `position: fixed`) visibile in tutte le pagine.
- Voci del menu: **Home**, **Articoli**, **About Us**, **Contattaci**.
- Ogni voce è cliccabile e porta alla rispettiva pagina.
- La voce della pagina corrente è **illuminata con effetto glow permanente** tramite la classe `.active` inserita nell'HTML della pagina corrispondente.
- Su schermi piccoli (< 768px) il menu si trasforma in un **hamburger menu** gestito in puro CSS tramite il "checkbox hack".

### 2. Footer comune

- Footer **identico** in tutte le pagine.
- Contiene: contatti (email), link ai social con icone Font Awesome, copyright, nome editore e P.IVA.
- Sfondo scuro per contrasto visivo.

### 3. Pagina Home (`index.html`)

- Sezione **hero** con titolo principale e bottone CTA verso la pagina Articoli.
- Mostra gli **ultimi 3 articoli pubblicati** in card con: immagine, tag, data, titolo, anteprima, link all'articolo.
- Sezione anteprima **"Chi Siamo"** con link alla pagina About Us.

### 4. Pagina Articoli (`articoli.html`)

- Elenca **tutti e 6 gli articoli** del blog in una griglia responsiva di card.
- Per ogni articolo: immagine, tag/categoria, data, titolo, breve descrizione, link alla pagina completa.

### 5. Pagina del singolo articolo

- Ogni articolo ha una pagina dedicata con: titolo, metadati (data, autore, categoria con icone FA), testo completo, immagini, blockquote stilizzati.
- Almeno **un articolo** scritto sul tema: *"Consapevolezza dell'utilizzo dei social media"* (collegamento con il professore di italiano).
- Pulsante "Torna agli Articoli" per la navigazione.
- Articoli disponibili:
  - `articolo-social.html` — Consapevolezza Social Media **(articolo principale)**
  - `articolo-ai.html` — L'Intelligenza Artificiale nel 2026
  - `articolo-cyber.html` — Cybersecurity: Proteggere la Tua Vita Digitale

### 6. Pagina About Us (`about.html`)

- Presenta chi ha creato il blog: storia, scopo, motivazioni.
- Layout a griglia: testo + placeholder immagine.
- Sezione **"I Nostri Valori"** con 3 card: Consapevolezza, Accessibilità, Responsabilità.
- Sezione **"Perché fidarti di noi?"** con spiegazione e CTA verso Contatti.

### 7. Pagina Contattaci (`contatti.html`)

- Layout a 2 colonne: form di contatto a sinistra, info box a destra.
- Form con campi: nome, email, oggetto, messaggio e bottone "Invia Messaggio".
- Info box con: email, sede, tempi di risposta (icone Font Awesome).
- Link ai social media con icone interattive (Instagram, X/Twitter, YouTube, GitHub).

### 8. Sezione commenti

- Sotto ogni articolo sono presenti **commenti** pre-scritti come esempio di interazione lettore–autore.

### 9. Struttura tecnica

```
blog/
├── index.html              ← Home
├── articoli.html           ← Lista articoli
├── articolo-social.html    ← Articolo: Social Media (principale)
├── articolo-ai.html        ← Articolo: Intelligenza Artificiale
├── articolo-cyber.html     ← Articolo: Cybersecurity
├── about.html              ← About Us
├── contatti.html           ← Contattaci
└── style.css               ← CSS unico condiviso
```

**Nota:** tutte le pagine sono collegate tra loro tramite il menu di navigazione nell'header e i link nel footer.

---

## 🎨 Requisiti grafici

### 1. Palette colori

| Proprietà | Colore | Uso |
|-----------|--------|-----|
| Sfondo primario | `#0a0e1a` (navy profondo) | Body, sezioni principali |
| Sfondo card | `rgba(17, 24, 39, 0.85)` | Card, form, commenti (semi-trasparente) |
| Testo primario | `#e8ecf4` (bianco caldo) | Titoli secondari, logo |
| Testo secondario | `#94a3b8` (grigio chiaro) | Paragrafi, descrizioni |
| Accent / Titoli | `#00e5c8` (teal brillante) | Titoli, link, bordi, glow, bottoni |
| Glow / Ombre | `rgba(0, 229, 200, 0.15–0.7)` | Box-shadow, text-shadow, hover |

Tutti i colori sono definiti come variabili CSS in `:root` nel file `style.css`.

### 2. Stile visivo

- Stile **moderno, futuristico e pulito** con effetti glow diffusi su bordi, ombre e testi.
- **Divisori glow**: linee orizzontali luminose con gradiente per separare le sezioni.
- Layout **geometrico e allineato**: CSS Grid, contenitori centrali, spaziatura uniforme.
- Stile **squadrato con bordi arrotondati** (`border-radius: 10–16px` su card, bottoni, input).
- **Overlay pattern** di radial-gradient sottili sul body per profondità.
- **Backdrop-filter: blur(20px)** sull'header per effetto vetro smerigliato.

### 3. Bottoni interattivi

- Colori vivaci (accent teal ciano).
- **Hover**: `transform: scale(1.06)` + box-shadow glow forte + inversione colori.
- **Click (active)**: `transform: scale(1.10)` + box-shadow 50px glow intenso.
- Transizioni con `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Due varianti: `.btn` (outline glow) e `.btn-solid` (sfondo pieno accent).

### 4. Tipografia

- **Titoli**: Outfit (Google Fonts) — sans-serif geometrico moderno, peso 600–800.
- **Corpo**: DM Sans (Google Fonts) — sans-serif leggibile, peso 300–700.
- Dimensioni responsive con `clamp()`: h1 da 2rem a 3.2rem, h2 da 1.5rem a 2.2rem.
- `letter-spacing: -0.02em` sui titoli per look compatto e moderno.

### 5. Icone — Font Awesome 6.5

Tutte le icone usano Font Awesome 6.5 caricato via CDN. Icone principali: `fa-hashtag`, `fa-calendar`, `fa-arrow-right`, `fa-pen-nib`, `fa-tag`, `fa-quote-left`, `fa-comments`, `fa-user`, `fa-paper-plane`, `fa-envelope`, `fa-location-dot`, `fa-clock`, `fa-instagram`, `fa-x-twitter`, `fa-youtube`, `fa-github`, `fa-lightbulb`, `fa-rocket`, `fa-magnifying-glass`, `fa-book-open`, `fa-handshake`, `fa-house`, `fa-newspaper`, `fa-users`, `fa-at`.

### 6. Immagini

- Presenti in Home (copertine card) e dentro ogni articolo.
- Caricate da Unsplash (600×400 per card, 900×450 per articoli).
- **Hover sulle card**: `scale(1.05)` + `brightness(1.1)` per zoom luminoso.
- `border-radius: 12px` nelle immagini articolo.

### 7. Layout CSS

- **Header**: fisso (`position: fixed`), `backdrop-filter: blur`, logo + nav + hamburger mobile.
- **Corpo**: `max-width: 1200px`, centrato, `padding: 2rem`.
- **Footer**: griglia 3 colonne (`2fr 1fr 1fr`) + copyright centrato.
- **Griglia articoli**: CSS Grid `auto-fill, minmax(340px, 1fr)` per layout responsivo automatico.

### 8. Interazioni (hover / click / stato attivo)

- **Menu hover**: colore accent, sfondo dim, bordo, glow, `scale(1.05)`.
- **Menu pagina corrente**: glow permanente con classe `.active` nell'HTML.
- **Card hover**: `translateY(-6px)` + `scale(1.02)` + glow + zoom immagine.
- **Card click**: `scale(1.04)` + box-shadow 50px.
- **Value card hover**: `translateY(-6px)` + `scale(1.03)` + glow.
- **Social link hover**: `scale(1.12)` + glow + colore accent.
- **Social link click**: `scale(1.18)` + glow forte.
- **Input/textarea focus**: bordo accent + `box-shadow: 0 0 20px glow`.
- **Link hover**: `text-shadow` glow.
- **Footer link hover**: `padding-left: 0.3rem` (slide) + glow.

---

## ⚙️ Dettagli tecnici

### Hamburger menu puro CSS (checkbox hack)

Il menu mobile è gestito senza JavaScript tramite un input checkbox nascosto e un label come bottone:

```html
<!-- Checkbox nascosto -->
<input type="checkbox" id="hamburger-toggle" class="hamburger-checkbox">

<!-- Label che funge da bottone -->
<label for="hamburger-toggle" class="hamburger-label">
  <span></span><span></span><span></span>
</label>
```

```css
.hamburger-checkbox { display: none; }

.hamburger-checkbox:checked ~ .nav-controls .main-nav {
  display: flex;
}
```

Cliccando il label si attiva il checkbox nascosto → il CSS mostra il menu.

### Nav link attivo

La classe `.active` va inserita nel link corrispondente alla pagina corrente:

```html
<!-- In index.html -->
<a href="index.html" class="nav-link active">Home</a>
<a href="articoli.html" class="nav-link">Articoli</a>

<!-- In articoli.html -->
<a href="index.html" class="nav-link">Home</a>
<a href="articoli.html" class="nav-link active">Articoli</a>
```

### Animazioni

Le animazioni `fadeInUp` si attivano al caricamento della pagina tramite CSS `@keyframes`. Usate nella sezione hero e nei primi elementi visibili.

### Responsive design

- **900px**: griglie a colonna singola (about, contatti, footer).
- **768px**: hamburger menu visibile, griglia articoli a 1 colonna.
- **480px**: padding ridotto da 2rem a 1rem.

---

## 👤 Credits

- **Autori**: Redazione Digital Pulse (progetto scolastico)
- **Font**: [Google Fonts](https://fonts.google.com/) — Outfit, DM Sans
- **Icone**: [Font Awesome 6.5](https://fontawesome.com/)
- **Immagini**: [Unsplash](https://unsplash.com/)

---

© 2026 Digital Pulse — Tutti i diritti riservati. P.IVA 01234567890
