<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card"
  class={cn(
    // 1. Base Styling: Menghapus rounded standar, menggunakan Clip-path
    "relative flex flex-col bg-black/80 backdrop-blur-xl border-primary/20",
    "transition-all duration-500 ease-out group/card",
    "shadow-[0_0_20px_rgba(0,0,0,0.5)]",

    // 2. Cyberpunk Shape (Potongan sudut di kiri atas dan kanan bawah)
    "[clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]",

    // 3. Hover Effects
    "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]",
    "hover:translate-y-1",

    className
  )}
  {...restProps}
>
  <div class="absolute inset-0 z-[-1] bg-primary/10 opacity-0 group-hover/card:opacity-100 transition-opacity blur-xl"></div>

  <div class="absolute top-0 left-0 w-10 h-0.5 bg-primary/50 group-hover/card:w-15 group-hover/card:bg-primary transition-all"></div>
  <div class="absolute top-0 left-0 w-0.5 h-10 bg-primary/50 group-hover/card:h-15 group-hover/card:bg-primary transition-all"></div>

  <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]]"></div>

  <div class="relative z-10 flex flex-col h-full">
    {@render children?.()}
  </div>

  <div class="absolute bottom-1 right-6">
    <span class="text-[7px] font-mono text-primary/20 group-hover/card:text-primary/60 transition-colors uppercase tracking-[0.3em]"> Hardware_ID: 0x88F </span>
  </div>
</div>

<style>
  /* Menambahkan pseudo-border karena clip-path memotong border standar Tailwind */
  [data-slot="card"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px; /* Ketebalan border */
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.5), transparent, rgba(var(--primary-rgb), 0.3));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
  }
</style>
