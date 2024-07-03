import { createApp } from "vue";
import { createLifecyle, getMicroApp } from "vite-plugin-legacy-qiankun";
import App from "./App.vue";
import "./style.css";

const microApp = getMicroApp("vueApp");
export type RenderProps = {
  container?: HTMLElement;
};
let app: App<Element>;
function render(props: RenderProps): Element | App<Element> {
  const { container } = props;
  const root = container
    ? container.querySelector("#app")
    : document.querySelector("#app");
  app = createApp(App);

  app.mount(root!);
}

if (!microApp.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  createLifecyle("vueApp", {
    mount(props) {
      render({ ...props });
    },
    bootstrap() {
      console.log("--bootstrap");
    },
    update() {
      console.log("--update");
    },
    unmount() {},
  });
}
