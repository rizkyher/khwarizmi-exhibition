<script lang="ts">
  import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";

  type InputType = Exclude<HTMLInputTypeAttribute, "file">;

  type Props = WithElementRef<Omit<HTMLInputAttributes, "type"> & ({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })> & {
    label?: string; // Tambahan label opsional
  };

  let { ref = $bindable(null), value = $bindable(), type, files = $bindable(), class: className, label, "data-slot": dataSlot = "input", ...restProps }: Props = $props();

  // Base classes untuk gaya Cyberpunk
  const baseClasses = cn(
    "flex w-full min-w-0 bg-black/40 backdrop-blur-sm border-primary/30 text-primary font-mono",
    "px-3 py-2 text-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]",
    "transition-all duration-300 outline-none",
    "placeholder:text-primary/30",
    // Focus State - Glow effect
    "focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] focus:bg-black/60",
    // Invalid State
    "aria-invalid:border-destructive aria-invalid:shadow-[0_0_10px_rgba(var(--destructive-rgb),0.5)]",
    // Disabled
    "disabled:cursor-not-allowed disabled:opacity-30 disabled:grayscale",
    // Shape: Sedikit miring/tajam
    "rounded-none [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]",
    className
  );
</script>

<div class="relative w-full group">
  <div class="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-primary opacity-0 group-focus-within:opacity-100 transition-opacity z-10"></div>
  <div class="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-primary opacity-0 group-focus-within:opacity-100 transition-opacity z-10"></div>

  {#if type === "file"}
    <input
      bind:this={ref}
      data-slot={dataSlot}
      class={cn(baseClasses, "h-11 pt-2.5 cursor-pointer file:mr-4 file:py-0 file:px-2 file:rounded-none file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-primary file:text-black hover:file:bg-white transition-colors")}
      type="file"
      bind:files
      bind:value
      {...restProps}
    />
  {:else}
    <input bind:this={ref} data-slot={dataSlot} class={cn(baseClasses, "h-10")} {type} bind:value {...restProps} />
  {/if}

  {#if label}
    <span class="absolute -top-5 left-0 text-[10px] font-bold uppercase tracking-widest text-primary/60 group-focus-within:text-primary transition-colors">
      {label}
    </span>
  {/if}
</div>

<style>
  /* Menghapus gaya default pada autofill browser agar tetap cyberpunk */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--primary);
    -webkit-box-shadow: 0 0 0px 1000px #050505 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
