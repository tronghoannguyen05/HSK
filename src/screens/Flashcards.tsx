import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackIcon, SpeakerIcon } from '../components/Icons';
import Seal from '../components/Seal';
import { RATINGS, SAMPLE_DECK } from '../data/sampleDeck';
import { speakZh } from '../lib/speech';
import s from './Flashcards.module.css';

const TOTAL = 38; // minh hoạ

export default function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(11);
  const [flipped, setFlipped] = useState(false);
  const [stamped, setStamped] = useState(false);
  const busy = useRef(false);
  const shake = useAnimationControls();
  const card = SAMPLE_DECK[idx % SAMPLE_DECK.length];

  function rate(id: (typeof RATINGS)[number]['id']) {
    if (busy.current) return;
    busy.current = true;
    const remembered = id === 'good' || id === 'easy';
    if (remembered) setStamped(true);
    if (id === 'again') shake.start({ x: [0, -10, 9, -6, 4, 0], transition: { duration: 0.45 } });
    window.setTimeout(
      () => {
        setStamped(false);
        setFlipped(false);
        setIdx((i) => i + 1);
        setDone((d) => Math.min(TOTAL - 1, d + 1));
        busy.current = false;
      },
      remembered ? 900 : 450,
    );
  }

  return (
    <div className={s.page}>
      <header className={s.header}>
        <Link to="/" className="icon-btn" aria-label="Về trang chủ">
          <BackIcon size={20} />
        </Link>
        <div className={s.progress}>
          <div className={s.progressText}>
            <b>Ôn thẻ đến hạn · HSK 1</b>
            <span>
              {done + 1} / {TOTAL}
            </span>
          </div>
          <div className={s.track}>
            <motion.div className={s.fill} animate={{ width: `${(done / TOTAL) * 100}%` }} transition={{ duration: 0.6 }} />
          </div>
        </div>
      </header>

      <div className={s.stage}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={idx}
            className={s.scene}
            initial={{ x: 80, rotate: 4, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: -80, rotate: -4, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div animate={shake} className={s.shakeWrap}>
              <button
                type="button"
                className={s.cardBtn}
                onClick={() => setFlipped((f) => !f)}
                aria-label={flipped ? `Mặt sau thẻ ${card.hz}, chạm để lật lại` : `Thẻ ${card.hz}, chạm để lật`}
              >
                <motion.div
                  className={s.inner}
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <div className={`${s.face} ${s.front}`}>
                    <span className={s.prompt}>Từ này nghĩa là gì?</span>
                    <span className={`hz ${s.bigHz}`}>{card.hz}</span>
                    <span className={s.hint}>Chạm để lật thẻ</span>
                  </div>
                  <div className={`${s.face} ${s.back}`}>
                    <div className={s.backHead}>
                      <span className={`hz ${s.midHz}`}>{card.hz}</span>
                      <span className={s.py}>{card.py}</span>
                    </div>
                    <div className={s.meaning}>
                      <b>{card.vi}</b>
                      <span>{card.en}</span>
                    </div>
                    <div className={s.example}>
                      <span className="hz">{card.ex}</span>
                      <span className={s.exPy}>{card.exPy}</span>
                      <span className={s.exVi}>{card.exVi}</span>
                    </div>
                  </div>
                </motion.div>
              </button>
            </motion.div>
            <AnimatePresence>
              {stamped && (
                <div className={s.seal}>
                  <Seal text="记住" />
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className={s.footer}>
        <button type="button" className="icon-btn" style={{ width: 64, height: 64 }} onClick={() => speakZh(card.hz)} aria-label="Nghe phát âm">
          <SpeakerIcon size={26} style={{ color: 'var(--primary)' }} />
        </button>
        {flipped ? (
          <div className={s.ratings}>
            {RATINGS.map((r) => (
              <button key={r.id} type="button" className={`${s.rate} ${s[r.id]}`} onClick={() => rate(r.id)}>
                <b>{r.label}</b>
                <span>{r.next}</span>
              </button>
            ))}
          </div>
        ) : (
          <button type="button" className="btn btn-dark" style={{ minHeight: 64, padding: '0 40px' }} onClick={() => setFlipped(true)}>
            Lật thẻ
          </button>
        )}
      </footer>
    </div>
  );
}
