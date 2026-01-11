<script lang="ts">
  import { Github, Twitter, ExternalLink, Monitor, ChevronLeft, ChevronRight, Terminal, Cpu, Share2 } from "@lucide/svelte";

  const team = [
    {
      name: "Khwarizmi Dev",
      role: "Lead Architect",
      game: "Neural_Learning_01",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "from-cyan-500/20 to-cyan-500/5",
      accent: "border-cyan-500/50",
      tag: "CYAN_DEPT",
      spec: "0x88F",
    },
    {
      name: "Vektor Designer",
      role: "Visual Engineer",
      game: "Future_Sim_Laboratory",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      color: "from-magenta-500/20 to-magenta-500/5",
      accent: "border-magenta-500/50",
      tag: "MAGENTA_DEPT",
      spec: "0x44A",
    },
    {
      name: "Algorithm Tech",
      role: "Physics Specialist",
      game: "Khwarizmi_Calculus_3D",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "border-blue-500/50",
      tag: "BLUE_DEPT",
      spec: "0x11C",
    },
    {
      name: "Cyber Security",
      role: "Protocol Officer",
      game: "Encryption_Void",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      color: "from-green-500/20 to-green-500/5",
      accent: "border-green-500/50",
      tag: "GREEN_DEPT",
      spec: "0xEE2",
    },
  ];

  let scrollContainer: HTMLDivElement;

  const scroll = (direction: "left" | "right") => {
    const amount = 380;
    scrollContainer.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };
</script>

<section id="mechanics" class="py-32 bg-[#050505] relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
  <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20"></div>

  <div class="container mx-auto px-6 max-w-7xl relative">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
      <div class="relative">
        <div class="flex items-center gap-3 mb-4">
          <div class="size-3 bg-cyan-500 animate-[ping_2s_infinite]"></div>
          <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em] flex items-center gap-2">
            <Cpu size={12} /> Live_Database_Operational
          </span>
        </div>
        <h2 class="text-6xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-[0.8]">
          DEV <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-500 animate-gradient-x">UNITS.</span>
        </h2>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden md:block text-right font-mono text-[9px] text-white/20 uppercase tracking-widest mr-4 leading-tight">
          System_Awaiting_Input<br />Scroll_To_Explore_Units
        </div>
        <div class="flex gap-2 p-1 bg-white/5 border border-white/10 backdrop-blur-md">
          <button onclick={() => scroll("left")} class="size-14 bg-black border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all group/btn">
            <ChevronLeft size={24} class="group-active/btn:-translate-x-1 transition-transform" />
          </button>
          <button onclick={() => scroll("right")} class="size-14 bg-black border border-white/10 flex items-center justify-center hover:bg-magenta-500 hover:text-black transition-all group/btn">
            <ChevronRight size={24} class="group-active/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>

    <div bind:this={scrollContainer} class="flex overflow-x-auto gap-10 pb-20 snap-x snap-mandatory no-scrollbar scroll-smooth relative z-30">
      {#each team as member, i}
        <div class="min-w-[320px] md:min-w-[400px] snap-center group relative">
          <div class="absolute -top-4 -left-4 size-8 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div class="absolute -bottom-4 -right-4 size-8 border-b-2 border-r-2 border-magenta-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div class="relative bg-[#0a0a0a] border border-white/10 p-2 overflow-hidden">
            <div class="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-2 font-mono text-[8px] text-white/40">
              <div class="flex items-center gap-2">
                <span class="size-1.5 bg-cyan-500 shadow-[0_0_5px_#06b6d4]"></span>
                {member.tag} // {member.spec}
              </div>
              <span>ID_{i + 800}</span>
            </div>

            <div class="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={member.image} alt={member.name} class="size-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />

              <div class="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWU0EB9Lp9c9x1/giphy.gif')] mix-blend-screen"></div>

              <div class="absolute top-4 right-4 text-white font-mono text-[10px] bg-black/80 px-2 py-1 border-l-2 border-magenta-500 uppercase italic">Active</div>
            </div>

            <div class="p-6 bg-gradient-to-b from-black/0 to-black/80">
              <div class="relative">
                <h4 class="text-3xl font-black italic text-white uppercase tracking-tighter mb-1 leading-none group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h4>
                <div class="h-0.5 w-0 group-hover:w-full bg-cyan-500 transition-all duration-500"></div>
              </div>

              <p class="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] mt-3 flex items-center gap-3">
                <Terminal size={10} class="text-magenta-500" />
                {member.role}
              </p>

              <div class="mt-8 space-y-2">
                <div class="flex justify-between items-end">
                  <span class="text-[8px] font-mono text-white/20 uppercase">Project_Assigned</span>
                  <Share2 size={10} class="text-white/20" />
                </div>
                <div class="group/project relative cursor-pointer">
                  <div class="absolute inset-0 bg-white/5 -skew-x-12 group-hover/project:bg-magenta-500 transition-colors"></div>
                  <div class="relative px-4 py-3 flex items-center justify-between">
                    <span class="text-[11px] font-black italic text-white group-hover/project:text-black uppercase">{member.game}</span>
                    <ExternalLink size={12} class="text-white/20 group-hover/project:text-black" />
                  </div>
                </div>
              </div>

              <div class="flex gap-6 mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                <button class="hover:text-cyan-400 transition-colors"><Github size={18} /></button>
                <button class="hover:text-magenta-400 transition-colors"><Twitter size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/[0.02] border border-white/5 font-mono text-[8px] text-white/30 uppercase tracking-[0.2em]">
      <div class="flex items-center gap-2 border-r border-white/5">
        <div class="size-1.5 bg-green-500 rounded-full animate-pulse"></div>
        DB_STATUS: ENCRYPTED
      </div>
      <div class="flex items-center gap-2 border-r border-white/5">
        <Monitor size={10} /> UNIT_COUNT: {team.length}
      </div>
      <div class="hidden md:flex items-center gap-2 border-r border-white/5">PROTOCOL: KHWARIZMI_V2</div>
      <div class="flex justify-end gap-1">
        {#each Array(8) as _, i}
          <div class="w-2 h-1 bg-cyan-500/20" style="opacity: {1 - i * 0.1}"></div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
  }
</style>
