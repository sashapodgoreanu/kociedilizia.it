<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const imageModules = import.meta.glob(
  "../assets/projects/rifacimento-tetto-grosseto/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const projectImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, src], index) => ({
    src,
    alt: `Cantiere rifacimento tetto a Grosseto - dettaglio ${index + 1}`,
  }));

const placeholder =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const activeIndex = ref(null);

const activeImage = computed(() =>
  activeIndex.value === null ? null : projectImages[activeIndex.value]
);

const openImage = (index) => {
  activeIndex.value = index;
};

const closeImage = () => {
  activeIndex.value = null;
};

const showNext = () => {
  if (activeIndex.value === null || projectImages.length === 0) {
    return;
  }
  activeIndex.value = (activeIndex.value + 1) % projectImages.length;
};

const showPrev = () => {
  if (activeIndex.value === null || projectImages.length === 0) {
    return;
  }
  activeIndex.value = (activeIndex.value - 1 + projectImages.length) % projectImages.length;
};

const handleKey = (event) => {
  if (activeIndex.value === null) {
    return;
  }
  if (event.key === "Escape") {
    closeImage();
  }
  if (event.key === "ArrowRight") {
    showNext();
  }
  if (event.key === "ArrowLeft") {
    showPrev();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKey);
});

watch(activeIndex, (value) => {
  document.body.style.overflow = value === null ? "" : "hidden";
});
</script>

<template>
  <div class="page project-page">
    <header class="hero project-hero">
      <nav class="nav">
        <RouterLink class="logo" to="/">Koci Edilizia</RouterLink>
        <div class="nav-links">
          <RouterLink to="/#servizi">Servizi</RouterLink>
          <RouterLink to="/#progetti">Portfolio</RouterLink>
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
          <p class="eyebrow">Progetto 2025</p>
          <h1>Rifacimento tetto a Grosseto</h1>
          <p class="lead">
            Rifacimento completo della copertura con sostituzione delle parti ammalorate,
            posa di isolamento termico e nuova impermeabilizzazione per migliorare comfort
            e durata nel tempo.
          </p>
          <div class="project-metrics">
            <div>
              <strong>Localita'</strong>
              <span>Grosseto</span>
            </div>
            <div>
              <strong>Intervento</strong>
              <span>Copertura, isolamento, finiture</span>
            </div>
            <div>
              <strong>Anno</strong>
              <span>2025</span>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <h3>Ambito lavori</h3>
          <ul>
            <li>Rimozione e ripristino delle falde esistenti</li>
            <li>Guaina e isolamento termico ad alte prestazioni</li>
            <li>Posa di coppi e rifiniture perimetrali</li>
          </ul>
          <div class="tag">Consegna 2025</div>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="section-title">
        <h2>Galleria di cantiere</h2>
        <p>Anteprime leggere con caricamento progressivo; clicca per vedere i dettagli.</p>
      </div>
      <div class="gallery-grid">
        <button
          v-for="(image, index) in projectImages"
          :key="image.src"
          class="gallery-item"
          type="button"
          :aria-label="`Apri dettaglio ${index + 1}`"
          @click="openImage(index)"
        >
          <img
            class="gallery-image lazyload"
            :src="placeholder"
            :data-src="image.src"
            :alt="image.alt"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
    </section>

    <section class="section alt project-cta">
      <div class="section-title">
        <h2>Vuoi un intervento simile?</h2>
        <p>Scrivici per un sopralluogo gratuito e un piano lavori su misura.</p>
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

    <div
      v-if="activeImage"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      @click.self="closeImage"
    >
      <div class="lightbox-content">
        <button class="lightbox-close" type="button" @click="closeImage">Chiudi</button>
        <button class="lightbox-nav prev" type="button" @click="showPrev" aria-label="Foto precedente">
          <
        </button>
        <img class="lightbox-image" :src="activeImage.src" :alt="activeImage.alt" />
        <button class="lightbox-nav next" type="button" @click="showNext" aria-label="Foto successiva">
          >
        </button>
        <div class="lightbox-caption">
          Dettaglio {{ activeIndex + 1 }} di {{ projectImages.length }}
        </div>
      </div>
    </div>
  </div>
</template>
