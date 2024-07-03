import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import { createLifecyle, getMicroApp } from "vite-plugin-legacy-qiankun";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

export type RenderProps = {
  container?: HTMLElement;
};
const microApp = getMicroApp("myReact");
let root: Root;
function render(
  props: RenderProps
): [Element, ReturnType<typeof ReactDOM.createRoot>] {
  const { container } = props;
  const dom = container
    ? container.querySelector("#myReact")
    : document.querySelector("#myReact");
  root = ReactDOM.createRoot(dom as HTMLElement);
  root.render(
    <>
      <div>主页面</div>
      <BrowserRouter
        basename={microApp.__POWERED_BY_QIANKUN__ ? "/myReact" : ""}
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
  createLifecyle("myReact", {
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
