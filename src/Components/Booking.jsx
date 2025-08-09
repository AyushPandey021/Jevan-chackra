import { useState } from "react";

const services = [
  { name: "Astro-Numerology", price: 5000 },
  { name: "Reiki Healing", price: 7000 },
  { name: "Tarot Reading", price: 6000 },
  { name: "Spiritual Counseling", price: 8000 },
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0].name,
    price: services[0].price,
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if the user selects a service, also auto update price
    if (name === "service") {
      const selectedService = services.find((s) => s.name === value);
      setFormData({
        ...formData,
        service: selectedService.name,
        price: selectedService.price,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, you booked ${formData.service} for ₹${formData.price}!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Form */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-pink-700 mb-2 animate-pulse">Book Your Appointment</h1>
          <p className="italic text-gray-600 mb-4">✨ Transform yourself with our healing services ✨</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
              >
                {services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Price (INR)</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message / Notes</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-300"
                placeholder="Any special requests?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Right Side: Image + Quote */}
        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white p-6 animate-fadeIn">
          <img
            src="https://images.unsplash.com/photo-1611078489935-0c46b3bb79f6?auto=format&fit=crop&w=400&q=80"
            alt="healing"
            className="rounded-full border-4 border-white w-52 h-52 mb-4 shadow-xl animate-float"
          />
          <blockquote className="italic text-center max-w-xs">
            🌸 <span className="font-bold">“Self-healing is the greatest gift you can give yourself.”</span> 🌸
          </blockquote>
        </div>
      </div>
    </div>
  );
}
