const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");

const Routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
export default Routes;
