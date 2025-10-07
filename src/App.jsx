import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the shared layout and the new animated background
import Layout from './components/Layout';
import AnimatedBackground from './components/AnimatedBackground'; // ✅ NEW

import TargetCursor from './components/TargetCursor.jsx';

// Lazily load page components
const HomePage = lazy(() => import('./components/HomePage'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const PreEvents = lazy(() => import('./components/PreEvents'));

function App() {
  return (
    // The main container no longer needs background styles as they are in index.css
    
    <div className="relative min-h-screen w-full overflow-x-hidden">
  <AnimatedBackground />
  <div className="hidden md:block">
    <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      </div>

  <div className="relative z-10 flex flex-col">
    <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="eventdetails" element={<EventDetails />} />
          <Route path="preevents" element={<PreEvents />} />
        </Route>
      </Routes>
    </Suspense>
  </div>
</div>

  );
}

export default App;
