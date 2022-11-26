import { useState } from "react";

export default function NavbarMenuJA() {
  const [popupMenu, setPopupMenu] = useState(false);

  function PopupMenu() {
    setPopupMenu(!popupMenu);
    console.log("popup true");
  }

  return (
    <>
      <div className="navbar-menu-ja">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fcff07"
            width="50px"
            cursor="pointer"
            viewBox="0 0 512 512"
          >
            <path d="M330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07-28.63-56.53-25.9 79.46 26.3 45h50.7l36.68-111.27 35 111.27zM48.79 286.09h31.65a93.39 93.39 0 0025.62-3.21l8.18-25.19 22.88-70.39a55.75 55.75 0 00-6-7.82Q113.54 160 79.59 160H0v192h48.79zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92zm286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160 512 352h-53.53l-12.4-34.39z"></path>
          </svg>
        </div>

        <div className="menu">
          <svg
            onClick={PopupMenu}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="20px"
            cursor="pointer"
            enableBackground="new 0 0 210 210"
            version="1.1"
            viewBox="0 0 210 210"
            xmlSpace="preserve"
          >
            <g>
              <path d="M195 0h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
              <path d="M115 0H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
              <path d="M35 0H15C6.716 0 0 6.716 0 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
              <path d="M195 160h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
              <path d="M115 160H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
              <path d="M35 160H15c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
              <path d="M195 80h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
              <path d="M115 80H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
              <path d="M35 80H15C6.716 80 0 86.716 0 95v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
