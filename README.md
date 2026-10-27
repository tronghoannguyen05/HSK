# HSK

App web cá nhân để học tiếng Trung từ con số 0 lên HSK 4, dùng chủ yếu trên iPad + Apple Pencil.

## Chạy thử
```bash
npm install
npm run dev -- --host   # mở địa chỉ "Network" hiện ra trên iPad cùng Wi-Fi
```

## Giao việc cho Claude Code
Mở thư mục này trong Claude Code. File `CLAUDE.md` và thư mục `docs/` chứa toàn bộ kế hoạch, định hướng thiết kế và quy tắc nội dung, nên có thể bắt đầu bằng một câu như:

> Đọc CLAUDE.md và docs/, rồi làm lại giao diện 4 màn hình hiện có cho thật đẹp theo docs/DESIGN.md.

## Cấu trúc
```
docs/            Kế hoạch, thiết kế, nội dung
src/screens/     Trang chủ, Thẻ từ vựng, Luyện viết, Giảng viên (+ trang giữ chỗ)
src/components/  Thanh điều hướng, con dấu, icon
src/data/        Mục tiêu, lộ trình, dữ liệu mẫu
src/lib/         Đọc/nhận giọng tiếng Trung
src/styles/      Token thiết kế (sáng/tối) và CSS chung
scripts/         Tải bộ từ vựng HSK 3.0 mở
```
