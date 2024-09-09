import React from 'react'

const Icon = ({ width = '100px', height = '100px', fill = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L15.09 7.36L23.18 8.63L17 14.14L18.18 22.09L12 18.56L5.82 22.09L7 14.14L0.82 8.63L8.91 7.36L12 0Z" />
    </svg>
  );
};

export default Icon;