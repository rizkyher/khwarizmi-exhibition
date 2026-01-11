<script lang="ts">
  import GameCard from "./GameCard.svelte";
  import GameModal from "./GameModal.svelte";
  import games from "$lib/data/games";
  import type { Game } from "$lib/types/game";
  export let filter: string;

  $: filteredGames = filter === "All Games" ? games : games.filter((g) => g.genre.includes(filter));

  let activeGame: Game | null = null;
</script>

<section class="py-24 max-w-7xl mx-auto px-6">
  <h2 class="text-3xl font-bold text-neon-cyan mb-12">Simulation Games</h2>

  <div class="grid md:grid-cols-3 gap-8">
    {#each filteredGames as game}
      <GameCard {game} onPlay={(g) => (activeGame = g)} />
    {/each}
  </div>

  {#if activeGame}
    <GameModal game={activeGame} onClose={() => (activeGame = null)} />
  {/if}
</section>
