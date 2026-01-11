<script lang="ts">
  import GameCard from "./GameCard.svelte";
  import GameModal from "./GameModal.svelte";
  import games from "$lib/data/games";
  import type { Game } from "$lib/types/game";
  import { Database, Cpu, Activity } from "@lucide/svelte";

  let { filter = "All Games" } = $props();

  let filteredGames = $derived(filter === "All Games" ? games : games.filter((g) => g.genre.includes(filter)));

  let activeGame = $state<Game | null>(null);
</script>

<section id="game-list" class="relative py-24 min-h-screen overflow-hidden bg-[#050505]">
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"
    ></div>

    <div class="absolute top-1/4 -left-20 size-96 bg-cyan-500/5 blur-[120px] rounded-full animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-20 size-96 bg-magenta-500/5 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s"></div>

    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] bg-[length:100%_8px] animate-scanline"></div>
  </div>

  <div class="container mx-auto px-6 max-w-7xl relative z-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 border-b border-white/5 pb-12">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="flex gap-1">
            <div class="w-1 h-4 bg-cyan-500"></div>
            <div class="w-1 h-4 bg-white/20"></div>
            <div class="w-1 h-4 bg-magenta-500"></div>
          </div>
          <span class="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">System_Archive // 0xAF24</span>
        </div>
        <h2 class="text-5xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">
          GAME <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">DATABASE.</span>
        </h2>
      </div>

      <div class="flex gap-8 items-center">
        <div class="hidden sm:block space-y-2">
          <div class="flex items-center gap-2 text-cyan-400/60">
            <Database size={10} />
            <span class="text-[8px] font-mono uppercase">Node_Status</span>
          </div>
          <div class="flex gap-1">
            {#each Array(5) as _, i}
              <div class="h-1 w-4 {i < 4 ? 'bg-cyan-500' : 'bg-white/10'}"></div>
            {/each}
          </div>
        </div>
        <div class="text-right">
          <div class="flex items-center gap-2 text-magenta-400 justify-end mb-1">
            <span class="text-[9px] font-mono uppercase tracking-tighter">Query: {filter.replace(" ", "_")}</span>
            <Activity size={10} class="animate-pulse" />
          </div>
          <div class="text-[10px] font-mono text-white/20 uppercase">Result: {filteredGames.length} Units</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each filteredGames as game, i}
        <div class="relative group opacity-0 animate-in-fade" style="animation-delay: {i * 100}ms; animation-fill-mode: forwards;">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

          <div class="relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden group-hover:border-cyan-500/30 transition-all duration-300">
            <GameCard {game} onPlay={(g) => (activeGame = g)} />
          </div>
        </div>
      {:else}
        <div class="col-span-full py-32 text-center border border-dashed border-white/5 rounded-2xl">
          <p class="font-mono text-white/20 uppercase tracking-[0.5em]">Data_Not_Found</p>
        </div>
      {/each}
    </div>
  </div>
</section>

{#if activeGame}
  <GameModal game={activeGame} onClose={() => (activeGame = null)} />
{/if}

<style>
  @keyframes scanline {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes in-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-scanline {
    animation: scanline 12s linear infinite;
  }

  .animate-in-fade {
    animation: in-fade 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
</style>
