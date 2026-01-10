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

<div class="relative group h-full" onmouseenter={() => (hovered = true)} onmouseleave={() => (hovered = false)} role="presentation">
  <div class={cn("absolute -inset-2 rounded-none opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 -z-10", theme.bg)}></div>

  <Card class={cn("h-full flex flex-col transition-all duration-500", hovered ? "border-primary/60 translate-y-[-8px]" : "border-primary/10")}>
    <CardHeader class="p-0 overflow-hidden relative aspect-video">
      {#if game.thumbnail}
        <img src={game.thumbnail} alt={game.title} class={cn("w-full h-full object-cover transition-transform duration-1000", hovered ? "scale-110 blur-[1px] grayscale-0" : "scale-100 grayscale-[0.3]")} />
      {/if}

      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

      <div class="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
        <Badge variant={game.status === "Online" ? "neon" : "outline"} class="backdrop-blur-md">
          <Zap class="size-3 mr-1 fill-current" />
          {game.status}
        </Badge>

        <!-- <div class="flex flex-col items-end gap-1">
          <div class="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2 py-0.5 border-r-2 border-primary">
            <Users class="size-3 text-primary" />
            <span class="text-[10px] font-mono text-white">{game.players}</span>
          </div>
        </div> -->
      </div>

      <div class="absolute bottom-4 left-4 flex items-center gap-2">
        <div class="bg-primary/20 backdrop-blur-md p-1 border border-primary/40">
          <Star class="size-3 text-yellow-400 fill-yellow-400" />
        </div>
        <span class="text-xs font-black text-white drop-shadow-md">{game.rating}</span>
      </div>
    </CardHeader>

    <CardContent class="flex-grow pt-6">
      <div class="flex items-center gap-2 mb-2 opacity-40">
        <Target class="size-3" />
        <span class="text-[8px] font-mono tracking-widest uppercase">Node_Index: {game.id ?? "00"}</span>
      </div>

      <CardTitle class="mb-3">
        {game.title}
      </CardTitle>

      <p class="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-4 font-sans">
        {game.description}
      </p>

      <!-- <div class="flex flex-wrap gap-2">
        {#each game.tags as tag}
          <Badge variant="outline" class="text-[9px] lowercase opacity-70 hover:opacity-100 hover:border-primary transition-all">
            #{tag}
          </Badge>
        {/each}
      </div> -->
    </CardContent>

    <CardFooter class="border-t border-primary/10 bg-primary/5 p-4 flex items-center justify-between">
      <div class="flex flex-col">
        <!-- <div class="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
          <Clock class="size-3" />
          <span>{game.playtime}</span>
        </div> -->
        <span class="text-[10px] text-primary/60 font-black uppercase tracking-tighter">{game.genre}</span>
      </div>

      <Button variant="cyber" size="sm" class="h-8" onclick={() => onPlay?.(game)}>
        <Play class="size-3 mr-2 fill-current" />
        LAUNCH
      </Button>
    </CardFooter>

    {#if showGlitch}
      <div class="absolute inset-0 bg-primary/5 z-50 pointer-events-none mix-blend-overlay animate-glitch"></div>
    {/if}
  </Card>
</div>

<style>
  /* Animasi Glitch Khusus */
  @keyframes glitch {
    0% {
      transform: translate(0);
      clip-path: inset(0 0 0 0);
    }
    20% {
      transform: translate(-2px, 2px);
      clip-path: inset(20% 0 50% 0);
    }
    40% {
      transform: translate(2px, -2px);
      clip-path: inset(40% 0 10% 0);
    }
    60% {
      transform: translate(-5px, 0);
      clip-path: inset(10% 0 70% 0);
    }
    100% {
      transform: translate(0);
      clip-path: inset(0 0 0 0);
    }
  }
  .animate-glitch {
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
</style>
