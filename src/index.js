import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StatProblems from './components/StatProblems'
import Content from './components/Content'

import "./styles/style.scss"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/StatProblems' element={<StatProblems />}/>
        </Routes>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
