# HSK Study App — hướng dẫn cho Claude Code

App web cá nhân giúp Hanz (sinh viên Việt Nam, mới bắt đầu học tiếng Trung) học từ con số 0 lên **HSK 4**, thi khoảng **30/6/2027**. Thiết bị chính: **iPad + Apple Pencil** (Safari, màn ngang), phụ: laptop.

Đọc theo thứ tự trước khi làm:
1. `docs/PLAN.md` — phạm vi, tính năng, lộ trình, các quyết định đã chốt.
2. `docs/DESIGN.md` — định hướng giao diện: phong cách kiểu Duolingo, màu mệnh Thủy (xanh dương chủ đạo). Người dùng thấy bản mẫu hiện tại **chưa đủ đẹp**: được phép làm lại giao diện mạnh tay. Skill dự án `.claude/skills/hsk-ui` tóm tắt các quy tắc này.
3. `docs/VINA.md` — linh vật Vina (rồng Lý đội nón lá), cũng là bạn học AI: dạy bài và trò chuyện luyện nói tiếng Trung, có hồ sơ ghi nhớ và tính cách tuỳ chỉnh.
4. `docs/CONTENT.md` — tài liệu giáo trình nằm ở đâu, cách lấy nội dung, quy tắc bản quyền.

## Stack
- Vite + React 18 + TypeScript, React Router.
- Framer Motion cho animation.
- `hanzi-writer` cho hoạt hình thứ tự nét và chấm nét khi viết bằng Pencil.
- Chạy `npm install`, `npm run dev` (thêm `--host` để mở từ iPad cùng Wi-Fi), `npm run build`.

## Quy ước
- Giao diện tiếng Việt. Chữ Hán dùng font serif SC (`--font-hz`), pinyin có dấu thanh.
- Màu, font, bo góc, khoảng cách đều lấy từ token trong `src/styles/tokens.css`. Không viết mã màu trực tiếp trong component.
- Tối ưu cảm ứng: vùng bấm ≥ 44px, không dựa vào hover, hỗ trợ Pointer Events cho Pencil.
- Tôn trọng `prefers-reduced-motion`.
- Dữ liệu học (từ, bài, ngữ pháp) để trong `src/data/`, không trộn vào component.
- Không chép nguyên văn bài khoá, hội thoại, lời giải thích hay audio của giáo trình vào repo (xem `docs/CONTENT.md`).

## Trạng thái hiện tại
`src/styles/tokens.css` vẫn là bảng màu cũ (ngọc/đỏ son); cần thay bằng bảng màu mệnh Thủy trong `docs/DESIGN.md`. Bản khung: 4 màn hình (Trang chủ, Thẻ từ vựng, Luyện viết, Giảng viên) chạy với dữ liệu mẫu. Nghe, Nói, Đọc mới là trang giữ chỗ. Chưa có lưu tiến độ, chưa có đồng bộ, giảng viên chưa gọi AI thật. Việc tiếp theo nằm trong mục "Việc cần làm" của `docs/PLAN.md`.
