<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let { 
    ref = $bindable(null), 
    class: className, 
    children, 
    ...restProps 
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<div class="relative flex gap-4 group/desc">
  <div class="flex flex-col items-center py-1">
    <div class="w-1 h-1 bg-primary/60 group-hover/desc:bg-primary group-hover/desc:scale-125 transition-all duration-300"></div>
    <div class="w-[1px] flex-grow bg-white/5 group-hover/desc:bg-primary/20 transition-colors duration-500"></div>
  </div>

  <div class="flex flex-col gap-1.5">
    <div class="flex items-center gap-2">
       <span class="text-[9px] font-mono uppercase tracking-[0.2em] text-primary/40 group-hover/desc:text-primary transition-colors"> 
         DATA_DESC_BLOCK 
       </span>
       <div class="h-[1px] w-4 bg-white/5"></div>
    </div>

    <p
      bind:this={ref}
      data-slot="card-description"
      class={cn(
        // Ukuran teks disesuaikan untuk kenyamanan UX (text-[13px])
        "text-[13px] leading-relaxed text-gray-500 font-sans italic",
        "selection:bg-primary/30 selection:text-white",
        "group-hover/desc:text-gray-300 transition-colors duration-300",
        className
      )}
      {...restProps}
    >
      <span class="text-primary/60 mr-1">//</span>
      {@render children?.()}
    </p>
  </div>

  <div class="absolute -bottom-1 -right-2 opacity-0 group-hover/desc:opacity-100 transition-opacity">
    <div class="w-1 h-1 bg-primary/20"></div>
  </div>
</div>