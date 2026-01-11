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
  data-slot="card-content"
  class={cn(
    "relative px-6 py-5",
    // Menghilangkan bg-gradient yang berat, ganti dengan glass subtle
    "bg-white/[0.01] backdrop-blur-[2px]",
    // Tipografi: Menggunakan font-sans untuk body namun tetap dalam skala kecil & rapi
    "text-[13px] leading-relaxed text-gray-400 font-sans",
    className
  )}
  {...restProps}
>
  <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  <div class="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden">
    <div class="w-full h-1/3 bg-primary/40 group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out"></div>
  </div>

  <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30"></div>

  <div class="relative z-10 space-y-3">
    {@render children?.()}
  </div>

  <div class="absolute bottom-2 right-4 flex items-center gap-3">
    <span class="text-[7px] font-mono tracking-[0.2em] text-white/10 group-hover:text-primary/40 transition-colors uppercase">
      Data_Stream // Stable
    </span>
    <div class="flex gap-0.5">
      <div class="w-1 h-1 bg-white/10"></div>
      <div class="w-1 h-1 bg-white/10"></div>
      <div class="w-3 h-1 bg-primary/20"></div>
    </div>
  </div>
</div>