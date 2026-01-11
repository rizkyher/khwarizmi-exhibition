<script lang="ts">
  import { Play, ShieldCheck, Target, Zap } from "@lucide/svelte";
  import { fade, fly } from "svelte/transition";

  let activeFeature = $state(0);
  const features = [
    { title: "Raytraced Visuals", desc: "Ultra-high fidelity environments.", icon: Zap },
    { title: "Neural Combat", desc: "AI-driven enemy behavior patterns.", icon: Target },
    { title: "Secure Protocol", desc: "On-chain asset ownership.", icon: ShieldCheck },
  ];
</script>

<section id="showcase" class="py-24 relative overflow-hidden bg-black">
  <div class="container mx-auto px-6 max-w-7xl">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="w-full lg:w-3/5 relative group">
        <div class="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div class="relative aspect-video bg-gray-900 border border-white/10 overflow-hidden rounded-2xl shadow-2xl">
          <div class="absolute inset-0 flex items-center justify-center bg-amber-500/5 group-hover:bg-transparent transition-colors">
            <Play class="size-16 text-amber-500 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" />
          </div>
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200" alt="Gameplay" class="size-full object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
        </div>

        <div class="absolute -top-4 -left-4 p-4 border-l border-t border-amber-500/50 w-24 h-24"></div>
        <div class="absolute -bottom-4 -right-4 p-4 border-r border-b border-amber-500/50 w-24 h-24"></div>
      </div>

      <div class="w-full lg:w-2/5 space-y-8">
        <h3 class="text-4xl font-black italic text-white uppercase tracking-tighter">Featured <span class="text-amber-500">Project</span></h3>

        <div class="space-y-4">
          {#each features as feature, i}
            <button
              onmouseenter={() => (activeFeature = i)}
              class="w-full p-6 text-left border transition-all duration-300 group
              {activeFeature === i ? 'bg-amber-500 border-amber-500' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}"
            >
              <div class="flex items-center gap-4">
                <svelte:component this={feature.icon} class="size-6 {activeFeature === i ? 'text-black' : 'text-amber-500'}" />
                <div>
                  <h4 class="font-black uppercase tracking-widest text-sm {activeFeature === i ? 'text-black' : 'text-white'}">{feature.title}</h4>
                  <p class="text-xs mt-1 {activeFeature === i ? 'text-black/70' : 'text-white/40'}">{feature.desc}</p>
                </div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
