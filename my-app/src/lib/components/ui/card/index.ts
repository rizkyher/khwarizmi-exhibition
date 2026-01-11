import Root from './card.svelte';
import Content from './card-content.svelte';
import Description from './card-description.svelte';
import Footer from './card-footer.svelte';
import Header from './card-header.svelte';
import Title from './card-title.svelte';
import Action from './card-action.svelte'; // Tambahkan Action jika belum ada
import { cn } from '$lib/utils/cn';

export {
  Root,
  Content,
  Description,
  Footer,
  Header,
  Title,
  Action,
  // Alias
  Root as Card,
  Content as CardContent,
  Description as CardDescription,
  Footer as CardFooter,
  Header as CardHeader,
  Title as CardTitle,
  Action as CardAction,
};

export const cardVariants = {
  // Varian Cyber: Fokus pada Glassmorphism Gelap & Sharp Corners
  cyber: cn(
    "relative bg-black/60 backdrop-blur-md border border-white/10 rounded-none overflow-hidden transition-all duration-300",
    "hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.2)] group/card"
  ),
  
  // Varian Industrial: Lebih solid dengan aksen border yang lebih kuat
  industrial: cn(
    "relative bg-[#0a0a0a] border-x-0 border-t-0 border-b-2 border-white/5 rounded-none overflow-hidden transition-all duration-300",
    "hover:bg-[#111] hover:border-primary group/card"
  ),

  // Varian Ghost/Minimalist (Seperti elemen di header KHWARIZMI)
  minimal: "relative bg-transparent border-none rounded-none group/card"
};