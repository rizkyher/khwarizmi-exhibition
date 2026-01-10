<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Play, Users, Star, Clock, Zap } from "@lucide/svelte";

  import type { Game } from "$lib/types/game";

  // ✅ props (Svelte 5)
  let { game }: { game: Game } = $props();

  // ✅ state (Svelte 5)
  let hovered = $state(false);
  let showGlitch = $state(false);

  // ✅ effect dengan cleanup
  $effect(() => {
    if (!hovered) return;

    const timer = setTimeout(() => {
      showGlitch = true;
      const glitchTimer = setTimeout(() => {
        showGlitch = false;
      }, 300);

      return () => clearTimeout(glitchTimer);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      cyan: "from-primary to-cyber-purple",
      magenta: "from-cyber-magenta to-pink-600",
      purple: "from-cyber-purple to-violet-600",
    };
    return colors[color] ?? colors.cyan;
  };
</script>

<div class="relative group cursor-pointer transition-all duration-500 h-full" on:mouseenter={() => (hovered = true)} on:mouseleave={() => (hovered = false)}>
  <!-- Glitch Effect -->
  {#if showGlitch}
    <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyber-magenta/10 to-cyber-purple/10 z-10 animate-glitch rounded-xl"></div>
  {/if}

  <Card class="h-full border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-neon-cyan">
    <!-- Game Header -->
    <div class="relative h-48 overflow-hidden rounded-t-lg">
      <!-- Gradient Background -->
      <div class={`absolute inset-0 bg-gradient-to-br ${getColorClass(game.color)}/20`}>
        {#if game.image}
          <img src={game.image} alt={game.title} class="w-full h-full object-cover mix-blend-overlay opacity-50" />
        {/if}
      </div>

      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>

      <!-- Status Badge -->
      <div class="absolute top-3 left-3">
        <Badge variant={game.status === "Online" ? "default" : "secondary"} class="border backdrop-blur-sm">
          <Zap class="w-3 h-3 mr-1" />
          {game.status}
        </Badge>
      </div>

      <!-- Players Count -->
      <div class="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
        <Users class="w-3 h-3 text-primary" />
        <span class="text-xs font-digital text-muted-foreground">{game.players}</span>
      </div>

      <!-- Rating -->
      <div class="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
        <Star class="w-3 h-3 text-yellow-500 fill-yellow-500" />
        <span class="text-xs font-bold text-white">{game.rating}</span>
      </div>
    </div>

    <CardContent class="p-4">
      <CardTitle class="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
        {game.title}
      </CardTitle>

      <p class="text-sm text-muted-foreground mb-4 line-clamp-2">
        {game.description}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1 mb-4">
        {#each game.tags as tag}
          <Badge variant="outline" class="text-xs border-primary/30 bg-primary/5 text-primary">
            {tag}
          </Badge>
        {/each}
      </div>
    </CardContent>

    <CardFooter class="p-4 pt-0 flex items-center justify-between">
      <div class="flex items-center gap-3 text-sm text-muted-foreground">
        <div class="flex items-center gap-1">
          <Clock class="w-3 h-3" />
          <span>{game.playtime}</span>
        </div>
        <span class="font-digital">{game.genre}</span>
      </div>

      <Button variant="cyber" size="sm" class={`bg-gradient-to-r ${getColorClass(game.color)}`}>
        <Play class="w-4 h-4 mr-2" />
        PLAY
      </Button>
    </CardFooter>

    <!-- Cyber Lines Effect -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </Card>

  <!-- Hover Glow Effect -->
  <div class={`absolute -inset-1 bg-gradient-to-r ${getColorClass(game.color)} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
</div>
