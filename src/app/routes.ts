import { createHashRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Fleet } from "./pages/Fleet";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Quote } from "./pages/Quote";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "fleet", Component: Fleet },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "quote", Component: Quote },
    ],
  },
]);
