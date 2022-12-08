import lemonde1 from "../../img/le-monde1.jpg";
import lemonde2 from "../../img/le-monde2.jpg";
import lemonde3 from "../../img/le-monde3.jpg";
import lemonde4 from "../../img/le-monde4.jpg";
import lemonde5 from "../../img/le-monde1.jpg";
import lemonde6 from "../../img/le-monde2.jpg";
import lydia1 from "../../img/lydia1.jpg";
import lydia2 from "../../img/lydia2.jpg";
import lydia3 from "../../img/lydia3.jpg";
import lydia4 from "../../img/lydia4.jpg";
import snap1 from "../../img/snap1.jpg";
import snap2 from "../../img/snap2.jpg";
import snap3 from "../../img/snap3.jpg";
import snap4 from "../../img/snap4.jpg";
import snap5 from "../../img/snap5.jpg";
import { useState } from "react";

export default function BlockImageMobile() {
  const api = [
    {
      imagePopup: `${snap1}`,
      imageAlt: "Snapchat capture d'écran 1",
    },

    {
      imagePopup: `${snap2}`,
      imageAlt: "Snapchat capture d'écran 2",
    },

    {
      imagePopup: `${snap3}`,
      imageAlt: "Snapchat capture d'écran 3",
    },

    {
      imagePopup: `${snap4}`,
      imageAlt: "Snapchat capture d'écran 4",
    },

    {
      imagePopup: `${snap5}`,
      imageAlt: "Snapchat capture d'écran 5",
    },

    {
      imagePopup: `${lemonde1}`,
      imageAlt: "LeMonde capture d'écran 1",
    },

    {
      imagePopup: `${lemonde2}`,
      imageAlt: "LeMonde capture d'écran 2",
    },

    {
      imagePopup: `${lemonde3}`,
      imageAlt: "LeMonde capture d'écran 3",
    },

    {
      imagePopup: `${lemonde4}`,
      imageAlt: "LeMonde capture d'écran 4",
    },

    {
      imagePopup: `${lemonde5}`,
      imageAlt: "LeMonde capture d'écran 5",
    },

    {
      imagePopup: `${lemonde6}`,
      imageAlt: "LeMonde capture d'écran 6",
    },

    {
      imagePopup: `${lydia1}`,
      imageAlt: "Lydia capture d'écran 1",
    },

    {
      imagePopup: `${lydia2}`,
      imageAlt: "Lydia capture d'écran 2",
    },

    {
      imagePopup: `${lydia3}`,
      imageAlt: "Lydia capture d'écran 3",
    },

    {
      imagePopup: `${lydia4}`,
      imageAlt: "Lydia capture d'écran 4",
    },
  ];

  console.log(api);

  // image 1
  // image 1
  // image 1
  const [popupBlockImageMobile1, setPopupBlockImageMobile1] = useState(false);
  const [verify1, setVerify1] = useState(false);
  const imagePopup1 = `${snap1}`;
  const imageAlt1 = "Snapchat capture d'écran 1";

  function PopupBlockImageMobile1() {
    setPopupBlockImageMobile1(!popupBlockImageMobile1);
  }

  function Verify1() {
    setPopupBlockImageMobile1(false);
    setPopupBlockImageMobile2(false);
    setVerify1(true);
    setVerify2(false);
  }

  function Close1() {
    setPopupBlockImageMobile1(false);
    setVerify1(false);
  }

  // image 2
  // image 2
  // image 2
  const [popupBlockImageMobile2, setPopupBlockImageMobile2] = useState(false);
  const [verify2, setVerify2] = useState(false);
  const imagePopup2 = `${snap2}`;
  const imageAlt2 = "Snapchat capture d'écran 2";

  function PopupBlockImageMobile2() {
    setPopupBlockImageMobile2(!popupBlockImageMobile2);
  }

  function Verify2() {
    setPopupBlockImageMobile1(false);
    setPopupBlockImageMobile2(false);
    setVerify1(false);
    setVerify2(true);
  }

  function Close2() {
    setPopupBlockImageMobile2(false);
    setVerify2(false);
  }

  return (
    <>
      <div className="align-block-image">
        <div className="block-image">
          <div className="images">
            <img
              onClick={PopupBlockImageMobile1}
              src={imagePopup1}
              alt={imageAlt1}
            />

            <img
              onClick={PopupBlockImageMobile2}
              src={imagePopup2}
              alt={imageAlt2}
            />
          </div>
          {/* images */}
        </div>
        {/* block-image */}
      </div>
      {/* align-block-image */}

      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {/* popup-block-image 1 */}
      {popupBlockImageMobile1 && (
        <>
          <div className="popup-block-image-background">
            <div className="card">
              {/* close */}
              {/* close */}
              <div className="close">
                <svg
                  onClick={Close1}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="white"
                  enableBackground="new 0 0 330 330"
                  version="1.1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z"></path>
                  </g>
                </svg>
              </div>
              {/* close */}

              <div className="display">
                <div className="left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    fill="#00000050"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                  </svg>
                </div>
                {/* left */}

                {/* images */}
                {/* images */}
                <div className="images">
                  <img src={imagePopup1} alt={imageAlt1} />
                </div>
                {/* images */}

                <div className="right">
                  <svg
                    onClick={Verify2}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                </div>
                {/* right */}
              </div>
              {/* display */}

              <div className="popup-image-in-bottom">
                <div className="align">
                  <div className="display">
                    <div onClick={Verify1} className="image">
                      <img
                        style={{
                          border:
                            verify1 ||
                            (popupBlockImageMobile1 && "1px solid #fd7e14"),
                        }}
                        src={snap1}
                        alt={imageAlt1}
                      />
                    </div>

                    <div onClick={Verify2} className="image">
                      <img
                        style={{
                          border:
                            verify2 ||
                            (popupBlockImageMobile2 && "1px solid #fd7e14"),
                        }}
                        src={snap2}
                        alt={imageAlt2}
                      />
                    </div>
                  </div>
                  {/* display */}
                </div>
              </div>
              {/* popup-image-in-bottom */}
            </div>
            {/* card */}
          </div>
          {/* popup-block-image-background */}
        </>
      )}

      {/* verify1*/}
      {/* verify1*/}
      {/* verify1*/}
      {/* verify1*/}
      {/* verify1*/}
      {/* verify1*/}
      {/* verify1*/}
      {verify1 && (
        <>
          <div className="popup-block-image-background">
            <div className="card">
              {/* close */}
              {/* close */}
              <div className="close">
                <svg
                  onClick={Close1}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="white"
                  enableBackground="new 0 0 330 330"
                  version="1.1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z"></path>
                  </g>
                </svg>
              </div>
              {/* close */}

              <div className="display">
                <div className="left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    fill="#00000050"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                  </svg>
                </div>
                {/* left */}

                {/* images */}
                {/* images */}
                <div className="images">
                  <img src={imagePopup1} alt={imageAlt1} />
                </div>
                {/* images */}

                <div className="right">
                  <svg
                    onClick={Verify2}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                </div>
                {/* right */}
              </div>
              {/* display */}

              <div className="popup-image-in-bottom">
                <div className="align">
                  <div className="display">
                    <div onClick={Verify1} className="image">
                      <img
                        style={{
                          border:
                            verify1 ||
                            (popupBlockImageMobile1 && "1px solid #fd7e14"),
                        }}
                        src={snap1}
                        alt={imageAlt1}
                      />
                    </div>

                    <div onClick={Verify2} className="image">
                      <img
                        style={{
                          border:
                            verify2 ||
                            (popupBlockImageMobile2 && "1px solid #fd7e14"),
                        }}
                        src={snap2}
                        alt={imageAlt2}
                      />
                    </div>
                  </div>
                  {/* display */}
                </div>
              </div>
              {/* popup-image-in-bottom */}
            </div>
            {/* card */}
          </div>
          {/* popup-block-image-background */}
        </>
      )}

      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {/* popup-block-image 2 */}
      {popupBlockImageMobile2 && (
        <>
          <div className="popup-block-image-background">
            <div className="card">
              {/* close */}
              {/* close */}
              {/* close */}
              <div className="close">
                <svg
                  onClick={Close2}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="white"
                  enableBackground="new 0 0 330 330"
                  version="1.1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z"></path>
                  </g>
                </svg>
              </div>
              {/* close */}

              <div className="display">
                <div className="left">
                  <svg
                    onClick={Verify1}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                  </svg>
                </div>
                {/* left */}

                {/* images */}
                {/* images */}
                {/* images */}
                <div className="images">
                  <img src={imagePopup2} alt={imageAlt2} />
                </div>
                {/* images */}

                <div className="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                </div>
                {/* right */}
              </div>
              {/* display */}

              <div className="popup-image-in-bottom">
                <div className="align">
                  <div className="display">
                    <div onClick={Verify1} className="image">
                      <img
                        style={{
                          border:
                            verify1 ||
                            (popupBlockImageMobile1 && "1px solid #fd7e14"),
                        }}
                        src={snap1}
                        alt={imageAlt1}
                      />
                    </div>

                    <div onClick={Verify2} className="image">
                      <img
                        style={{
                          border:
                            verify2 ||
                            (popupBlockImageMobile2 && "1px solid #fd7e14"),
                        }}
                        src={snap2}
                        alt={imageAlt2}
                      />
                    </div>
                  </div>
                  {/* display */}
                </div>
              </div>
              {/* popup-image-in-bottom */}
            </div>
            {/* card */}
          </div>
          {/* popup-block-image-background */}
        </>
      )}

      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {/* verify 2 */}
      {verify2 && (
        <>
          <div className="popup-block-image-background">
            <div className="card">
              <div className="close">
                <svg
                  onClick={Close2}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="white"
                  enableBackground="new 0 0 330 330"
                  version="1.1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M165 0C120.926 0 79.492 17.163 48.328 48.327c-64.334 64.333-64.334 169.011-.002 233.345C79.49 312.837 120.926 330 165 330c44.072 0 85.508-17.163 116.672-48.328 64.334-64.334 64.334-169.012 0-233.345C250.508 17.163 209.072 0 165 0zm74.246 239.245a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394L165 186.213l-53.033 53.033a14.956 14.956 0 01-10.607 4.394 14.948 14.948 0 01-10.605-4.394c-5.859-5.857-5.859-15.355 0-21.213L143.787 165l-53.033-53.033c-5.859-5.857-5.859-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0L165 143.787l53.031-53.033c5.857-5.857 15.355-5.857 21.213 0 5.859 5.857 5.859 15.355 0 21.213L186.213 165l53.033 53.032c5.858 5.858 5.858 15.356 0 21.213z"></path>
                  </g>
                </svg>
              </div>
              {/* close */}

              <div className="display">
                <div className="left">
                  <svg
                    onClick={Verify1}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                  </svg>
                </div>
                {/* left */}

                <div className="images">
                  <img src={imagePopup2} alt={imageAlt2} />
                </div>
                {/* images */}

                <div className="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="white"
                    enableBackground="new 0 0 477.175 477.175"
                    version="1.1"
                    viewBox="0 0 477.175 477.175"
                    xmlSpace="preserve"
                  >
                    <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                  </svg>
                </div>
                {/* right */}
              </div>
              {/* display */}

              <div className="popup-image-in-bottom">
                <div className="align">
                  <div className="display">
                    <div onClick={Verify1} className="image">
                      <img
                        style={{
                          border:
                            verify1 ||
                            (popupBlockImageMobile1 && "1px solid #fd7e14"),
                        }}
                        src={snap1}
                        alt={imageAlt1}
                      />
                    </div>

                    <div onClick={Verify2} className="image">
                      <img
                        style={{
                          border:
                            verify2 ||
                            (popupBlockImageMobile2 && "1px solid #fd7e14"),
                        }}
                        src={snap2}
                        alt={imageAlt2}
                      />
                    </div>
                  </div>
                  {/* display */}
                </div>
              </div>
              {/* popup-image-in-bottom */}
            </div>
            {/* card */}
          </div>
          {/* popup-block-image-background */}
        </>
      )}
    </>
  );
}
