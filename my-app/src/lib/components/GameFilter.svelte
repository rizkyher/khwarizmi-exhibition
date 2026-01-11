<script lang="ts">
  let { selected = $bindable() } = $props();
  const categories = ["All Games", "Action", "RPG", "Experimental", "Web3"];
</script>

<div class="flex flex-wrap items-center gap-4 mb-10 p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md w-fit">
  {#each categories as cat}
    <button
      onclick={() => (selected = cat)}
      class="px-6 py-2 text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300
      {selected === cat ? 'bg-primary text-black shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]' : 'text-white/40 hover:text-white hover:bg-white/5'}"
    >
      {cat}
    </button>
  {/each}
</div>
