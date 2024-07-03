import { registerMicroApps, start } from "qiankun";

const onRegisterQian = () => {
  registerMicroApps(
    [
      {
        name: "reactApp1",
        entry: "//localhost:5175",
        container: "#root10",
        activeRule: "/viteReact/demo",
        props: { label: "demo" },
      },
      {
        name: "reactApp",
        entry: "//localhost:5175",
        container: "#root1",
        activeRule: "/viteReact",
        props: { label: "demo" },
      },
      {
        name: "vueApp",
        entry: "//localhost:5176",
        container: "#root2",
        activeRule: "/appVue",
      },
      {
        name: "create-react-app",
        entry: "//localhost:5177",
        container: "#root3",
        activeRule: "/createReact",
      },
      {
        name: "umiReact",
        entry: "//localhost:5178",
        container: "#root4",
        activeRule: "/umiReact",
      },
    ],
    {
      beforeMount: [(app) => console.log("before mount", app.name)],
    }
  );
  // 启动 qiankun
  //   start({ sandbox: { strictStyleIsolation: true } });
  start({
    sandbox: { experimentalStyleIsolation: true },
  });
};

export default onRegisterQian;
