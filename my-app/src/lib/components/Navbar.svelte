<script lang="ts">
  import { Menu, X, Gamepad2, Rocket, Trophy, Info, Cpu, ChevronRight, Activity } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isScrolled = $state(false);
  let menuOpen = $state(false);
  let activeLink = $state("Showcase");
  let time = $state(new Date().toLocaleTimeString());

  const navLinks = [
    { name: "Showcase", id: "hero", icon: Rocket },
    { name: "Mechanics", id: "mechanics", icon: Cpu },
    { name: "Leaderboard", id: "leaderboard", icon: Trophy },
    { name: "About", id: "about", icon: Info },
  ];

  onMount(() => {
    const handleScroll = () => (isScrolled = window.scrollY > 20);
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString([], { hour12: false });
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      activeLink = navLinks.find((l) => l.id === id)?.name || "Showcase";
      menuOpen = false;
    }
  };
</script>

<nav class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 {isScrolled ? 'py-2' : 'py-6'}">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="relative group">
      <div class="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-600 opacity-20 blur-md transition-opacity duration-500 {isScrolled ? 'opacity-40' : 'group-hover:opacity-30'}"></div>

      <div class="relative flex items-center justify-between px-6 py-2 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-xl shadow-2xl">
        <button onclick={() => scrollTo("hero")} class="flex items-center gap-5 group/logo">
          <div class="relative">
            <div class="size-11 border border-cyan-500/50 rotate-45 flex items-center justify-center group-hover/logo:rotate-[225deg] transition-all duration-700 bg-cyan-500/5 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Gamepad2 class="text-cyan-400 size-5 -rotate-45 group-hover/logo:rotate-[135deg] transition-all duration-700" />
            </div>
            <div class="absolute inset-0 size-11 border border-cyan-400 animate-ping opacity-20 rotate-45"></div>
          </div>

          <div class="flex flex-col text-left">
            <h1 class="text-2xl font-black text-white tracking-[0.2em] leading-none italic uppercase">
              KHWA<span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">RIZMI</span>
            </h1>
            <div class="flex items-center gap-2 mt-1.5 font-mono text-[7px] text-cyan-400/60 uppercase tracking-[0.4em]">
              <Activity class="size-2 animate-pulse text-magenta-500" />
              Connection_Secure // {time}
            </div>
          </div>
        </button>

        <div class="hidden lg:flex items-center gap-2">
          {#each navLinks as link}
            <button
              onclick={() => scrollTo(link.id)}
              class="relative px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all
              {activeLink === link.name ? 'text-cyan-400' : 'text-white/40 hover:text-white hover:bg-white/5 rounded-lg'}"
            >
              {link.name}
              {#if activeLink === link.name}
                <div in:fade class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              {/if}
            </button>
          {/each}
        </div>

        <div class="flex items-center gap-6">
          <div class="hidden xl:flex flex-col items-end font-mono">
            <div class="flex items-center gap-2">
              <span class="text-[9px] text-cyan-500/80">LAB_SESSION_01</span>
              <div class="size-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]"></div>
            </div>
          </div>

          <button onclick={() => scrollTo("game-list")} class="relative px-6 py-2 overflow-hidden border border-white/20 group/btn active:scale-95 transition-all rounded-lg">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 translate-y-[102%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            <span class="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover/btn:text-white transition-colors"> Initialize Game </span>
          </button>

          <button class="lg:hidden p-2 text-cyan-400" onclick={() => (menuOpen = true)}>
            <Menu class="size-7" />
          </button>
        </div>
      </div>
    </div>
  </div>

  {#if menuOpen}
    <div transition:fade={{ duration: 300 }} class="fixed inset-0 bg-[#050505]/fb z-[300] p-12 flex flex-col items-center justify-center backdrop-blur-xl">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <button onclick={() => (menuOpen = false)} class="absolute top-10 right-10 p-4 border border-cyan-500/20 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all rounded-full">
        <X class="size-8" />
      </button>

      <div class="flex flex-col gap-4 w-full max-w-sm relative z-10 text-center">
        {#each navLinks as link, i}
          <button onclick={() => scrollTo(link.id)} class="group p-6 border-b border-white/5 hover:border-cyan-500/50 transition-all">
            <span class="text-4xl font-black italic uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-all">{link.name}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  :global(body) {
    font-family: "Inter", sans-serif;
  }
</style>
