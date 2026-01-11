<script lang="ts">
  import { Cpu, ChevronRight } from "@lucide/svelte";

  let { selected = $bindable() } = $props();
  const categories = ["All Games", "Action", "RPG", "Experimental", "Web3"];
</script>

<div class="relative group">
  <div class="flex items-center gap-2 mb-3 ml-2">
    <Cpu size={10} class="text-cyan-500 animate-pulse" />
    <span class="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">Select_Module_Archive</span>
  </div>

  <div class="flex flex-wrap items-center gap-2 p-1.5 bg-black/60 border border-white/5 rounded-lg backdrop-blur-xl relative">
    <div class="absolute -top-[1px] -left-[1px] size-2 border-l border-t border-cyan-500"></div>
    <div class="absolute -bottom-[1px] -right-[1px] size-2 border-r border-b border-magenta-500"></div>

    {#each categories as cat}
      <button
        onclick={() => (selected = cat)}
        class="relative px-5 py-2.5 text-[10px] font-mono font-bold tracking-tighter uppercase transition-all duration-300 overflow-hidden
        {selected === cat ? 'text-black z-10' : 'text-white/40 hover:text-white hover:bg-white/5'}"
      >
        {#if selected === cat}
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 -z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]" style="clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);"></div>
          <div class="absolute right-1 top-1/2 -translate-y-1/2">
            <ChevronRight size={10} class="text-black/50" />
          </div>
        {/if}

        <span class="relative">
          {cat.replace(" ", "_")}
        </span>
      </button>
    {/each}

    <div class="hidden md:flex items-center gap-2 ml-4 px-4 border-l border-white/10">
      <div class="size-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
      <span class="text-[8px] font-mono text-white/20 uppercase italic">Ready</span>
    </div>
  </div>
</div>

<style>
  button {
    /* Membuat teks terlihat lebih tajam gaya pixel */
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: none;
  }
</style>
