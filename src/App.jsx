import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom'; // Keep commented as per original

// Import shared components
import Layout from './components/Layout';
import AnimatedBackground from './components/AnimatedBackground';
import TargetCursor from './components/TargetCursor.jsx';

// Lazily load page components
const HomePage = lazy(() => import('./components/HomePage'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const PreEvents = lazy(() => import('./components/PreEvents'));

function App() {
  return (
    // MODIFIED: Added flex & flex-col to structure the page with a footer
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col">
      <AnimatedBackground />
      <div className="hidden md:block">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
        />
      </div>

      {/* Main content area now expands to fill available space */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center text-white">Loading...</div>}
          {/* Original routes are kept commented out as they were in your file */}
          {<Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="eventdetails" element={<EventDetails />} />
            </Route>
          </Routes>}
        </Suspense>
      </div>

      {/* NEW: Added a footer for developer credits */}
      <footer className="relative z-10 w-full text-center p-4 text-neutral-500 text-sm">
        <p>Developed with ❤️ by Arun Vijo, Abhishikth & Neehar</p>
      </footer>
    </div>
  );
}

export default App;
