<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card-content"
  class={cn(
    "relative px-6 py-4",
    // Efek background pudar untuk memisahkan konten dari header kartu
    "bg-linear-to-b from-transparent via-primary/5 to-primary/10",
    // Font styling default untuk konten
    "text-sm leading-relaxed text-muted-foreground font-sans",
    className
  )}
  {...restProps}
>
  <div class="absolute top-0 left-6 right-6 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

  <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-primary/40 group-hover:h-12 group-hover:bg-primary transition-all duration-300"></div>

  <div class="relative z-10 space-y-2">
    {@render children?.()}
  </div>

  <div class="absolute bottom-1 right-1 opacity-20">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-primary">
      <path d="M12 8V12H8" stroke="currentColor" stroke-width="1" />
    </svg>
  </div>
</div>
