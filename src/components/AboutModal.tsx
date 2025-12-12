import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function AboutModal({
  open,
  onOpenChange
}: AboutModalProps) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl glass-strong border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">
            About Me
          </DialogTitle>
        </DialogHeader>
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science Engineering student at COEP Technological University, driven by curiosity and a deep interest in how technology can create real-world impact. I love exploring areas like Artificial Intelligence, Machine Learning, DevOps and Cloud Computing not just for the theory, but for how they can actually make life better or more efficient. I'm especially passionate about building real-world projects that turn ideas into tangible solutions and push me to learn something new every time.
          </p>
          <p>At my core, I'm someone who enjoys learning, building and experimenting, constantly trying to bridge creativity and logic in everything I do.</p>
          <p>
            At my core, I'm someone who enjoys learning, building and experimenting — constantly trying to bridge creativity and logic in everything I do.
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>;
}