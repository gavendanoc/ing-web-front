import React from 'react';

import Routes from "./shared/routes/index";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return <Router basename="/ing-web-front"> <Routes/> </Router>
}

export default App;
