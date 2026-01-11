<script lang="ts">
  import { Github, Twitter, ExternalLink, Monitor, ChevronLeft, ChevronRight, Terminal } from "@lucide/svelte";

  const team = [
    {
      name: "Khwarizmi Dev",
      role: "Lead Architect",
      game: "Neural_Learning_01",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "from-cyan-500/20 to-cyan-500/5",
      accent: "border-cyan-500/50",
      tag: "CYAN_DEPT",
    },
    {
      name: "Vektor Designer",
      role: "Visual Engineer",
      game: "Future_Sim_Laboratory",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      color: "from-magenta-500/20 to-magenta-500/5",
      accent: "border-magenta-500/50",
      tag: "MAGENTA_DEPT",
    },
    {
      name: "Algorithm Tech",
      role: "Physics Specialist",
      game: "Khwarizmi_Calculus_3D",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "border-blue-500/50",
      tag: "BLUE_DEPT",
    },
    {
      name: "Cyber Security",
      role: "Protocol Officer",
      game: "Encryption_Void",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      color: "from-green-500/20 to-green-500/5",
      accent: "border-green-500/50",
      tag: "GREEN_DEPT",
    },
  ];

  let scrollContainer: HTMLDivElement;

  const scroll = (direction: "left" | "right") => {
    const amount = 350;
    scrollContainer.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };
</script>

<section id="mechanics" class="py-32 bg-[#050505] relative overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20"></div>

  <div class="container mx-auto px-6 max-w-7xl relative">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <div class="size-2 bg-cyan-500 animate-pulse"></div>
          <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.4em]">Personnel_Database_v.2.0</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter leading-none">
          DEV <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">UNITS.</span>
        </h2>
      </div>

      <div class="flex gap-2">
        <button onclick={() => scroll("left")} class="size-12 border-2 border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]">
          <ChevronLeft size={20} />
        </button>
        <button
          onclick={() => scroll("right")}
          class="size-12 border-2 border-white/10 flex items-center justify-center hover:bg-magenta-500 hover:text-black transition-all active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    <div bind:this={scrollContainer} class="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
      {#each team as member, i}
        <div class="min-w-[320px] md:min-w-[380px] snap-center group relative">
          <div class="absolute inset-0 translate-x-3 translate-y-3 bg-white/[0.02] border-r border-b border-white/5 pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

          <div class="relative bg-gradient-to-br {member.color} border-2 {member.accent} p-1 backdrop-blur-sm">
            <div class="flex items-center justify-between p-3 border-b border-white/10 mb-1 bg-black/40">
              <span class="text-[8px] font-mono text-white/40 uppercase">{member.tag} // ID_{i + 102}</span>
              <Terminal size={12} class="text-white/20" />
            </div>

            <div class="relative aspect-square overflow-hidden mb-1 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={member.image} alt={member.name} class="size-full object-cover scale-110 group-hover:scale-100 transition-transform" />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            <div class="p-6 bg-black/90">
              <h4 class="text-2xl font-black italic text-white uppercase tracking-tighter mb-1">{member.name}</h4>
              <p class="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span class="size-1 bg-cyan-500"></span>
                {member.role}
              </p>

              <div class="pt-4 border-t border-white/5 space-y-3">
                <div class="flex items-center gap-2">
                  <Monitor class="size-3 text-white/30" />
                  <span class="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Assigned_Project:</span>
                </div>
                <div class="bg-white/5 p-3 flex items-center justify-between group/game hover:bg-cyan-500 hover:text-black transition-all cursor-pointer border-l-2 border-magenta-500">
                  <span class="text-[11px] font-black uppercase italic tracking-widest">{member.game}</span>
                  <ExternalLink class="size-3" />
                </div>
              </div>

              <div class="flex gap-4 mt-8 pt-4 border-t border-white/5">
                <button class="text-white/30 hover:text-cyan-400 transition-colors"><Github size={16} /></button>
                <button class="text-white/30 hover:text-magenta-400 transition-colors"><Twitter size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-8 border-2 border-white/5 p-4 flex items-center justify-between font-mono text-[9px] text-white/20">
      <div class="flex gap-4">
        <span class="text-cyan-500/50">SCROLL_STATUS: READY</span>
        <span class="hidden md:inline">SYSTEM_OVR: NO_ERROR</span>
      </div>
      <div class="flex gap-1">
        {#each team as _, i}
          <div class="w-4 h-1 bg-white/10 group-hover:bg-cyan-500"></div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* Sembunyikan scrollbar tapi tetap bisa scroll */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  h2,
  h4,
  span {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
</style>
