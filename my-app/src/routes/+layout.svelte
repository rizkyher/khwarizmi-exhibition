<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { onMount } from "svelte";

  let { children } = $props();

  // State untuk koordinat mouse (efek parallax glow)
  let mouseX = $state(0);
  let mouseY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Cyber Games | Future NFT Lab</title>
</svelte:head>

<div class="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30">
  <div class="fixed inset-0 pointer-events-none z-0">
    <div class="absolute -top-[10%] -right-[5%] size-[600px] rounded-full bg-purple-600/15 blur-[120px] transition-transform duration-75 ease-out" style="transform: translate({(mouseX - 500) * 0.02}px, {(mouseY - 500) * 0.02}px)"></div>

    <div class="absolute bottom-[5%] -left-[5%] size-[500px] rounded-full bg-cyan-500/10 blur-[100px] transition-transform duration-100 ease-out" style="transform: translate({(mouseX - 500) * -0.01}px, {(mouseY - 500) * -0.01}px)"></div>

    <div class="absolute inset-0 opacity-[0.15]" style="background-image: radial-gradient(#22d3ee 0.5px, transparent 0.5px); background-size: 32px 32px;"></div>

    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]"
    ></div>
  </div>

  <main class="relative z-10">
    {@render children()}
  </main>

  <div class="fixed bottom-6 left-6 z-50 hidden md:block">
    <div class="flex items-center gap-3 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-500">
      <div class="size-2 bg-cyan-500 animate-pulse"></div>
      SYSTEM_STABLE: 200ms
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: #050505;
    margin: 0;
    /* Font monospaced agar kesan pixelnya dapet */
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
