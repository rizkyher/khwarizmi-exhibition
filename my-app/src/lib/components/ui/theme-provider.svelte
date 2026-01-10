<script lang="ts">
  import { onMount } from "svelte";

  export let defaultTheme: "light" | "dark" | "system" = "system";

  function applyTheme(theme: string) {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  onMount(() => {
    if (defaultTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(isDark ? "dark" : "light");
    } else {
      applyTheme(defaultTheme);
    }
  });
</script>

<slot />
