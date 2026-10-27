import HanziWriter from 'hanzi-writer';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackIcon, ReplayIcon } from '../components/Icons';
import s from './Writing.module.css';

type Mode = 'watch' | 'trace' | 'free';

// Từ mẫu. Tên nét: tiếng Trung + tiếng Việt. Khi dựng dữ liệu thật, đưa vào src/data.
const WORD = {
  hz: '你好',
  py: 'nǐ hǎo',
  vi: 'xin chào',
  en: 'hello',
  strokes: {
    你: [['撇', 'phẩy'], ['竖', 'sổ'], ['撇', 'phẩy'], ['横钩', 'ngang móc'], ['竖钩', 'sổ móc'], ['撇', 'phẩy'], ['点', 'chấm']],
    好: [['撇点', 'phẩy chấm'], ['撇', 'phẩy'], ['横', 'ngang'], ['横撇', 'ngang phẩy'], ['竖钩', 'sổ móc'], ['横', 'ngang']],
  } as Record<string, string[][]>,
  radical: { 你: '亻 nhân đứng', 好: '女 nữ' } as Record<string, string>,
};

const MODES: { id: Mode; label: string }[] = [
  { id: 'watch', label: 'Xem nét' },
  { id: 'trace', label: 'Tô theo' },
  { id: 'free', label: 'Tự viết' },
];

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export default function Writing() {
  const chars = [...WORD.hz];
  const [char, setChar] = useState(chars[0]);
  const [mode, setMode] = useState<Mode>('watch');
  const [run, setRun] = useState(0);
  const [status, setStatus] = useState('');
  const [outlines, setOutlines] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const size = 560;

  useEffect(() => {
    HanziWriter.loadCharacterData(char).then((d) => d && setOutlines(d.strokes));
  }, [char]);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    el.innerHTML = '';
    const writer = HanziWriter.create(el, char, {
      width: size,
      height: size,
      padding: 40,
      strokeColor: cssVar('--ink'),
      outlineColor: cssVar('--track'),
      drawingColor: cssVar('--ink'),
      highlightColor: cssVar('--seal'),
      drawingWidth: 26,
      strokeAnimationSpeed: 1.1,
      delayBetweenStrokes: 220,
      showOutline: mode !== 'free',
      showCharacter: false,
    });
    setCurrent(0);
    if (mode === 'watch') {
      setStatus('Mực chảy theo đúng thứ tự từng nét.');
      writer.animateCharacter();
    } else {
      setStatus(mode === 'trace' ? 'Tô theo nét mờ. Sai nét, app sẽ chỉ lại.' : 'Viết từ trí nhớ. Sai 3 lần, app gợi ý nét.');
      writer.quiz({
        showHintAfterMisses: mode === 'trace' ? 1 : 3,
        highlightOnComplete: true,
        onCorrectStroke: (d) => {
          setCurrent(d.strokeNum + 1);
          setStatus(`Đúng nét ${d.strokeNum + 1}.`);
        },
        onMistake: (d) => setStatus(`Nét ${d.strokeNum + 1} chưa đúng, thử lại.`),
        onComplete: (d) => setStatus(d.totalMistakes === 0 ? 'Hoàn hảo, không sai nét nào!' : `Xong, sai ${d.totalMistakes} lần.`),
      });
    }
    return () => {
      el.innerHTML = '';
    };
  }, [char, mode, run]);

  const strokeNames = WORD.strokes[char] ?? [];

  return (
    <div className={s.page}>
      <header className={s.header}>
        <Link to="/" className="icon-btn" aria-label="Về trang chủ">
          <BackIcon size={20} />
        </Link>
        <h1>Luyện viết · HSK 1 · Bài 2</h1>
        <div role="tablist" aria-label="Chế độ luyện" className={s.tabs}>
          {MODES.map((m) => (
            <button key={m.id} type="button" role="tab" aria-selected={mode === m.id} className={s.tab} onClick={() => setMode(m.id)}>
              {mode === m.id && <motion.span layoutId="tab-pill" className={s.tabPill} transition={{ type: 'spring', stiffness: 500, damping: 36 }} />}
              <span className={s.tabLabel}>{m.label}</span>
            </button>
          ))}
        </div>
      </header>

      <div className={s.body}>
        <section className={s.pad} aria-label={`Ô viết chữ ${char}`}>
          <div className={s.paper}>
            <svg className={s.grid} viewBox="0 0 1024 1024" aria-hidden="true">
              <rect x="36" y="36" width="952" height="952" />
              <path d="M36 36L988 988M988 36L36 988M512 36V988M36 512H988" />
            </svg>
            <div ref={boxRef} className={s.writer} style={{ touchAction: 'none' }} />
          </div>
          <p className={s.status} aria-live="polite">
            {status}
          </p>
        </section>

        <section className={s.side}>
          <div className={`card ${s.word}`}>
            <div className={s.wordHead}>
              <span className="hz">{WORD.hz}</span>
              <span className={s.py}>{WORD.py}</span>
            </div>
            <div>
              <b>{WORD.vi}</b>
              <div className={s.muted}>{WORD.en}</div>
            </div>
            <div className={s.charPick}>
              {chars.map((c) => (
                <button key={c} type="button" className={`hz ${s.charBtn} ${c === char ? s.charOn : ''}`} onClick={() => setChar(c)} aria-pressed={c === char}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className={`card ${s.order}`}>
            <div className={s.orderHead}>
              <h2>Thứ tự {outlines.length} nét</h2>
              <span className={s.muted}>
                Bộ <span className="hz">{WORD.radical[char]}</span>
              </span>
            </div>
            <div className={s.thumbs} style={{ gridTemplateColumns: `repeat(${Math.max(outlines.length, 1)}, minmax(0, 1fr))` }}>
              {outlines.map((_, i) => (
                <div key={i} className={s.thumb}>
                  <svg viewBox="0 0 1024 1024" role="img" aria-label={`Nét ${i + 1}: ${strokeNames[i]?.[1] ?? ''}`}>
                    <g transform="scale(1,-1) translate(0,-900)">
                      {outlines.map((d, k) => (
                        <path key={k} d={d} className={k < i ? s.done : k === i ? (mode !== 'watch' && i === current ? s.next : s.cur) : s.todo} />
                      ))}
                    </g>
                  </svg>
                  <span className="hz">{strokeNames[i]?.[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={s.actions}>
            <button type="button" className="btn btn-dark" onClick={() => { setMode('watch'); setRun((r) => r + 1); }}>
              <ReplayIcon size={18} /> Xem lại thứ tự nét
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setMode('trace')}>
              Tô theo bằng Pencil
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
