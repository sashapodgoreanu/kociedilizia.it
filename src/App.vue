<template>
  <div class="page">
    <header class="hero">
      <nav class="nav">
        <div class="logo">Koci Edilizia</div>
        <div class="nav-links">
          <a href="#servizi">Servizi</a>
          <a href="#progetti">Progetti</a>
          <a href="#processo">Metodo</a>
          <a href="#contatti">Contatti</a>
        </div>
        <button class="cta">Richiedi un sopralluogo</button>
      </nav>
      <div class="hero-content">
        <div>
          <p class="eyebrow">Impresa edile di Grosseto</p>
          <h1>Costruiamo spazi solidi, sostenibili e belli da vivere.</h1>
          <p class="lead">
            Koci Edilizia è il partner locale per ristrutturazioni, nuove costruzioni
            e manutenzioni straordinarie in tutta la Maremma.
          </p>
          <div class="hero-actions">
            <button class="cta">Parla con un tecnico</button>
            <button class="ghost">Scarica il portfolio</button>
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
          <div class="tag">Consegna 2024</div>
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
        <p>Alcuni cantieri completati negli ultimi anni in provincia di Grosseto.</p>
      </div>
      <div class="projects">
        <div class="project">
          <h3>Complesso residenziale “Le Querci”</h3>
          <p>Nuove unità abitative con classe energetica A4, Roselle.</p>
          <span>2023</span>
        </div>
        <div class="project">
          <h3>Hotel diffuso nel centro storico</h3>
          <p>Restauro conservativo e interior design, Massa Marittima.</p>
          <span>2022</span>
        </div>
        <div class="project">
          <h3>Capannone logistico con uffici</h3>
          <p>Struttura prefabbricata, aree verdi e viabilità interna, Grosseto Nord.</p>
          <span>2021</span>
        </div>
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
          <p>Valutiamo lo stato dell’immobile e le esigenze funzionali.</p>
        </div>
        <div class="step">
          <span>02</span>
          <h3>Progetto esecutivo</h3>
          <p>Definizione di tempi, budget e materiali con computo metrico.</p>
        </div>
        <div class="step">
          <span>03</span>
          <h3>Gestione cantiere</h3>
          <p>Coordinamento squadre, sicurezza e controllo qualità.</p>
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
        <div class="contact-details">
          <div>
            <strong>Telefono</strong>
            <span>+39 0564 123456</span>
          </div>
          <div>
            <strong>Email</strong>
            <span>info@kociedilizia.it</span>
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
      </form>
    </section>

    <footer class="footer">
      <div>
        <strong>Koci Edilizia</strong>
        <p>Impresa edile con base a Grosseto, attiva in tutta la Maremma.</p>
      </div>
      <div class="footer-data">
        <strong>DATI DELLA SOCIETÀ - KOCI ALFRED</strong>
        <p>Partita IVA: 01685210534</p>
      </div>
      <div class="footer-links">
        <a href="#servizi">Servizi</a>
        <a href="#progetti">Portfolio</a>
        <a href="#processo">Metodo</a>
        <a href="#contatti">Contatti</a>
      </div>
      <p class="footer-note">© 2024 Koci Edilizia. Tutti i diritti riservati.</p>
    </footer>
  </div>
</template>
