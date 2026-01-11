<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Badge } from "$lib/components/ui/badge";
  import { Menu, X, Gamepad2, Sparkles, Search, Bell, User, Home, Library, Users, Trophy, ChevronRight, Zap, Settings } from "@lucide/svelte";
  import { onMount } from "svelte";

  // State
  let menuOpen = $state(false);
  let searchOpen = $state(false);
  let searchValue = $state("");
  let isScrolled = $state(false);
  let activeSection = $state("Dashboard");
  let mouseX = $state(0);
  let mouseY = $state(0);

  // Data
  const navItems = [
    { name: "Dashboard", href: "#", icon: Home, badge: "NEW", color: "from-cyan-500 to-blue-500" },
    { name: "Games", href: "#games", icon: Gamepad2, color: "from-purple-500 to-pink-500" },
    { name: "Library", href: "#library", icon: Library, count: 12, color: "from-emerald-500 to-teal-500" },
    { name: "Community", href: "#community", icon: Users, color: "from-orange-500 to-red-500" },
    { name: "Leaderboards", href: "#leaderboards", icon: Trophy, color: "from-yellow-500 to-amber-500" },
  ];

  // Handle Scroll Effect
  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }

  // Handle Mouse Move for Parallax
  function handleMouseMove(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  // Handle Keyboard Shortcut for Search
  function handleKeydown(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchOpen = true;
      setTimeout(() => document.getElementById("global-search")?.focus(), 50);
    }
    if (e.key === "Escape") {
      searchOpen = false;
      menuOpen = false;
    }
  }

  // Close menu when clicking outside
  function handleClickOutside(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (menuOpen && !target.closest("[data-mobile-menu]")) {
      menuOpen = false;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<!-- Desktop & Tablet Navbar -->
<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
  {isScrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.15)]' : 'bg-transparent border-b border-transparent'}"
>
  <!-- Animated Grid Background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute inset-0 opacity-20"
      style="background: linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%);
             background-size: 50px 100%;
             animation: scan 3s linear infinite;"
    ></div>
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
  </div>

  <div class="container mx-auto px-4 lg:px-6 relative">
    <!-- Desktop Layout -->
    <div class="hidden md:flex items-center justify-between gap-6 py-3">
      <!-- Logo with Hologram Effect -->
      <a href="/" class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg px-2 py-1 -ml-2 relative">
        <!-- Corner Accents -->
        <div class="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div class="relative flex items-center justify-center w-11 h-11">
          <!-- Rotating Ring -->
          <div class="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-border animate-spin-slow opacity-50"></div>

          <!-- Inner Container -->
          <div
            class="relative flex items-center justify-center w-10 h-10 rounded-xl
            bg-gradient-to-br from-black via-gray-900 to-black
            border border-cyan-500/50
            group-hover:border-cyan-500
            shadow-[inset_0_0_20px_rgba(0,255,255,0.3)]
            group-hover:shadow-[inset_0_0_30px_rgba(0,255,255,0.5),0_0_30px_rgba(0,255,255,0.3)]
            transition-all duration-300"
          >
            <Gamepad2 class="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          </div>

          <!-- Pulse Ring -->
          <div class="absolute inset-0 rounded-xl border border-cyan-500/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
        </div>

        <div class="flex flex-col">
          <span class="text-lg font-black tracking-tight leading-none relative">
            <span class="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">CYBER</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">GAMES</span>
          </span>
          <span class="text-[8px] text-cyan-500/60 font-mono tracking-[0.3em] uppercase group-hover:text-cyan-400 group-hover:tracking-[0.35em] transition-all duration-300"> ▸ SYSTEM ONLINE </span>
        </div>
      </a>

      <!-- Navigation with Neon Pills -->
      <div class="flex items-center gap-2 relative">
        {#each navItems as item, i}
          <a
            href={item.href}
            class="relative group px-5 py-2.5 overflow-hidden
            focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
            onclick={(e) => {
              activeSection = item.name;
            }}
          >
            <!-- Background Layers -->
            <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r {item.color} opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-all duration-300"></div>

            <!-- Border Animation -->
            <div class="absolute inset-0 rounded-lg border border-white/10 group-hover:border-transparent transition-colors"></div>
            <div
              class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(90deg, transparent, rgba(0,255,255,0.5), transparent);
                     background-size: 200% 100%;
                     animation: shimmer 2s linear infinite;"
            ></div>

            <!-- Content -->
            <span class="relative z-10 flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-200">
              <svelte:component this={item.icon} class="w-4 h-4 group-hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)] transition-all" />
              <span class="tracking-wide">{item.name}</span>
            </span>

            <!-- Badge -->
            {#if item.badge}
              <span
                class="absolute -top-1 -right-1 flex h-5 items-center justify-center rounded-md
                bg-gradient-to-r from-pink-500 to-purple-600 px-2 text-[8px] font-black text-white
                shadow-[0_0_15px_rgba(236,72,153,0.6)] ring-1 ring-white/20
                animate-pulse-glow"
              >
                {item.badge}
              </span>
            {/if}

            <!-- Count Badge -->
            {#if item.count}
              <span
                class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full
                bg-cyan-500/20 text-[10px] font-bold text-cyan-400 border border-cyan-500/50
                shadow-[0_0_10px_rgba(0,255,255,0.4)]"
              >
                {item.count}
              </span>
            {/if}

            <!-- Scan Line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </a>
        {/each}
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">
        <!-- Search with Hologram -->
        <div class="relative group">
          {#if searchOpen}
            <div class="flex items-center gap-2 animate-in slide-in-from-right-5 duration-300">
              <div class="relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
                <Input
                  id="global-search"
                  type="text"
                  bind:value={searchValue}
                  placeholder="SEARCH_SYSTEM..."
                  class="pl-10 pr-4 w-[300px] h-10 text-sm rounded-lg
                  bg-black/50 backdrop-blur-sm 
                  border border-cyan-500/30 
                  focus:border-cyan-500 focus:bg-black/70
                  text-cyan-100 placeholder:text-cyan-500/40 placeholder:font-mono
                  shadow-[inset_0_0_20px_rgba(0,255,255,0.1)]
                  focus:shadow-[inset_0_0_30px_rgba(0,255,255,0.2),0_0_20px_rgba(0,255,255,0.3)]
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-0"
                  autofocus
                />
                <!-- Scan Line in Input -->
                <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                  <div class="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent animate-scan-vertical"></div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                class="h-10 w-10 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10
                border border-cyan-500/20 hover:border-cyan-500/50"
                onclick={() => {
                  searchOpen = false;
                  searchValue = "";
                }}
              >
                <X class="w-4 h-4" />
              </Button>
            </div>
          {:else}
            <Button
              variant="ghost"
              size="icon"
              class="h-10 w-10 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10
              border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]
              transition-all duration-300"
              onclick={() => (searchOpen = true)}
            >
              <Search class="w-4 h-4" />
            </Button>
          {/if}
        </div>

        <!-- Notifications -->
        <Button
          variant="ghost"
          size="icon"
          class="relative h-10 w-10 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10
          border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]
          transition-all duration-300"
          aria-label="Notifications"
        >
          <Bell class="w-4 h-4" />
          <!-- Notification Pulse -->
          <span class="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span>
          </span>
        </Button>

        <!-- User Profile with Hexagon -->
        <Button
          variant="ghost"
          size="icon"
          class="h-10 w-10 rounded-lg p-0 overflow-hidden 
          border-2 border-cyan-500/30
          hover:border-cyan-500
          transition-all duration-300
          hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
          hover:scale-105"
          aria-label="User Profile"
        >
          <div
            class="relative w-full h-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500
            flex items-center justify-center text-white font-black text-sm
            before:absolute before:inset-[2px] before:bg-black/50 before:backdrop-blur-sm
            before:rounded-[6px]"
          >
            <span class="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">U</span>
          </div>
        </Button>

        <!-- CTA Button - Glowing -->
        <Button
          class="hidden lg:flex h-10 px-6 relative overflow-hidden group
          bg-gradient-to-r from-cyan-500 to-purple-600
          hover:from-cyan-400 hover:to-purple-500
          text-white font-black tracking-wider
          shadow-[0_0_30px_rgba(0,255,255,0.4)]
          hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]
          transition-all duration-300 rounded-lg
          hover:scale-105 active:scale-95
          border border-white/20
          focus-visible:ring-2 focus-visible:ring-cyan-500/50"
        >
          <!-- Animated Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <Zap class="w-4 h-4 mr-2 relative z-10" />
          <span class="relative z-10">PLAY NOW</span>
        </Button>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="flex md:hidden items-center justify-between py-3">
      <!-- Mobile Logo -->
      <a href="/" class="flex items-center gap-2 group">
        <div
          class="relative flex items-center justify-center w-9 h-9 rounded-lg
          bg-gradient-to-br from-black via-gray-900 to-black
          border border-cyan-500/50
          shadow-[inset_0_0_15px_rgba(0,255,255,0.3)]
          group-active:scale-95 transition-transform"
        >
          <Gamepad2 class="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          <!-- Pulse Ring -->
          <div class="absolute inset-0 rounded-lg border border-cyan-500/30 animate-ping-slow"></div>
        </div>
        <span class="text-base font-black">
          <span class="text-white">CYBER</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GAMES</span>
        </span>
      </a>

      <!-- Mobile Actions -->
      <div class="flex items-center gap-2">
        <Button variant="ghost" size="icon" class="h-9 w-9 rounded-lg text-cyan-400 hover:text-cyan-300 border border-cyan-500/20" onclick={() => (searchOpen = !searchOpen)}>
          <Search class="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon" class="relative h-9 w-9 rounded-lg text-cyan-400 hover:text-cyan-300 border border-cyan-500/20">
          <Bell class="w-4 h-4" />
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
        </Button>

        <Button variant="ghost" size="icon" class="h-9 w-9 rounded-lg text-cyan-400 hover:text-cyan-300 border border-cyan-500/20" onclick={() => (menuOpen = !menuOpen)} data-mobile-menu>
          {#if menuOpen}
            <X class="w-5 h-5" />
          {:else}
            <Menu class="w-5 h-5" />
          {/if}
        </Button>
      </div>
    </div>
  </div>

  <!-- Mobile Search Dropdown -->
  {#if searchOpen}
    <div class="md:hidden border-t border-cyan-500/20 bg-black/90 backdrop-blur-xl p-4 animate-in slide-in-from-top-3 duration-200">
      <div class="relative">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
        <Input type="text" bind:value={searchValue} placeholder="SEARCH_SYSTEM..." class="pl-10 bg-black/50 border-cyan-500/30 h-11 rounded-lg text-cyan-100 placeholder:text-cyan-500/40" autofocus />
      </div>
    </div>
  {/if}
</nav>

<!-- Mobile Menu Drawer - Cyberpunk Style -->
{#if menuOpen}
  <div class="fixed inset-0 top-[57px] z-40 md:hidden animate-in fade-in duration-300" data-mobile-menu>
    <!-- Backdrop with Grid -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick={() => (menuOpen = false)}>
      <div
        class="absolute inset-0 opacity-10"
        style="background-image: repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,255,255,0.1) 50px, rgba(0,255,255,0.1) 51px),
                 repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,255,255,0.1) 50px, rgba(0,255,255,0.1) 51px);"
      ></div>
    </div>

    <!-- Menu Content -->
    <div
      class="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm
      bg-gradient-to-br from-black via-gray-900 to-black
      backdrop-blur-xl border-l border-cyan-500/30
      shadow-[-20px_0_60px_rgba(0,255,255,0.2)]
      animate-in slide-in-from-right duration-300
      flex flex-col"
      data-mobile-menu
    >
      <!-- Scan Line Effect -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent animate-scan-vertical"></div>
      </div>

      <!-- User Profile Section -->
      <div class="relative p-6 border-b border-cyan-500/20">
        <!-- Corner Accents -->
        <div class="absolute top-6 left-6 w-3 h-3 border-l-2 border-t-2 border-cyan-500"></div>
        <div class="absolute bottom-6 right-6 w-3 h-3 border-r-2 border-b-2 border-purple-500"></div>

        <div class="flex items-center gap-4">
          <div class="relative">
            <div
              class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500
              flex items-center justify-center text-white font-black text-xl
              shadow-[0_0_30px_rgba(0,255,255,0.5)]
              before:absolute before:inset-[2px] before:bg-black/70 before:rounded-2xl"
            >
              <span class="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">U</span>
            </div>
            <!-- Status Indicator -->
            <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-black shadow-[0_0_15px_rgba(16,185,129,0.8)] flex items-center justify-center">
              <Zap class="w-3 h-3 text-white" />
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-black text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Username</h3>
            <p class="text-xs text-cyan-400 font-mono">LVL 42 • <span class="text-purple-400">PRO_PLAYER</span></p>
          </div>
        </div>
      </div>

      <!-- Navigation Items -->
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        {#each navItems as item, i}
          <a
            href={item.href}
            class="relative flex items-center justify-between p-4 rounded-xl
            bg-gradient-to-r from-white/5 to-transparent
            hover:from-cyan-500/10 hover:to-purple-500/10
            active:scale-98 border border-cyan-500/20 hover:border-cyan-500/50
            text-base font-bold text-gray-400 hover:text-white
            transition-all group overflow-hidden"
            onclick={() => {
              menuOpen = false;
              activeSection = item.name;
            }}
            style="animation-delay: {i * 50}ms;"
          >
            <!-- Hover Gradient -->
            <div class="absolute inset-0 bg-gradient-to-r {item.color} opacity-0 group-hover:opacity-10 transition-opacity blur-sm"></div>

            <div class="flex items-center gap-3 relative z-10">
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg
                bg-gradient-to-br from-black to-gray-900
                border border-cyan-500/30 group-hover:border-cyan-500
                shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]
                group-hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.4)]
                transition-all"
              >
                <svelte:component this={item.icon} class="w-5 h-5 text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              </div>
              <span class="tracking-wide">{item.name}</span>
            </div>

            <div class="flex items-center gap-2 relative z-10">
              {#if item.count}
                <Badge class="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-bold shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  {item.count}
                </Badge>
              {/if}
              {#if item.badge}
                <Badge class="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none font-bold shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                  {item.badge}
                </Badge>
              {/if}
              <ChevronRight class="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
            </div>

            <!-- Scan Line -->
            <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        {/each}
      </div>

      <!-- Bottom Actions -->
      <div class="relative p-6 space-y-4 border-t border-cyan-500/20">
        <!-- Corner Accents -->
        <div class="absolute top-6 left-6 w-3 h-3 border-l-2 border-t-2 border-cyan-500"></div>
        <div class="absolute bottom-6 right-6 w-3 h-3 border-r-2 border-b-2 border-purple-500"></div>

        <Button
          class="relative w-full h-12 text-base font-black tracking-wider overflow-hidden group
          bg-gradient-to-r from-cyan-500 to-purple-600
          shadow-[0_0_30px_rgba(0,255,255,0.4)]
          hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]
          hover:scale-105 active:scale-95 
          transition-all rounded-xl
          border border-white/20"
          onclick={() => (menuOpen = false)}
        >
          <!-- Animated Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <Zap class="w-5 h-5 mr-2 relative z-10" />
          <span class="relative z-10">LAUNCH GAME</span>
        </Button>

        <div class="flex justify-center gap-6 text-xs text-cyan-500/60 font-mono">
          <a href="#" class="hover:text-cyan-400 transition-colors">PRIVACY</a>
          <span class="text-cyan-500/30">|</span>
          <a href="#" class="hover:text-cyan-400 transition-colors">TERMS</a>
          <span class="text-cyan-500/30">|</span>
          <a href="#" class="hover:text-cyan-400 transition-colors">SUPPORT</a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes scan {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }

  @keyframes scan-vertical {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes pulse-glow {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  :global(.animate-pulse-glow) {
    animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  :global(.animate-spin-slow) {
    animation: spin-slow 8s linear infinite;
  }

  :global(.animate-ping-slow) {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  :global(.animate-scan-vertical) {
    animation: scan-vertical 4s linear infinite;
  }

  :global(.active-scale-98) {
    transform: scale(0.98);
  }
</style>
