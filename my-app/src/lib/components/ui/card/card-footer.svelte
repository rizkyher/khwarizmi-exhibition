<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let { 
    ref = $bindable(null), 
    class: className, 
    children, 
    ...restProps 
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div 
  bind:this={ref} 
  data-slot="card-footer" 
  class={cn(
    "relative flex items-center px-6 py-5 mt-auto", 
    // Menggunakan border tipis dan background gelap transparan
    "border-t border-white/10 bg-black/20", 
    "overflow-hidden group/footer", 
    className
  )} 
  {...restProps}
>
  <div class="absolute inset-x-0 top-0 h-[1px] bg-primary/60 shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] -translate-y-full group-hover/footer:animate-scan-line opacity-0 group-hover/footer:opacity-100 pointer-events-none"></div>

  <div class="absolute bottom-1.5 left-6 flex gap-4 opacity-30 group-hover/footer:opacity-70 transition-opacity">
    <div class="flex items-center gap-1">
      <div class="w-1 h-1 bg-primary"></div>
      <span class="text-[8px] font-mono uppercase tracking-[0.2em] text-white">SYS.LN_042</span>
    </div>
    <span class="text-[8px] font-mono uppercase tracking-[0.2em] text-white hidden sm:block">LINK_ESTABLISHED</span>
  </div>

  <div class="relative z-10 flex w-full items-center justify-between gap-4">
    {@render children?.()}
  </div>

  <div class="absolute bottom-0 right-0 w-4 h-4 overflow-hidden pointer-events-none">
    <div class="absolute bottom-0 right-0 w-[2px] h-6 bg-primary/20 rotate-45 translate-x-1 translate-y-1 group-hover/footer:bg-primary transition-colors"></div>
  </div>
</div>

<style>
  @keyframes scan-line {
    0% { transform: translateY(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(60px); opacity: 0; }
  }

  .animate-scan-line {
    animation: scan-line 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
</style>