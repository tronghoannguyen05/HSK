import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, BackIcon, MicIcon } from '../components/Icons';
import Seal from '../components/Seal';
import { GRAMMAR_SAMPLE as G } from '../data/grammarSample';
import s from './Teacher.module.css';

type Reply = null | 'right' | 'wrong';

const bubble = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
};

export default function Teacher() {
  const [picked, setPicked] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [reply, setReply] = useState<Reply>(null);

  const current = reply === 'right' ? 4 : 3;
  const pickedOpt = G.quiz.options.find((o) => o.id === picked);

  function pick(id: string, ok: boolean) {
    if (typing || reply === 'right') return;
    setPicked(id);
    setReply(null);
    setTyping(true);
    // TODO: thay bằng lời gọi giảng viên AI qua hàm serverless (docs/PLAN.md).
    window.setTimeout(() => {
      setTyping(false);
      setReply(ok ? 'right' : 'wrong');
    }, 900);
  }

  function ask(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className={s.page}>
      <aside className={s.rail} aria-label="Tiến trình bài giảng">
        <Link to="/" className="icon-btn" aria-label="Về trang chủ">
          <BackIcon size={20} />
        </Link>
        <div>
          <span className={s.eyebrow}>Ngữ pháp · {G.level}</span>
          <h1 className={s.title}>{G.title}</h1>
        </div>
        <ol className={s.steps}>
          {G.steps.map((label, i) => {
            const state = i < current ? 'done' : i === current ? 'now' : 'todo';
            return (
              <li key={label} className={`${s.step} ${s[state]}`}>
                <span className={s.dot}>{state === 'done' ? '✓' : i + 1}</span>
                {label}
              </li>
            );
          })}
        </ol>
        <div className={`card ${s.pattern}`}>
          <span className={s.eyebrow}>Cấu trúc</span>
          {G.patterns.map((p) => (
            <b key={p} className="hz">
              {p}
            </b>
          ))}
        </div>
      </aside>

      <section className={s.chat}>
        <header className={s.chatHead}>
          <div className={`hz ${s.avatar}`} aria-hidden="true">
            老师
          </div>
          <div>
            <b>Giảng viên ảo</b>
            <div className={s.muted}>Giảng tiếng Việt, pha dần tiếng Trung</div>
          </div>
        </header>

        <div className={s.log} role="log" aria-live="polite">
          <motion.div className={s.msg} {...bubble}>
            <span className="hz">大家好！</span> Hôm nay mình học câu với chữ <span className={`hz ${s.mark}`}>是</span> <i>(shì)</i>, nghĩa giống
            chữ “là” trong tiếng Việt. Thứ tự từ cũng giống tiếng Việt, nên bạn sẽ thấy dễ.
          </motion.div>

          <motion.div className={s.msg} {...bubble} transition={{ ...bubble.transition, delay: 0.35 }}>
            <div className={s.examples}>
              {G.examples.map((ex, i) => {
                const [before, after] = ex.hz.split(ex.mark);
                return (
                  <div key={ex.hz} className={i === 0 ? s.exGood : s.ex}>
                    <span className="hz" style={{ fontSize: 24 }}>
                      {before}
                      <b className={s.mark}>{ex.mark}</b>
                      {after}
                    </span>
                    <span className={s.exPy}>{ex.py}</span>
                    <span>{ex.vi}</span>
                  </div>
                );
              })}
            </div>
            <span className={s.muted}>Lưu ý: {G.note}</span>
          </motion.div>

          <motion.div className={s.msg} {...bubble} transition={{ ...bubble.transition, delay: 0.7 }}>
            <span>
              <span className="hz">好，练习一下！</span> Chọn câu đúng cho: <b>“{G.quiz.prompt}”</b>
            </span>
            <div className={s.options}>
              {G.quiz.options.map((o, i) => (
                <button
                  key={o.id}
                  type="button"
                  className={`hz ${s.opt} ${picked === o.id && reply ? s[reply] : ''}`}
                  onClick={() => pick(o.id, o.ok)}
                  disabled={reply === 'right'}
                >
                  {String.fromCharCode(65 + i)}. {o.text}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {pickedOpt && (
              <motion.div key={'me-' + picked} className={`hz ${s.me}`} {...bubble}>
                {pickedOpt.text}
              </motion.div>
            )}
            {typing && (
              <motion.div key="typing" className={s.typing} role="status" aria-label="Giảng viên đang trả lời" {...bubble} exit={{ opacity: 0 }}>
                <span />
                <span />
                <span />
              </motion.div>
            )}
            {reply === 'right' && (
              <motion.div key="right" className={`${s.msg} ${s.relative}`} {...bubble}>
                <span className="hz">对！很好！</span> {G.quiz.right}
                <div className={s.seal}>
                  <Seal text="对" size={60} />
                </div>
              </motion.div>
            )}
            {reply === 'wrong' && (
              <motion.div key={'wrong-' + picked} className={`${s.msg} ${s.wrongMsg}`} {...bubble}>
                {G.quiz.wrong} <span className="hz">再试一次！</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <form className={s.ask} onSubmit={ask}>
          <label htmlFor="ask" className="sr-only">
            Hỏi giảng viên
          </label>
          <input id="ask" type="text" placeholder="Hỏi bất cứ điều gì, ví dụ: khi nào dùng 是, khi nào dùng 在?" />
          <button type="button" className="icon-btn" aria-label="Nói bằng giọng" style={{ width: 54, height: 54 }}>
            <MicIcon size={22} style={{ color: 'var(--jade)' }} />
          </button>
          <button type="submit" className="btn btn-primary" aria-label="Gửi" style={{ width: 54, padding: 0 }}>
            <ArrowIcon size={20} />
          </button>
        </form>
      </section>
    </div>
  );
}
