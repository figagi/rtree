import React from 'react';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Leaf from '../views/Leaf';
import BaseLayout from '../components/Layouts/BaseLayout';

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Routehub() {
  return (
    <>
      <main>
        <h2>前端基建生态</h2>
      </main>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="messages" element={<About />} />
          <Route path="leaf" element={<Leaf />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Routehub;
