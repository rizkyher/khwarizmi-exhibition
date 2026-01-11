<script lang="ts">
  import { Github, Twitter, MessageSquare, Terminal, Cpu, ShieldCheck, Zap } from "@lucide/svelte";
  import { onMount } from "svelte";

  let time = $state(new Date().toLocaleTimeString());
  let battery = $state(100);

  onMount(() => {
    const timer = setInterval(() => {
      time = new Date().toLocaleTimeString([], { hour12: false });
      // Simulasi fluktuasi daya sistem
      battery = 95 + Math.floor(Math.random() * 5);
    }, 1000);
    return () => clearInterval(timer);
  });
</script>

<footer class="relative bg-[#050505] pt-20 pb-10 overflow-hidden border-t-2 border-white/5">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(6,182,212,0.07)_0%,transparent_50%)]"></div>

  <div class="container mx-auto px-6 max-w-7xl relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="md:col-span-2 space-y-6">
        <div class="flex items-center gap-3">
          <div class="size-8 bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center">
            <Terminal size={16} class="text-cyan-400" />
          </div>
          <h2 class="text-2xl font-black italic tracking-tighter text-white uppercase">
            KHWA<span class="text-magenta-500"></span>RIZMI
          </h2>
        </div>
        <p class="text-white/40 font-mono text-xs leading-relaxed max-w-sm">
          // INDEPENDENT_RESEARCH_FACILITY_01 <br />
          Mengeksplorasi batas antara algoritma klasik dan interaksi digital modern. Semua sistem beroperasi di bawah protokol enkripsi Khwarizmi.
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-[10px] font-mono text-cyan-500 uppercase tracking-widest border-b border-cyan-500/20 pb-2">System_Log</p>
        <div class="space-y-2 font-mono text-[9px] text-white/30 uppercase">
          <div class="flex justify-between">
            <span>Uptime:</span>
            <span class="text-white">247:12:05:01</span>
          </div>
          <div class="flex justify-between">
            <span>Core_Temp:</span>
            <span class="text-green-500">32°C // STABLE</span>
          </div>
          <div class="flex justify-between">
            <span>Auth_Level:</span>
            <span class="text-magenta-500">ADMIN_ROOT</span>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-[10px] font-mono text-magenta-500 uppercase tracking-widest border-b border-magenta-500/20 pb-2">Connect_Nodes</p>
        <div class="flex flex-col gap-3">
          <a href="#" class="flex items-center gap-3 text-xs text-white/50 hover:text-cyan-400 transition-colors group">
            <Twitter size={14} class="group-hover:rotate-12 transition-transform" />
            <span class="font-mono">TWITTER_LINK</span>
          </a>
          <a href="#" class="flex items-center gap-3 text-xs text-white/50 hover:text-magenta-400 transition-colors group">
            <Github size={14} class="group-hover:scale-110 transition-transform" />
            <span class="font-mono">GITHUB_REPO</span>
          </a>
          <a href="#" class="flex items-center gap-3 text-xs text-white/50 hover:text-purple-400 transition-colors group">
            <MessageSquare size={14} class="group-hover:-translate-y-1 transition-transform" />
            <span class="font-mono">DISCORD_NODE</span>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/5 pt-8 mt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-4 order-2 md:order-1">
          <div class="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-white/40">© 2026_KHWARIZMI</div>
          <div class="hidden sm:flex gap-1">
            {#each Array(3) as _}
              <div class="size-1 bg-cyan-500/30"></div>
            {/each}
          </div>
        </div>

        <div class="w-full md:w-auto flex items-center gap-6 px-4 py-2 bg-white/[0.02] border border-white/5 order-1 md:order-2">
          <div class="flex items-center gap-2">
            <Cpu size={12} class="text-cyan-500" />
            <span class="text-[9px] font-mono text-white/60">{battery}%_PWR</span>
          </div>
          <div class="h-3 w-[1px] bg-white/10"></div>
          <div class="flex items-center gap-2">
            <ShieldCheck size={12} class="text-green-500" />
            <span class="text-[9px] font-mono text-white/60">SECURE</span>
          </div>
          <div class="h-3 w-[1px] bg-white/10"></div>
          <div class="flex items-center gap-2 text-magenta-500">
            <Zap size={12} class="animate-pulse" />
            <span class="text-[9px] font-mono">{time}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-0 right-0 size-24 bg-gradient-to-tl from-cyan-500/10 to-transparent pointer-events-none"></div>
</footer>

<style>
  /* Mengatur font agar terlihat lebih teknis */
  footer {
    font-family: "JetBrains Mono", "Inter", monospace;
    letter-spacing: -0.02em;
  }
</style>
