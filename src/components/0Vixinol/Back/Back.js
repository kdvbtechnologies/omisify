import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  return (
    <div>
      <svg
        onClick={() => navigate(-1)}
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="20px"
        className="back-btn-vi"
        enableBackground="new 0 0 511.893 511.893"
        version="1.1"
        viewBox="0 0 511.893 511.893"
        xmlSpace="preserve"
      >
        <path d="M391.253 255.947l117.76-104.96c2.56-2.56 3.413-5.973 2.56-9.387-.853-2.56-4.267-5.12-7.68-5.12h-376.32c-1.707 0-4.267.853-5.973 2.56L4.693 245.707l-.853.853c-5.12 5.973-5.12 14.507 0 20.48l.853.853L121.6 372.853c1.707 1.707 4.267 2.56 5.973 2.56h376.32c3.413 0 6.827-2.56 7.68-5.12.853-3.413 0-6.827-2.56-9.387l-117.76-104.959zm-260.266 102.4l-113.493-102.4 113.493-102.4h350.72l-102.4 92.16s-.853 0-.853.853c-5.12 5.973-5.12 14.507 0 20.48l.853.853 102.4 90.453h-350.72z"></path>
      </svg>
    </div>
  );
}
