import React, {useRef} from 'react';
import { genId } from "../../utils/a11y/getNewId"

export const Feather = (props) => {
  const clipId = useRef(`path-1-inside-1${genId()}`)

  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath={`url(#${clipId})`}>
      <path d="M1.43934 32.4393C0.853553 33.0251 0.853553 33.9749 1.43934 34.5607C2.02513 35.1464 2.97487 35.1464 3.56066 34.5607L1.43934 32.4393ZM24.0607 14.0607C24.6464 13.4749 24.6464 12.5251 24.0607 11.9393C23.4749 11.3536 22.5251 11.3536 21.9393 11.9393L24.0607 14.0607ZM8.67157 14.3284L7.61091 13.2678L8.67157 14.3284ZM14.5607 23.5607L24.0607 14.0607L21.9393 11.9393L12.4393 21.4393L14.5607 23.5607ZM26.5 21H13.5V24H26.5V21ZM3.56066 34.5607L8.56066 29.5607L6.43934 27.4393L1.43934 32.4393L3.56066 34.5607ZM8.56066 29.5607L14.5607 23.5607L12.4393 21.4393L6.43934 27.4393L8.56066 29.5607ZM7.5 30H18.8431V27H7.5V30ZM22.7322 28.3891L31.5607 19.5607L29.4393 17.4393L20.6109 26.2678L22.7322 28.3891ZM9 28.5V17.1569H6V28.5H9ZM9.73223 15.3891L18.5607 6.56066L16.4393 4.43934L7.61091 13.2678L9.73223 15.3891ZM18.5607 6.56066C21.5647 3.55659 26.4353 3.5566 29.4393 6.56066L31.5607 4.43934C27.385 0.263705 20.615 0.263698 16.4393 4.43934L18.5607 6.56066ZM9 17.1569C9 16.4938 9.26339 15.8579 9.73223 15.3891L7.61091 13.2678C6.57946 14.2992 6 15.6982 6 17.1569H9ZM31.5607 19.5607C35.7363 15.385 35.7363 8.61497 31.5607 4.43934L29.4393 6.56066C32.4434 9.56472 32.4434 14.4353 29.4393 17.4393L31.5607 19.5607ZM18.8431 30C20.3018 30 21.7008 29.4205 22.7322 28.3891L20.6109 26.2678C20.1421 26.7366 19.5062 27 18.8431 27V30Z"
            fill="#153E67"/>
    </g>
    <defs>
      <clipPath id={clipId}>
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
}
