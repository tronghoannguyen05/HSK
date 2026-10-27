/** Mục tiêu và lộ trình đã chốt với người dùng (xem docs/PLAN.md). */
export const EXAM = { level: 4, date: '2027-06-30' };

export const ROADMAP = [
  { level: 1, label: 'HSK 1', months: 'Th11–12', lessons: 15 },
  { level: 2, label: 'HSK 2', months: 'Th1–2', lessons: 15 },
  { level: 3, label: 'HSK 3', months: 'Th3–4', lessons: 18 },
  { level: 4, label: 'HSK 4', months: 'Th5–6', lessons: 0 /* 4A + 4B, đếm khi dựng dữ liệu */ },
];

export function daysUntil(dateIso: string, from = new Date()): number {
  const target = new Date(dateIso + 'T00:00:00');
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return Math.max(0, Math.round((target.getTime() - start.getTime()) / 86_400_000));
}
