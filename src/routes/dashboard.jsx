import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import Sales from "../views/Sales/Sales";
import Items from "../views/Items/Items";
import Settings from "../views/Settings/Settings";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/items",
    name: "Items",
    icon: "pe-7s-note2",
    component: Items
  },
  {
    path: "/sales",
    name: "Sales",
    icon: "pe-7s-news-paper",
    component: Sales
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  { path: "/settings", name: "Settings", icon: "pe-7s-science", component: Settings },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
