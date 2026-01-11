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
  data-slot="card-header"
  class={cn(
    "relative @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-8 overflow-hidden",
    "has-data-[slot=card-action]:grid-cols-[1fr_auto]", 
    "group/header", 
    className
  )}
  {...restProps}
>
  <div class="pointer-events-none absolute inset-0 z-10 opacity-[0.03] bg-[perspective(500px)_rotateX(25deg)] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:20px_20px]"></div>

  <div class="absolute top-4 left-6 w-5 h-5 border-t border-l border-primary/30 group-hover/header:border-primary group-hover:scale-110 transition-all duration-300"></div>

  <div class="absolute top-4 right-6 flex items-center gap-2 opacity-40 group-hover/header:opacity-100 transition-opacity">
    <span class="text-[7px] font-mono font-black text-white uppercase tracking-widest">Live_Feed</span>
    <div class="h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_red] animate-pulse"></div>
  </div>

  <div class="absolute top-4 left-14 flex items-center gap-2 opacity-20 group-hover/header:opacity-80 transition-all">
    <div class="flex gap-0.5">
      <div class="w-[1px] h-2 bg-primary"></div>
      <div class="w-[1px] h-1 bg-primary self-end"></div>
      <div class="w-[1px] h-1.5 bg-primary self-center"></div>
    </div>
    <span class="text-[8px] font-mono font-bold text-primary uppercase tracking-[0.2em]">Signal_Locked</span>
  </div>

  <div class="relative z-0 overflow-hidden border border-white/5 bg-black/40 [clip-path:polygon(0_0,100%_0,100%_90%,96%_100%,0_100%)]">
    {@render children?.()}
    
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
  </div>
</div>