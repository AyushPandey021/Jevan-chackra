import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <img src={blog.image} alt={blog.title} className="h-52 w-full object-cover" />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm">{blog.description.slice(0, 100)}...</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
