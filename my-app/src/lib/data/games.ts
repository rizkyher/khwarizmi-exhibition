export interface Game {
  id: string;
  title: string;
  description: string;
  category: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  rating: number;
  players: number;
  tags: string[];
  color: 'cyan' | 'magenta' | 'purple' | 'blue';
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Quantum Code',
    description: 'Belajar pemrograman dasar dengan visualisasi quantum. Pecahkan teka-teki logika dan bangun sirkuit digital.',
    category: ['Programming', 'Logic'],
    difficulty: 'Easy',
    duration: '15-30 min',
    rating: 4.8,
    players: 1,
    tags: ['Beginner', 'Interactive', 'Educational'],
    color: 'cyan'
  },
  {
    id: '2',
    title: 'Neural Network',
    description: 'Pahami konsep AI dengan melatih jaringan saraf virtual. Optimalkan parameter untuk mencapai akurasi maksimal.',
    category: ['AI', 'Mathematics'],
    difficulty: 'Medium',
    duration: '30-45 min',
    rating: 4.9,
    players: 1,
    tags: ['Advanced', 'Simulation', 'Machine Learning'],
    color: 'magenta'
  },
  {
    id: '3',
    title: 'Crypto Defender',
    description: 'Pelajari dasar-dasar kriptografi dengan melindungi sistem dari serangan hacker virtual.',
    category: ['Security', 'Cryptography'],
    difficulty: 'Hard',
    duration: '45-60 min',
    rating: 4.7,
    players: 1,
    tags: ['Challenging', 'Puzzle', 'Encryption'],
    color: 'purple'
  },
  {
    id: '4',
    title: 'Data Stream',
    description: 'Analisis aliran data real-time dan temukan pola tersembunyi dalam dataset besar.',
    category: ['Data Science', 'Analysis'],
    difficulty: 'Medium',
    duration: '25-40 min',
    rating: 4.6,
    players: 2,
    tags: ['Multiplayer', 'Analysis', 'Patterns'],
    color: 'blue'
  },
  {
    id: '5',
    title: 'Algorithm Race',
    description: 'Balap melawan waktu untuk mengimplementasikan algoritma yang efisien. Optimalkan kode untuk menang!',
    category: ['Algorithms', 'Programming'],
    difficulty: 'Medium',
    duration: '20-35 min',
    rating: 4.8,
    players: 2,
    tags: ['Competitive', 'Speed', 'Optimization'],
    color: 'cyan'
  },
  {
    id: '6',
    title: 'Circuit Builder',
    description: 'Bangun sirkuit elektronik virtual dan pelajari dasar-dasar elektronika dengan simulasi interaktif.',
    category: ['Electronics', 'Engineering'],
    difficulty: 'Easy',
    duration: '15-25 min',
    rating: 4.5,
    players: 1,
    tags: ['Beginner', 'Hands-on', 'Simulation'],
    color: 'magenta'
  }
];