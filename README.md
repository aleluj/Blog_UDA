# Blog Project – Requisiti Funzionali & Grafici

Questo README descrive in modo chiaro e completo cosa dovrà fare il blog e come dovrà apparire.  
Serve come guida sia per la progettazione grafica (Canva) sia per lo sviluppo in HTML/CSS.

---

## ✅ Requisiti funzionali

1. **Menu di navigazione principale**
   - Il sito deve contenere un menu di navigazione principale posizionato nella parte superiore della pagina e visibile in tutte le sezioni del blog.
   - Il menu deve permettere all’utente di spostarsi facilmente tra le principali pagine del sito.
   - Il menu deve contenere almeno le voci:
     - `Home`
     - `Articoli`
     - `About us`
     - `Contattaci`
   - Ogni voce del menu deve essere cliccabile e portare alla rispettiva pagina.

2. **Footer comune**
   - Il sito deve avere un **footer uguale** per tutte le pagine.
   - Il footer deve contenere:
     - Contatti (es. email)
     - Eventuali link ai social
     - Informazioni sul copyright
     - Eventuale nome editore / partita IVA (fittizia se necessario per l’esercizio)

3. **Pagina `Home`**
   - La pagina “Home” deve mostrare gli **ultimi articoli pubblicati**.
   - Ogni articolo in home deve avere almeno:
     - Titolo
     - Breve anteprima / descrizione
     - Link alla pagina dell’articolo completo
   - La Home deve far capire subito di cosa parla il blog e invitare alla lettura.

4. **Pagina `Articoli`**
   - Il sito deve avere una pagina “Articoli” che elenca **tutti gli articoli del blog**.
   - Per ogni articolo devono essere visibili almeno:
     - Titolo
     - Data (anche fittizia)
     - Breve descrizione
     - Link alla pagina dell’articolo completo

5. **Pagina del singolo articolo**
   - Ogni articolo deve avere una pagina dedicata con:
     - Titolo dell’articolo
     - Testo completo
     - Eventuali immagini interne
   - Almeno **un articolo** deve essere scritto davvero dall’alunno sul tema:
     - *“Consapevolezza dell’utilizzo dei social media”* (in collegamento anche con il professore di italiano).

6. **Pagina `About us` (Chi siamo)**
   - La pagina “About us” deve presentare chi ha creato il blog.
   - Deve spiegare:
     - Chi scrive gli articoli
     - Lo scopo del blog
     - Perché il lettore dovrebbe fidarsi e seguire il sito

7. **Pagina `Contattaci`**
   - La pagina “Contattaci” deve permettere agli utenti di mettersi in contatto con l’editore del blog.
   - Deve contenere:
     - Almeno un’email di contatto (anche fittizia per l’esercizio)
     - Eventuali link ai social
     - Facoltativo: un semplice form (nome, email, messaggio – anche non funzionante lato backend)

8. **Sezione commenti (consigliata)**
   - Sotto ogni articolo può essere presente una sezione “Commenti”.
   - Scopo:
     - Permettere agli utenti di esprimere opinioni
     - Fare domande sul contenuto
     - Creare interazione lettore–autore

9. **Struttura tecnica minima**
   - Il blog deve essere composto almeno da:
     - `index.html` → Home
     - `articoli.html` → lista articoli
     - `about.html` → About us
     - `contatti.html` → Contattaci
   - Deve essere presente **un solo file CSS** comune a tutte le pagine.
   - Tutte le pagine devono essere collegate tra loro tramite il menu di navigazione.

---

## 🎨 Requisiti grafici

1. **Palette colori**
   - Stile generale del sito **tendente al blu**.
   - Testo principale: **bianco** (per buona leggibilità sullo sfondo).
   - Titoli (h1, h2, ecc.): **verde acqua / teal** per evidenziarli rispetto al resto del testo.

2. **Stile visivo**
   - Stile **moderno** e pulito.
   - Presenza di **divisori** (linee, box o sezioni) per separare chiaramente le varie aree del sito.
   - Elementi **allineati geometricamente** (es. layout a griglia o contenitore centrale ben allineato).
   - Stile principalmente **squadrato** ma con **bordi leggermente arrotondati** (es. `border-radius` su card, pulsanti, box).

3. **Tipografia**
   - Utilizzo di un **font sans-serif moderno e leggibile** (es. Arial, Roboto, Open Sans).
   - Dimensioni del testo sufficientemente grandi per una buona leggibilità.
   - Titoli chiaramente più grandi rispetto al corpo del testo per definire la gerarchia visiva.

4. **Immagini**
   - Devono essere presenti immagini:
     - In Home (es. immagini di copertina degli articoli o del blog)
     - All’interno di almeno alcuni articoli
   - Le immagini devono essere coerenti con il tema del blog e contribuire alla leggibilità e all’estetica.

5. **Layout e struttura CSS**
   - Il layout deve prevedere chiaramente:
     - `header` con titolo/logo e menu di navigazione
     - Corpo centrale con contenuto principale
     - Eventuale sidebar (se inserita nel progetto)
     - `footer` sempre visibile in tutte le pagine
   - Spaziatura coerente:
     - Margini e padding usati in modo uniforme per evitare che gli elementi siano troppo attaccati.

6. **Interazioni utente (hover / stato attivo)**
   - Le voci del menu devono cambiare aspetto al passaggio del mouse (`hover`), ad esempio:
     - Cambiamento di colore di sfondo
     - Cambiamento di colore del testo
   - La voce di menu della pagina attualmente aperta deve essere **evidenziata** (stato “attivo”).

