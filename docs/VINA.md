# Vina — linh vật và bạn học AI

## Nhân vật
- **Tên:** Vina.
- **Hình dáng:** rồng Việt Nam thời Lý, vẽ kiểu chibi dễ thương, đội nón lá quai đỏ.
- **Đặc điểm rồng Lý cần giữ:** thân tròn, uốn khúc mềm hình sin, thon dần về đuôi; mào hình ngọn lửa; không sừng; chân ba móng; đuôi lửa; viên ngọc bên cạnh.
- **Chibi:** đầu to, mắt tròn to, má hồng, mõm ngắn, râu cong.
- **Màu:** thân xanh Thủy `#3B8DEB`, bụng `#D7E8FF`, viền xanh đen `#10284A`, mào và đuôi lửa trắng xanh `#E6F1FF`, nón lá `#F3E7C4`, quai nón đỏ `#C8402A`.
- **Bản phác:** `src/assets/vina.svg` (biểu cảm "chào"). Bản phác vẽ bằng code, đủ để chốt ý tưởng; bản cuối nên nhờ họa sĩ minh hoạ vẽ lại theo mô tả này.
- **Biểu cảm cần có:** chào, vui/đúng (mắt híp, há miệng, lấp lánh), lo/sai (mày chau, giọt mồ hôi), suy nghĩ, đang nghe (khi bật mic), đang nói, ăn mừng hoàn thành bài, buồn ngủ (lâu không học).
- **Chuyển động:** lơ lửng lên xuống, chớp mắt, đuôi lửa đung đưa, ngọc phập phồng; miệng mấp máy khi đang nói.

## Vai trò: một nhân vật, hai chế độ
Vina thay cho "giảng viên ảo" trong kế hoạch cũ.

1. **Học bài (giảng viên):** dạy ngữ pháp theo bài của giáo trình, đi qua Giới thiệu → Cấu trúc → Ví dụ → Luyện tập → Tự đặt câu; chấm và sửa câu.
2. **Trò chuyện (bạn luyện nói):** hội thoại tự do bằng tiếng Trung, nói và nghe bằng giọng.
   - Chỉ dùng từ và ngữ pháp người học đã học (cộng tối đa vài từ mới, có giải thích).
   - Sửa lỗi nhẹ nhàng sau mỗi lượt: câu đúng, pinyin, giải thích ngắn bằng tiếng Việt.
   - Gợi ý câu trả lời khi người học bí (hiện 2–3 lựa chọn).
   - Theo tình huống: chào hỏi, gọi món, hỏi đường, mua sắm, nói về bản thân…
   - Tỉ lệ tiếng Việt giảm dần theo cấp.

## "Tiếp thu kiến thức và tính cách" hoạt động thế nào
Mô hình AI không tự học lại sau mỗi cuộc trò chuyện. Vina "nhớ" và "lớn lên" nhờ **hồ sơ lưu trong cơ sở dữ liệu**, được đưa vào lời nhắc hệ thống ở mỗi lần gọi:

| Phần hồ sơ | Ví dụ | Cập nhật khi nào |
|---|---|---|
| Trình độ | cấp, bài đang học, danh sách từ đã thuộc | sau mỗi buổi học |
| Lỗi hay gặp | nhầm 是/在, quên 了, sai thanh 3 | sau mỗi lượt sửa lỗi |
| Về người học | tên, sở thích, việc đang làm, mục tiêu thi | khi người học kể, Vina hỏi xác nhận trước khi lưu |
| Tính cách Vina | vui tính / nghiêm túc; nói nhiều / ít; độ khó; mức sửa lỗi | người học chỉnh trong cài đặt |
| Kỷ niệm | các chủ đề đã nói, câu chuyện dở dang | tóm tắt cuối mỗi cuộc trò chuyện |

- Người học xem, sửa, xoá được mọi thứ Vina nhớ.
- Không lưu toàn bộ hội thoại vào lời nhắc; chỉ lưu bản tóm tắt.

## Kỹ thuật
- **Mô hình:** Claude API, gọi qua hàm serverless (không để API key trên trình duyệt). Có phí theo lượng dùng; cần đặt giới hạn chi tiêu.
- **Giọng nói:** nghe bằng Web Speech API (`zh-CN`), nói bằng `speechSynthesis`. Safari iPad cần thử trên máy thật.
- **Lưu trữ:** chung backend với phần đồng bộ tiến độ (đề xuất Supabase).
- **An toàn:** Vina là bạn học, không đóng vai người yêu hay người thân; giữ chủ đề quanh việc học và giao tiếp hằng ngày.
