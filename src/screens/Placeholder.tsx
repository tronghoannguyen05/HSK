import { Link } from 'react-router-dom';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <p style={{ margin: 0, color: 'var(--muted)' }}>Phần này chưa làm. Xem kế hoạch trong docs/PLAN.md.</p>
      <Link to="/" className="btn btn-ghost">
        Về trang chủ
      </Link>
    </div>
  );
}
