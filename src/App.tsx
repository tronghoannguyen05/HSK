import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import Flashcards from './screens/Flashcards';
import Writing from './screens/Writing';
import Teacher from './screens/Teacher';
import Placeholder from './screens/Placeholder';

export default function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Sidebar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="screen"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/tu-vung" element={<Flashcards />} />
            <Route path="/viet" element={<Writing />} />
            <Route path="/giang-vien" element={<Teacher />} />
            <Route path="/nghe" element={<Placeholder title="Nghe" />} />
            <Route path="/noi" element={<Placeholder title="Nói" />} />
            <Route path="/doc" element={<Placeholder title="Đọc" />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
