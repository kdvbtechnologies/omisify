import { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});

export default function Print() {
  const ref = useRef();

  return (
    <>
      <div className="print">
        <div className="print-details">
          <ReactToPrint content={() => ref.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <button onClick={handlePrint}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 15 15"
                  >
                    <path
                      stroke="#000"
                      d="M3.5 12.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1h-2m-8-6v-5a1 1 0 011-1h6a1 1 0 011 1v5m-8 4h8v4h-8v-4z"
                    ></path>
                  </svg>
                </button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          <ComponentToPrint ref={ref} />
        </div>
      </div>
    </>
  );
}
