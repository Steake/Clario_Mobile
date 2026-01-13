
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import StudentHome from './screens/StudentHome';
import Discover from './screens/Discover';
import BookingsList from './screens/BookingsList';
import StudentWallet from './screens/StudentWallet';
import Messages from './screens/Messages';
import TutorProfile from './screens/TutorProfile';
import BookingCheckout from './screens/BookingCheckout';
import LessonLauncher from './screens/LessonLauncher';
import TutorDashboard from './screens/TutorDashboard';
import TutorEarnings from './screens/TutorEarnings';
import TutorConsole from './screens/TutorConsole';
import AdminTreasury from './screens/AdminTreasury';
import AIStudySession from './screens/AIStudySession';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Student Routes */}
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/bookings" element={<BookingsList />} />
        <Route path="/student-wallet" element={<StudentWallet />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tutor-profile/:id" element={<TutorProfile />} />
        <Route path="/checkout" element={<BookingCheckout />} />
        <Route path="/lesson-launcher" element={<LessonLauncher />} />
        <Route path="/ai-session" element={<AIStudySession />} />

        {/* Tutor Routes */}
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/tutor-earnings" element={<TutorEarnings />} />
        <Route path="/tutor-console" element={<TutorConsole />} />
        <Route path="/tutor-schedule" element={<TutorDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminTreasury />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
