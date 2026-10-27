/**
 * Bài ngữ pháp mẫu (nội dung tự soạn, không chép từ giáo trình).
 * Khi có giảng viên AI, phần lời giảng sẽ được tạo theo khung này.
 */
export const GRAMMAR_SAMPLE = {
  title: 'Câu chữ 是',
  level: 'HSK 1',
  steps: ['Giới thiệu', 'Cấu trúc', 'Ví dụ', 'Luyện tập', 'Tự đặt câu'],
  patterns: ['A + 是 + B', 'A + 不是 + B'],
  examples: [
    { hz: '我是学生。', py: 'Wǒ shì xuésheng.', vi: 'Tôi là sinh viên.', mark: '是' },
    { hz: '我不是老师。', py: 'Wǒ bú shì lǎoshī.', vi: 'Tôi không phải giáo viên.', mark: '不是' },
  ],
  note: '不 đọc thành bú khi đứng trước thanh 4 như 是.',
  quiz: {
    prompt: 'Tôi là sinh viên.',
    options: [
      { id: 'a', text: '我学生是。', ok: false },
      { id: 'b', text: '我是学生。', ok: true },
      { id: 'c', text: '是学生我。', ok: false },
    ],
    right: 'Chính xác. 是 đứng giữa hai danh từ, đúng như “là”. Giờ thử tự đặt một câu giới thiệu bản thân nhé.',
    wrong: 'Gần đúng rồi. 是 phải đứng giữa 我 và 学生, giống “Tôi là sinh viên”.',
  },
};
