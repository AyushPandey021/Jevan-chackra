import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyBlogs = [
  {
    id: '1',
    title: 'Unlocking Chakras: Energy Within',
    content: ` Embark on a journey of self-discovery as you awaken and align your chakras. Learn to harmonize mind, body, and spirit, unlocking the flow of energy that empowers your well-being and spiritual growth.`,
    image: 'https://i.pinimg.com/736x/60/0b/03/600b036c80a17130ffa80001785dafff.jpg',
  },
  {
    id: '2',
    title: 'The Magic of Angel Cards',
    content: `Angel cards are a beautiful tool for seeking guidance, clarity, and inspiration from divine forces. Unlike traditional tarot cards, they carry uplifting and positive messages, offering gentle wisdom to help you navigate life’s challenges. Each card is believed to connect you with the loving energy of angels, providing insight into your current situation and encouraging you to trust your inner voice. Whether you’re seeking answers, reassurance, or simply a moment of peace, angel cards can serve as a spiritual bridge between you and the higher realms, bringing comfort and light to your journey..`,
    image: 'https://i.pinimg.com/1200x/8d/e7/f1/8de7f1b7e22ea7eefbc49ae6e746f1f1.jpg',
  },
  {
    id: '3',
    title: 'Healing with Switch Words',
    content: `Switch words are carefully chosen words or phrases believed to tap into the subconscious mind, helping to shift energy, release blocks, and manifest desired outcomes. By repeating them with intention, you can promote emotional balance, healing, and positive transformation.`,
    image: 'https://i.pinimg.com/736x/5f/23/f4/5f23f4c85ecbad891e1a600e15cf7631.jpg',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = dummyBlogs.find((b) => b.id === id);

  if (!blog) return <div className="text-center py-20">Blog Not Found</div>;

  return (
    <div className="max-w-3xl mt-10 mx-auto px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 rounded-full bg-purple-100 text-[#8B4513] font-medium hover:bg-purple-200 transition"
      >
        ⬅️ Back
      </button>
      <img src={blog.image} alt={blog.title} className="rounded-xl shadow-xl w-full mb-6" />
      <h1 className="text-4xl font-bold text-[#8B4513] mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
