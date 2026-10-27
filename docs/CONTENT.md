# Nội dung học và tài liệu nguồn

## Tài liệu của người dùng
Nằm trên máy người dùng, thư mục `D:\HSK 3.0` (không nằm trong repo):

```
HSK 1/  Textbook.pdf, Workbook.pdf, Writing.pdf, Slide.zip (bài 2–15; thiếu bài 1)
HSK 2/  Textbook.pdf, Workbook.pdf, Writing.pdf, Slide P1.zip + Slide P2.zip (đủ 15 bài)
HSK 3/  Textbook.pdf, Workbook.pdf, Slide P1.zip + Slide P2.zip (đủ 18 bài)
HSK 4/  Textbook 4a.pdf, Textbook 4b.pdf
```

- Giáo trình: 《新HSK教程》1–4, Foreign Language Teaching and Research Press, bản 2026, theo đề cương HSK 3.0.
- HSK 1: 15 bài, 300 từ, khoảng 40 điểm ngữ pháp; pinyin dạy ở bài 1, chữ Hán ở bài 7; mỗi bài 3 đoạn hội thoại.
- PDF là **bản scan** (không trích chữ được): cần đọc ảnh trang hoặc OCR (ví dụ `tesseract` với `chi_sim`).
- Slide là `.pptx` trong zip, mỗi file 60–375MB do có video/âm thanh. Chỉ cần trích chữ: `unzip -p file.pptx 'ppt/slides/slide*.xml'` rồi bỏ thẻ XML. Không giải nén toàn bộ.

## Lấy gì từ giáo trình
- Danh sách bài và thứ tự bài.
- Từ mới của từng bài (chữ Hán, pinyin).
- Tên các điểm ngữ pháp của từng bài và thứ tự dạy.
- Dạng bài tập trong sách bài tập (để thiết kế kiểu câu hỏi).
- Trình tự giảng trong slide (để giảng viên ảo dạy theo đúng mạch).

## Quy tắc bản quyền
Giáo trình, slide và audio là tài liệu có bản quyền của nhà xuất bản. App này là trang web, nên:
- **Được**: dùng cấu trúc (bài, danh sách từ, tên điểm ngữ pháp, dạng bài tập) để tổ chức nội dung.
- **Không**: chép nguyên văn bài khoá, hội thoại, lời giải thích, câu bài tập, hình ảnh hay audio của sách/slide vào repo hoặc app.
- Lời giảng, ví dụ, câu luyện tập, bài đọc đều là nội dung tự viết hoặc do giảng viên AI tạo theo khung của bài.
- Hội thoại gốc: người học nghe trên nền tảng của NXB (global.unipus.cn, mã kích hoạt ở bìa sau sách).

## Dữ liệu từ vựng mở
- `src/data/vocab/new-*.json` lấy từ dự án mã nguồn mở `drkameleon/complete-hsk-vocabulary` (chạy lại bằng `npm run fetch:vocab`): chữ Hán, pinyin, nghĩa tiếng Anh. Số từ: HSK 1: 506, HSK 2: 750, HSK 3: 953, HSK 4: 972, HSK 5: 1059, HSK 6: 1123, HSK 7–9: 5606.
- **Lưu ý lệch số liệu:** bộ dữ liệu mở theo đề cương HSK 3.0 bản 2021, còn giáo trình 2026 ghi HSK 1 chỉ khoảng 300 từ theo đề cương mới. Danh sách từ mới **từng bài trong sách là chuẩn** để xếp bài; bộ dữ liệu mở dùng để tra pinyin, nghĩa tiếng Anh và bổ sung từ ngoài sách.
- Dữ liệu nét chữ: `hanzi-writer` tự tải từ `hanzi-writer-data` qua CDN jsDelivr khi cần.
