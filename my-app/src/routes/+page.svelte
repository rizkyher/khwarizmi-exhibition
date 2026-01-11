<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import RunningTicker from "$lib/components/RunningTicker.svelte";
  import About from "$lib/components/About.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import Mechanics from "$lib/components/DeveloperShowcase.svelte"; // Menggunakan komponen Dev yang baru
  import GameList from "$lib/components/GameList.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ThemeProvider from "$lib/components/ui/theme-provider.svelte";
  import GameFilter from "$lib/components/GameFilter.svelte";

  let activeCategory = $state("All Games");
</script>

<ThemeProvider defaultTheme="dark">
  <div class="bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-sans">
    <Navbar />

    <main>
      <Hero />
      <RunningTicker />
      <About />
      <Mechanics />

      <section id="archive" class="relative border-t border-white/5 bg-[#050505]">
        <div class="container mx-auto px-6 pt-32 relative z-30">
          <div class="flex flex-col mb-12 space-y-4">
            <h2 class="text-6xl font-black italic uppercase tracking-tighter">
              Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">Archive</span>
            </h2>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p class="text-white/40 max-w-md font-mono text-xs uppercase tracking-widest">
                // Loading_Repository: {activeCategory}
              </p>
              <div class="relative z-50">
                <GameFilter bind:selected={activeCategory} />
              </div>
            </div>
          </div>
        </div>

        <GameList filter={activeCategory} />
      </section>
    </main>

    <Footer />
  </div>
</ThemeProvider>
