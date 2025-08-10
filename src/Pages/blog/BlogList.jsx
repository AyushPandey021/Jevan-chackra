import React from 'react';
import BlogHero from '../../Components/BlogHero';
import BlogCard from '../../Components/BlogCard';

const dummyBlogs = [
  {
    id: '1',
     title:'Unlocking Chakras: Energy Within',
    description: 'Discover the power within by unlocking your chakras and balancing your inner energy.',
    image:'https://i.pinimg.com/1200x/7e/56/0e/7e560eb17373bfb7762f67d5ef9e93e0.jpg',
  },
  {
    id: '2',
    title: 'The Magic of Angel Cards',
    description: 'Learn how angel cards can help you connect with divine guidance and inner peace.',
    image: 'https://i.pinimg.com/1200x/bd/13/e6/bd13e6e67570d3da80a7a30a461cba28.jpg',
  },
  {
    id: '3',
    title: 'Healing with Switch Words',
    description: 'Switch words are powerful tools to manifest positivity. Learn how they work.',
    image: 'https://i.pinimg.com/1200x/ac/38/95/ac3895733c798253ab02f544f0edb962.jpg',
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
