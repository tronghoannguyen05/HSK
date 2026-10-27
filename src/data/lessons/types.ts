/**
 * Kiểu dữ liệu cho một bài học theo giáo trình 《新HSK教程》.
 * Mô tả đầy đủ: docs/LESSONS.md. Nội dung trong các file bài là tự soạn theo
 * khung của sách (danh sách từ, tên điểm ngữ pháp, trình tự giảng), không chép
 * nguyên văn bài khoá, hội thoại, câu bài tập của sách.
 */

export type Example = { hz: string; py: string; vi: string };

export type Word = {
  id: string; // "w01"
  hz: string;
  py: string;
  pos: string; // từ loại theo sách: v., n., pron., adv., adj. ("" nếu sách để trống)
  vi: string;
  en: string;
  text: number; // xuất hiện ở đoạn hội thoại số mấy
  example: Example; // câu ví dụ tự soạn, chỉ dùng từ đã học
};

export type ProperName = { hz: string; py: string; vi: string };

export type PronunciationPoint = {
  id: string;
  title: string;
  ruleVi: string;
  syllables: string[]; // âm tiết để nghe và đọc theo (tự chọn)
};

export type GrammarPoint = {
  id: string;
  title: string;
  pattern: string;
  explainVi: string;
  examples: Example[];
  source: 'book' | 'vina'; // 'book': điểm ngữ pháp có trong sách; 'vina': Vina bổ sung
};

export type Tip = { id: string; textVi: string; afterWord?: string };

export type Section = {
  id: string; // "text1"
  sceneVi: string; // tình huống, diễn đạt lại bằng lời của mình
  wordIds: string[];
  tipIds: string[];
  speaking: string[]; // nhiệm vụ nói (đóng vai với Vina, tự giới thiệu...)
};

export type LectureStep =
  | { kind: 'objectives' }
  | { kind: 'pronunciation'; ref: string }
  | { kind: 'scene'; ref: string }
  | { kind: 'words'; ref: string }
  | { kind: 'drill'; ref: string; mode: 'flash' | 'listen' | 'match' }
  | { kind: 'grammar'; ref: string }
  | { kind: 'tip'; ref: string }
  | { kind: 'speaking'; ref: string }
  | { kind: 'review' }
  | { kind: 'culture'; topicVi: string };

export type ExerciseType =
  | 'listen-initial' // nghe, viết thanh mẫu
  | 'listen-final' // nghe, viết vận mẫu
  | 'listen-tone' // nghe, đánh dấu thanh
  | 'match-dialogue' // nhìn tình huống, chọn hội thoại đúng
  | 'word-meaning' // chọn nghĩa
  | 'word-pinyin' // chọn pinyin
  | 'order-words' // sắp xếp thành câu
  | 'role-play'; // đóng vai với Vina

export type Exercise = { type: ExerciseType; promptVi: string; items?: string[] };

export type Lesson = {
  level: number;
  lesson: number;
  titleZh: string;
  titlePy: string;
  titleVi: string;
  source: { textbook: string; workbook: string; slides: string; writingBook: string };
  objectivesVi: string[];
  pronunciation: PronunciationPoint[];
  words: Word[];
  names: ProperName[];
  sections: Section[];
  grammar: GrammarPoint[];
  tips: Tip[];
  lecture: LectureStep[];
  exercises: Exercise[];
  writing: { mode: 'free-notebook' | 'book-practice'; chars: string[]; noteVi: string };
};
