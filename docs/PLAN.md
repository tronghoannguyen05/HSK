# Kế hoạch

## Người dùng và mục tiêu
- Hanz, người Việt, bắt đầu học tiếng Trung từ tháng 10/2026, đang học bộ giáo trình 《新HSK教程》 (FLTRP, bản 2026, theo HSK 3.0).
- Mục tiêu: thi **HSK 4** khoảng **30/6/2027**. Lịch thi HSK do kỳ thi cố định, cần kiểm tra lịch chính thức và chọn đợt gần nhất.
- Học chủ yếu trên **iPad + Apple Pencil**; muốn tiến độ **đồng bộ giữa các máy**.

## Đã chốt
| Mục | Quyết định |
|---|---|
| Nghĩa của từ | Cả tiếng Anh và tiếng Việt. Tiếng Anh có sẵn cho mọi cấp; tiếng Việt làm dần, ưu tiên HSK 1 → 4 |
| Giảng viên ảo | Giảng bằng tiếng Việt pha tiếng Trung; tỉ lệ tiếng Trung tăng dần theo cấp |
| Bám giáo trình | Mỗi cấp chia đúng theo bài của sách (HSK 1: 15 bài, HSK 2: 15 bài, HSK 3: 18 bài, HSK 4: 4A + 4B) |
| Từ mới mỗi ngày | App tự tính từ số từ còn lại và số ngày đến kỳ thi; tự giảm khi thẻ ôn bị dồn |
| Thứ tự buổi học | Ôn thẻ đến hạn → từ mới của bài (nhìn, nghe, viết, nói) → ngữ pháp với giảng viên |
| Nhịp tuần | 6 ngày học, ngày thứ 7 ôn tổng + kiểm tra nhỏ |
| Audio giáo trình | Không đưa vào app. Phần nghe dùng giọng đọc của trình duyệt (`speechSynthesis`, `zh-CN`) |

## Lộ trình học (8 tháng)
| Thời gian | Cấp |
|---|---|
| Th11–12/2026 | HSK 1 |
| Th1–2/2027 | HSK 2 |
| Th3–4/2027 | HSK 3 |
| Th5–6/2027 | HSK 4 + luyện đề |

Lộ trình khá gắt. Trang chủ cần cho biết đang nhanh hay chậm so với lộ trình.

## Các phần của app
0. **Nhập môn pinyin và thanh điệu**: bảng âm, nghe phân biệt 4 thanh, luyện thanh điệu. Thay cho bài 1 của HSK 1.
1. **Từ vựng**: thẻ lặp lại ngắt quãng (nên dùng thuật toán FSRS, ví dụ thư viện `ts-fsrs`); quiz chọn nghĩa, chọn pinyin, nghe chọn chữ.
2. **Viết** (trọng tâm, vì có Pencil): xem hoạt hình thứ tự nét → tô theo (sai nét thì báo, gợi ý nét tiếp) → tự viết từ trí nhớ; viết cả từ nhiều chữ; ô 田字格; chữ sai nhiều vào danh sách ôn.
3. **Nghe**: app đọc từ/câu, chọn chữ hoặc nghĩa, gõ pinyin; nghe phân biệt thanh điệu; chỉnh tốc độ đọc.
4. **Nói**: nhận giọng bằng Web Speech API (`webkitSpeechRecognition`, `zh-CN`), so khớp với chữ đúng. Safari trên iPad hỗ trợ nhưng không ổn định bằng Chrome, cần thử trên máy thật. Không chấm được thanh điệu chi tiết; nói rõ điều này trong giao diện.
5. **Đọc**: đoạn ngắn theo bài, chỉ dùng từ đã học; chạm vào chữ để xem pinyin và nghĩa. Nội dung do giảng viên AI tạo.
6. **Vina: giảng viên + bạn trò chuyện** (chi tiết trong `docs/VINA.md`): chế độ Học bài dạy ngữ pháp theo Giới thiệu → Cấu trúc → Ví dụ → Luyện tập → Tự đặt câu; chế độ Trò chuyện luyện nói tiếng Trung bằng giọng, chỉ dùng từ đã học, sửa lỗi sau mỗi lượt; có hồ sơ ghi nhớ (trình độ, lỗi hay gặp, sở thích) và tính cách tuỳ chỉnh.
7. **Thi thử**: đề theo dạng HSK 3.0 cho từng cấp, đặc biệt dồn vào tháng 6/2027.
8. **Trang chủ**: đếm ngược đến ngày thi, buổi học hôm nay, lộ trình bài, tiến độ từng kỹ năng, chuỗi ngày học.

## Kỹ thuật cần quyết định
- **Đồng bộ nhiều máy**: cần backend. Đề xuất Supabase (đăng nhập + Postgres) hoặc tương đương. Trước khi có, lưu `localStorage`/IndexedDB và có nút xuất/nhập.
- **Giảng viên AI**: gọi Claude API qua một hàm serverless (ví dụ Vercel/Netlify Function) để không lộ API key trên trình duyệt. Prompt hệ thống gồm: cấp hiện tại, bài hiện tại, danh sách từ đã học, điểm ngữ pháp của bài, tỉ lệ Việt/Trung.
- **Triển khai**: web tĩnh + hàm serverless; bật PWA để "Thêm vào màn hình chính" trên iPad, chạy toàn màn hình.
- **Dữ liệu từ vựng**: chạy `npm run fetch:vocab` để tải bộ HSK 3.0 mã nguồn mở (drkameleon/complete-hsk-vocabulary) vào `src/data/vocab/`. Đối chiếu với danh sách từ mới từng bài trong sách.

## Việc cần làm (thứ tự đề xuất)
1. Làm lại giao diện theo `docs/DESIGN.md` cho 4 màn hiện có.
2. Lưu tiến độ cục bộ + thuật toán FSRS cho thẻ.
3. Tải bộ từ vựng, dựng dữ liệu HSK 1 theo 15 bài (từ mới, điểm ngữ pháp) từ giáo trình.
4. Phần pinyin và thanh điệu.
5. Hoàn thiện Viết với `hanzi-writer` quiz mode cho từ nhiều chữ.
6. Nghe, Nói, Đọc.
7. Vina AI qua serverless: chế độ Học bài, rồi chế độ Trò chuyện bằng giọng, rồi hồ sơ ghi nhớ.
8. Đồng bộ nhiều máy.
9. HSK 2 → 4, thi thử.
