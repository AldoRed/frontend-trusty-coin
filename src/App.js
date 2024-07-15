import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home'
import PartnerPage from './Partner/homePartner';
import PeoplePage from './People/homePeople';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/partner" element={<PartnerPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
