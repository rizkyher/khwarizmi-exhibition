import Root from './card.svelte';
import Content from './card-content.svelte';
import Description from './card-description.svelte';
import Footer from './card-footer.svelte';
import Header from './card-header.svelte';
import Title from './card-title.svelte';

export {
  Root,
  Content,
  Description,
  Footer,
  Header,
  Title,
  //
  Root as Card,
  Content as CardContent,
  Description as CardDescription,
  Footer as CardFooter,
  Header as CardHeader,
  Title as CardTitle,
};

export const cardVariants = {
  cyber: 'relative bg-cyber-dark-light border border-primary/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-neon-cyan group',
  hologram: 'relative bg-card border border-primary/30 rounded-xl overflow-hidden hologram-effect',
};