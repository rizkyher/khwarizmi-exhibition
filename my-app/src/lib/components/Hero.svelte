<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Play, Sparkles } from "@lucide/svelte";

  let mouseX = 0;
  let mouseY = 0;
  let isLoaded = false;

  function handleMouseMove(e: MouseEvent) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    mouseX = x * 40;
    mouseY = y * 40;
  }

   let mx = 0;
  let my = 0;
  let loaded = false;

  function move(e: MouseEvent) {
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    mx = x * 40;
    my = y * 40;
  }

  onMount(() => {
    const t = setTimeout(() => (isLoaded = true), 120);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<section class="hero">
  <!-- METEOR FIELD -->
  <div class="noise-layer"></div>
  <div class="light-sweep"></div>
  <div class="stars far"></div>
  <div class="stars mid"></div>
  <div class="stars near"></div>
  <div class="depth-shadow"></div>

  <div class="meteor-field">
  <span class="meteor big m1"></span>
  <span class="meteor big m2"></span>
  <span class="meteor big m3"></span>
</div>
  <!-- GRID -->
  <div class="grid-bg" />

  <!-- GLOW CORE -->
  <div class="glow-core" />

  <!-- SCANLINES -->
  <div class="scanlines" />

  <!-- PARALLAX ORBS -->
  <div class="orb cyan" style="transform:translate({mouseX}px,{mouseY}px)" />
  <div class="orb purple" style="transform:translate({-mouseX}px,{-mouseY}px)" />

  
   <!-- SCAN -->
  <div class="scanline" />

  <!-- FRAME -->
  <div class="frame">
    <span class="corner tl" />
    <span class="corner tr" />
    <span class="corner bl" />
    <span class="corner br" />
  </div>

  <!-- CONTENT -->
  <div class="content">
    <!-- STATUS -->
    <div class="status" class:loaded={isLoaded}>
      SECURE_CONNECTION: ESTABLISHED
    </div>

    <!-- TITLE -->
   <h1 class="title" class:loaded={isLoaded}>
  <span class="future-wrap">
    <span class="future shine">Khawarizmi</span>
  </span>
</h1>

<p class="electric-text">
  Futuristic Intelligence Laboratory
</p>


    <!-- DESC -->
    <p class="desc">
      // initializing ai-powered simulations<br />
      // master development through
      <span>neural_learning</span>
    </p>

    <!-- ACTIONS -->
    <div class="actions">
      <button class="pixel-btn primary">
        <Play size="16" />
        START_SESSION
      </button>

      <button class="pixel-btn secondary">
        <Sparkles size="16" />
        WATCH_DEMO
      </button>
    </div>
  </div>
</section>

<style>
  /* ================= FONTS ================= */
@font-face {
  font-family: PixelTitle;
  src: url("/fonts/PressStart2P-Regular.woff2") format("woff2");
}
@font-face {
  font-family: PixelText;
  src: url("/fonts/VT323-Regular.woff2") format("woff2");
}

:global(html) {
  background: black;
  image-rendering: pixelated;
  -webkit-font-smoothing: none;
}
/* ================= BASE ================= */
.hero {
  position: relative;
  min-height: 100vh;
  background: #050505;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  color: white;
  padding: 60px;
}

.future-wrap {
  position: relative;
  display: inline-block;
}

.shake {
  position: relative;
  color: white;
  animation: pixel-shake 1.2s steps(2) infinite;
}

.shine {
  color: transparent;
  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255,255,255,0.9) 35%,
    rgba(34,211,238,1) 50%,
    rgba(255,255,255,0.9) 65%,
    transparent 80%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine-sweep 5s linear infinite;
  mix-blend-mode: screen;
}

@keyframes shine-sweep {
  from { background-position: -200% 0; }
  to   { background-position: 200% 0; }
}

.shake::before,
.shake::after {
  content: "FUTURE_GAME";
  position: absolute;
  inset: 0;
  opacity: .4;
}

.shake::before {
  color: #22d3ee;
  transform: translate(-2px,0);
}

.shake::after {
  color: #ec4899;
  transform: translate(2px,0);
}



@keyframes pixel-shake {
  0%   { transform: translate(0,0); }
  20%  { transform: translate(-2px,1px); }
  40%  { transform: translate(2px,-1px); }
  60%  { transform: translate(-1px,2px); }
  80%  { transform: translate(1px,-2px); }
  100% { transform: translate(0,0); }
}


/* ================= BACKGROUND ================= */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #22d3ee 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.08;
}

