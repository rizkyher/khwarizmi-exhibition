<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card-title"
  class={cn(
    "relative flex flex-col gap-1",
    "font-black tracking-tighter uppercase italic", // Tipografi agresif
    "text-xl md:text-2xl leading-none",
    "text-foreground group-hover:text-primary transition-colors duration-300",
    className
  )}
  {...restProps}
>
  <span class="relative z-10 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0)] group-hover:drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)] transition-all">
    {@render children?.()}
  </span>

  <div class="flex items-center gap-1 mt-1 opacity-40 group-hover:opacity-100 transition-opacity">
    <div class="h-[3px] w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
    <div class="h-[1px] flex-grow bg-gradient-to-r from-primary to-transparent"></div>

    <div class="size-1 bg-primary rotate-45 hidden sm:block"></div>
  </div>

  <span class="absolute inset-0 text-primary/20 translate-x-[2px] -translate-y-[1px] select-none pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-pulse -z-10">
    {@render children?.()}
  </span>
</div>
