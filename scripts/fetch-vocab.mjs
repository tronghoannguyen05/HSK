// Tải bộ từ vựng HSK 3.0 mã nguồn mở (drkameleon/complete-hsk-vocabulary)
// và lưu bản rút gọn vào src/data/vocab/new-<cấp>.json.
// Kiểm tra lại đường dẫn trong repo gốc nếu repo đổi cấu trúc.
import { mkdir, writeFile } from 'node:fs/promises';

const BASE = 'https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/wordlists/exclusive/new';
const LEVELS = ['1', '2', '3', '4', '5', '6', '7'];
const OUT = new URL('../src/data/vocab/', import.meta.url);

await mkdir(OUT, { recursive: true });
for (const level of LEVELS) {
  const res = await fetch(`${BASE}/${level}.json`);
  if (!res.ok) {
    console.error(`HSK ${level}: lỗi ${res.status}`);
    continue;
  }
  const raw = await res.json();
  const words = raw.map((w) => {
    const form = w.forms?.[0] ?? {};
    return {
      hz: w.simplified,
      py: form.transcriptions?.pinyin ?? '',
      en: (form.meanings ?? []).slice(0, 3),
      vi: [],
    };
  });
  await writeFile(new URL(`new-${level}.json`, OUT), JSON.stringify(words, null, 0));
  console.log(`HSK ${level === '7' ? '7–9' : level}: ${words.length} từ`);
}
