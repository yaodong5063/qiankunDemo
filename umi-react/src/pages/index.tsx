import yayJpg from "../assets/yay.jpg";
import "./index.less";

export default function HomePage() {
  return (
    <div>
      <h2 className="text-h1">Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
