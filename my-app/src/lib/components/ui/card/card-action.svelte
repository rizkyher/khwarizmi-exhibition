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
  data-slot="card-action"
  class={cn(
    "relative z-20", 
    "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    "flex flex-col gap-3 p-1", 
    className
  )}
  {...restProps}
>
  <div class="absolute -top-1 -right-1 w-5 h-5 border-t border-r border-primary/40 group-hover:border-primary transition-all duration-300">
    <div class="absolute top-0 right-0 h-1 w-1 bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
  </div>

  <div class="absolute -left-4 top-2 flex flex-col items-center gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity">
    <div class="w-[1px] h-8 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
    <span class="text-[7px] font-mono font-black text-primary vertical-text tracking-widest">
      ACT_04
    </span>
  </div>

  <div class="relative flex flex-col gap-2.5 group-hover:translate-x-[-1px] transition-transform duration-200">
    {@render children?.()}
  </div>

  <div class="absolute -bottom-1 -right-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-all">
    <div class="h-0.5 w-0.5 bg-primary/40"></div>
    <div class="h-0.5 w-2 bg-primary/40"></div>
  </div>
</div>

<style>
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg); /* Memutar agar teks terbaca dari bawah ke atas ala UI Sci-fi */
  }
</style>