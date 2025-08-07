import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyBlogs = [
  {
    id: '1',
    title: 'Unlocking Chakras: Energy Within',
    content: `Chakras are the seven energy points in your body...`,
    image: 'https://source.unsplash.com/600x400/?meditation,chakra',
  },
  {
    id: '2',
    title: 'The Magic of Angel Cards',
    content: `Angel cards are used to seek guidance from divine forces...`,
    image: 'https://source.unsplash.com/600x400/?angel,spiritual',
  },
  {
    id: '3',
    title: 'Healing with Switch Words',
    content: `Switch words are chosen words believed to connect...`,
    image: 'https://source.unsplash.com/600x400/?healing,energy',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = dummyBlogs.find((b) => b.id === id);

  if (!blog) return <div className="text-center py-20">Blog Not Found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition"
      >
        ⬅️ Back
      </button>
      <img src={blog.image} alt={blog.title} className="rounded-xl shadow-xl w-full mb-6" />
      <h1 className="text-4xl font-bold text-purple-700 mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
