<script lang="ts" module>
  import { cn, type WithElementRef } from "$lib/utils.js";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { type VariantProps, tv } from "tailwind-variants";

  export const buttonVariants = tv({
    base: [
      "group relative inline-flex shrink-0 items-center justify-center gap-2",
      "text-sm font-bold font-mono tracking-[0.15em] uppercase whitespace-nowrap",
      "transition-all duration-300 ease-out outline-none",
      "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50 disabled:grayscale",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "overflow-hidden", // Penting untuk efek fill saat hover
    ],
    variants: {
      variant: {
        default: ["bg-primary text-primary-foreground border border-primary", "hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary),0.6)]", "active:translate-y-[1px]"],
        destructive: ["bg-destructive/10 text-destructive border border-destructive", "hover:bg-destructive hover:text-destructive-foreground hover:shadow-[0_0_20px_rgba(var(--destructive),0.6)]"],
        outline: ["bg-transparent border border-primary/40 text-primary", "hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] hover:text-primary-foreground", "backdrop-blur-sm"],
        secondary: ["bg-secondary text-secondary-foreground border border-secondary/50", "hover:bg-secondary/80 hover:border-secondary"],
        ghost: ["text-muted-foreground hover:text-primary hover:bg-primary/5", "hover:shadow-[inset_0_0_10px_rgba(var(--primary),0.1)]"],
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 shadow-none",

        // --- NEW VARIANT: CYBER ---
        // Bentuk custom dengan potongan sudut (clip-path) & efek glitch saat hover
        cyber: [
          "bg-transparent border border-primary text-primary",
          "hover:bg-primary hover:text-black hover:font-black",
          "hover:shadow-[0_0_30px_rgba(var(--primary),0.8)]",
          "[clip-path:polygon(0_0,100%_0,100%_70%,90%_100%,0_100%)]", // Potongan sudut kanan bawah
          "after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-500", // Efek kilat (shine)
        ],
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
      // Prop opsional untuk efek glitch text (opsional)
      glitch?: boolean;
    };
</script>

<script lang="ts">
  let { class: className, variant = "default", size = "default", ref = $bindable(null), href = undefined, type = "button", disabled, children, glitch = false, ...restProps }: ButtonProps = $props();

  // Helper untuk glitch text effect (hanya visual)
  const glitchClass = glitch ? "group-hover:animate-pulse" : "";
</script>

{#snippet content()}
  {#if variant === "outline" || variant === "default"}
    <span class="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
    <span class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
  {/if}

  <span class={cn("relative z-10 flex items-center gap-2", glitchClass)}>
    {@render children?.()}
  </span>
{/snippet}

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}
  >
    {@render content()}
  </a>
{:else}
  <button bind:this={ref} data-slot="button" class={cn(buttonVariants({ variant, size }), className)} {type} {disabled} {...restProps}>
    {@render content()}
  </button>
{/if}
