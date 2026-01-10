<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<div class="relative flex gap-3 group/desc">
  <div class="flex flex-col items-center gap-1 py-1">
    <div class="w-[2px] h-2 bg-primary/40 group-hover/desc:bg-primary transition-colors"></div>
    <div class="w-[2px] flex-grow bg-gradient-to-b from-primary/20 to-transparent"></div>
  </div>

  <div class="flex flex-col gap-1">
    <span class="text-[8px] font-mono uppercase tracking-[0.2em] text-primary/30"> Descr_Data_Node </span>

    <p
      bind:this={ref}
      data-slot="card-description"
      class={cn("text-muted-foreground text-sm leading-relaxed", "font-sans selection:bg-primary selection:text-black", "group-hover/desc:text-foreground transition-colors duration-300", className)}
      {...restProps}
    >
      {@render children?.()}
    </p>
  </div>
</div>
