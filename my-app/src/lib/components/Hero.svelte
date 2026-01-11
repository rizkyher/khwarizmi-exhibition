<script lang="ts">
  import { onMount } from "svelte";
  import { Play, Sparkles } from "@lucide/svelte";

  let mouseX = $state(0);
  let mouseY = $state(0);
  let isLoaded = $state(false);
  let scrollY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  }

  onMount(() => {
    setTimeout(() => (isLoaded = true), 100);
    window.addEventListener("scroll", () => (scrollY = window.scrollY));
  });
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] font-mono">
  <!-- GRID BACKGROUND -->
  <div class="absolute inset-0 opacity-[0.2]" style="background-image: radial-gradient(circle, #06b6d4 1px, transparent 1px); background-size: 24px 24px;"></div>

  <!-- SCANLINES -->
  <div
    class="absolute inset-0 z-50 pointer-events-none opacity-[0.03]
           bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),
               linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]
           bg-[length:100%_4px,4px_100%]"
  ></div>

  <!-- GLOW ORBS -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[80px] animate-pulse" style="transform: translate({mouseX}px, {mouseY}px);"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[80px] animate-pulse" style="transform: translate({-mouseX}px, {-mouseY}px);"></div>
  </div>

  <!-- FRAME -->
  <div class="absolute inset-10 pointer-events-none border border-white/5">
    <div class="absolute -top-1 -left-1 w-6 h-6 bg-cyan-500 shadow-[4px_4px_0_0_#0891b2]"></div>
    <div class="absolute -top-1 -right-1 w-6 h-6 bg-purple-500 shadow-[-4px_4px_0_0_#9333ea]"></div>
    <div class="absolute -bottom-1 -left-1 w-6 h-6 bg-purple-500 shadow-[4px_-4px_0_0_#9333ea]"></div>
    <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-500 shadow-[-4px_-4px_0_0_#0891b2]"></div>
  </div>

  <!-- CONTENT -->
  <div class="relative z-10 container mx-auto px-6 text-center">
    <!-- STATUS -->
    <div class="inline-block mb-8" class:animate-bounce-pixel={isLoaded}>
      <div class="bg-black border-2 border-cyan-400 px-4 py-1 relative">
        <div class="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400"></div>
        <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400"></div>
        <span class="text-[10px] text-cyan-400 font-bold tracking-[0.3em]"> SECURE_CONNECTION: ESTABLISHED </span>
      </div>
    </div>

    <!-- TITLE -->
    <h1 class="mb-10 text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none" class:opacity-0={!isLoaded}>
      <span class="relative inline-block text-white">
        FUTURE_GAME
        <span class="absolute top-[2px] left-[2px] text-cyan-500 -z-10 opacity-70 animate-glitch-1"> FUTURE_GAME </span>
        <span class="absolute -top-[2px] -left-[2px] text-pink-500 -z-10 opacity-70 animate-glitch-2"> FUTURE_GAME </span>
      </span>
      <br />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 bg-[size:200%]"> LABORATORY_01 </span>
    </h1>

    <!-- DESCRIPTION -->
    <p class="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-12 uppercase tracking-wide leading-relaxed">
      // initializing ai-powered simulations... <br />
      // master development through
      <span class="text-white bg-cyan-900/50 px-1 font-bold">neural_learning</span>
    </p>

    <!-- ACTIONS -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <button class="pixel-button">
        <div class="pixel-button-content primary">
          <Play class="w-4 h-4 fill-black" />
          <span>START_SESSION</span>
        </div>
      </button>

      <button class="pixel-button">
        <div class="pixel-button-content secondary">
          <Sparkles class="w-4 h-4" />
          <span>WATCH_DEMO</span>
        </div>
      </button>
    </div>
  </div>
</section>

<style>
  /* === PIXEL BUTTON === */
  .pixel-button {
    position: relative;
    padding: 2px;
    transition: all 0.1s;
    background-color: rgb(255 255 255 / 0.1); /* ✅ FIX UTAMA */
  }

  .pixel-button:active {
    transform: translate(1px, 1px);
  }

  .pixel-button-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 32px;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.2em;
  }

  .primary {
    background: #22d3ee;
    color: black;
    box-shadow: 4px 4px 0 #0891b2;
  }

  .secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.1);
  }

  .pixel-button:hover .pixel-button-content {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  /* === ANIMATIONS === */
  @keyframes glitch-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-3px, 2px);
    }
    60% {
      transform: translate(3px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes glitch-2 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(3px, -2px);
    }
    60% {
      transform: translate(-3px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  .animate-glitch-1 {
    animation: glitch-1 2s infinite linear;
  }
  .animate-glitch-2 {
    animation: glitch-2 2s infinite linear;
  }

  @keyframes bounce-pixel {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  .animate-bounce-pixel {
    animation: bounce-pixel 1s steps(2) infinite;
  }
</style>
