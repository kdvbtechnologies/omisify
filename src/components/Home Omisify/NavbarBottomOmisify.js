import { useState } from "react";
import { NavLink } from "react-router-dom";
import PopupMaintenance from "./Maintenance/PopupMaintenance";
import MenuIcon from "./MenuIcon";

export default function NavbarBottomPartner() {
  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  const [popupMenu, setPopupMenu] = useState(false);
  function Menu() {
    setPopupMenu(!popupMenu);
  }

  return (
    <>
      <div className="navbar-bottom-omisify">
        <div className="display">
          <div className="a">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                fill="#ffb3b3"
                enableBackground="new 0 0 176.532 176.532"
                version="1.1"
                viewBox="0 0 176.532 176.532"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M152.928 85.912l-59.89-49.406a7.497 7.497 0 00-9.545 0l-59.89 49.406a7.497 7.497 0 00-2.728 5.785v74.544c0 4.143 3.357 7.5 7.5 7.5h119.779c4.143 0 7.5-3.357 7.5-7.5V91.697a7.489 7.489 0 00-2.726-5.785zm-56.732 72.829h-15.86v-41.524h15.859v41.524zm44.46 0h-29.46v-49.024c0-4.143-3.357-7.5-7.5-7.5h-30.86a7.499 7.499 0 00-7.5 7.5v49.024h-29.46V95.233l52.39-43.219 52.39 43.219v63.508z"></path>
                  <path d="M173.72 70.866a4625.922 4625.922 0 01-49.561-40.261c-5.109-4.591-10.479-8.938-15.675-13.144-5.087-4.118-10.348-8.377-15.201-12.745a7.499 7.499 0 00-10.035 0c-4.854 4.368-10.114 8.627-15.201 12.745-5.195 4.205-10.565 8.553-15.675 13.144a4603.882 4603.882 0 01-49.56 40.261 7.5 7.5 0 009.377 11.707A4604.86 4604.86 0 0062.034 42.08c.085-.069.168-.141.25-.215 4.854-4.368 10.114-8.627 15.201-12.745 3.559-2.88 7.199-5.827 10.781-8.873 3.582 3.046 7.223 5.993 10.781 8.873 5.087 4.118 10.348 8.377 15.201 12.745.082.074.165.146.25.215a4595.155 4595.155 0 0049.845 40.493 7.47 7.47 0 004.684 1.646 7.484 7.484 0 005.858-2.812 7.498 7.498 0 00-1.165-10.541z"></path>
                </g>
              </svg>
            </NavLink>
          </div>

          {/*
          <div className="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 199.556 199.556"
              version="1.1"
              viewBox="0 0 199.556 199.556"
              xmlSpace="preserve"
            >
              <path
                fill="white"
                d="M69.012 146.777l27.073-47.893v100.672H24.362V98.884h42.07l-21.563 38.26 16.414-2.902 7.729 12.535zm25.783-55.905H12.491l-.117-40.009h43.848c-6.448-3.322-11.118-7.406-14.069-12.047-2.374-3.703-3.459-7.806-3.459-11.675 0-6.702 3.107-16.062 7.533-20.224C50.673 2.745 56.623 0 63.091 0c6.526 0 12.594 2.237 17.772 5.745 5.207 3.41 9.633 8.109 13.317 13.385 2.14 3.029 4.006 9.702 5.589 13.033l.655-1.309c4.367-8.617 10.454-19.941 18.28-25.109C123.871 2.237 129.919 0 136.445 0c6.145 0 11.851 2.237 16.16 5.979 4.289 3.752 7.23 12.682 7.23 18.974.039 7.63-4.465 15.31-12.936 21.367-2.198 1.583-4.69 3.107-7.464 4.543h47.63l.117 40.009H104.8V50.863H94.785v40.009h.01zM106.93 48.44c16.189-3.156 26.702-7.709 32.769-12.086 6.399-4.641 7.806-10.982 7.845-13.737 0-2.286-1.036-5.579-3.078-7.376-2.003-1.768-4.905-2.96-7.972-2.96h-.039c-3.625.02-7.308 1.28-10.933 3.674-3.605 2.433-7.122 9.409-10.093 13.649-3.956 5.637-6.917 12.457-8.499 18.836zm-14.519-.879c-.977-3.703-2.374-7.523-4.24-11.118-3.547-7.162-8.686-16.902-14.147-20.488-3.644-2.394-7.249-3.654-10.933-3.674h-.059c-2.863 0-5.989 1.368-8.353 3.586-2.364 2.228-3.742 6.966-3.703 9.633 0 1.641.42 4.905 1.583 6.81 1.202 1.817 3.224 3.937 6.487 6.038 6.185 3.898 16.893 7.523 33.365 9.213zm62.392 89.446l-16.394-2.765-7.748 12.76-26.692-47.463v100.017h71.332V98.884H133.26l21.543 38.123z"
              ></path>
            </svg>
          */}

          {/* 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M414.682 218.274a8.083 8.083 0 00-8.084-8.084H212.727a8.084 8.084 0 000 16.168h193.871a8.084 8.084 0 008.084-8.084zM245.038 285.642a8.084 8.084 0 000 16.168h1.078a8.084 8.084 0 000-16.168h-1.078z"></path>
              <path d="M457.764 134.783V51.2c0-28.231-22.969-51.2-51.2-51.2H105.053c-28.231 0-51.2 22.969-51.2 51.2v212.948C23.917 265.561 0 290.375 0 320.674c0 31.204 25.369 56.589 56.552 56.589h147.707v28.003c0 3.609 1.694 7.017 4.65 9.352a.003.003 0 00.002.001c5.026 3.97 12.608 3.97 17.637 0l41.887-33.081c3.958-3.126 6.228-7.631 6.228-12.359s-2.269-9.233-6.228-12.359l-41.887-33.081c-5.029-3.972-12.61-3.971-17.637-.001-2.957 2.335-4.652 5.743-4.652 9.353v28.004H70.021V51.2c0-19.316 15.716-35.032 35.032-35.032h301.512c19.317 0 35.032 15.716 35.032 35.032v83.537h-134.62v-28.003c0-3.61-1.695-7.018-4.652-9.353-5.027-3.971-12.608-3.969-17.635 0l-41.887 33.081c-3.959 3.126-6.229 7.631-6.229 12.359s2.27 9.233 6.228 12.359l41.888 33.081c5.028 3.971 12.609 3.97 17.633.002 2.958-2.334 4.654-5.743 4.654-9.354v-28.004h148.471c22.267 0 40.383 18.132 40.383 40.421 0 21.51-16.873 39.15-38.068 40.355V178.93a8.083 8.083 0 00-8.084-8.084 8.084 8.084 0 00-8.084 8.084V460.8c0 19.316-15.715 35.032-35.032 35.032h-301.51c-19.316 0-35.032-15.716-35.032-35.032v-54.434a8.084 8.084 0 00-16.168 0V460.8c0 28.231 22.969 51.2 51.2 51.2h301.512c28.231 0 51.2-22.969 51.2-51.2V247.869C487.876 246.648 512 221.753 512 191.326c0-30.426-24.124-55.322-54.236-56.543zM53.853 361.005c-21.015-1.394-37.684-18.95-37.684-40.332 0-21.381 16.67-38.938 37.684-40.332v80.664zm166.574-21.496l37.569 29.67-37.569 29.671v-59.341zm70.38-167.018l-37.569-29.67 37.569-29.671v59.341z"></path>
              <path d="M406.598 361.095h-96.936a8.084 8.084 0 00-8.084 8.084 8.083 8.083 0 008.084 8.084h96.936a8.084 8.084 0 008.084-8.084 8.084 8.084 0 00-8.084-8.084zM105.02 301.811h107.706a8.084 8.084 0 000-16.168H105.02a8.084 8.084 0 000 16.168zM406.598 285.642h-96.936c-4.466 0-8.084 3.62-8.084 8.084s3.618 8.084 8.084 8.084h96.936a8.084 8.084 0 000-16.168zM210.04 142.821a8.084 8.084 0 00-8.084-8.084H105.02a8.084 8.084 0 000 16.168h96.935a8.084 8.084 0 008.085-8.084zM276.273 301.811h1.077c4.466 0 8.084-3.62 8.084-8.084s-3.618-8.084-8.084-8.084h-1.077c-4.466 0-8.084 3.62-8.084 8.084s3.618 8.084 8.084 8.084zM179.337 210.189a8.084 8.084 0 000 16.168h1.077a8.084 8.084 0 000-16.168h-1.077zM105.02 226.358h43.082a8.084 8.084 0 000-16.168H105.02a8.084 8.084 0 000 16.168z"></path>
            </svg>
          </div>
             */}

          {/* 
          <div className="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path
              d="M507.587 297.667l.373-3.355a255.002 255.002 0 002.976-34.224c.039-1.711.065-3.412.065-5.087s-.026-3.376-.065-5.087a255.002 255.002 0 00-2.975-34.224l-.373-3.356h-.188c-6.634-39.113-22.21-75.281-44.547-106.306l.361-.361-4.267-5.973C444.44 80.92 427.373 64.707 408.6 50.2l-5.973-5.12-.647.647C371.404 24.149 335.945 9.092 297.667 2.6v-.187l-5.523-.69A253.736 253.736 0 00278.09.061c-.444-.041-.887-.08-1.33-.119-1.046-.089-2.092-.179-3.141-.255-1.802-.135-3.602-.25-5.399-.345l-.354-.016a241.779 241.779 0 00-5.948-.228l-.594-.016c-2.049-.05-4.098-.081-6.146-.078-.06-.002-.119-.004-.178-.004-.352 0-.7.012-1.052.013-1.222.008-2.444.021-3.666.047a255.012 255.012 0 00-34.595 2.98l-3.354.373V2.6c-37.652 6.386-72.57 21.063-102.803 42.077l-.451-.451-5.973 4.267C84.333 63 67.267 79.213 51.907 97.987l-4.267 5.973.588.588C25.316 135.901 9.34 172.595 2.6 212.333h-.187l-.373 3.354a254.76 254.76 0 00-2.82 29.17c-.032.745-.061 1.493-.086 2.242-.024.769-.046 1.538-.063 2.308C-.971 251.257-1 253.115-1 255s.029 3.743.071 5.592c.017.771.04 1.539.063 2.308.025.749.054 1.496.086 2.242.39 9.872 1.33 19.608 2.82 29.17l.373 3.355H2.6c6.528 38.488 21.709 74.127 43.476 104.817l-.143.143L50.2 408.6c13.653 18.773 30.72 34.987 49.493 50.347l5.973 4.267.364-.359c31.024 22.336 67.191 37.912 106.303 44.545v.187l3.355.373a255.002 255.002 0 0034.224 2.976c1.711.039 3.412.065 5.087.065s3.376-.026 5.087-.065a255.002 255.002 0 0034.224-2.975l3.356-.373v-.188c39.946-6.775 76.817-22.883 108.278-45.988l.095.095 1.304-1.118a259.209 259.209 0 0033.851-30.168c7.354-7.666 14.18-15.749 20.312-24.181l4.267-5.973-.101-.101c20.827-30.116 35.377-64.857 41.727-102.299h.188zm-13.696-39.347c-.18 7.427-.922 14.853-1.664 22.28h-51.2l.142-1.426a187.265 187.265 0 001.522-20.854c.027-1.107.042-2.214.042-3.321s-.016-2.214-.042-3.321a187.265 187.265 0 00-1.522-20.854l-.142-1.425h51.2c.743 7.427 1.484 14.853 1.664 22.28.015 1.106.042 2.21.042 3.32 0 1.111-.027 2.215-.042 3.321zm-3.806-45.987h-52.28c-4.824-20.554-13.055-39.831-24.051-57.207l36.871-36.871c19.442 27.68 33.182 59.618 39.46 94.078zm-82.859 226.466l-36.173-36.173c5.419-4.335 10.683-9.133 15.731-14.257a190.103 190.103 0 0019.344-22.349l36.86 36.022a242.011 242.011 0 01-35.762 36.757zm-7.856-93.082l-1.01 1.443c-11.947 18.773-27.307 34.133-45.227 46.933l-8.533 5.973.002.002c-15.508 9.637-32.649 16.866-50.897 21.139l-6.277 1.046c-21.333 4.267-42.667 4.267-64.853 0l-6.278-1.046a169.684 169.684 0 01-49.711-20.397l-7.158-5.01a140.91 140.91 0 01-12.847-9.25 172.946 172.946 0 01-22.691-22.611c-.281-.341-.568-.678-.846-1.022l-.205-.254a177.907 177.907 0 01-9.492-12.943l-1.965-2.808c-10.368-16.108-18.103-34.051-22.588-53.208l-1.046-6.278c-1.262-5.47-2.107-10.94-2.641-16.308-.038-.4-.073-.801-.108-1.202-.071-.776-.137-1.55-.195-2.32a162.847 162.847 0 01-.21-3.292c-.013-.243-.03-.489-.042-.731a170.614 170.614 0 01-.14-3.66c-.006-.217-.017-.437-.022-.654-.035-1.416-.054-2.836-.054-4.26s.019-2.844.054-4.26c.005-.216.016-.437.022-.654.035-1.223.079-2.444.14-3.66.012-.243.029-.488.042-.732.06-1.1.13-2.197.21-3.291.059-.774.125-1.552.196-2.331.035-.397.069-.793.106-1.189.535-5.369 1.379-10.839 2.642-16.31l1.046-6.278c14.738-62.938 64.564-112.764 127.502-127.502l6.278-1.046c21.333-4.267 42.667-4.267 64.853 0l6.278 1.046c31.28 7.325 59.318 23.317 81.424 45.278a196.302 196.302 0 0112.513 13.861c15.942 19.689 27.616 42.955 33.566 68.364l1.046 6.278a127.909 127.909 0 012.19 12.107c.8 6.667 1.223 13.446 1.223 20.32v.009c-.001 10.238-1.707 21.328-3.413 32.418l-1.046 6.277c-4.377 18.687-11.851 36.213-21.838 52.013zM280.6 492.227a256.59 256.59 0 01-51.2 0v-51.2a171.627 171.627 0 0051.2 0v51.2zm-212.457-88.77l36.45-36.45a190.17 190.17 0 0035.984 36.55l-36.395 36.395a241.947 241.947 0 01-36.039-36.495zm39.345-336.076l36.491 36.491a190.128 190.128 0 00-36.794 35.739L70.81 103.236a242.049 242.049 0 0136.678-35.855zm144.191-.072c-7.049.124-14.009.632-20.854 1.522l-1.425.142v-51.2a256.59 256.59 0 0151.2 0v51.2l-1.426-.142a187.265 187.265 0 00-20.854-1.522c-1.107-.027-2.214-.042-3.321-.042s-2.213.015-3.32.042zm188.654 37.344l-36 36c-11.093-13.653-23.04-25.6-36.693-35.84l36.29-36.29a242.077 242.077 0 0136.403 36.13zm-50.602-46.677l-36.956 36.956c-16.824-10.34-35.379-18.107-55.108-22.737v-52.28c33.627 6.126 64.852 19.358 92.064 38.061zM212.333 19.915v52.28c-19.109 4.485-37.113 11.914-53.513 21.772L121.783 56.93c26.852-18.155 57.548-31.003 90.55-37.015zM60.428 116.748l36.813 36.813c-11.498 17.78-20.077 37.6-25.046 58.773h-52.28c6.392-35.085 20.508-67.562 40.513-95.586zm6.881 134.931c-.027 1.107-.042 2.214-.042 3.321s.016 2.214.042 3.321c.124 7.049.632 14.009 1.522 20.854l.142 1.426h-51.2c-.743-7.427-1.484-14.853-1.664-22.28-.015-1.106-.042-2.21-.042-3.32 0-1.11.027-2.214.042-3.32.18-7.427.922-14.853 1.664-22.28h51.2l-.142 1.425a187.247 187.247 0 00-1.522 20.853zm-47.394 45.988h52.28c4.679 19.935 12.563 38.669 23.066 55.633l-36.935 36.935c-18.887-27.33-32.247-58.733-38.411-92.568zm98.443 153.029l37.189-36.679c17.267 10.863 36.398 19.003 56.787 23.788v52.28c-34.418-6.27-66.32-19.984-93.976-39.389zm179.309 39.389v-52.28c21.378-5.017 41.374-13.719 59.287-25.385l36.792 36.792c-28.137 20.193-60.787 34.444-96.079 40.873zM453.41 387.703l-37.059-37.059c9.698-16.257 17.018-34.076 21.454-52.978h52.28c-5.974 32.794-18.702 63.307-36.675 90.037z"
                transform="translate(1 1)"
              ></path>
              <path
                d="M237.933 348.867h-24.747V161.133c0-3.413-2.56-6.827-5.973-7.68s-6.827 0-9.387 2.56l-42.667 51.2c-3.413 3.413-2.56 8.533.853 11.947s8.533 2.56 11.947-.853l27.307-33.28v163.84h-25.6c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h68.267c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533zM301.933 152.6c-30.72 0-55.467 24.747-55.467 55.467v102.4c0 30.72 24.747 55.467 55.467 55.467s55.467-24.747 55.467-55.467v-102.4c0-30.72-24.747-55.467-55.467-55.467zm38.4 157.867c0 21.333-17.067 38.4-38.4 38.4s-38.4-17.067-38.4-38.4v-102.4c0-21.333 17.067-38.4 38.4-38.4s38.4 17.067 38.4 38.4v102.4z"
                transform="translate(1 1)"
              ></path>
            </svg>
          </div>
            */}

          {popupMenu && (
            <>
              <div className="a">
                <NavLink to="/partner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    fill="#ffb3b3"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path d="M256 0C114.842 0 0 114.842 0 256c0 141.147 114.882 256 256 256 141.397 0 256-115.142 256-256C512 114.842 397.158 0 256 0zm0 478.609c-52.132 0-100.129-18.02-138.109-48.149 23.515-54.854 77.66-90.981 138.109-90.981 60.458 0 114.613 36.119 138.132 90.962-37.983 30.14-85.989 48.168-138.132 48.168zm-83.478-256c0-46.03 37.448-83.478 83.478-83.478s83.478 37.448 83.478 83.478S302.03 306.087 256 306.087s-83.478-37.448-83.478-83.478zm247.297 183.947c-20.636-40.667-55.522-71.771-97.195-87.984 30.345-21.132 50.246-56.264 50.246-95.963 0-64.442-52.428-116.87-116.87-116.87s-116.87 52.428-116.87 116.87c0 39.701 19.903 74.835 50.252 95.967-41.668 16.217-76.547 47.328-97.18 88.003C55.71 366.915 33.391 314.017 33.391 256c0-122.746 99.862-222.609 222.609-222.609S478.609 133.254 478.609 256c0 58.007-22.31 110.895-58.79 150.556z"></path>
                  </svg>
                </NavLink>
              </div>
            </>
          )}

          {!popupMenu && (
            <>
              <div className="a">
                <NavLink to="/partner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path d="M256 0C114.842 0 0 114.842 0 256c0 141.147 114.882 256 256 256 141.397 0 256-115.142 256-256C512 114.842 397.158 0 256 0zm0 478.609c-52.132 0-100.129-18.02-138.109-48.149 23.515-54.854 77.66-90.981 138.109-90.981 60.458 0 114.613 36.119 138.132 90.962-37.983 30.14-85.989 48.168-138.132 48.168zm-83.478-256c0-46.03 37.448-83.478 83.478-83.478s83.478 37.448 83.478 83.478S302.03 306.087 256 306.087s-83.478-37.448-83.478-83.478zm247.297 183.947c-20.636-40.667-55.522-71.771-97.195-87.984 30.345-21.132 50.246-56.264 50.246-95.963 0-64.442-52.428-116.87-116.87-116.87s-116.87 52.428-116.87 116.87c0 39.701 19.903 74.835 50.252 95.967-41.668 16.217-76.547 47.328-97.18 88.003C55.71 366.915 33.391 314.017 33.391 256c0-122.746 99.862-222.609 222.609-222.609S478.609 133.254 478.609 256c0 58.007-22.31 110.895-58.79 150.556z"></path>
                  </svg>
                </NavLink>
              </div>
            </>
          )}

          {popupMenu && (
            <>
              <div className="a">
                <svg
                  onClick={Menu}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  cursor="pointer"
                  fill="#fff"
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
              {/* a */}
            </>
          )}

          {!popupMenu && (
            <>
              <div className="a">
                <svg
                  onClick={Menu}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  cursor="pointer"
                  fill="#ffb3b3"
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
              {/* a */}
            </>
          )}
        </div>
        {/* display */}
      </div>
      {/* navbar-bottom-omisify */}

      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}

      {/* popup menu */}
      {popupMenu && (
        <div onClick={Menu}>
          <MenuIcon />
        </div>
      )}
    </>
  );
}
