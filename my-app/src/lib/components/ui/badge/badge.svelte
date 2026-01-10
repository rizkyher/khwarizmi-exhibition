<script lang="ts" module>
  import { type VariantProps, tv } from "tailwind-variants";

  export const badgeVariants = tv({
    base: [
      "inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5",
      "text-[10px] font-black uppercase tracking-[0.1em] font-mono",
      "transition-all duration-300 border-l-2", // Aksen garis di kiri
      "rounded-none [clip-path:polygon(0_0,calc(100%-4px)_0,100%_4px,100%_100%,4px_100%,0_calc(100%-4px))]",
      "[&>svg]:size-3",
    ],
    variants: {
      variant: {
        default: ["bg-primary/10 text-primary border-primary", "shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]", "[a&]:hover:bg-primary [a&]:hover:text-black"],
        secondary: ["bg-cyber-purple/10 text-cyber-purple border-cyber-purple", "[a&]:hover:bg-cyber-purple [a&]:hover:text-white"],
        destructive: ["bg-red-500/10 text-red-500 border-red-500 animate-pulse", "shadow-[0_0_10px_rgba(239,68,68,0.3)]"],
        outline: ["bg-transparent border border-white/20 text-white/70 border-l-white", "[a&]:hover:border-primary [a&]:hover:text-primary"],
        // Varian baru khusus Cyberpunk
        neon: ["bg-primary text-black border-white shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]", "after:absolute after:inset-0 after:bg-white/20 after:animate-pulse relative"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

  export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = "default",
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
  } = $props();
</script>

<svelte:element this={href ? "a" : "span"} bind:this={ref} data-slot="badge" {href} class={cn(badgeVariants({ variant }), className)} {...restProps}>
  <span class="w-1 h-1 rounded-full bg-current animate-pulse mr-0.5"></span>

  {@render children?.()}
</svelte:element>
