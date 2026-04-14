"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RsvpSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section className="bg-[var(--color-ivory)] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl overflow-hidden border border-[var(--color-gold)]/30">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Image/Info */}
            <div className="bg-[var(--color-maroon)] p-12 text-[var(--color-ivory)] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <h2 className="font-serif text-4xl mb-6 text-[var(--color-gold)]">Be Our Guest</h2>
                <p className="font-sans mb-8 opacity-90 leading-relaxed">
                  Kindly let us know if you can join us in celebrating our special day. We eagerly await your presence.
                </p>
                
                <div className="space-y-4 font-sans text-sm">
                  <div className="flex border-b border-[var(--color-gold)]/30 pb-3">
                    <span className="w-24 text-[var(--color-gold)]">RSVP BY</span>
                    <span>October 15, 2026</span>
                  </div>
                  <div className="flex border-b border-[var(--color-gold)]/30 pb-3">
                    <span className="w-24 text-[var(--color-gold)]">WHERE</span>
                    <span>The Royal Gardens</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 md:p-12 relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 mb-6 bg-[var(--color-emerald)] rounded-full flex items-center justify-center text-white">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-[var(--color-maroon)] mb-2">Thank You!</h3>
                  <p className="text-gray-600 font-sans">Your response has been recorded. We can't wait to see you!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-transparent font-sans"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-transparent font-sans"
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                      <select 
                        className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-transparent font-sans appearance-none"
                        value={formState.guests}
                        onChange={(e) => setFormState({...formState, guests: e.target.value})}
                      >
                        <option value="1">Just me</option>
                        <option value="2">Two people</option>
                        <option value="3">Three people</option>
                        <option value="4">Four people</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Attending?</label>
                      <select 
                        className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-transparent font-sans appearance-none"
                        value={formState.attending}
                        onChange={(e) => setFormState({...formState, attending: e.target.value})}
                      >
                        <option value="yes">Joyfully Accept</option>
                        <option value="no">Regretfully Decline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message (Optional)</label>
                    <textarea 
                      rows={2}
                      className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[var(--color-maroon)] transition-colors bg-transparent font-sans resize-none"
                      placeholder="Any wishes or dietary requirements?"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[var(--color-maroon)] text-[var(--color-gold)] py-4 font-sans uppercase tracking-widest text-sm hover:bg-rose-900 transition-colors shadow-lg"
                  >
                    Send RSVP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
