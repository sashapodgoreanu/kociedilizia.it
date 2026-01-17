<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="page">
    <header class="hero">
      <nav class="nav">
        <RouterLink class="logo" to="/">Koci Edilizia</RouterLink>
        <div class="nav-links">
          <RouterLink to="/#servizi">Servizi</RouterLink>
          <RouterLink to="/#progetti">Progetti</RouterLink>
          <RouterLink to="/#processo">Metodo</RouterLink>
          <RouterLink to="/#contatti">Contatti</RouterLink>
        </div>
        <a
          class="cta"
          href="https://wa.me/393480353893?text=Ciao%20ti%20sto%20contattando%20dal%20sito%20kociedilizia.it%20e%20vorrei%20chiederti%20delle%20informazioni."
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="whatsapp-icon" :icon="faWhatsapp" aria-hidden="true" />
          Contattaci su WhatsApp
        </a>
      </nav>
      <div class="hero-content">
        <div>
          <p class="eyebrow">Impresa edile di Grosseto</p>
          <h1>Costruiamo spazi solidi, sostenibili e belli da vivere.</h1>
          <p class="lead">
            Koci Edilizia e' il partner locale per ristrutturazioni, nuove costruzioni
            e manutenzioni straordinarie in tutta la Maremma.
          </p>
          <div class="hero-actions">
            <a
              class="cta"
              href="https://wa.me/393480353893?text=Ciao%20ti%20sto%20contattando%20dal%20sito%20kociedilizia.it%20e%20vorrei%20chiederti%20delle%20informazioni."
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="whatsapp-icon" :icon="faWhatsapp" aria-hidden="true" />
              Parla su WhatsApp
            </a>
            <RouterLink class="ghost" to="/progetti">Vedi il portfolio</RouterLink>
          </div>
          <div class="hero-metrics">
            <div>
              <strong>18+</strong>
              <span>anni di cantieri</span>
            </div>
            <div>
              <strong>120</strong>
              <span>progetti consegnati</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>tempo medio di risposta</span>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <h3>In evidenza</h3>
          <p>Ristrutturazione di una villa storica a Marina di Grosseto.</p>
          <ul>
            <li>Consolidamento strutturale</li>
            <li>Efficientamento energetico</li>
            <li>Restyling facciate</li>
          </ul>
          <div class="tag">Consegna 2026</div>
        </div>
      </div>
    </header>

    <section id="servizi" class="section">
      <div class="section-title">
        <h2>Servizi per ogni fase del progetto</h2>
        <p>Dalla consulenza iniziale alla consegna, seguiamo ogni dettaglio con un unico referente.</p>
      </div>
      <div class="cards">
        <article class="card">
          <h3>Nuove costruzioni</h3>
          <p>Realizziamo edifici residenziali e commerciali con tecnologie certificate.</p>
        </article>
        <article class="card">
          <h3>Ristrutturazioni complete</h3>
          <p>Interventi chiavi in mano per case, condomini e strutture ricettive.</p>
        </article>
        <article class="card">
          <h3>Restauri conservativi</h3>
          <p>Valorizziamo il patrimonio architettonico rispettando i vincoli storici.</p>
        </article>
        <article class="card">
          <h3>Impiantistica integrata</h3>
          <p>Soluzioni impiantistiche efficienti per comfort e risparmio energetico.</p>
        </article>
      </div>
    </section>

    <section id="progetti" class="section alt">
      <div class="section-title">
        <h2>Portfolio selezionato</h2>
        <p>Una selezione di lavori recenti, con focus sul progetto 2025.</p>
      </div>
      <div class="projects">
        <article class="project project-highlight">
          <div class="project-body">
            <h3>Rifacimento tetto a Maliano</h3>
            <p>
              Ripristino del manto in coppi con sistemazione dei colmi e dei punti di raccordo,
              per una copertura uniforme e resistente nel tempo.
            </p>
          </div>
          <div class="project-meta">
            <span>2025</span>
            <RouterLink class="ghost" to="/progetti">Guarda il cantiere</RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section id="processo" class="section">
      <div class="section-title">
        <h2>Il nostro metodo</h2>
        <p>Trasparenza, sicurezza e controllo dei costi per risultati misurabili.</p>
      </div>
      <div class="steps">
        <div class="step">
          <span>01</span>
          <h3>Sopralluogo e analisi</h3>
          <p>Valutiamo lo stato dell'immobile e le esigenze funzionali.</p>
        </div>
        <div class="step">
          <span>02</span>
          <h3>Progetto esecutivo</h3>
          <p>Definizione di tempi, budget e materiali con computo metrico.</p>
        </div>
        <div class="step">
          <span>03</span>
          <h3>Gestione cantiere</h3>
          <p>Coordinamento squadre, sicurezza e controllo qualita'.</p>
        </div>
        <div class="step">
          <span>04</span>
          <h3>Consegna e collaudo</h3>
          <p>Verifiche finali e documentazione completa per il cliente.</p>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="section-title">
        <h2>Numeri che parlano chiaro</h2>
      </div>
      <div class="stats">
        <div>
          <strong>35</strong>
          <p>professionisti coinvolti</p>
        </div>
        <div>
          <strong>9</strong>
          <p>cantieri attivi in media</p>
        </div>
        <div>
          <strong>100%</strong>
          <p>copertura assicurativa</p>
        </div>
        <div>
          <strong>5/5</strong>
          <p>soddisfazione clienti</p>
        </div>
      </div>
    </section>

    <section id="contatti" class="section contact">
      <div>
        <h2>Parliamo del tuo progetto</h2>
        <p>
          Scrivici per un preventivo o un sopralluogo gratuito a Grosseto e provincia.
        </p>
        <p>
          Operiamo in tutte le citta' della provincia di Grosseto: Grosseto, Follonica,
          Castiglione della Pescaia, Scarlino, Gavorrano, Massa Marittima, Roccastrada,
          Montieri, Monterotondo Marittimo, Civitella Paganico, Campagnatico, Cinigiano,
          Scansano, Magliano in Toscana, Orbetello, Monte Argentario, Isola del Giglio,
          Capalbio, Manciano, Pitigliano, Sorano, Semproniano, Roccalbegna, Castel del Piano,
          Arcidosso, Santa Fiora e Seggiano.
        </p>
        <p>
          Inoltre seguiamo cantieri nelle principali citta' entro 100 km, tra cui Siena,
          Piombino, Cecina, Poggibonsi, Colle di Val d'Elsa e Porto Santo Stefano.
        </p>
        <div class="contact-details">
          <div>
            <strong>Telefono</strong>
            <span>+39 0564 123456</span>
          </div>
          <div>
            <strong>Email</strong>
            <span>alfredkociedilizia@gmail.com</span>
          </div>
          <div>
            <strong>WhatsApp</strong>
            <span>+39 348 035 3893</span>
          </div>
          <div>
            <strong>Sede</strong>
            <span>Via del Cantiere 18, 58100 Grosseto</span>
          </div>
        </div>
      </div>
      <form class="contact-form">
        <label>
          Nome e cognome
          <input type="text" placeholder="Mario Rossi" />
        </label>
        <label>
          Email
          <input type="email" placeholder="nome@email.it" />
        </label>
        <label>
          Descrizione progetto
          <textarea rows="4" placeholder="Raccontaci di cosa hai bisogno"></textarea>
        </label>
        <button class="cta" type="button">Invia richiesta</button>
        <a
          class="ghost whatsapp-link"
          href="https://wa.me/393480353893?text=Ciao%20ti%20sto%20contattando%20dal%20sito%20kociedilizia.it%20e%20vorrei%20chiederti%20delle%20informazioni."
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="whatsapp-icon" :icon="faWhatsapp" aria-hidden="true" />
          Apri WhatsApp
        </a>
      </form>
    </section>

    <footer class="footer">
      <div>
        <strong>Koci Edilizia</strong>
        <p>Impresa edile con base a Grosseto, attiva in tutta la Maremma.</p>
      </div>
      <div class="footer-data">
        <strong>DATI DELLA SOCIETA' - KOCI ALFRED</strong>
        <p>Partita IVA: 01685210534</p>
      </div>
      <div class="footer-links">
        <RouterLink to="/#servizi">Servizi</RouterLink>
        <RouterLink to="/#progetti">Portfolio</RouterLink>
        <RouterLink to="/#processo">Metodo</RouterLink>
        <RouterLink to="/#contatti">Contatti</RouterLink>
      </div>
      <p class="footer-note">(c) 2026 Koci Edilizia. Tutti i diritti riservati.</p>
    </footer>
  </div>
</template>
