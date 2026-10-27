import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowIcon, FlameIcon } from '../components/Icons';
import { EXAM, ROADMAP, daysUntil } from '../data/plan';
import s from './Home.module.css';

// Số liệu minh hoạ cho bản khung. Thay bằng tiến độ thật khi có lưu trữ.
const DEMO = {
  streak: 12,
  currentLesson: 2,
  levelProgress: 0.18,
  skills: [
    { name: 'Từ vựng', pct: 34 },
    { name: 'Viết', pct: 22 },
    { name: 'Nghe', pct: 28 },
    { name: 'Nói', pct: 15 },
    { name: 'Đọc', pct: 19 },
  ],
};

const rise = (i: number) => ({
  initial: { opacity: 0.25, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.05 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] },
});

export default function Home() {
  const days = daysUntil(EXAM.date);
  const today = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className={s.page}>
      <motion.header className={s.header} {...rise(0)}>
        <div>
          <p className={s.date}>{today}</p>
          <h1 className={s.hello}>
            <span className="hz">你好</span>, Hanz
          </h1>
        </div>
        <div className={s.streak} role="img" aria-label={`Chuỗi ${DEMO.streak} ngày học liên tiếp`}>
          <FlameIcon size={18} style={{ color: 'var(--seal)' }} />
          {DEMO.streak} ngày
        </div>
      </motion.header>

      <motion.section className={s.hero} aria-label="Mục tiêu thi" {...rise(1)}>
        <div className={s.countdown}>
          <p className={s.eyebrow}>Mục tiêu · 30/6/2027</p>
          <div className={s.days}>
            <span className={s.bigNum}>{days}</span>
            <span>
              ngày đến
              <br />
              HSK {EXAM.level}
            </span>
          </div>
        </div>
        <div className={s.roadmap}>
          <div className={s.segments}>
            {ROADMAP.map((r, i) => (
              <div key={r.level} className={s.segment}>
                <div className={s.segTrack}>
                  {i === 0 && (
                    <motion.div
                      className={s.segFill}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: DEMO.levelProgress }}
                      transition={{ duration: 1.6, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  )}
                </div>
                <span className={i === 0 ? s.segLabelNow : s.segLabel}>
                  <b>{r.label}</b> · {r.months}
                </span>
              </div>
            ))}
          </div>
          <p className={s.heroNote}>Đang đúng lộ trình. Tuần này cần xong bài 1 và bài 2 của HSK 1.</p>
        </div>
      </motion.section>

      <div className={s.grid}>
        <motion.section className={`card ${s.today}`} aria-labelledby="today-h" {...rise(2)}>
          <div className={s.cardHead}>
            <h2 id="today-h">Buổi học hôm nay</h2>
            <span className={s.muted}>khoảng 35 phút</span>
          </div>
          <ol className={s.steps}>
            {[
              ['Ôn thẻ đến hạn', '38 thẻ · 12 phút'],
              ['Từ mới bài 2', '8 từ · nhìn, nghe, viết, nói · 12 phút'],
              ['Ngữ pháp với giảng viên', 'Câu chữ 是 · 11 phút'],
            ].map(([t, d], i) => (
              <li key={t}>
                <span className={s.stepNum}>{i + 1}</span>
                <div>
                  <b>{t}</b>
                  <div className={s.muted}>{d}</div>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/tu-vung" className={`btn btn-primary ${s.cta}`}>
            Bắt đầu buổi học <ArrowIcon size={18} />
          </Link>
        </motion.section>

        <div className={s.col}>
          <motion.section className={`card ${s.path}`} aria-labelledby="path-h" {...rise(2)}>
            <div className={s.cardHead}>
              <h2 id="path-h">HSK 1 · 15 bài</h2>
              <span className={s.muted}>Bài 1 xong</span>
            </div>
            <div className={s.lessons}>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => {
                const state = n < DEMO.currentLesson ? 'done' : n === DEMO.currentLesson ? 'now' : 'locked';
                const label = state === 'done' ? 'đã xong' : state === 'now' ? 'đang học' : 'chưa mở';
                return (
                  <span key={n} className={`${s.lesson} ${s[state]}`} role="img" aria-label={`Bài ${n}, ${label}`}>
                    {n}
                  </span>
                );
              })}
            </div>
          </motion.section>

          <motion.section className={`card ${s.skills}`} aria-labelledby="skill-h" {...rise(3)}>
            <h2 id="skill-h">Kỹ năng</h2>
            {DEMO.skills.map((k) => (
              <div key={k.name} className={s.skillRow}>
                <span>{k.name}</span>
                <div className={s.skillTrack}>
                  <motion.div
                    className={s.skillFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${k.pct}%` }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </div>
                <span className={s.muted}>{k.pct}%</span>
              </div>
            ))}
          </motion.section>
        </div>
      </div>
    </div>
  );
}
