# Định hướng giao diện

## Phản hồi của người dùng
- Muốn giao diện **đẹp, animation đẹp**.
- Đã xem bản mẫu đầu tiên (chính là code trong `src/` hiện tại) và thấy **chưa đẹp**. Bản mẫu chỉ là điểm xuất phát về bố cục và luồng, không phải đích đến về thẩm mỹ. Được phép đổi hẳn bảng màu, font, bố cục.
- Người dùng sẽ cài thêm một số skill thiết kế từ GitHub cho Claude Code; ưu tiên làm theo các skill đó khi có.

## Điều kiện bắt buộc
- Màn chính: iPad màn ngang (khoảng 1194×834), cảm ứng và Apple Pencil. Vẫn phải dùng được ở màn dọc và laptop.
- Chữ Hán là nhân vật chính trên màn hình: to, rõ, font serif SC chất lượng (ví dụ Noto Serif SC). Pinyin phải hiển thị đúng dấu thanh (ǎ ǐ ǒ ǔ ǚ).
- Vùng bấm ≥ 44px. Không có tương tác chỉ dựa vào hover.
- Có chế độ sáng và tối.
- Tôn trọng `prefers-reduced-motion`.

## Những gì đã có trong bản mẫu (giữ ý tưởng, làm đẹp hơn)
- **Trang chủ**: lời chào, chuỗi ngày học, khối đếm ngược đến ngày thi kèm thanh lộ trình 4 cấp, "Buổi học hôm nay" 3 bước, lộ trình 15 bài (bài đang học có vòng nhấp nháy), thanh tiến độ 5 kỹ năng.
- **Thẻ từ vựng**: thẻ lật 3D, nút loa, 4 nút chấm điểm (Quên / Mơ hồ / Nhớ / Dễ, kèm thời gian ôn lại); đúng thì con dấu 记住 đóng xuống, quên thì thẻ rung; thẻ mới trượt vào.
- **Luyện viết**: ô 田字格, 3 chế độ Xem nét / Tô theo / Tự viết, dải ô nhỏ chia từng nét, tên nét bằng tiếng Trung và tiếng Việt.
- **Giảng viên**: cột tiến trình 5 bước bên trái, khung chat, thẻ cấu trúc ngữ pháp, câu hỏi trắc nghiệm, hiệu ứng "đang gõ", đúng thì dấu 对, sai thì giải thích.

## Ý tưởng chất liệu (tuỳ chọn)
Thế giới riêng của môn học: mực tàu, nét bút lông, ô 田字格, con dấu đỏ son (印章), giấy viết chữ. Dùng có chừng mực: một điểm nhấn mạnh, phần còn lại yên tĩnh. Tránh các kiểu "AI design" đại trà: nền kem + font serif + màu đất nung, gradient tím-xanh, emoji làm biểu tượng, mọi thứ bo tròn giống nhau.

## Animation nên có
- Nét mực chảy theo thứ tự nét (đã có qua `hanzi-writer`).
- Thẻ lật, thẻ mới chia vào như chia bài.
- Con dấu đóng xuống khi đúng.
- Chuyển màn mượt (shared layout / page transition).
- Thanh tiến độ chạy khi vào trang.
Một khoảnh khắc được dàn dựng kỹ tốt hơn nhiều hiệu ứng rải rác.