.glow-core {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(34,211,238,.15), transparent 60%);
  filter: blur(120px);
}

/* ================= SCANLINES ================= */
.scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .04;
  background:
    linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,.4) 50%),
    linear-gradient(90deg, rgba(255,0,0,.06), rgba(0,255,0,.02), rgba(0,0,255,.06));
  background-size: 100% 4px, 4px 100%;
  z-index: 20;
}

/* ================= ORBS ================= */
.orb {
  position: absolute;
  width: 380px;
  height: 380px;
  filter: blur(90px);
  opacity: .4;
  transition: transform .1s linear;
}
.orb.cyan {
  background: #22d3ee;
  top: 20%;
  left: 20%;
}
.orb.purple {
  background: #a855f7;
  bottom: 20%;
  right: 20%;
}

/* ================= FRAME ================= */
.frame {
  position: absolute;
  inset: 40px;
  border: 1px solid rgba(255,255,255,.06);
}
.corner {
  position: absolute;
  width: 20px;
  height: 20px;
}
.tl { top:-2px; left:-2px; background:#22d3ee }
.tr { top:-2px; right:-2px; background:#a855f7 }
.bl { bottom:-2px; left:-2px; background:#a855f7 }
.br { bottom:-2px; right:-2px; background:#22d3ee }

/* ================= CONTENT ================= */
.content {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.status {
  font-size: 10px;
  letter-spacing: .3em;
  border: 2px solid #22d3ee;
  padding: 6px 14px;
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(8px);
}
.status.loaded {
  opacity: 1;
  transform: translateY(0);
  animation: bounce 1s steps(2) infinite;
}

/* ================= TITLE ================= */
.title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: .9;
  margin-bottom: 32px;
  opacity: 0;
}
.title.loaded { opacity: 1 }

.glitch {
  position: absolute;
  inset: 0;
}
.glitch.base { position: relative }
.glitch.cyan { color:#22d3ee; animation: glitch1 2s infinite }
.glitch.pink { color:#ec4899; animation: glitch2 2s infinite }

.subtitle {
  display: block;
  font-size: .6em;
  background: linear-gradient(90deg,#22d3ee,#a855f7);
  -webkit-background-clip: text;
  color: transparent;
}

/* ================= DESC ================= */
.desc {
  max-width: 520px;
  color: #9ca3af;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.desc span {
  color: white;
  background: rgba(34,211,238,.15);
  padding: 0 4px;
}

/* ================= BUTTONS ================= */
.actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.pixel-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 36px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .25em;
  cursor: pointer;
  border: none;
  position: relative;
  animation: float-idle 3.5s ease-in-out infinite;
  transition:
    transform .25s steps(2),
    box-shadow .25s,
    background .25s,
    color .25s;
  clip-path: polygon(10% 0,100% 0,100% 70%,90% 100%,0 100%,0 30%);
}
.primary {
  background: #22d3ee;
  color: black;
  box-shadow: 6px 6px 0 #0891b2;
}
.secondary {
  background: rgba(255,255,255,.05);
  color: white;
  border: 1px solid rgba(255,255,255,.15);
  box-shadow: 6px 6px 0 rgba(255,255,255,.1);
}
.pixel-btn:hover {
  transform: translate(-2px,-2px);
}

/* ================= ANIM ================= */
@keyframes glitch1 {
  20% { transform: translate(-3px,2px) }
  60% { transform: translate(3px,-2px) }
}
@keyframes glitch2 {
  20% { transform: translate(3px,-2px) }
  60% { transform: translate(-3px,2px) }
}
@keyframes bounce {
  50% { transform: translateY(-4px) }
}
@keyframes scan {
  from { transform:translateY(600%) }
  to { transform:translateY(-190%) }
}
/* ================= PIXEL FONTS ================= */
@font-face {
  font-family: "PixelPrimary";
  src: url("/fonts/PressStart2P-Regular.woff2") format("woff2");
  font-display: swap;
}

@font-face {
  font-family: "PixelSecondary";
  src: url("/fonts/VT323-Regular.woff2") format("woff2");
  font-display: swap;
}

/* Global pixel rendering */
:global(html) {
  image-rendering: pixelated;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
}

/* Default UI */
.hero {
  font-family: "PixelSecondary", monospace;
}

/* Title & buttons */
.title,
.pixel-btn,
.status {
  font-family: "PixelPrimary", monospace;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
/* ================= SCAN ================= */
.scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent, rgba(34,211,238,.35), transparent);
  height: 120px;
  animation: scan 2.5s linear infinite;
  pointer-events: none;
}
/* ================= ORBS ================= */
.orb {
  position: absolute;
  width: 420px;
  height: 420px;
  filter: blur(100px);
  opacity: .35;
  transition: transform .15s linear;
}
.crt {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,.4) 50%),
    linear-gradient(90deg, rgba(255,0,0,.05), rgba(0,255,0,.02), rgba(0,0,255,.05));
  background-size: 100% 3px, 3px 100%;
  opacity: .06;
  z-index: 20;
}
/* ================= NOISE FILM ================= */
.noise-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  z-index: 3;
}

/* ================= SOFT LIGHT SWEEP ================= */
.light-sweep {
  position: absolute;
  inset: -40%;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(34,211,238,0.08),
    transparent 70%
  );
  animation: sweep 12s linear infinite;
  pointer-events: none;
  z-index: 2;
}

@keyframes sweep {
  from { transform: translateX(-30%); }
  to   { transform: translateX(30%); }
}
.pixel-btn {
  transition:
    background 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.15s ease;
}

/* ================= HOVER EFFECT ================= */
.pixel-btn:hover {
  animation: button-shake 0.25s steps(2) infinite;
}

/* PRIMARY */
.pixel-btn.primary:hover {
  background: #67e8f9;
  box-shadow:
    0 0 12px rgba(34,211,238,0.8),
    6px 6px 0 #0891b2;
}

.pixel-btn.secondary {
  animation-delay: .6s;
}

/* ================= FLOATING IDLE ================= */
@keyframes float-idle {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* SECONDARY */
.pixel-btn.secondary:hover {
  background: rgba(168,85,247,0.25);
  color: #e9d5ff;
  border-color: #a855f7;
  box-shadow:
    0 0 12px rgba(168,85,247,0.7),
    6px 6px 0 rgba(168,85,247,0.4);
}

/* ================= SHAKE ================= */
@keyframes button-shake {
  0%   { transform: translate(0,0); }
  25%  { transform: translate(-1px,1px); }
  50%  { transform: translate(1px,-1px); }
  75%  { transform: translate(-1px,-1px); }
  100% { transform: translate(0,0); }
}
.pixel-btn:active {
  transform: translate(2px,2px);
  filter: brightness(1.1);
}
/* ================= STARFIELD ================= */
.stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: repeat;
  animation: stars-move 120s linear infinite;
  opacity: 0.6;
}

/* Bintang jauh (kecil, pelan) */
.stars.far {
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.3), transparent),
    radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,.25), transparent),
    radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,.2), transparent);
  background-size: 600px 600px;
  filter: blur(0.3px);
}

