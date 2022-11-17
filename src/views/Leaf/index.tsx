import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Counter } from '@/components/Counter';
import { currentEnv } from '@/consts/env';

export default function Home() {
  console.log('process.env', process.env);
  return (
    <>
      <main>
        <h2>这里是一片树叶</h2>
        <p>如果你来到了这里：这是基于LAND基座的一个子应用的leaf路由</p>
      </main>
      <nav>
        <Link to="/app/home">返回主页</Link>
      </nav>
    </>
  );
}
