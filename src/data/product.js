export const products = Array.from({ length: 12 }).map((_, i) => ({
  id
: i + 1,
  title: [
    'Abundance Rakhi',
    'Protection Rakhi',
    'Energy Shield Rakhi',
    'Love Bond Rakhi',
    'Wealth Attractor Rakhi',
  ][i % 5],
  description:
    'Handcrafted rakhi with positive energies. Perfect for celebrating the bond with loved ones. This product includes a detailed reading and care instructions.',
  images: [
    `https://images.unsplash.com/photo-1692902288471-4beec045f56d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFraGl8ZW58MHx8MHx8fDA%3D,${i}`,
    `https://images.unsplash.com/photo-1692902288439-dd464a7536fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFraGl8ZW58MHx8MHx8fDA%3D,${i}`,
    `https://images.unsplash.com/photo-1659907521212-8bbdfa688aa6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFraGl8ZW58MHx8MHx8fDA%3D,${i}`,
  ],
  price: Math.floor(299 + Math.random() * 700),
  originalPrice: Math.floor(800 + Math.random() * 300),
  tag: ['Discounted', 'Trending', 'Best Seller'][i % 3],
}));