import React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.37879 5.0463C4.48414 3.88737 5.45584 3 6.61955 3H17.3799C18.5436 3 19.5153 3.88737 19.6207 5.04629L20.8479 18.5463C20.9677 19.8639 19.9302 21 18.6072 21H5.39227C4.0692 21 3.03173 19.8639 3.15151 18.5463L4.37879 5.0463ZM11.9996 12C9.51435 12 7.49963 9.98528 7.49963 7.5V6.75C7.49963 6.33579 7.83542 6 8.24963 6C8.66385 6 8.99963 6.33579 8.99963 6.75V7.5C8.99963 9.15685 10.3428 10.5 11.9996 10.5C13.6565 10.5 14.9996 9.15685 14.9996 7.5V6.75C14.9996 6.33579 15.3354 6 15.7496 6C16.1638 6 16.4996 6.33579 16.4996 6.75V7.5C16.4996 9.98528 14.4849 12 11.9996 12Z"
          fill="#1677ff"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default Logo;
