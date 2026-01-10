<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card-header"
  class={cn("relative @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 overflow-hidden", "has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", "group/header", className)}
  {...restProps}
>
  <div
    class="pointer-events-none absolute inset-0 z-10 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"
  ></div>

  <div class="absolute top-2 left-6 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover/header:border-primary transition-colors"></div>
  <div class="absolute top-2 right-6 w-1 h-1 bg-red-500 animate-pulse rounded-full shadow-[0_0_5px_red] opacity-0 group-hover/header:opacity-100 transition-opacity"></div>

  <div class="absolute top-2 left-12 flex items-center gap-1 opacity-20 group-hover/header:opacity-100 transition-opacity">
    <span class="text-[8px] font-mono font-bold text-primary tracking-tighter uppercase">Signal_Locked</span>
  </div>

  <div class="relative z-0 overflow-hidden rounded-sm border border-white/5">
    {@render children?.()}
  </div>
</div>
