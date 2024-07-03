import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import { createLifecyle, getMicroApp } from "vite-plugin-legacy-qiankun";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import App from "./App.tsx";
import "./index.css";

export type RenderProps = {
  container?: HTMLElement;
};
const microApp = getMicroApp("reactApp");
let root: Root;
function render(
  props: RenderProps
): [Element, ReturnType<typeof ReactDOM.createRoot>] {
  const { container } = props;
  const dom = container
    ? container.querySelector("#viteReact")
    : document.querySelector("#viteReact");
  root = ReactDOM.createRoot(dom as HTMLElement);
  root.render(
    <>
      <App />
      <Button>这是一个按钮</Button>
      <BrowserRouter
        basename={microApp.__POWERED_BY_QIANKUN__ ? "/viteReact" : ""}
      >
        <Routes>
          <Route key="demo" path="demo" element={<>这是一个demo页面</>}></Route>
          <Route
            key="demo1"
            path="demo1"
            element={<>这是demo1的页面</>}
          ></Route>
          <Route path="*" element={<>这是一个统配页面</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
  return [dom!, root];
}

if (!microApp.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  createLifecyle("reactApp", {
    mount(props) {
      render({
        ...props,
      });
    },
    bootstrap() {
      // console.log('--bootstrap');
    },
    update() {
      console.log("--update");
    },
    unmount() {},
  });
}
