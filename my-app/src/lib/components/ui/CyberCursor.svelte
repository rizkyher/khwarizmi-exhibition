<script lang="ts">
  let { x = 0, y = 0 } = $props();
</script>

<div class="fixed pointer-events-none z-[999] transition-transform duration-75 ease-out hidden lg:block" style="transform: translate3d({x}px, {y}px, 0)">
  <div class="relative -translate-x-1/2 -translate-y-1/2">
    <div class="absolute h-4 w-[1px] bg-primary -top-5 left-1/2"></div>
    <div class="absolute h-4 w-[1px] bg-primary -bottom-5 left-1/2"></div>
    <div class="absolute w-4 h-[1px] bg-primary -left-5 top-1/2"></div>
    <div class="absolute w-4 h-[1px] bg-primary -right-5 top-1/2"></div>

    <div class="absolute top-4 left-4 bg-primary/10 backdrop-blur-md border border-primary/20 p-1 min-w-[80px]">
      <div class="text-[8px] font-mono text-primary leading-none uppercase tracking-tighter">
        Loc_X: {Math.round(x)}<br />
        Loc_Y: {Math.round(y)}
      </div>
    </div>
  </div>
</div>
