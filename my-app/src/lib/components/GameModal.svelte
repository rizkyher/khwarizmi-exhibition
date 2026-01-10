<script lang="ts">
  export let game;
  export let onClose;
</script>

<div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
  <div class="bg-dark border border-neon-cyan p-8 rounded-xl max-w-lg w-full shadow-neon animate-fade-in">
    <h2 class="text-2xl text-neon-cyan">{game.title}</h2>
    <p class="text-gray-300 mt-4">{game.fullDescription}</p>

    <button class="mt-6 text-neon-magenta hover:underline" on:click={onClose}> Close </button>
  </div>
</div>
