<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import GameList from "$lib/components/GameList.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "./app.css";
  import ThemeProvider from "$lib/components/ui/theme-provider.svelte";
  import { onMount } from "svelte";

  // State untuk efek interaktif
  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(e: MouseEvent) {
    // Mengikuti koordinat mouse untuk efek pencahayaan dinamis
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<ThemeProvider defaultTheme="dark">
  <div class="relative min-h-screen bg-[#050505] text-foreground selection:bg-primary selection:text-black">
    <div class="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] after:absolute after:inset-0 after:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] after:bg-repeat"></div>
    <div class="pointer-events-none fixed inset-0 z-[101] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]"></div>

    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>

      <div class="absolute inset-0 transition-opacity duration-500 opacity-30" style="background: radial-gradient(600px circle at {mouseX}% {mouseY}%, rgba(var(--primary-rgb), 0.15), transparent 80%);"></div>

      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyber-magenta/10 rounded-full blur-[120px]" style="animation: float 10s infinite alternate;"></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />

      <main class="flex-grow pt-16">
        <section class="relative">
          <Hero />
        </section>

        <div class="container mx-auto px-4 relative">
          <div class="hidden xl:block absolute left-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent">
            <div class="sticky top-1/2 w-2 h-10 bg-primary/40 -translate-x-1/2"></div>
          </div>

          <GameList />
        </div>
      </main>

      <Footer />
    </div>

    <div class="fixed bottom-8 right-8 z-[60] hidden md:block">
      <div class="text-[10px] font-mono text-primary/40 rotate-90 origin-bottom-right mb-12 uppercase tracking-[0.3em]">System Online // v2.5.1</div>
    </div>
  </div>
</ThemeProvider>

<style>
  :global(html) {
    scroll-behavior: smooth;
    background-color: #050505;
  }

  /* Custom Scrollbar for Cyberpunk Vibe */
  :global(::-webkit-scrollbar) {
    width: 6px;
  }
  :global(::-webkit-scrollbar-track) {
    background: #0a0a0a;
  }
  :global(::-webkit-scrollbar-thumb) {
    background: #222;
    border-radius: 10px;
  }
  :global(::-webkit-scrollbar-thumb:hover) {
    background: var(--primary); /* Menggunakan warna primary neon saat hover */
    box-shadow: 0 0 10px var(--primary);
  }

  @keyframes float {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(20px, 40px);
    }
  }
</style>
