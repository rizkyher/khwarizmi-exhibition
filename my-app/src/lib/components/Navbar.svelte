<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Badge } from "$lib/components/ui/badge";
  import { Menu, X, Gamepad2, Sparkles, Search, Bell, User, Command } from "@lucide/svelte";
  import { onMount } from "svelte";

  // State
  let menuOpen = false;
  let searchValue = "";
  let isScrolled = false;

  // Data
  const navItems = [
    { name: "Dashboard", href: "#", icon: "dashboard", badge: "NEW" },
    { name: "Games", href: "#games", icon: "game" },
    { name: "Library", href: "#", icon: "library", count: 12 },
    { name: "Community", href: "#", icon: "users" },
    { name: "Leaderboards", href: "#", icon: "trophy" },
  ];

  // Handle Scroll Effect
  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }

  // Handle Keyboard Shortcut for Search
  function handleKeydown(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("global-search")?.focus();
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b
  {isScrolled ? 'bg-background/80 backdrop-blur-md border-primary/20 shadow-lg shadow-primary/5' : 'bg-transparent border-transparent'}"
>
  <div class="container mx-auto px-4 py-3">
    <div class="flex items-center justify-between gap-4">
      <a href="/" class="flex items-center gap-3 group focus:outline-none">
        <div
          class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-primary/30 group-hover:border-primary/60 transition-colors shadow-[0_0_15px_rgba(var(--primary),0.3)]"
        >
          <Gamepad2 class="w-6 h-6 text-primary group-hover:text-cyber-magenta transition-colors duration-300" />
          <div class="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div class="flex flex-col">
          <span class="text-xl font-bold tracking-tight leading-none bg-gradient-to-r from-white via-primary to-cyber-purple bg-clip-text text-transparent">
            CYBER<span class="text-primary">GAMES</span>
          </span>
          <span class="text-[10px] text-muted-foreground font-mono tracking-[0.2em] group-hover:text-primary transition-colors"> ENTER THE GRID </span>
        </div>
      </a>

      <div class="hidden lg:flex items-center gap-1 bg-secondary/30 p-1 rounded-full border border-white/5 backdrop-blur-sm">
        {#each navItems as item}
          <a href={item.href} class="relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-white transition-all duration-200 rounded-full group">
            {item.name}

            {#if item.badge}
              <span class="absolute -top-1 -right-2 flex h-4 w-auto min-w-[16px] items-center justify-center rounded-full bg-cyber-magenta px-1 text-[9px] font-bold text-white shadow-sm ring-1 ring-background">
                {item.badge}
              </span>
            {/if}

            <span class="absolute inset-0 bg-white/5 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 -z-10"></span>
          </a>
        {/each}
      </div>

      <div class="flex items-center gap-3 flex-1 lg:flex-initial justify-end">
        <div class="hidden md:flex relative group w-full max-w-[240px] transition-all focus-within:max-w-[300px]">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input id="global-search" type="text" bind:value={searchValue} placeholder="Search..." class="pl-9 pr-10 bg-secondary/50 border-white/10 focus:border-primary/50 focus:bg-background transition-all h-9 text-sm rounded-full" />
          <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            <kbd class="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span class="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div class="flex items-center gap-1 sm:gap-2 border-l border-white/10 pl-2 ml-2">
          <Button variant="ghost" size="icon" class="relative rounded-full w-9 h-9 hover:bg-white/10 text-muted-foreground hover:text-white" aria-label="Notifications">
            <Bell class="w-4 h-4" />
            <span class="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-background animate-pulse"></span>
          </Button>

          <Button variant="ghost" size="icon" class="rounded-full w-9 h-9 p-0 overflow-hidden border border-white/10 hover:border-primary/50 transition-colors" aria-label="User Profile">
            <div class="w-full h-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xs">U</div>
          </Button>
        </div>

        <Button
          variant="default"
          class="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300 font-bold tracking-wide"
        >
          <Sparkles class="w-4 h-4 mr-2" />
          PLAY NOW
        </Button>

        <Button variant="ghost" size="icon" class="lg:hidden text-muted-foreground" onclick={() => (menuOpen = !menuOpen)} aria-label="Toggle Menu">
          {#if menuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </Button>
      </div>
    </div>
  </div>

  {#if menuOpen}
    <div class="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col p-6 animate-in slide-in-from-top-5 duration-200" style="height: calc(100vh - 60px);">
      <div class="flex flex-col gap-6">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input type="text" bind:value={searchValue} placeholder="Search games..." class="pl-10 h-11 bg-secondary/50 border-white/10" />
        </div>

        <div class="flex flex-col space-y-2">
          {#each navItems as item}
            <a href={item.href} class="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors" on:click={() => (menuOpen = false)}>
              <div class="flex items-center gap-3">
                {item.name}
              </div>
              {#if item.count}
                <Badge variant="secondary" class="bg-secondary text-secondary-foreground">{item.count}</Badge>
              {/if}
              {#if item.badge}
                <Badge class="bg-cyber-magenta text-white border-none">{item.badge}</Badge>
              {/if}
            </a>
          {/each}
        </div>

        <div class="mt-auto pb-8">
          <Button class="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20" onclick={() => (menuOpen = false)}>
            <Sparkles class="w-5 h-5 mr-2" />
            LAUNCH GAME
          </Button>

          <div class="mt-6 flex justify-center gap-6 text-muted-foreground">
            <span class="text-xs">Privacy Policy</span>
            <span class="text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>
