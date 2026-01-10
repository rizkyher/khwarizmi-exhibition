<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";
  import { fade } from "svelte/transition";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card-action"
  class={cn(
    "relative z-20", // Memastikan di atas elemen lain
    "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    "flex flex-col gap-2 p-2", // Layout internal untuk icon aksi
    className
  )}
  {...restProps}
>
  <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] transition-all duration-300"></div>

  <span class="absolute -left-12 top-2 text-[8px] font-mono text-primary/20 group-hover:text-primary/60 transition-colors uppercase tracking-tighter vertical-text hidden sm:block"> Action_Type // 04 </span>

  <div class="relative flex flex-col gap-2 transform group-hover:translate-x-[-2px] group-hover:translate-y-[2px] transition-transform duration-300">
    {@render children?.()}
  </div>
</div>

<style>
  /* Menampilkan teks secara vertikal untuk kesan estetik sci-fi */
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
</style>
