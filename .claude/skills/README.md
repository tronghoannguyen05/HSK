# Skill trong dự án

| Skill | Nguồn | Dùng khi |
|---|---|---|
| `hsk-ui` | tự viết cho dự án | **Luôn dùng trước** khi làm giao diện: phong cách kiểu Duolingo, màu mệnh Thủy, font Vina Sans, linh vật Vina. Khi skill khác mâu thuẫn với `hsk-ui` về phong cách, `hsk-ui` thắng. |
| `emil-design-eng` | emilkowalski/skills (MIT) | Nguyên tắc chung về animation và cảm giác giao diện |
| `animate` | emilkowalski/skills (MIT) | Dựng một animation mới (đường cong, thời lượng, thuộc tính) |
| `improve-animations` | emilkowalski/skills (MIT) | Soát toàn bộ animation và lập kế hoạch sửa |
| `review-animations` | emilkowalski/skills (MIT) | Duyệt animation vừa làm theo chuẩn |
| `animation-performance` | emilkowalski/skills (MIT) | Animation bị giật, rơi khung hình |
| `mobile-native` | emilkowalski/skills (MIT) | Cảm giác app thật trên iPad: chạm, vùng an toàn, độ trễ |
| `character-appeal` | dylantarre/animation-principles (MIT) | Làm Vina có hồn: biểu cảm, động tác |
| `education-learning` | dylantarre/animation-principles (MIT) | Animation cho app học: khích lệ, ăn mừng tiến bộ |
| `web-design-guidelines` | vercel-labs/agent-skills (MIT) | Soát lần cuối: trợ năng, hiệu năng, chạm, chế độ tối |

Mỗi thư mục skill lấy từ bên ngoài giữ file `LICENSE` của tác giả.

## Thứ tự gợi ý
1. Làm lại giao diện: `hsk-ui` (+ `emil-design-eng`, `animate` cho chuyển động).
2. Vina: `hsk-ui` + `character-appeal`.
3. Làm mượt: `improve-animations` → `mobile-native` → `animation-performance` nếu giật.
4. Soát cuối: `review-animations` và `web-design-guidelines`.
