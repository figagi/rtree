import { Route, Routes, Link, Outlet } from "react-router-dom";
import { Counter } from "@/components/Counter";
import { currentEnv } from "@/consts/env";

export default function Home() {
  console.log("process.env", process.env);
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <Counter />
      currentEnv {process.env.CRP_ENV}
      currentEnv-env: {process.env.CRP_NAME}
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
