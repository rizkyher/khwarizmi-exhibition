<script lang="ts" module>
  import { type VariantProps, tv } from "tailwind-variants";

  export const badgeVariants = tv({
    base: [
      "inline-flex items-center justify-center gap-1.5 px-3 py-1.5",
      "text-xs font-bold tracking-wide font-mono",
      "transition-all duration-300",
      "rounded-md relative overflow-hidden",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      "[&>svg]:size-3.5 [&>svg]:transition-transform [&>svg]:duration-300",
      "hover:[&>svg]:scale-110",
      "select-none cursor-default",
      "[a&]:cursor-pointer",
    ],
    variants: {
      variant: {
        default: [
          "bg-gradient-to-r from-primary/20 to-primary/10",
          "text-primary border border-primary/40",
          "shadow-[0_0_15px_rgba(var(--primary-rgb,0,255,255),0.3)]",
          "[a&]:hover:from-primary/30 [a&]:hover:to-primary/20",
          "[a&]:hover:shadow-[0_0_25px_rgba(var(--primary-rgb,0,255,255),0.5)]",
          "[a&]:hover:scale-105",
          "[a&]:active:scale-95",
        ],
        secondary: [
          "bg-gradient-to-r from-purple-500/20 to-purple-600/10",
          "text-purple-400 border border-purple-500/40",
          "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
          "[a&]:hover:from-purple-500/30 [a&]:hover:to-purple-600/20",
          "[a&]:hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]",
          "[a&]:hover:scale-105",
          "[a&]:active:scale-95",
        ],
        destructive: [
          "bg-gradient-to-r from-red-500/20 to-red-600/10",
          "text-red-400 border border-red-500/50",
          "shadow-[0_0_15px_rgba(239,68,68,0.4)]",
          "animate-pulse-subtle",
          "[a&]:hover:from-red-500/30 [a&]:hover:to-red-600/20",
          "[a&]:hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
        ],
        success: [
          "bg-gradient-to-r from-emerald-500/20 to-emerald-600/10",
          "text-emerald-400 border border-emerald-500/40",
          "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
          "[a&]:hover:from-emerald-500/30 [a&]:hover:to-emerald-600/20",
          "[a&]:hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]",
          "[a&]:hover:scale-105",
          "[a&]:active:scale-95",
        ],
        outline: [
          "bg-transparent border-2 border-white/30",
          "text-white/80",
          "backdrop-blur-sm",
          "[a&]:hover:border-primary/60 [a&]:hover:text-primary",
          "[a&]:hover:bg-primary/5",
          "[a&]:hover:shadow-[0_0_15px_rgba(var(--primary-rgb,0,255,255),0.2)]",
          "[a&]:hover:scale-105",
          "[a&]:active:scale-95",
        ],
        neon: [
          "bg-primary text-black border-2 border-white",
          "shadow-[0_0_20px_rgba(var(--primary-rgb,0,255,255),0.6),inset_0_0_10px_rgba(255,255,255,0.3)]",
          "font-extrabold",
          "[a&]:hover:shadow-[0_0_30px_rgba(var(--primary-rgb,0,255,255),0.8),inset_0_0_15px_rgba(255,255,255,0.5)]",
          "[a&]:hover:scale-110",
          "[a&]:active:scale-95",
        ],
        ghost: ["bg-white/5 text-white/60 border border-white/10", "backdrop-blur-md", "[a&]:hover:bg-white/10 [a&]:hover:text-white/90", "[a&]:hover:border-white/20", "[a&]:hover:scale-105", "[a&]:active:scale-95"],
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] gap-1 [&>svg]:size-2.5",
        md: "px-3 py-1.5 text-xs gap-1.5 [&>svg]:size-3.5",
        lg: "px-4 py-2 text-sm gap-2 [&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  });

  export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
  export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = "default",
    size = "md",
    showIndicator = false,
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
    size?: BadgeSize;
    showIndicator?: boolean;
  } = $props();
</script>

<svelte:element this={href ? "a" : "span"} bind:this={ref} data-slot="badge" {href} class={cn(badgeVariants({ variant, size }), className)} {...restProps}>
  {#if showIndicator}
    <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse-slow" aria-hidden="true"></span>
  {/if}

  {@render children?.()}
</svelte:element>

<style>
  @keyframes pulse-subtle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.85;
    }
  }

  @keyframes pulse-slow {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  :global(.animate-pulse-subtle) {
    animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  :global(.animate-pulse-slow) {
    animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
