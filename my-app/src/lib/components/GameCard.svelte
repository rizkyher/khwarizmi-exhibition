<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Play, Users, Star, Clock, Zap, Target } from "@lucide/svelte";
  import type { Game } from "$lib/types/game";
  import { cn } from "$lib/utils/cn";

  let {
    game,
    onPlay,
  }: {
    game: Game;
    onPlay?: (game: Game) => void;
  } = $props();

  let hovered = $state(false);
  let showGlitch = $state(false);

  // Efek Glitch saat hover lama (Svelte 5 $effect)
  $effect(() => {
    if (!hovered) {
      showGlitch = false;
      return;
    }

    const timer = setTimeout(() => {
      showGlitch = true;
      const glitchTimer = setTimeout(() => (showGlitch = false), 200);
      return () => clearTimeout(glitchTimer);
    }, 1200);

    return () => clearTimeout(timer);
  });

  const getColorTheme = (color: string) => {
    const themes: Record<string, { bg: string; text: string; glow: string }> = {
      cyan: { bg: "bg-primary/20", text: "text-primary", glow: "shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]" },
      magenta: { bg: "bg-cyber-magenta/20", text: "text-cyber-magenta", glow: "shadow-[0_0_20px_rgba(255,0,255,0.4)]" },
      purple: { bg: "bg-cyber-purple/20", text: "text-cyber-purple", glow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]" },
    };
    return themes[color] ?? themes.cyan;
  };

  const theme = $derived(getColorTheme(game.color));
</script>

<div 
  class="relative group h-full pixel-font" 
  onmouseenter={() => (hovered = true)} 
  onmouseleave={() => (hovered = false)} 
  role="presentation"
>
  <div class={cn(
    "absolute -inset-1 opacity-0 group-hover:opacity-100 transition-none -z-10 border-[4px] border-double", 
    theme.bg
  )}></div>

  <Card class={cn(
    "h-full flex flex-col transition-all duration-75 bg-black border-[3px] rounded-none", 
    hovered ? "border-primary translate-x-1 translate-y-[-4px] shadow-[6px_6px_0px_0px_rgba(var(--primary-rgb),1)]" : "border-zinc-800 shadow-none"
  )}>
    
    <CardHeader class="p-0 overflow-hidden relative aspect-video border-b-[3px] border-zinc-800 rounded-none">
      {#if game.thumbnail}
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          class={cn(
            "w-full h-full object-cover [image-rendering:pixelated] brightness-75", 
            hovered ? "scale-105 brightness-100" : ""
          )} 
        />
      {/if}

      <div class="absolute inset-0 opacity-30 pointer-events-none" style="background-image: radial-gradient(#000 1px, transparent 0); background-size: 3px 3px;"></div>

      <div class="absolute top-2 left-2 flex flex-col">
        <div class={cn(
          "px-2 py-1 text-[8px] uppercase border-b-4 border-r-4",
          game.status === "Online" ? "bg-green-500 text-black border-green-900" : "bg-zinc-700 text-white border-zinc-900"
        )}>
          {game.status}
        </div>
      </div>

      <div class="absolute bottom-2 left-2 flex items-center gap-1 bg-black p-1 border-2 border-primary">
        <span class="text-[10px] text-yellow-400">★ {game.rating}</span>
      </div>
    </CardHeader>

    <CardContent class="flex-grow p-4 bg-black">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-2 h-2 bg-primary animate-[pulse_0.5s_infinite_steps(2)]"></div>
        <span class="text-[9px] text-primary/70 tracking-[2px]">LN_{game.id ?? "00"}</span>
      </div>

      <CardTitle class="text-base font-bold tracking-tighter leading-none mb-4 uppercase break-words">
        <span class={hovered ? "text-primary [text-shadow:2px_2px_0px_#500]" : "text-white"}>
          {game.title}
        </span>
      </CardTitle>

      <p class="text-zinc-500 text-[10px] leading-[1.4] line-clamp-2 mb-4 lowercase tracking-tight">
        >> {game.description}
      </p>
    </CardContent>

    <CardFooter class="border-t-[3px] border-zinc-800 bg-zinc-900/30 p-3 flex items-center justify-between">
      <div class="flex flex-col">
        <span class="text-[8px] text-primary/80 uppercase tracking-widest">{game.genre}</span>
      </div>

      <button 
        class="relative bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase hover:bg-white active:translate-y-1 transition-none border-b-4 border-r-4 border-primary-darker"
        onclick={() => onPlay?.(game)}
      >
        PLAY_NOW
      </button>
    </CardFooter>

    {#if hovered}
      <div class="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-20">
        <div class="w-full h-2 bg-white/20 animate-scanline"></div>
      </div>
    {/if}
  </Card>
</div>

<style>
  /* Menghilangkan semua lengkungan untuk kesan pixel */
  :global(.rounded-none) { border-radius: 0 !important; }

  @keyframes scanline {
    from { transform: translateY(-100%); }
    to { transform: translateY(400%); }
  }
  .animate-scanline {
    animation: scanline 1.5s steps(30) infinite;
  }
</style>