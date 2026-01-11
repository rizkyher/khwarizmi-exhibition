<div class="w-full bg-primary/5 border-y border-primary/10 py-3 overflow-hidden whitespace-nowrap flex group">
  <div class="flex animate-marquee group-hover:pause-paused items-center gap-10">
    {#each Array(10) as _}
      <span class="flex items-center gap-2 text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
        <div class="size-1 bg-primary rounded-full"></div>
        New Game Build v1.0.4 Deployed
        <div class="size-1 bg-primary rounded-full"></div>
        Khwarizmi Event Live
        <div class="size-1 bg-primary rounded-full"></div>
        Server Status: Optimal
      </span>
    {/each}
  </div>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-marquee {
    display: flex;
    animation: marquee 30s linear infinite;
  }
</style>
