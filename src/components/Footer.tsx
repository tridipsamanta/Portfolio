import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            Made with <Heart size={14} className="text-primary animate-pulse" /> by Tridip Samanta
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
