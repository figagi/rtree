import React from 'react';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import BaseLayout from '../components/Layouts/BaseLayout'

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
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
        <p>
          SPA 脚手架
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/app" element={<BaseLayout />}>
          <Route
            path="messages"
            element={<About />}
          />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Routehub