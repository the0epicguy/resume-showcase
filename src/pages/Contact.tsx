import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { CursorBlobs } from '@/components/CursorBlobs';

const LINKEDIN_URL = 'https://linkedin.com/in/yourprofile';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could be integrated with email service
    window.location.href = `mailto:advait@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="relative min-h-screen">
      <CursorBlobs />
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-center text-lg">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="mt-12 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg glass bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg glass bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-lg gradient-primary text-foreground font-semibold shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex justify-center gap-4"
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-muted/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:advait@example.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-muted/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-muted/30 transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-sm">GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-40 blur-3xl"
          style={{ background: 'linear-gradient(90deg, hsl(174 72% 46%), hsl(168 80% 42%))' }}
        />
      </section>
    </div>
  );
}