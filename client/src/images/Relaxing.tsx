import { ReactElement } from 'react';
import styled from 'styled-components';

interface PropsType {
  transform?: string;
}

const Wrapper = styled.div<PropsType>`
  transform: ${(props) => props.transform};

  path.fog-left {
    stroke-dasharray: 30;
    animation: bottom-up 3s linear infinite;
    stroke-dashoffset: -30;
  }
  path.fog-middle {
    stroke-dasharray: 30;
    animation: bottom-up 2.5s linear infinite;
    stroke-dashoffset: -25;
  }
  path.fog-right {
    stroke-dasharray: 30;
    animation: bottom-up 2.7s linear infinite;
    stroke-dashoffset: -20;
  }

  @keyframes bottom-up {
    to {
      opacity: 0.5;
      stroke-dashoffset: 30;
    }
  }
`;

const Relaxing = ({ transform }: PropsType): ReactElement => {
  return (
    <Wrapper transform={transform}>
      <svg
        width="600"
        height="280"
        viewBox="0 0 600 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0, 4)"
      >
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="4s"
            values="2,200,280;0,200,280;2,200,280;"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            repeatCount="indefinite"
          />
          <path
            d="M86.3497 126.765C75.2497 131.105 70.3397 120.885 68.2797 117.465C66.2197 114.045 61.3797 108.775 65.8097 98.3654C70.2397 87.9554 72.2697 82.0053 77.7797 73.9453C83.2897 65.8853 97.5097 54.7954 101.94 51.8154C106.37 48.8354 116.67 38.5754 127.57 38.6854C138.47 38.7954 147.12 35.1154 150.82 54.5154C150.82 54.5154 157.83 46.7154 160.19 49.7754C162.55 52.8354 153.19 58.6154 153.19 58.6154"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M145.35 61.5454C156.52 68.8954 161.06 66.7954 170.83 60.3154"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M130.12 75.4253C130.12 75.4253 131.76 79.0953 140.63 75.4953"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126.39 82.7654C126.39 82.7654 128.22 83.8154 131.33 82.3754"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M103.33 119.145C96.3296 117.045 92.2396 117.035 94.7896 127.075C97.3396 137.115 103.28 138.955 105.33 138.035C107.38 137.115 109.22 134.925 108.3 132.005"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.17 128.225C101.17 128.225 103.61 127.895 103.98 128.995"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M119.67 115.545C122.12 123.175 124.21 130.915 131.34 127.495C138.47 124.075 139.58 115.725 137.02 107.855C134.46 99.9854 131.04 92.5253 124.22 95.7553C117.4 98.9853 116.93 107.005 119.67 115.535V115.545Z"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M146.06 101.085C147.7 108.805 150.61 113.145 155.5 111.475C160.39 109.805 165.89 103.785 163.89 92.1253C161.89 80.4653 158.01 74.9953 151.85 76.8753C145.69 78.7553 142.73 85.3753 146.07 101.095L146.06 101.085Z"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M136.26 107.535L143.35 102.485"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M128.61 113.535V113.895"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M154.89 96.9854V97.3754"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M152.37 113.935C152.37 113.935 160.2 111.185 162.26 115.375C164.32 119.565 161.01 120.775 154.72 121.565"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M150.13 141.535C143.2 142.805 159.83 139.875 162.88 137.175C165.93 134.475 172.11 127.015 172.11 127.015"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122.26 158.045C123.62 158.365 139.73 163.335 151.28 159.755C162.83 156.175 169.1 154.935 172.55 149.505C176 144.075 179.27 134.135 179.11 127.015C178.95 119.895 178.74 111.555 176.66 104.885C174.58 98.2154 171.38 85.9554 170.27 82.2754C169.16 78.5954 166.92 76.2554 166.92 76.2554L166.85 74.0354"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.6 164.605C118.6 164.605 109.93 168.025 108.9 173.285C108.9 173.285 106.83 176.855 96.4198 178.365C86.0098 179.875 67.6398 184.225 60.4898 177.815C53.3398 171.405 56.7698 163.105 58.3998 158.945C60.0298 154.785 66.2698 145.075 69.5898 143.265C72.9098 141.455 73.2998 141.545 73.2998 141.545C73.2998 141.545 72.3998 134.495 64.4598 129.535C56.5198 124.575 49.8698 122.775 43.2398 128.995C36.0098 135.775 23.0698 152.195 18.6098 161.095C16.2698 165.765 11.2298 179.035 13.3898 185.895C15.5498 192.755 30.2498 207.715 34.4098 209.705C38.5698 211.695 50.3298 215.345 63.1498 215.665C75.9698 215.985 93.8098 215.485 102.65 214.095C111.49 212.705 115.49 212.195 115.49 212.195C115.49 212.195 127.03 230.155 135.67 232.655"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 125.205C52 125.205 50.27 123.115 53.56 119.955C56.85 116.795 64.46 119.315 64.46 119.315"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74.2798 140.355C74.2798 140.355 76.1398 141.295 78.4198 140.605C80.6998 139.915 82.7798 138.995 82.7798 138.995"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M184.15 127.815C184.15 127.815 187.19 123.695 191.2 124.135C195.21 124.575 194.15 124.635 194.15 124.635C194.15 124.635 197.56 122.605 197.47 117.455C197.38 112.305 191.36 107.705 184.09 108.665"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M102.29 143.675C102.29 143.675 107.83 148.715 112.29 151.945L114.95 160.415"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M181.3 84.8053C190.94 82.2253 194.54 81.9353 199.16 83.4753C203.78 85.0153 215.27 88.7153 222.9 95.4153C230.53 102.115 236.21 107.405 237.73 115.325C239.25 123.245 238.24 129.685 234.32 134.685C230.4 139.685 220.16 144.935 220.16 144.935C220.16 144.935 221.27 149.185 229.89 159.075C238.51 168.965 253.89 180.185 256.94 182.295C259.99 184.405 267.58 190.195 270.21 190.245"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M267.73 218.385C267.73 218.385 268.52 205.195 282.5 193.135C296.48 181.075 305.83 181.945 321.89 182.485C337.95 183.025 351.78 187.385 363.94 190.255C376.1 193.125 400.1 201.005 400.1 201.005C400.1 201.005 394.21 205.335 391.18 215.065C388.15 224.795 387.15 227.855 390.49 229.815"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M400.1 200.995C400.1 200.995 402.79 201.215 402.29 204.535"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M398.29 209.635L407.06 209.845"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M391.45 228.035L404.97 229.805"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            values="4,407,220;0,407,220;4,407,220;"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            repeatCount="indefinite"
          />
          <path
            d="M407.24 222.885C407.24 222.885 407.43 210.005 407.29 204.535C407.15 199.065 407.18 192.435 409 186.505C410.82 180.575 413.92 168.095 423.2 164.445C432.48 160.795 433.52 161.415 438.87 161.255C444.22 161.095 448.47 167.625 444.86 185.425C441.25 203.235 437.16 207.535 437.16 207.535C437.16 207.535 439.21 212.375 436.78 221.005C434.35 229.635 431.74 240.975 424.16 239.785C416.58 238.595 414.73 239.375 410.01 236.125C405.29 232.875 404.9 228.755 405.59 227.345C406.28 225.935 407.25 222.885 407.25 222.885H407.24Z"
            fill="white"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M424.16 239.795C431.81 239.205 434.35 229.645 436.78 221.015C439.21 212.385 437.16 207.545 437.16 207.545C437.16 207.545 441.25 203.235 444.86 185.435C448.47 167.625 444.22 161.095 438.87 161.265C438.87 161.265 433.45 161.175 429.43 168.615C425.41 176.055 420.96 182.305 419.14 190.135C417.32 197.965 419.7 207.775 419.14 211.345C418.58 214.915 410.77 240.845 424.15 239.805L424.16 239.795Z"
            fill="white"
            stroke="#3F3F3F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M340.63 179.595C340.63 179.595 370.63 163.875 404.6 179.315"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M447.23 202.765C447.23 202.765 465.57 213.925 468.85 228.415"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M502.75 207.185C502.75 207.185 502.66 234.985 507.56 238.285C512.46 241.585 517.44 241.885 523.83 241.995C530.22 242.105 535.02 240.185 538.01 238.735C541 237.285 543.67 218.815 544.49 209.835C545.31 200.855 535.9 198.885 523.62 198.345C511.34 197.805 502.8 201.965 502.81 206.725"
          fill="white"
        />
        <path
          d="M502.75 207.185C502.75 207.185 502.66 234.985 507.56 238.285C512.46 241.585 517.44 241.885 523.83 241.995C530.22 242.105 535.02 240.185 538.01 238.735C541 237.285 543.67 218.815 544.49 209.835C545.31 200.855 535.9 198.885 523.62 198.345C511.34 197.805 502.8 201.965 502.81 206.725"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M508.56 208.845C508.56 208.845 525.32 211.835 535.42 208.015"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M543.91 215.125C543.91 215.125 551.6 216.015 550 222.925C548.4 229.835 544.65 229.345 541.85 228.125"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="fog-left"
          d="M511.58 171.005C515.67 174.355 513.99 176.945 511.23 181.395C508.47 185.845 507.25 188.585 510.89 191.785"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="fog-middle"
          d="M521.62 169.385C525.9 173.425 525.54 178.275 522.67 180.365C519.8 182.455 518.35 188.615 521.4 190.795"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="fog-right"
          d="M533.21 173.435C535.97 176.735 535.5 180.175 533.52 182.435C531.54 184.695 530.74 187.875 532.72 190.795"
          stroke="#3F3F3F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
};
export default Relaxing;
