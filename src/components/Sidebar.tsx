import { NavLink } from 'react-router-dom';
import { BookIcon, CardsIcon, ChatIcon, HeadphonesIcon, HomeIcon, MicIcon, PenIcon } from './Icons';
import styles from './Sidebar.module.css';

const items = [
  { to: '/', label: 'Trang chủ', Icon: HomeIcon },
  { to: '/tu-vung', label: 'Từ vựng', Icon: CardsIcon },
  { to: '/viet', label: 'Viết', Icon: PenIcon },
  { to: '/nghe', label: 'Nghe', Icon: HeadphonesIcon },
  { to: '/noi', label: 'Nói', Icon: MicIcon },
  { to: '/doc', label: 'Đọc', Icon: BookIcon },
  { to: '/giang-vien', label: 'Giảng viên', Icon: ChatIcon },
];

export default function Sidebar() {
  return (
    <nav className={styles.rail} aria-label="Điều hướng chính">
      <div className={`${styles.logo} hz`} aria-hidden="true">
        学
      </div>
      {items.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
