<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getProjectBySlug } from "../data/projects";

const route = useRoute();

const project = computed(() => getProjectBySlug(route.params.slug));

const imageModules = import.meta.glob("../assets/projects/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const projectImages = computed(() => {
  if (!project.value) {
    return [];
  }
  const folder = project.value.galleryFolder;
  const sortOrder = project.value.gallerySort || "desc";
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`projects/${folder}/`))
    .sort(([pathA], [pathB]) => {
      const comparison = pathA.localeCompare(pathB);
      return sortOrder === "asc" ? comparison : -comparison;
    })
    .map(([, src], index) => ({
      src,
      alt: `${project.value.galleryAltBase} - dettaglio ${index + 1}`,
    }));
});

const placeholder =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const activeIndex = ref(null);

const activeImage = computed(() =>
  activeIndex.value === null ? null : projectImages.value[activeIndex.value]
);

const openImage = (index) => {
  activeIndex.value = index;
};

const closeImage = () => {
  activeIndex.value = null;
};

const showNext = () => {
  if (activeIndex.value === null || projectImages.value.length === 0) {
    return;
  }
  activeIndex.value = (activeIndex.value + 1) % projectImages.value.length;
};

const showPrev = () => {
  if (activeIndex.value === null || projectImages.value.length === 0) {
    return;
  }
  activeIndex.value =
    (activeIndex.value - 1 + projectImages.value.length) % projectImages.value.length;
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
  document.body.style.overflow = "";
});

watch(activeIndex, (value) => {
  document.body.style.overflow = value === null ? "" : "hidden";
});

watch(
  () => route.params.slug,
  () => {
    activeIndex.value = null;
  }
);
</script>

<template>
  <div class="page project-page">
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
      <div v-if="project" class="hero-content">
        <div>
          <p class="eyebrow">Progetto {{ project.year }}</p>
          <h1>{{ project.title }}</h1>
          <p class="lead">{{ project.lead }}</p>
          <div class="project-metrics">
            <div v-for="metric in project.metrics" :key="metric.label">
              <strong>{{ metric.label }}</strong>
              <span>{{ metric.value }}</span>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <h3>Ambito lavori</h3>
          <ul>
            <li v-for="item in project.scope" :key="item">{{ item }}</li>
          </ul>
          <div class="tag">Consegna {{ project.year }}</div>
        </div>
      </div>
      <div v-else class="hero-content">
        <div>
          <p class="eyebrow">Portfolio</p>
          <h1>Progetto non trovato</h1>
          <p class="lead">
            Il progetto richiesto non e' disponibile. Torna al portfolio per vedere i cantieri.
          </p>
          <RouterLink class="ghost" to="/progetti">Torna ai progetti</RouterLink>
        </div>
      </div>
    </header>

    <template v-if="project">
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
    </template>

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
