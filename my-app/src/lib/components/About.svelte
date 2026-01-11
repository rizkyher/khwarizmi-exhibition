<script lang="ts">
  import { Cpu, Code2, Layers, Zap, Terminal, Share2 } from "@lucide/svelte";
  import { onMount } from "svelte";

  let visible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) visible = true;
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("about");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });

  const specs = [
    { label: "Engine", value: "Unity 3D / WebGL", icon: Cpu, color: "text-cyan-400" },
    { label: "Core Logic", value: "Neural_Algorithm.js", icon: Code2, color: "text-purple-400" },
    { label: "Interface", value: "Svelte 5 / Pixel_CSS", icon: Layers, color: "text-magenta-500" },
  ];
</script>

<section id="about" class="relative py-32 overflow-hidden bg-[#050505]">
  <div class="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
  <div class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>

  <div class="absolute top-40 left-10 text-[120px] font-black text-cyan-500/[0.03] select-none uppercase tracking-tighter font-mono italic">PROTOCOL_01</div>

  <div class="container mx-auto px-6 max-w-7xl relative z-10">
    <div class="grid lg:grid-cols-2 gap-20 items-center">
      <div class="relative group">
        <div class="absolute -top-2 -left-2 size-4 border-l-2 border-t-2 border-cyan-400 z-20"></div>
        <div class="absolute -bottom-2 -right-2 size-4 border-r-2 border-b-2 border-magenta-500 z-20"></div>

        <div class="relative z-10 aspect-square overflow-hidden border-2 border-white/5 bg-black">
          <div class="absolute inset-0 z-20 mix-blend-overlay opacity-30 bg-gradient-to-br from-cyan-500 via-transparent to-magenta-500 group-hover:opacity-50 transition-opacity"></div>

          <img
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000"
            alt="Dev Process"
            class="size-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
        </div>

        <div class="absolute -bottom-8 -right-4 md:right-8 bg-black/90 border-2 border-cyan-500/30 p-5 backdrop-blur-xl z-20 shadow-[8px_8px_0px_rgba(6,182,212,0.2)]">
          <div class="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
            <Terminal class="size-3 text-cyan-400" />
            <span class="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Sys_Specs.log</span>
          </div>
          <div class="space-y-4">
            {#each specs as spec}
              <div class="flex items-center gap-3">
                <svelte:component this={spec.icon} class="size-4 {spec.color}" />
                <div>
                  <p class="text-[8px] text-white/30 uppercase font-mono">{spec.label}</p>
                  <p class="text-[10px] text-white font-bold font-mono tracking-tighter">{spec.value}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border-l-4 border-cyan-500">
          <span class="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Initial_Entry // 2024</span>
        </div>

        <h2 class="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter leading-none">
          CODING <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-500">THE BEYOND.</span>
        </h2>

        <div class="space-y-6 text-white/50 leading-relaxed font-mono text-xs md:text-sm">
          <p>
            Menghidupkan kembali visi <span class="text-cyan-400 italic">Al-Khwarizmi</span> dalam medium digital modern. Proyek ini mengeksplorasi batas antara <span class="text-magenta-400">logika murni</span> dan estetika simulasi.
          </p>
          <p>Setiap baris kode adalah koordinat. Setiap mekanik adalah persamaan. **KHWARIZMI** bukan sekadar visual, tapi arsitektur interaksi yang presisi.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div class="space-y-2">
            <div class="flex justify-between text-[9px] font-mono text-cyan-400/60 uppercase">
              <span>Optimization</span>
              <span>[ 98% ]</span>
            </div>
            <div class="h-1.5 bg-white/5 p-[1px]">
              <div class="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" style="width: 98%"></div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between text-[9px] font-mono text-magenta-400/60 uppercase">
              <span>Synaptic_Flow</span>
              <span>[ 85% ]</span>
            </div>
            <div class="h-1.5 bg-white/5 p-[1px]">
              <div class="h-full bg-magenta-500 shadow-[0_0_10px_#d946ef]" style="width: 85%"></div>
            </div>
          </div>
        </div>

        <button class="relative group mt-4">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-magenta-500 opacity-30 blur-sm group-hover:opacity-60 transition-opacity"></div>
          <div class="relative flex items-center gap-4 bg-black border border-white/20 px-6 py-4 transition-transform group-active:scale-95">
            <Zap class="size-5 text-cyan-400 group-hover:animate-bounce" />
            <div class="text-left">
              <p class="text-[8px] font-mono text-white/40 uppercase">Root_Access</p>
              <p class="text-xs font-black text-white uppercase tracking-widest">View Documentation</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  /* Pixelated Text Rendering */
  h2,
  span,
  p,
  button {
    -webkit-font-smoothing: none;
    text-rendering: optimizeSpeed;
  }

  /* Shadow box pixel effect */
  .shadow-pixel {
    box-shadow: 4px 4px 0px 0px rgba(6, 182, 212, 0.3);
  }
</style>
