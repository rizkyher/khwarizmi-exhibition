<script lang="ts">
  import { X, Play, Globe, Cpu, Calendar } from "@lucide/svelte";
  import { fade, scale } from "svelte/transition";

  let { game, onClose } = $props();

  // Fungsi untuk menangani penutupan via Keyboard (Escape)
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div
  class="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4"
  role="button"
  tabindex="-1"
  onclick={(e) => e.target === e.currentTarget && onClose()}
  onkeydown={(e) => e.key === "Enter" && onClose()}
  transition:fade={{ duration: 200 }}
>
  <div
    class="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    transition:scale={{ start: 0.95, duration: 300 }}
  >
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="relative h-64 md:h-auto overflow-hidden bg-gray-900">
        <img src={game.image} alt={game.title} class="absolute inset-0 size-full object-cover opacity-70" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>

      <div class="p-8 md:p-12 flex flex-col">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 id="modal-title" class="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">
              {game.title}
            </h2>
            <div class="flex gap-2 mt-3">
              {#each game.tags || [] as tag}
                <span class="text-[9px] font-mono px-2 py-0.5 border border-white/10 rounded-md text-white/40 uppercase">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <button type="button" onclick={onClose} class="p-2 hover:bg-white/5 rounded-full transition-colors group" aria-label="Close modal">
            <X class="size-6 text-white/20 group-hover:text-white" />
          </button>
        </div>

        <p class="text-gray-400 text-sm leading-relaxed mb-8 font-light">
          {game.fullDescription}
        </p>

        <div class="mt-auto flex gap-4">
          <button type="button" class="flex-1 bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-white transition-all">
            <Play class="size-4 fill-current" />
            PLAY DEMO
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
