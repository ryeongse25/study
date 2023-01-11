import { useState } from "react";
import "./Sidebar.css";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [content, setContent] = useState("");
  const showNav = (btn: string) => {
    const nav = document.querySelector(".sidenav");
    setContent(btn);
    nav?.classList.toggle("show");
  };
  return (
    <>
      <div className="flex-box">
        <button
          onClick={() => {
            showNav("btn1");
          }}
        >
          버튼1
        </button>
        <button
          onClick={() => {
            showNav("btn2");
          }}
        >
          버튼2
        </button>
        <button
          onClick={() => {
            showNav("btn3");
          }}
        >
          버튼3
        </button>
      </div>
      <div className="sidenav">
        <SidebarContent content={content} />
      </div>
    </>
  );
}
