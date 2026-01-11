<script lang="ts">
  import { Cpu, Code2, Database } from "@lucide/svelte";
  let isOpen = $state(false);
</script>

<div class="fixed bottom-8 left-8 z-[100] group">
  {#if isOpen}
    <div class="absolute bottom-16 left-0 bg-black/90 border border-white/10 backdrop-blur-xl p-6 rounded-2xl w-64 shadow-2xl transition-all">
      <h4 class="text-primary font-black text-sm mb-4 border-b border-primary/20 pb-2">PROJECT STACK</h4>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <Cpu class="size-4 text-white/40" />
          <span class="text-xs text-white/80 font-mono text-[10px]">Engine: Unity / Svelte 5</span>
        </div>
        <div class="flex items-center gap-3">
          <Code2 class="size-4 text-white/40" />
          <span class="text-xs text-white/80 font-mono text-[10px]">Lang: C# / TypeScript</span>
        </div>
      </div>
    </div>
  {/if}

  <button
    onclick={() => (isOpen = !isOpen)}
    class="size-12 rounded-full bg-black border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
  >
    <Cpu class="size-5" />
  </button>
</div>
