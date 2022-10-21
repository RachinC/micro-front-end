import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const config = {
  mode: "hash",
  routes: [
    {
      type: "application",
      name: "@react-nav/nav-bar",
    },
    {
      type: "route",
      path: "react1",
      routes: [
        {
          type: "application",
          name: "@react-1/react-app1",
          // loader: '',
          // error: '',
        },
      ],
      default: false,
    },
    {
      type: "route",
      path: "react2",
      routes: [
        {
          type: "application",
          name: "@react-2/react-app2",
          // loader: '',
          // error: '',
        },
      ],
      default: false,
    },
    /* {
      type: "route",
      default: true,
      routes: [
        {
          type: "#text",
          value: "404 Not Found",
        },
      ],
    }, */
  ],
};

// const routes = constructRoutes(config);
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

/* import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@react-nav/nav-bar",
  app: () => System.import("@react-nav/nav-bar"),
  activeWhen: "/",
  customProps: {},
});

registerApplication({
  name: "@react-1/react-app1",
  app: () => System.import("@react-1/react-app1"),
  activeWhen: "/react1",
});

registerApplication({
  name: "@react-2/react-app2",
  app: () => System.import("@react-2/react-app2"),
  activeWhen: "/react2",
});

start(); */
