<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} data-slot="card-footer" class={cn("relative flex items-center px-6 py-6 mt-2", "border-t border-primary/10 bg-primary/5", "overflow-hidden group/footer", className)} {...restProps}>
  <div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-[2px] w-full -translate-y-full group-hover/footer:animate-[scan_2s_linear_infinite] opacity-0 group-hover/footer:opacity-100 pointer-events-none"></div>

  <div class="absolute bottom-1 left-6 flex gap-4 opacity-20 group-hover/footer:opacity-50 transition-opacity">
    <span class="text-[7px] font-mono uppercase tracking-widest text-primary">LN: 042 // SC: 09</span>
    <span class="text-[7px] font-mono uppercase tracking-widest text-primary">SECURED_LINK</span>
  </div>

  <div class="relative z-10 flex w-full items-center justify-between gap-4">
    {@render children?.()}
  </div>

  <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/40"></div>
</div>

<style>
  @keyframes scan {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(3000%);
    } /* Melintasi seluruh tinggi footer */
  }
</style>
