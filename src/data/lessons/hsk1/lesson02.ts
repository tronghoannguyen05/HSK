import type { Lesson } from '../types';

/**
 * HSK 1 · Bài 2 · 我叫李文
 * Nguồn khung: sách tr. 5–9, sách bài tập tr. 5–8, slide 《新HSK教程1》第2课.
 * Danh sách từ, pinyin, từ loại và nghĩa tiếng Anh theo sách; nghĩa tiếng Việt,
 * câu ví dụ, lời giải thích và tình huống là tự soạn.
 */
export const lesson02: Lesson = {
  level: 1,
  lesson: 2,
  titleZh: '我叫李文',
  titlePy: 'Wǒ jiào Lǐ Wén',
  titleVi: 'Tôi tên là Lý Văn',
  source: {
    textbook: 'Sách tr. 5–9',
    workbook: 'Sách bài tập tr. 5–8',
    slides: '《新HSK教程1》第2课.pptx (39 slide)',
    writingBook: 'Không có: vở Writing của HSK 1 bắt đầu từ bài 8',
  },

  objectivesVi: [
    'Nghe hiểu người khác tự giới thiệu và tự giới thiệu bằng tên tiếng Trung.',
    'Xin lỗi bằng 对不起 và đáp lại bằng 没关系.',
    'Nắm trật tự từ cơ bản của câu tiếng Trung.',
    'Hiểu cách đặt tên người Trung Quốc: họ đứng trước, tên đứng sau.',
  ],

  pronunciation: [
    {
      id: 'p1',
      title: 'Thanh mẫu j, q, x',
      ruleVi:
        'j, q, x chỉ ghép với i, ü và các vận mẫu bắt đầu bằng i hoặc ü. Không bao giờ ghép với a, u hoặc vận mẫu bắt đầu bằng a, u.',
      syllables: ['jī', 'qí', 'xǐ', 'jiā', 'qiáo', 'xiě', 'jiàn', 'qīng', 'xióng', 'xué'],
    },
    {
      id: 'p2',
      title: 'i, u, ü đứng một mình',
      ruleVi: 'Khi i, u, ü tự làm thành một âm tiết thì viết là yi, wu, yu.',
      syllables: ['yī', 'yí', 'wǔ', 'wù', 'yú', 'yǔ'],
    },
    {
      id: 'p3',
      title: 'j, q, x + ü',
      ruleVi: 'Sau j, q, x thì ü bỏ hai chấm, viết thành u. Đọc vẫn là ü.',
      syllables: ['jū', 'jú', 'qù', 'qǔ', 'xū', 'xǔ'],
    },
    {
      id: 'p4',
      title: 'Vận mẫu iou',
      ruleVi:
        'iou đứng một mình viết là you. Khi ghép với thanh mẫu (m, d, n, l, j, q, x) thì viết gọn là iu, dấu thanh đặt trên u.',
      syllables: ['yōu', 'yǒu', 'jiǔ', 'liù', 'niú', 'xiū'],
    },
  ],

  words: [
    { id: 'w01', hz: '请问', py: 'qǐngwèn', pos: 'v.', vi: 'xin hỏi, cho hỏi', en: 'excuse me', text: 1,
      example: { hz: '请问，你叫什么？', py: 'Qǐngwèn, nǐ jiào shénme?', vi: 'Cho hỏi, bạn tên gì?' } },
    { id: 'w02', hz: '你', py: 'nǐ', pos: 'pron.', vi: 'bạn, anh, chị (ngôi thứ hai số ít)', en: '(singular) you', text: 1,
      example: { hz: '你好！', py: 'Nǐ hǎo!', vi: 'Chào bạn!' } },
    { id: 'w03', hz: '叫', py: 'jiào', pos: 'v.', vi: 'tên là, gọi là', en: 'be called as', text: 1,
      example: { hz: '我叫 Hanz。', py: 'Wǒ jiào Hanz.', vi: 'Tôi tên là Hanz.' } },
    { id: 'w04', hz: '什么', py: 'shénme', pos: 'pron.', vi: 'gì, cái gì', en: 'what', text: 1,
      example: { hz: '你叫什么名字？', py: 'Nǐ jiào shénme míngzi?', vi: 'Bạn tên là gì?' } },
    { id: 'w05', hz: '名字', py: 'míngzi', pos: 'n.', vi: 'tên', en: 'name', text: 1,
      example: { hz: '什么名字？', py: 'Shénme míngzi?', vi: 'Tên gì?' } },
    { id: 'w06', hz: '我', py: 'wǒ', pos: 'pron.', vi: 'tôi, mình', en: 'I; me', text: 1,
      example: { hz: '我是学生。', py: 'Wǒ shì xuésheng.', vi: 'Tôi là học sinh.' } },
    { id: 'w07', hz: '不', py: 'bù', pos: 'adv.', vi: 'không', en: 'not; no', text: 2,
      example: { hz: '我不是老师。', py: 'Wǒ bú shì lǎoshī.', vi: 'Tôi không phải giáo viên.' } },
    { id: 'w08', hz: '是', py: 'shì', pos: 'v.', vi: 'là', en: 'be', text: 2,
      example: { hz: '你是学生。', py: 'Nǐ shì xuésheng.', vi: 'Bạn là học sinh.' } },
    { id: 'w09', hz: '对不起', py: 'duìbuqǐ', pos: 'v.', vi: 'xin lỗi', en: 'sorry', text: 2,
      example: { hz: '对不起！', py: 'Duìbuqǐ!', vi: 'Xin lỗi!' } },
    { id: 'w10', hz: '没关系', py: 'méi guānxi', pos: '', vi: 'không sao, không có gì', en: "that's all right; never mind", text: 2,
      example: { hz: '没关系！', py: 'Méi guānxi!', vi: 'Không sao đâu!' } },
    { id: 'w11', hz: '没事', py: 'méishì', pos: 'v.', vi: 'không sao (khẩu ngữ)', en: "it doesn't matter", text: 2,
      example: { hz: '没事，没事。', py: 'Méishì, méishì.', vi: 'Không sao, không sao.' } },
    { id: 'w12', hz: '很', py: 'hěn', pos: 'adv.', vi: 'rất', en: 'very', text: 3,
      example: { hz: '我很高兴。', py: 'Wǒ hěn gāoxìng.', vi: 'Tôi rất vui.' } },
    { id: 'w13', hz: '高兴', py: 'gāoxìng', pos: 'adj.', vi: 'vui, vui mừng', en: 'glad; happy', text: 3,
      example: { hz: '很高兴认识你！', py: 'Hěn gāoxìng rènshi nǐ!', vi: 'Rất vui được làm quen với bạn!' } },
    { id: 'w14', hz: '认识', py: 'rènshi', pos: 'v.', vi: 'quen, quen biết, làm quen', en: 'know; become acquainted with', text: 3,
      example: { hz: '我认识你。', py: 'Wǒ rènshi nǐ.', vi: 'Tôi biết bạn.' } },
    { id: 'w15', hz: '也', py: 'yě', pos: 'adv.', vi: 'cũng', en: 'also; too', text: 3,
      example: { hz: '我也是学生。', py: 'Wǒ yě shì xuésheng.', vi: 'Tôi cũng là học sinh.' } },
  ],

  names: [
    { hz: '王一飞', py: 'Wáng Yīfēi', vi: 'Vương Nhất Phi (nhân vật giáo viên trong sách)' },
    { hz: '陈天中', py: 'Chén Tiānzhōng', vi: 'Trần Thiên Trung' },
    { hz: '白家月', py: 'Bái Jiāyuè', vi: 'Bạch Gia Nguyệt' },
    { hz: '李文', py: 'Lǐ Wén', vi: 'Lý Văn' },
    { hz: '安妮', py: 'Ānnī', vi: 'Annie' },
  ],

  sections: [
    {
      id: 'text1',
      sceneVi: 'Buổi học đầu tiên, cô giáo hỏi tên từng học viên trong lớp.',
      wordIds: ['w01', 'w02', 'w03', 'w04', 'w05', 'w06'],
      tipIds: ['t1'],
      speaking: ['Vina hỏi tên bạn bằng tiếng Trung, bạn trả lời bằng tên của mình.'],
    },
    {
      id: 'text2',
      sceneVi: 'Ở sân trường, một bạn chào nhầm tên người khác, xin lỗi, và người kia đáp không sao.',
      wordIds: ['w07', 'w08', 'w09', 'w10', 'w11'],
      tipIds: ['t2', 't3'],
      speaking: ['Vina gọi nhầm tên bạn; bạn sửa lại "我不是…，我是…", Vina xin lỗi và bạn đáp lại.'],
    },
    {
      id: 'text3',
      sceneVi: 'Hai bạn sinh viên gặp nhau lần đầu, chào và giới thiệu tên.',
      wordIds: ['w12', 'w13', 'w14', 'w15'],
      tipIds: ['t4'],
      speaking: ['Tự giới thiệu với Vina: chào, nói tên, nói rất vui được làm quen.'],
    },
  ],

  grammar: [
    {
      id: 'g1',
      title: 'Trật tự từ cơ bản',
      pattern: 'Chủ ngữ + Vị ngữ + Tân ngữ',
      explainVi:
        'Câu tiếng Trung xếp theo thứ tự Chủ ngữ → Động từ → Tân ngữ, giống hệt tiếng Việt: "Tôi (chủ ngữ) tên là (động từ) Hanz (tân ngữ)".',
      examples: [
        { hz: '我叫 Hanz。', py: 'Wǒ jiào Hanz.', vi: 'Tôi tên là Hanz.' },
        { hz: '你是学生。', py: 'Nǐ shì xuésheng.', vi: 'Bạn là học sinh.' },
        { hz: '我认识你。', py: 'Wǒ rènshi nǐ.', vi: 'Tôi biết bạn.' },
      ],
      source: 'book',
    },
    {
      id: 'g2',
      title: 'Phủ định bằng 不',
      pattern: 'Chủ ngữ + 不 + Động từ/Tính từ',
      explainVi:
        '不 đặt ngay trước động từ hoặc tính từ để phủ định, giống "không" trong tiếng Việt. 不 đọc là bú khi đứng trước một âm tiết thanh 4 (不是 bú shì), còn lại đọc bù.',
      examples: [
        { hz: '我不是老师。', py: 'Wǒ bú shì lǎoshī.', vi: 'Tôi không phải giáo viên.' },
        { hz: '我不认识你。', py: 'Wǒ bú rènshi nǐ.', vi: 'Tôi không quen bạn.' },
        { hz: '我不高兴。', py: 'Wǒ bù gāoxìng.', vi: 'Tôi không vui.' },
      ],
      source: 'vina',
    },
    {
      id: 'g3',
      title: 'Phó từ 也 và 很',
      pattern: 'Chủ ngữ + 也 + (很) + Vị ngữ',
      explainVi:
        '也 (cũng) và 很 (rất) đứng sau chủ ngữ, trước vị ngữ. Khi đi cùng nhau thì 也 đứng trước 很: 我也很高兴.',
      examples: [
        { hz: '我也是学生。', py: 'Wǒ yě shì xuésheng.', vi: 'Tôi cũng là học sinh.' },
        { hz: '我也很高兴。', py: 'Wǒ yě hěn gāoxìng.', vi: 'Tôi cũng rất vui.' },
      ],
      source: 'vina',
    },
  ],

  tips: [
    { id: 't1', afterWord: 'w01', textVi: '请问 là cách hỏi lịch sự, dùng khi muốn nhờ người khác trả lời một câu hỏi, giống "cho hỏi" trong tiếng Việt.' },
    { id: 't2', afterWord: 'w10', textVi: 'Trong văn nói, người Trung Quốc hay đáp lời xin lỗi bằng 没事 hoặc nói hai lần 没事没事.' },
    { id: 't3', afterWord: 'w07', textVi: '不 đổi thành bú trước thanh 4: 不是 bú shì, 不认识 bú rènshi.' },
    { id: 't4', textVi: 'Tên người Trung Quốc: họ đứng trước, tên đứng sau, giống người Việt. 李文 thì 李 là họ, 文 là tên.' },
  ],

  lecture: [
    { kind: 'objectives' },
    { kind: 'pronunciation', ref: 'p1' },
    { kind: 'pronunciation', ref: 'p2' },
    { kind: 'pronunciation', ref: 'p3' },
    { kind: 'pronunciation', ref: 'p4' },
    { kind: 'scene', ref: 'text1' },
    { kind: 'words', ref: 'text1' },
    { kind: 'tip', ref: 't1' },
    { kind: 'drill', ref: 'text1', mode: 'flash' },
    { kind: 'speaking', ref: 'text1' },
    { kind: 'scene', ref: 'text2' },
    { kind: 'words', ref: 'text2' },
    { kind: 'tip', ref: 't2' },
    { kind: 'tip', ref: 't3' },
    { kind: 'drill', ref: 'text2', mode: 'listen' },
    { kind: 'speaking', ref: 'text2' },
    { kind: 'grammar', ref: 'g1' },
    { kind: 'grammar', ref: 'g2' },
    { kind: 'scene', ref: 'text3' },
    { kind: 'words', ref: 'text3' },
    { kind: 'tip', ref: 't4' },
    { kind: 'grammar', ref: 'g3' },
    { kind: 'drill', ref: 'text3', mode: 'match' },
    { kind: 'speaking', ref: 'text3' },
    { kind: 'culture', topicVi: 'Tên các nước trên thế giới bằng tiếng Trung (越南 Yuènán = Việt Nam)' },
    { kind: 'review' },
  ],

  exercises: [
    { type: 'listen-initial', promptVi: 'Nghe và chọn thanh mẫu j, q hay x.', items: ['jiā', 'qǐng', 'xiè', 'jiǔ', 'qù', 'xué', 'jiào', 'qián', 'xīn'] },
    { type: 'listen-final', promptVi: 'Nghe và viết vận mẫu sau j, q, x.', items: ['jiā', 'qiáo', 'xiě', 'jiàn', 'qīng', 'xióng', 'jù', 'quán', 'xūn'] },
    { type: 'listen-tone', promptVi: 'Nghe và đánh dấu thanh điệu.', items: ['xue', 'jiao', 'qing', 'jiu', 'xin', 'qu', 'xia', 'jie', 'qun'] },
    { type: 'word-meaning', promptVi: 'Chọn nghĩa đúng của từ.' },
    { type: 'word-pinyin', promptVi: 'Chọn pinyin đúng của từ.' },
    { type: 'order-words', promptVi: 'Sắp xếp thành câu đúng.', items: ['我 / 叫 / Hanz', '我 / 是 / 不 / 老师', '也 / 我 / 很 / 高兴'] },
    { type: 'match-dialogue', promptVi: 'Chọn câu đáp phù hợp với tình huống.', items: ['对不起！→ 没关系！', '很高兴认识你！→ 我也很高兴。', '你叫什么名字？→ 我叫……'] },
    { type: 'role-play', promptVi: 'Đóng vai với Vina: hỏi tên, xin lỗi vì gọi nhầm, làm quen.' },
  ],

  writing: {
    mode: 'free-notebook',
    chars: ['请', '问', '你', '叫', '什', '么', '名', '字', '我', '不', '是', '对', '起', '没', '关', '系', '事', '很', '高', '兴', '认', '识', '也'],
    noteVi:
      'Sách dạy chữ Hán có hệ thống từ bài 7, vở Writing bắt đầu từ bài 8. Bài này dùng Vở viết tự do: viết từ mới lên trang giấy, có thể bật chữ mờ để tô, không chấm điểm.',
  },
};
