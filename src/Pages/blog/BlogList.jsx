import React from 'react';
import BlogHero from '../../Components/BlogHero';
import BlogCard from '../../Components/BlogCard';

const dummyBlogs = [
  {
    id: '1',
    title: 'Unlocking Chakras: Energy Within',
    description: 'Discover the power within by unlocking your chakras and balancing your inner energy.',
    image: 'https://source.unsplash.com/600x400/?meditation,chakra',
  },
  {
    id: '2',
    title: 'The Magic of Angel Cards',
    description: 'Learn how angel cards can help you connect with divine guidance and inner peace.',
    image: 'https://source.unsplash.com/600x400/?angel,spiritual',
  },
  {
    id: '3',
    title: 'Healing with Switch Words',
    description: 'Switch words are powerful tools to manifest positivity. Learn how they work.',
    image: 'https://source.unsplash.com/600x400/?healing,energy',
  },
];

const BlogList = () => {
  return (
    <>
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
