---
name: hsk-ui
description: Phong cách giao diện của app HSK (kiểu Duolingo, màu mệnh Thủy, linh vật Vina). Dùng mỗi khi tạo hoặc sửa màn hình, component, animation hay màu sắc trong repo này.
---

# Giao diện app HSK

Đọc `docs/DESIGN.md` (bảng màu, chữ, ngôn ngữ thiết kế) và `docs/VINA.md` (linh vật) trước khi làm. Tóm tắt bắt buộc:

## Cảm giác
Vui, tươi, phản hồi tức thì, giống Duolingo về **phong cách** nhưng không dùng bất kỳ tài sản nào của Duolingo (cú Duo, font Feather, âm thanh, hình, màu xanh lá thương hiệu).

## Token
- Lấy mọi màu từ `src/styles/tokens.css`; không viết mã màu trong component.
- Màu chính xanh Thủy `--primary`, chữ xanh đen `--ink`, nền trắng/bạc. Không dùng vàng đất hay nâu làm màu chính.
- Đúng `--correct` (xanh lá), sai `--wrong` (đỏ son).

## Component
- **Nút:** bo 16px, đáy 3D bằng `box-shadow: 0 5px 0 var(--primary-edge)` (nút phụ: `var(--line)`); `:active` lún `translateY(4px)`, bóng còn 1px. Chữ in hoa, Nunito 800–900.
- **Thẻ đáp án:** trắng, viền 2px `--line`, đáy 3D; chọn → viền `--primary`, nền `--silver`.
- **Khung chấm:** trượt từ đáy màn hình (spring), nền xanh nhạt khi đúng / đỏ nhạt khi sai, kèm Vina đổi biểu cảm và nút "Tiếp tục".
- **Lộ trình:** nút bài tròn 72px xếp zig-zag; bài hiện tại có Vina đứng cạnh.
- **Chữ Hán:** luôn dùng `--font-hz`, cỡ lớn; pinyin màu `--primary`.

## Vina
- Dùng component Vina (khởi đầu từ `src/assets/vina.svg`) cho chào, đúng, sai, suy nghĩ, đang nghe, đang nói, ăn mừng.
- Chuyển động mặc định: lơ lửng 3s, chớp mắt, đuôi lửa đung đưa.

## Chuyển động
- Framer Motion; spring cho thứ bật nảy (nút, thẻ, khung chấm), ease-out cho chuyển màn.
- Một khoảnh khắc ăn mừng rõ ràng khi xong bài (Vina nhảy + pháo giấy) thay vì rải hiệu ứng khắp nơi.
- Luôn tôn trọng `prefers-reduced-motion`.

## iPad
- Vùng bấm ≥ 44px, không phụ thuộc hover, `touch-action` hợp lý cho ô viết (Pencil).
- Bố cục chính cho màn ngang 1194×834; kiểm tra thêm màn dọc và laptop.
