# Bài học, Luyện viết và Bài giảng của Vina

Tài liệu này **thay cho phần Luyện viết cũ** trong `docs/DESIGN.md` và `docs/PLAN.md` (chế độ bắt viết đúng từng nét). Người dùng thấy chế độ chấm từng nét quá khắt khe khi luyện viết hằng ngày.

## 1. Dữ liệu bài học
- Mỗi bài là một file trong `src/data/lessons/hsk<cấp>/lessonNN.ts`, theo kiểu `Lesson` trong `src/data/lessons/types.ts`.
- **Bài mẫu đã có:** `src/data/lessons/hsk1/lesson02.ts` (HSK 1 · Bài 2 · 我叫李文). Các bài còn lại sẽ được bổ sung theo cùng khuôn.
- Lấy từ giáo trình: danh sách từ (chữ Hán, pinyin, từ loại, nghĩa tiếng Anh), tên điểm ngữ pháp, trình tự giảng theo slide, điểm phát âm theo sách bài tập, dạng bài tập.
- **Tự soạn:** nghĩa tiếng Việt, câu ví dụ (chỉ dùng từ đã học), lời giải thích, mô tả tình huống. Không có bài khoá hay hội thoại gốc của sách trong dữ liệu.
- `grammar[].source`: `'book'` là điểm ngữ pháp sách dạy ở mục 小语讲堂; `'vina'` là Vina bổ sung để học dễ hơn.

## 2. Luyện viết: ba chế độ
### a. Vở viết tự do (mặc định)
- Trang giấy trắng để viết bằng Apple Pencil. Nền chọn được: trắng, dòng kẻ, lưới 田字格 (mặc định), lưới 米字格.
- **Không chấm điểm, không bắt đúng nét.** Viết xấu cũng được.
- Công cụ: bút mực (độ dày theo lực nhấn nếu có `pressure`), tẩy, hoàn tác/làm lại, xoá trang, đổi màu mực (2–3 màu).
- Gợi ý (tuỳ chọn, mặc định tắt): bật chữ mờ trong ô để tô; nút "Xem thứ tự nét" phát hoạt hình `hanzi-writer` ở khung nhỏ bên cạnh.
- Thanh trên cùng hiện từ đang viết (chữ Hán, pinyin, nghĩa, nút nghe). Danh sách từ của bài ở cạnh để chọn.
- **Lưu:** mỗi trang vở lưu thành ảnh (PNG hoặc dữ liệu nét dạng vector) kèm: từ/bài, ngày giờ. Trước khi có đồng bộ: lưu IndexedDB trên máy. Sau này đồng bộ qua backend.
- **Vở của tôi:** xem lại các trang đã viết, lọc theo bài, theo từ, theo ngày; xem hai trang cũ/mới cạnh nhau để thấy tiến bộ.
- Dùng Pointer Events; chỉ nhận nét từ `pointerType === 'pen'` khi bật "Chỉ nhận bút" (để lòng bàn tay chạm màn hình không vẽ bậy). `touch-action: none` trên vùng viết.

### b. Luyện theo vở Writing (từ bài 8 của HSK 1)
- Bám theo cấu trúc vở 《新HSK教程》Writing: luyện nét cơ bản, quy tắc thứ tự nét, cấu trúc chữ (trái-phải, trên-dưới…), chép chữ và từ.
- Mỗi chữ một hàng ô 田字格: 1 ô mẫu, vài ô chữ mờ để tô, phần còn lại để trống tự viết. Không chấm từng nét; viết xong bấm "Xong" là được.
- Ô và chữ mờ là app tự vẽ; không chụp trang vở vào app.
- Danh sách chữ của từng bài sẽ nằm trong `writing.chars` của file bài.

### c. Kiểm tra thứ tự nét (tuỳ chọn)
- Chế độ chấm từng nét bằng `hanzi-writer` như hiện tại, chỉ là bài kiểm tra tuỳ chọn, không phải luyện viết chính.

## 3. Bài giảng của Vina
- Mỗi bài có mảng `lecture`: các bước theo đúng trình tự sách và slide (mục tiêu → phát âm → đoạn 1: tình huống, từ mới, mẹo, luyện, nói → đoạn 2… → ngữ pháp → đoạn 3… → văn hoá → ôn tập).
- Màn bài giảng kiểu trình chiếu từng bước, Vina đứng một bên "giảng":
  - `objectives`: liệt kê mục tiêu.
  - `pronunciation`: quy tắc + các âm tiết bấm để nghe, đọc theo.
  - `scene`: mô tả tình huống; Vina có thể diễn lại bằng câu tự soạn từ các từ của đoạn.
  - `words`: từng từ một: chữ to, pinyin, nghĩa, nghe, ví dụ; nút "Viết thử" mở Vở viết với từ đó.
  - `tip`, `grammar`: thẻ giải thích + ví dụ có nút nghe.
  - `drill`: luyện nhanh (lật thẻ, nghe chọn, ghép).
  - `speaking`: hội thoại với Vina theo nhiệm vụ (khi Vina AI sẵn sàng; trước đó dùng câu mẫu + nhận giọng).
  - `review`: tổng kết, cho từ của bài vào thẻ ôn tập.
- Lời giảng: tiếng Việt pha tiếng Trung. Trước khi có AI, lời giảng lấy từ `explainVi`, `textVi`, `sceneVi`. Khi có AI, Vina dùng dữ liệu bài làm khung và nói tự nhiên hơn, nhưng không đi ra ngoài từ và ngữ pháp đã học.
- Người học dừng, quay lại bước trước, hỏi Vina bất cứ lúc nào.

## 4. Bài tập
`exercises` liệt kê dạng bài tập lấy cảm hứng từ sách bài tập (nghe viết thanh mẫu/vận mẫu, đánh dấu thanh, chọn hội thoại, sắp xếp câu, đóng vai). Câu hỏi cụ thể do app sinh từ dữ liệu bài, không chép câu của sách.
