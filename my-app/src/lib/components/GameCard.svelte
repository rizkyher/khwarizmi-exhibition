<script lang="ts">
  import { Play, Star, Zap, Cpu, Activity, Lock, Share2 } from "@lucide/svelte";
  import type { Game } from "$lib/types/game";
  import { cn } from "$lib/utils/cn";

  let { game, onPlay }: { game: Game; onPlay?: (game: Game) => void } = $props();
  let hovered = $state(false);

  const accentColor = $derived(
    game.color === 'magenta' ? '#ec4899' : 
    game.color === 'purple' ? '#a855f7' : 
    '#22d3ee'
  );
</script>

<div 
  class="relative group h-[540px] w-full font-mono select-none"
  onmouseenter={() => (hovered = true)} 
  onmouseleave={() => (hovered = false)} 
  role="presentation"
>
  <div 
    class="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 -z-10 scale-95 group-hover:scale-105"
    style:background-color={accentColor}
  ></div>

  <div class={cn(
    "relative h-full w-full bg-[#0d0d0f] border border-white/10 flex flex-col transition-all duration-500 ease-out",
    hovered ? "border-primary/60 -translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)]" : ""
  )}>
    
    <div class="absolute top-0 left-0 h-[2px] bg-primary z-50 transition-all duration-700 w-0 group-hover:w-full"></div>

    <div class="h-8 shrink-0 flex items-center justify-between px-4 bg-white/[0.03] border-b border-white/10 relative overflow-hidden">
      <div class="flex items-center gap-2 z-10">
        <Activity class="size-3 text-primary animate-pulse" />
        <span class="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase group-hover:text-primary transition-colors">Link_Established</span>
      </div>
      <span class="text-[9px] text-white/20 font-bold uppercase tracking-widest z-10 group-hover:text-white/60">0x{game.id}</span>
    </div>

    <div class="relative h-48 shrink-0 overflow-hidden border-b border-white/10 bg-black group/viewport">
      {#if game.thumbnail}
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          class={cn(
            "w-full h-full object-cover transition-all duration-700", 
            hovered ? "scale-110 opacity-100 blur-0" : "grayscale opacity-40 blur-[2px]"
          )} 
        />
      {/if}

      <div class="absolute inset-0 z-20 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicKgR6S69wF/giphy.gif')] bg-cover mix-blend-screen"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] to-transparent opacity-80"></div>
      
      <div class="absolute top-4 right-4 flex flex-col items-end gap-1 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        <div class="bg-primary/10 border border-primary/40 px-2 py-0.5 text-[8px] text-primary font-bold tracking-tighter italic">LIVE_FEED</div>
      </div>
    </div>

    <div class="p-6 flex-grow flex flex-col gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
          <Zap class="size-3 text-primary fill-primary/20" />
          <span class="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">{game.genre}</span>
        </div>
        <h3 class="text-2xl font-black uppercase italic tracking-tighter text-white group-hover:tracking-normal transition-all duration-500">
          {game.title}
        </h3>
      </div>

      <p class="text-[11px] text-gray-500 leading-relaxed line-clamp-2 border-l border-white/10 pl-4 italic group-hover:text-gray-300 transition-colors">
        {game.description}
      </p>

      <div class="grid grid-cols-2 gap-2 mt-auto translate-y-2 opacity-50 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div class="bg-white/[0.02] border border-white/5 p-2 flex items-center gap-2 group-hover:bg-primary/5 group-hover:border-primary/20">
          <Cpu class="size-3 text-white/20 group-hover:text-primary transition-colors" />
          <span class="text-[8px] text-white/50 uppercase tracking-widest font-bold">Latency: 4ms</span>
        </div>
        <div class="bg-white/[0.02] border border-white/5 p-2 flex items-center gap-2 group-hover:bg-primary/5 group-hover:border-primary/20">
          <Lock class="size-3 text-white/20 group-hover:text-primary transition-colors" />
          <span class="text-[8px] text-white/50 uppercase tracking-widest font-bold">Secure_Link</span>
        </div>
      </div>
    </div>

    <div class="mt-auto px-6 pb-8 pt-2">
      <button 
        onclick={() => onPlay?.(game)}
        class="relative w-full group/btn perspective-1000"
      >
        <div class="absolute inset-0 bg-primary/40 border-2 border-primary opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-x-110 group-hover/btn:scale-y-125 transition-all duration-500 blur-sm -z-10"></div>
        
        <div class="relative overflow-hidden bg-black border border-primary/50 py-4 transition-all duration-300 group-hover/btn:border-white group-hover/btn:-translate-y-1">
          
          <div class="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

          <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-shimmer pointer-events-none z-10"></div>

        <div class="relative z-30 flex items-center justify-center gap-3">
         <div class="relative flex items-center">
         <Play class="size-4 fill-primary text-primary transition-colors duration-300" />
         <div class="absolute inset-0 bg-primary blur-md opacity-0 group-hover/btn:opacity-40 animate-pulse"></div>
         </div>
         <span class="text-xs font-[1000] uppercase tracking-[0.2em] text-primary transition-colors duration-300">
          Execute_Program
         </span>
        </div>


          <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary group-hover/btn:border-black transition-colors z-30"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary group-hover/btn:border-black transition-colors z-30"></div>
        </div>

        <div class="absolute inset-0 w-full h-[1px] bg-white/30 -translate-y-full group-hover/btn:animate-scan-button pointer-events-none z-40"></div>
      </button>

      <div class="mt-4 flex justify-between items-center opacity-20 group-hover:opacity-60 transition-all duration-700">
        <div class="flex items-center gap-2">
          <div class="size-1 bg-primary animate-ping"></div>
          <span class="text-[7px] font-bold text-white uppercase tracking-[0.3em]">Status: Authorized</span>
        </div>
        <Share2 class="size-3 text-white hover:text-primary transition-colors cursor-pointer" />
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes scan-button {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(300%); opacity: 0; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .animate-scan-button {
    animation: scan-button 2s linear infinite;
  }

  .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }

  :global(body) {
    background-color: #050505;
  }
</style>