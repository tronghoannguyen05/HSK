/** Thẻ mẫu cho bản khung. Thay bằng dữ liệu thật từ src/data/vocab + danh sách từ từng bài. */
export type Card = {
  hz: string;
  py: string;
  vi: string;
  en: string;
  ex: string;
  exPy: string;
  exVi: string;
};

export const SAMPLE_DECK: Card[] = [
  { hz: '谢谢', py: 'xièxie', vi: 'cảm ơn', en: 'thank you', ex: '谢谢你！', exPy: 'Xièxie nǐ!', exVi: 'Cảm ơn bạn!' },
  { hz: '老师', py: 'lǎoshī', vi: 'giáo viên, thầy/cô', en: 'teacher', ex: '她是老师。', exPy: 'Tā shì lǎoshī.', exVi: 'Cô ấy là giáo viên.' },
  { hz: '学生', py: 'xuésheng', vi: 'học sinh, sinh viên', en: 'student', ex: '我是学生。', exPy: 'Wǒ shì xuésheng.', exVi: 'Tôi là sinh viên.' },
];

/** Khoảng ôn lại hiển thị trên nút. Thay bằng kết quả của FSRS. */
export const RATINGS = [
  { id: 'again', label: 'Quên', next: '1 phút' },
  { id: 'hard', label: 'Mơ hồ', next: '10 phút' },
  { id: 'good', label: 'Nhớ', next: '3 ngày' },
  { id: 'easy', label: 'Dễ', next: '8 ngày' },
] as const;
