import React, { useEffect } from "react";
import anime from "animejs";

const WrongSvg = () => {
  useEffect(() => {
    anime({
      targets: "#bottom-pink",
      rotate: "360",
      duration: 5000,
      easing: "linear",
      loop: true,
    });

    anime({
      targets: " #green-left",
      scale: [1, 1.1],
      duration: 2000,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="wrong">
        <g
          id="Ellipse 33"
          className="pulse-circle"
          filter="url(#filter0_f_1_4931)"
        >
          <circle
            cx="120"
            cy="120"
            r="100"
            fill="url(#paint0_angular_1_4931)"
            fillOpacity="0.4"
          />
        </g>
        <g
          id="Ellipse 35"
          className="pulse-circle"
          filter="url(#filter1_f_1_4931)"
        >
          <circle
            cx="120"
            cy="120"
            r="100"
            fill="url(#paint1_angular_1_4931)"
            fillOpacity="0.8"
          />
        </g>
        <g id="Ellipse 10" filter="url(#filter2_iii_1_4931)">
          <circle cx="120" cy="120" r="100" fill="#200911" />
          <circle
            cx="120"
            cy="120"
            r="100"
            fill="url(#paint2_radial_1_4931)"
            fillOpacity="0.9"
          />
        </g>
        <mask
          id="mask0_1_4931"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="20"
          y="20"
          width="200"
          height="200"
        >
          <path
            id="Ellipse 13"
            d="M220 120C220 175.228 175.228 220 120 220C64.7715 220 20 175.228 20 120C20 64.7715 64.7715 20 120 20C175.228 20 220 64.7715 220 120Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_4931)">
          <g
            id="blue-right"
            className="rotate-path"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              d="M47.526 99.4496C38.3376 133.634 51.5103 175.998 89.4994 193.771C127.488 211.544 146.326 200.076 163.393 187.331C180.461 174.587 215.576 129.763 183.922 99.3454C152.267 68.9273 125.309 86.5262 91.145 82.4055C77.944 80.8133 56.7144 65.2656 47.526 99.4496Z"
              fill="url(#paint3_linear_1_4931)"
              fillOpacity="0.8"
            />
          </g>
          <g id="pink-left">
            <path
              d="M144.712 151.013C201.207 112.23 178.722 58.8275 133.703 42.1009C112.707 34.2997 115.914 63.3915 89.8249 89.1429C63.7355 114.894 30.3226 155.902 65.1804 173.713C100.038 191.524 120.849 167.395 144.712 151.013Z"
              fill="url(#paint4_radial_1_4931)"
            />
            <path
              d="M144.712 151.013C201.207 112.23 178.722 58.8275 133.703 42.1009C112.707 34.2997 115.914 63.3915 89.8249 89.1429C63.7355 114.894 30.3226 155.902 65.1804 173.713C100.038 191.524 120.849 167.395 144.712 151.013Z"
              fill="url(#paint5_linear_1_4931)"
            />
            <path
              d="M144.712 151.013C201.207 112.23 178.722 58.8275 133.703 42.1009C112.707 34.2997 115.914 63.3915 89.8249 89.1429C63.7355 114.894 30.3226 155.902 65.1804 173.713C100.038 191.524 120.849 167.395 144.712 151.013Z"
              fill="url(#paint6_radial_1_4931)"
              fillOpacity="0.2"
            />
          </g>
          <g id="green-left">
            <path
              d="M58.9345 112.891C68.0002 84 68.4875 42 101.56 42C127.67 42 149 53 162.483 75.0865C175.967 97.173 202 101.683 202 118C202 147.604 149.801 163.095 118 160C86.1996 156.905 49.8688 141.782 58.9345 112.891Z"
              fill="url(#paint7_linear_1_4931)"
              fillOpacity="0.3"
              style={{ mixBlendMode: "plus-lighter" }}
            />
            <path
              d="M58.9345 112.891C68.0002 84 68.4875 42 101.56 42C127.67 42 149 53 162.483 75.0865C175.967 97.173 202 101.683 202 118C202 147.604 149.801 163.095 118 160C86.1996 156.905 49.8688 141.782 58.9345 112.891Z"
              fill="url(#paint8_radial_1_4931)"
            />
          </g>
          <g id="bottom-pink">
            <path
              d="M124.477 175.319C131.708 207 182.708 195 160.708 167C138.708 139 139.67 140.879 121.962 120C120.628 140.292 117.247 143.638 124.477 175.319Z"
              fill="url(#paint9_radial_1_4931)"
            />
            <path
              d="M124.477 175.319C131.708 207 182.708 195 160.708 167C138.708 139 139.67 140.879 121.962 120C120.628 140.292 117.247 143.638 124.477 175.319Z"
              fill="url(#paint10_linear_1_4931)"
            />
          </g>
          <g id="Ellipse 29">
            <path
              d="M48 105C24.223 51.9764 130 7.99998 112.762 52.5845C95.5235 97.169 139.28 169.544 170.275 114.567C196.762 67.5845 71.777 158.024 48 105Z"
              fill="url(#paint11_angular_1_4931)"
              style={{ mixBlendMode: "screen" }}
            />
          </g>
          <g
            id="Ellipse 30"
            style={{ mixBlendMode: "plus-lighter" }}
            filter="url(#filter3_f_1_4931)"
          >
            <path
              d="M158.993 120.391C179.762 136.16 129.671 133.734 122.341 156.782C115.01 179.829 57.5882 142.226 85.6883 120.391C113.789 98.5574 64.9187 110.687 122.341 84.0013C179.763 57.3151 138.223 104.622 158.993 120.391Z"
              fill="url(#paint12_radial_1_4931)"
              fillOpacity="0.6"
            />
          </g>
          <path
            id="Ellipse 14"
            d="M118.58 150.775C93.9998 148 84.9998 143 88.5797 120.775C92.1597 98.5495 104.16 103.549 118.58 90.7748C133 78.0001 141.42 89.2255 154 113C166.58 136.775 143.16 153.549 118.58 150.775Z"
            fill="url(#paint13_radial_1_4931)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1_4931"
          x="0"
          y="0"
          width="240"
          height="240"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_1_4931"
          />
        </filter>
        <filter
          id="filter1_f_1_4931"
          x="15"
          y="15"
          width="210"
          height="210"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            result="effect1_foregroundBlur_1_4931"
          />
        </filter>
        <filter
          id="filter2_iii_1_4931"
          x="20"
          y="20"
          width="200"
          height="200"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.8625 0 0 0 0 0.251563 0 0 0 0 0.618125 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_4931"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.945833 0 0 0 0 0.185226 0 0 0 0 0.230862 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1_4931"
            result="effect2_innerShadow_1_4931"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.7375 0 0 0 0 0.94225 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_1_4931"
            result="effect3_innerShadow_1_4931"
          />
        </filter>
        <filter
          id="filter3_f_1_4931"
          x="74"
          y="72"
          width="94"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_1_4931"
          />
        </filter>
        <radialGradient
          id="paint0_angular_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(120 120) rotate(90) scale(100)"
        >
          <stop stopColor="#7B1050" />
          <stop offset="0.313665" stopColor="#421343" />
          <stop offset="1" stopColor="#FF1717" />
        </radialGradient>
        <radialGradient
          id="paint1_angular_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(120 120) rotate(90) scale(100)"
        >
          <stop stopColor="#7B1050" />
          <stop offset="0.313665" stopColor="#421343" />
          <stop offset="1" stopColor="#FF1717" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78 33) rotate(63.4457) scale(97.2598 115.376)"
        >
          <stop stopColor="#DA72FF" stopOpacity="0.63" />
          <stop offset="1" stopColor="#344B9D" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_1_4931"
          x1="62.6905"
          y1="170.158"
          x2="102.57"
          y2="104.815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9777C0" stopOpacity="0.53" />
          <stop offset="1" stopColor="#E95BEC" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint4_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(59.2982 112.376) rotate(32.5356) scale(84.836 86.7464)"
        >
          <stop stopColor="#C1506B" />
          <stop offset="1" stopColor="#F7BADE" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_1_4931"
          x1="78.0912"
          y1="69.0847"
          x2="94.8208"
          y2="90.2593"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C150A2" />
          <stop offset="1" stopColor="#E0ADBC" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint6_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(126.719 121.066) rotate(109.542) scale(50.5442 45.5972)"
        >
          <stop stopColor="#FF2E00" />
          <stop offset="1" stopColor="#FFD6CD" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint7_linear_1_4931"
          x1="178.352"
          y1="135.827"
          x2="198.115"
          y2="98.0207"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE518C" stopOpacity="0" />
          <stop offset="0.665732" stopColor="#EE518C" />
          <stop offset="0.911525" stopColor="#FF7DAE" />
        </linearGradient>
        <radialGradient
          id="paint8_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(64.0002 117) rotate(30.6997) scale(37.2156 45.4165)"
        >
          <stop stopColor="#8F4791" />
          <stop offset="1" stopColor="#8F4791" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(149 194) rotate(-102.011) scale(48.0521 61.5394)"
        >
          <stop stopColor="#E375DF" stopOpacity="0" />
          <stop offset="1" stopColor="#FF91B2" />
        </radialGradient>
        <linearGradient
          id="paint10_linear_1_4931"
          x1="124.563"
          y1="128.801"
          x2="127.574"
          y2="149.206"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint11_angular_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(121 127) rotate(-65.0114) scale(111.909 117.698)"
        >
          <stop offset="0.0076933" stopColor="#FFADAD" />
          <stop offset="0.258126" stopColor="#FF3205" stopOpacity="0" />
          <stop offset="0.570188" stopColor="#FFF1E0" stopOpacity="0" />
          <stop offset="0.762235" stopColor="#7A0E4F" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint12_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(122.341 120.391) rotate(90) scale(36.3901 36.6523)"
        >
          <stop stopColor="white" />
          <stop offset="0.165839" stopColor="white" />
          <stop offset="0.335281" stopColor="#FFD18B" />
          <stop offset="1" stopColor="#FF144D" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint13_radial_1_4931"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(118.58 120.775) rotate(-180) scale(30 30)"
        >
          <stop stopColor="white" />
          <stop offset="0.165839" stopColor="white" />
          <stop offset="0.335281" stopColor="#FFD18B" />
          <stop offset="1" stopColor="#FF144D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default WrongSvg;
