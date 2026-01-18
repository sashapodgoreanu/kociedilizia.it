<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { activeProjects } from "../data/projects";

const projects = activeProjects;
const featuredProject = projects.find((project) => project.featured) ?? projects[0];
</script>

<template>
  <div class="page">
    <header class="hero project-hero">
      <nav class="nav">
        <RouterLink class="logo" to="/">
          <img class="logo-mark" src="/logo.svg" alt="" aria-hidden="true" />
          <span class="logo-text">Koci Edilizia</span>
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/#servizi">Servizi</RouterLink>
          <RouterLink to="/progetti">Portfolio</RouterLink>
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
          <p class="eyebrow">Portfolio</p>
          <h1>Progetti recenti in Maremma.</h1>
          <p class="lead">
            Raccolta dei cantieri 2025 con schede dedicate e gallerie fotografiche.
          </p>
          <div class="hero-actions">
            <RouterLink class="ghost" to="/#contatti">Richiedi un sopralluogo</RouterLink>
            <a
              class="cta"
              href="https://wa.me/393480353893?text=Ciao%20ti%20sto%20contattando%20dal%20sito%20kociedilizia.it%20e%20vorrei%20chiederti%20delle%20informazioni."
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="whatsapp-icon" :icon="faWhatsapp" aria-hidden="true" />
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
        <div v-if="featuredProject" class="hero-card">
          <h3>In evidenza</h3>
          <p>{{ featuredProject.title }}</p>
          <ul>
            <li v-for="item in featuredProject.scope" :key="item">{{ item }}</li>
          </ul>
          <div class="tag">Consegna {{ featuredProject.year }}</div>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="section-title">
        <h2>Progetti 2025</h2>
        <p>Ogni progetto ha la sua pagina dedicata con foto e dettagli dell'intervento.</p>
      </div>
      <div class="projects">
        <article
          v-for="project in projects"
          :key="project.slug"
          :class="['project', project.featured ? 'project-highlight' : '']"
        >
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
          </div>
          <div class="project-meta">
            <span>{{ project.year }}</span>
            <RouterLink class="ghost" :to="`/progetti/${project.slug}`">Guarda il cantiere</RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="section alt project-cta">
      <div class="section-title">
        <h2>Vuoi un intervento come questo?</h2>
        <p>
          Scrivici per un sopralluogo gratuito e una proposta su misura per ristrutturazioni,
          rivestimenti, stucchi veneziani, pavimentazioni, imbiancature e cartongesso.
        </p>
      </div>
      <div class="cta-row">
        <a
          class="cta"
          href="https://wa.me/393480353893?text=Ciao%20ti%20sto%20contattando%20dal%20sito%20kociedilizia.it%20e%20vorrei%20chiederti%20delle%20informazioni."
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="whatsapp-icon" :icon="faWhatsapp" aria-hidden="true" />
          Contattaci su WhatsApp
        </a>
        <RouterLink class="ghost" to="/#contatti">Vai ai contatti</RouterLink>
      </div>
    </section>

    <footer class="footer">
      <div>
        <strong>Koci Edilizia</strong>
        <p>
          Impresa edile con base a Grosseto, specializzata in ristrutturazioni, rivestimenti,
          stucchi veneziani, pavimentazioni, imbiancature e cartongesso.
        </p>
      </div>
      <div class="footer-data">
        <strong>DATI DELLA SOCIETA' - KOCI ALFRED</strong>
        <p>Partita IVA: 01685210534</p>
      </div>
      <div class="footer-links">
        <RouterLink to="/#servizi">Servizi</RouterLink>
        <RouterLink to="/progetti">Portfolio</RouterLink>
        <RouterLink to="/#processo">Metodo</RouterLink>
        <RouterLink to="/#contatti">Contatti</RouterLink>
      </div>
      <p class="footer-note">(c) 2026 Koci Edilizia. Tutti i diritti riservati.</p>
    </footer>
  </div>
</template>
