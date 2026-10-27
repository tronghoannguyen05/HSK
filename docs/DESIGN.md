# Định hướng giao diện

## Phản hồi của người dùng
- Bản mẫu đầu tiên (nền ngọc nhạt, serif) bị chê **chưa đẹp**. Được phép làm lại toàn bộ.
- Muốn phong cách **giống Duolingo**: vui, tươi, nhiều phản hồi tức thì, có linh vật.
- Linh vật: **Vina**, rồng thời Lý đội nón lá (xem `docs/VINA.md`).
- Màu chủ đạo theo **mệnh Thủy** của người dùng (sinh 20/07/2005, năm Ất Dậu, Tuyền Trung Thủy).

## Giới hạn với Duolingo
Lấy **phong cách**, không lấy **tài sản**. Không dùng: cú Duo, font Feather, âm thanh, hình minh hoạ, màu xanh lá thương hiệu, tên Duolingo. Repo clone tham khảo có thể chứa tài sản của Duolingo trong `public/`: không chép.

Repo tham khảo cách dựng component (MIT, chỉ đọc để học cách làm):
- https://github.com/sanidhyy/duolingo-clone (Next.js, Tailwind; lộ trình bài, thử thách, tim, khung chấm đáp án)
- https://github.com/bryanjenningz/react-duolingo (Next.js, Tailwind, Zustand; gọn, dễ đọc)

## Bảng màu (mệnh Thủy)
| Token | Màu | Dùng cho |
|---|---|---|
| `--primary` | `#2F80ED` xanh Thủy | nút chính, tiến độ, điểm nhấn |
| `--primary-edge` | `#1B5FBF` | "đáy" 3D của nút chính |
| `--ink` | `#10284A` xanh đen | chữ, viền nhân vật |
| `--ink-soft` | `#3D5677` | chữ phụ |
| `--silver` | `#E3EEFC` bạc xanh | nền khối, nút phụ được chọn |
| `--line` | `#C9D8EC` | viền, đáy 3D nút phụ |
| `--bg` | `#F5F8FC` | nền trang |
| `--surface` | `#FFFFFF` | thẻ |
| `--correct` | `#2FA866` | đúng |
| `--wrong` | `#E0503A` | sai, con dấu đỏ son |

Hợp mệnh Thủy: xanh dương, đen, xanh đen (bản mệnh); trắng, bạc, xám (Kim sinh Thủy). **Không** dùng vàng đất hay nâu làm màu chính (Thổ khắc Thủy). Chế độ tối: nền xanh đen sâu, giữ xanh Thủy làm điểm nhấn.

## Chữ
Người dùng đã chốt bộ font này để giao diện có nét văn hoá Việt:

| Vai trò | Font |
|---|---|
| Logo, tiêu đề, số XP, chữ trên nút | **Vina Sans** (Google Fonts; lấy cảm hứng từ chữ trên biển hiệu, tờ rơi, áp phích ngoài phố Việt Nam). Chỉ có một độ đậm: để `font-weight: 400`, không ép đậm. Chỉ dùng cho chữ to, không dùng cho đoạn văn. |
| Chữ thường, giải thích, lời Vina nói | **Be Vietnam Pro** (400–700) |
| Chữ Hán | Chữ Khải hoặc serif SC rõ nét (Noto Serif SC, hoặc LXGW WenKai) |

Phương án dự phòng cho tiêu đề nếu muốn hoài cổ hơn: Phudu. Không dùng Nunito.
- Chữ Hán: font chữ Khải/serif SC rõ nét (ví dụ Noto Serif SC, hoặc LXGW WenKai để giống chữ viết tay chuẩn). Chữ Hán là nhân vật chính: to, rõ.
- Pinyin hiển thị đúng dấu thanh (ǎ ǐ ǒ ǔ ǚ).

## Ngôn ngữ thiết kế kiểu Duolingo
- **Nút 3D:** bo góc 16px, `box-shadow: 0 5px 0 <màu đáy>`; khi bấm `translateY(4px)` và giảm bóng. Chữ in hoa, đậm, giãn chữ nhẹ.
- **Lựa chọn đáp án:** thẻ trắng viền 2px, đáy 3D xám; chọn thì viền và nền chuyển xanh.
- **Bài học:** thanh tiến độ to bo tròn trên cùng, nút đóng bên trái, tim hoặc chuỗi đúng bên phải. Kiểm tra đáp án: khung đáy màn hình trượt lên, xanh (đúng) hoặc đỏ (sai), Vina đổi biểu cảm, nút "Tiếp tục" lớn.
- **Lộ trình:** các bài là nút tròn to xếp zig-zag theo đường đi, bài đang học có Vina đứng cạnh và vòng nhấp nháy; bài xong có dấu tích; ôn tập xen giữa.
- **Phần thưởng:** XP, chuỗi ngày, hoàn thành bài có màn ăn mừng (Vina nhảy, pháo giấy), con dấu đỏ son 记住 / 对.
- **Âm thanh** (tự làm hoặc nguồn miễn phí có giấy phép): đúng, sai, hoàn thành. Có nút tắt.

## Điều kiện bắt buộc
- iPad màn ngang + Apple Pencil là chính; vẫn dùng được màn dọc và laptop.
- Vùng bấm ≥ 44px; không tương tác nào chỉ dựa vào hover.
- Có chế độ sáng và tối; tôn trọng `prefers-reduced-motion`.

## Màn hình đã có (giữ luồng, làm lại giao diện)
Trang chủ, Thẻ từ vựng (lật 3D, 4 mức nhớ), Luyện viết (3 chế độ với `hanzi-writer`), Giảng viên (nay là Vina, chế độ Học bài). Cần thêm: màn trò chuyện với Vina (chế độ Trò chuyện), lộ trình bài kiểu zig-zag, màn bài học kiểu thử thách.
