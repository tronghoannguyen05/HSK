import { motion } from 'framer-motion';

/** Con dấu đỏ son đóng xuống khi trả lời đúng. */
export default function Seal({ text, size = 118 }: { text: string; size?: number }) {
  return (
    <motion.div
      className="hz"
      aria-hidden="true"
      initial={{ scale: 2.2, rotate: -26, opacity: 0 }}
      animate={{ scale: 1, rotate: -12, opacity: 0.94 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 520, damping: 22 }}
      style={{
        width: size,
        height: size,
        border: `${Math.max(3, size / 24)}px solid var(--seal)`,
        borderRadius: size * 0.14,
        color: 'var(--seal)',
        background: 'color-mix(in srgb, var(--surface) 85%, transparent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * (text.length > 1 ? 0.37 : 0.5),
        fontWeight: 700,
        pointerEvents: 'none',
      }}
    >
      {text}
    </motion.div>
  );
}
