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
  data-slot="card-title"
  class={cn(
    "relative flex flex-col gap-2",
    // Tipografi: Mengikuti gaya KHWARIZMI (Italic, Bold, Tracking Wide)
    "font-black tracking-[0.05em] uppercase italic italic font-sans", 
    "text-xl md:text-2xl leading-none",
    "text-white transition-all duration-300",
    className
  )}
  {...restProps}
>
  <span class="relative z-10 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan-300 transition-all duration-500">
    {@render children?.()}
  </span>

  <span class="absolute inset-0 text-primary/30 translate-x-[1px] translate-y-[1px] select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity -z-10">
    {@render children?.()}
  </span>

  <div class="flex items-center gap-2 mt-1">
    <div class="h-1 w-6 bg-primary group-hover:w-12 transition-all duration-500 ease-out"></div>
    
    <div class="h-[1px] flex-grow bg-gradient-to-r from-primary/40 via-primary/10 to-transparent"></div>

    <span class="hidden sm:block text-[8px] font-mono font-normal tracking-[0.3em] text-white/20 uppercase">
      ID_TSK
    </span>
  </div>

  <div class="absolute -top-1 -left-3 w-1 h-3 bg-primary/20 group-hover:bg-primary transition-colors"></div>
</div>