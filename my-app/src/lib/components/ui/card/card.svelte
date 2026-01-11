<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="card"
  class={cn(
    // 1. Base Styling: Clean & Dark Glass
    "relative flex flex-col bg-black/60 backdrop-blur-md border border-white/10",
    "transition-all duration-300 ease-in-out group/card overflow-hidden",
    
    // 2. Shape: Potongan miring tipis di pojok kanan bawah (mirip elemen di gambar)
    "[clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]",

    // 3. Hover Effects: Lift & Subtle Glow
    "hover:border-primary/40 hover:-translate-y-1",
    "hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.2)]",

    className
  )}
  {...restProps}
>
  <div class="absolute -inset-[100%] z-[-1] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0,transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

  <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all"></div>
  
  <div class="absolute right-1 top-10 h-12 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>

  <div class="relative z-10 flex flex-col h-full p-0">
    {@render children?.()}
  </div>

  <div class="absolute bottom-0.5 right-4 flex items-center gap-1.5 opacity-30 group-hover/card:opacity-100 transition-opacity">
    <div class="h-1 w-1 bg-primary animate-pulse"></div>
    <span class="text-[8px] font-mono text-white uppercase tracking-widest">
      Auth_Verified
    </span>
  </div>
</div>

<style>
  /* Menghilangkan border standar yang terpotong clip-path dan menggantinya dengan border yang presisi */
  [data-slot="card"]::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border: 1px solid transparent;
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.3), transparent 40%, rgba(var(--primary-rgb), 0.1)) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
  }
</style>