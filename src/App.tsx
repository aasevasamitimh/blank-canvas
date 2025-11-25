import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import HomePage from '@/pages/HomePage';
import HistoryPage from '@/pages/HistoryPage';
import FAQPage from '@/pages/FAQPage';
import SharingsPage from '@/pages/SharingsPage';
import BooksPage from '@/pages/BooksPage';
import GalleryPage from '@/pages/GalleryPage';
import WorkOfAAPage from '@/pages/WorkOfAAPage';
import IsAAForMePage from '@/pages/IsAAForMePage';
import MeetingsFinderPage from '@/pages/MeetingsFinderPage';
import MeetingsListPage from '@/pages/MeetingsListPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/sharings" element={<SharingsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/work-of-aa" element={<WorkOfAAPage />} />
          <Route path="/is-aa-for-me" element={<IsAAForMePage />} />
          <Route path="/find-meetings" element={<MeetingsFinderPage />} />
          <Route path="/meetings-list" element={<MeetingsListPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