/* Bintang medium */
.stars.mid {
  background-image:
    radial-gradient(1.5px 1.5px at 10% 60%, rgba(34,211,238,.7), transparent),
    radial-gradient(1.5px 1.5px at 70% 20%, rgba(255,255,255,.6), transparent),
    radial-gradient(1.5px 1.5px at 40% 90%, rgba(168,85,247,.6), transparent);
  background-size: 420px 420px;
  animation-duration: 90s;
}

/* Bintang dekat (lebih terang) */
.stars.near {
  background-image:
    radial-gradient(2px 2px at 30% 40%, rgba(255,255,255,.9), transparent),
    radial-gradient(2px 2px at 60% 80%, rgba(34,211,238,1), transparent),
    radial-gradient(2px 2px at 80% 20%, rgba(168,85,247,1), transparent);
  background-size: 300px 300px;
  animation-duration: 60s;
}

/* Gerakan lambat */
@keyframes stars-move {
  from { transform: translateY(0); }
  to   { transform: translateY(-1000px); }
}
.glow-core {
  background:
    radial-gradient(circle at 30% 40%, rgba(34,211,238,.25), transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(168,85,247,.25), transparent 50%);
  filter: blur(160px);
}
/* ================= METEOR BACKGROUND ================= */
.meteor-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

/* METEOR BASE */
.meteor {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    #ffffff,
    #22d3ee 30%,
    rgba(34,211,238,.4) 55%,
    transparent 70%
  );
  filter: blur(2px);
  box-shadow:
    0 0 60px rgba(34,211,238,.6),
    0 0 120px rgba(34,211,238,.4);
  opacity: .75;
}

/* TRAIL */
.meteor::after {
  content: "";
  position: absolute;
  width: 320px;
  height: 100px;
  top: 50%;
  left: -140px;
  transform: translateY(-50%) rotate(-35deg);
  background: linear-gradient(
    90deg,
    rgba(34,211,238,.7),
    transparent
  );
  filter: blur(30px);
  opacity: .7;
}
.m1 { animation-timing-function: cubic-bezier(.2,.6,.2,1); }
.m2 { animation-timing-function: cubic-bezier(.1,.7,.1,1); }
.m3 { animation-timing-function: cubic-bezier(.3,.5,.3,1); }


/* ================= VARIANTS ================= */
.meteor.big {
  width: 240px;
  height: 240px;
}

/* ================= ANIMATIONS ================= */
@keyframes meteor-fall {
  0% {
    transform: translate(10vw, -60vh) rotate(-35deg);
    opacity: 0;
  }
  10% { opacity: .9; }
  100% {
    transform: translate(70vw, 140vh) rotate(-35deg);
    opacity: 0;
  }
}


/* ================= INDIVIDUAL METEORS ================= */
.m1 {
  top: -30%;
  left: 10%;
  animation: meteor-fall 14s linear infinite;
}

.m2 {
  top: -50%;
  left: 40%;
  animation: meteor-fall 18s linear infinite;
  animation-delay: 4s;
  filter: hue-rotate(40deg);
}

.m3 {
  top: -60%;
  left: 70%;
  animation: meteor-fall 22s linear infinite;
  animation-delay: 8s;
  filter: hue-rotate(-40deg);
}
.meteor-field {
  filter: blur(1px);
}
/* ================= ELECTRIC TEXT ================= */
.electric-text {
  position: relative;
  margin-top: 18px;
  font-family: "PixelSecondary", monospace;
  font-size: 18px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #e5e7eb;
  opacity: 0.9;
  text-shadow:
    0 0 6px rgba(34,211,238,.6),
    0 0 12px rgba(34,211,238,.4);
  animation: electric-flicker 4s infinite;
}

/* GLOW KILAT INTI */
.electric-text::before {
  content: "";
  position: absolute;
  inset: -6px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(34,211,238,.9),
    rgba(255,255,255,1),
    rgba(168,85,247,.9),
    transparent
  );
  filter: blur(18px);
  opacity: 0;
  animation: electric-flash 3.5s infinite;
  z-index: -1;
}

/* GARIS KILAT HALUS */
.electric-text::after {
  content: "";
  position: absolute;
  left: -20%;
  top: 50%;
  width: 140%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #67e8f9,
    white,
    #a855f7,
    transparent
  );
  filter: blur(4px);
  opacity: 0;
  animation: lightning-scan 2.8s infinite;
}

/* ================= ANIMATIONS ================= */
@keyframes electric-flicker {
  0%, 100% { opacity: .85; }
  5% { opacity: .4; }
  10% { opacity: 1; }
  15% { opacity: .6; }
  22% { opacity: 1; }
  60% { opacity: .9; }
}

@keyframes electric-flash {
  0%, 70% { opacity: 0; }
  72% { opacity: .8; }
  74% { opacity: 0; }
  78% { opacity: 1; }
  82% { opacity: 0; }
}

@keyframes lightning-scan {
  0%, 60% {
    opacity: 0;
    transform: translateX(-30%);
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
    transform: translateX(30%);
  }
}

</style>
