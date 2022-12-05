// 모달 창
export const CheckIconsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10"
          cy="10"
          r="9.5"
          stroke={props.fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.5 10L9 14L14.5 6.5"
          stroke={props.fill}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

// login
export const BackArrow = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6361 1.27149C12.0266 0.880964 12.6598 0.880964 13.0503 1.27149L22.9498 11.171C23.3403 11.5615 23.3403 12.1947 22.9498 12.5852L13.0503 22.4847C12.6598 22.8752 12.0266 22.8752 11.6361 22.4847C11.2456 22.0942 11.2456 21.461 11.6361 21.0705L19.9277 12.7788L1.4142 12.7788C0.861914 12.7788 0.414199 12.3311 0.414198 11.7788C0.414199 11.2265 0.861914 10.7788 1.4142 10.7788L19.7292 10.7788L11.6361 2.6857C11.2456 2.29518 11.2456 1.66201 11.6361 1.27149Z"
        />
      </svg>
    </div>
  );
};
export const ProfileArrow = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        transform: `${props.ratate}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311169 1.60999C-0.195028 0.952425 0.273737 -2.46314e-07 1.10358 -1.73767e-07L10.8964 6.82351e-07C11.7263 7.54898e-07 12.195 0.952426 11.6888 1.61L6.79241 7.97063Z"
          fill={props.fill}
        />
      </svg>
    </div>
  );
};

// logout
export const Logoutsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z"
          fill={props.fill}
        />
      </svg>
    </div>
  );
};
export const ImageChange = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill={props.CilcleFill} />
        <g clip-path="url(#clip0_730_752)">
          <path
            d="M12.1273 8.54434C12.1495 8.36656 12.1662 8.18878 12.1662 7.99989C12.1662 7.811 12.1495 7.63323 12.1273 7.45545L13.2995 6.53878C13.4051 6.45545 13.4329 6.30545 13.3662 6.18323L12.2551 4.261C12.2051 4.17211 12.1107 4.12211 12.0107 4.12211C11.9773 4.12211 11.944 4.12767 11.9162 4.13878L10.5329 4.69434C10.244 4.47211 9.93288 4.28878 9.59399 4.14989L9.38288 2.67767C9.36621 2.54434 9.24955 2.44434 9.11066 2.44434H6.88843C6.74954 2.44434 6.63288 2.54434 6.61621 2.67767L6.4051 4.14989C6.06621 4.28878 5.7551 4.47767 5.46621 4.69434L4.08288 4.13878C4.04954 4.12767 4.01621 4.12211 3.98288 4.12211C3.88843 4.12211 3.79399 4.17211 3.74399 4.261L2.63288 6.18323C2.56066 6.30545 2.59399 6.45545 2.69954 6.53878L3.87177 7.45545C3.84954 7.63323 3.83288 7.81656 3.83288 7.99989C3.83288 8.18323 3.84954 8.36656 3.87177 8.54434L2.69954 9.461C2.59399 9.54434 2.56621 9.69434 2.63288 9.81656L3.74399 11.7388C3.79399 11.8277 3.88843 11.8777 3.98843 11.8777C4.02177 11.8777 4.0551 11.8721 4.08288 11.861L5.46621 11.3054C5.7551 11.5277 6.06621 11.711 6.4051 11.8499L6.61621 13.3221C6.63288 13.4554 6.74954 13.5554 6.88843 13.5554H9.11066C9.24955 13.5554 9.36621 13.4554 9.38288 13.3221L9.59399 11.8499C9.93288 11.711 10.244 11.5221 10.5329 11.3054L11.9162 11.861C11.9495 11.8721 11.9829 11.8777 12.0162 11.8777C12.1107 11.8777 12.2051 11.8277 12.2551 11.7388L13.3662 9.81656C13.4329 9.69434 13.4051 9.54434 13.2995 9.461L12.1273 8.54434ZM11.0273 7.59434C11.0495 7.76656 11.0551 7.88323 11.0551 7.99989C11.0551 8.11656 11.044 8.23878 11.0273 8.40545L10.9495 9.03323L11.444 9.42211L12.044 9.88878L11.6551 10.561L10.9495 10.2777L10.3718 10.0443L9.87177 10.4221C9.63288 10.5999 9.4051 10.7332 9.17732 10.8277L8.58843 11.0666L8.49954 11.6943L8.38843 12.4443H7.61066L7.5051 11.6943L7.41621 11.0666L6.82732 10.8277C6.58843 10.7277 6.36621 10.5999 6.14399 10.4332L5.63843 10.0443L5.04954 10.2832L4.34399 10.5666L3.9551 9.89434L4.5551 9.42767L5.04954 9.03878L4.97177 8.411C4.9551 8.23878 4.94399 8.111 4.94399 7.99989C4.94399 7.88878 4.9551 7.761 4.97177 7.59434L5.04954 6.96656L4.5551 6.57767L3.9551 6.111L4.34399 5.43878L5.04954 5.72211L5.62732 5.95545L6.12732 5.57767C6.36621 5.39989 6.59399 5.26656 6.82177 5.17211L7.41066 4.93323L7.49955 4.30545L7.61066 3.55545H8.38288L8.48843 4.30545L8.57732 4.93323L9.16621 5.17211C9.4051 5.27211 9.62732 5.39989 9.84955 5.56656L10.3551 5.95545L10.944 5.71656L11.6495 5.43323L12.0384 6.10545L11.444 6.57767L10.9495 6.96656L11.0273 7.59434ZM7.99955 5.77767C6.77177 5.77767 5.77732 6.77211 5.77732 7.99989C5.77732 9.22767 6.77177 10.2221 7.99955 10.2221C9.22732 10.2221 10.2218 9.22767 10.2218 7.99989C10.2218 6.77211 9.22732 5.77767 7.99955 5.77767ZM7.99955 9.111C7.38843 9.111 6.88843 8.611 6.88843 7.99989C6.88843 7.38878 7.38843 6.88878 7.99955 6.88878C8.61066 6.88878 9.11066 7.38878 9.11066 7.99989C9.11066 8.611 8.61066 9.111 7.99955 9.111Z"
            fill={props.SettingFill}
          />
        </g>
        <defs>
          <clipPath id="clip0_730_752">
            <rect
              width="13.3333"
              height="13.3333"
              fill="white"
              transform="translate(1.33301 1.33325)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

// header
export const PointChargeIconsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 80 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.3601 26.6952C67.5684 26.6952 66.8794 26.2069 66.5721 25.4882C65.9389 24.007 65.1061 22.6338 64.1135 21.3993V10.8289C64.1135 9.80999 63.2986 8.98396 62.2935 8.98396C62.1086 8.98396 60.4297 9.01175 58.4626 9.97124C57.8094 10.29 57.0772 10.7377 56.3483 11.3611V9.84492C56.3483 8.82603 55.5335 8 54.5284 8C54.3057 8 49.6958 8.05855 46.7272 12.4482C42.8144 9.76301 37.4038 10.7607 34.7166 14.8877H33.3368C24.2247 14.8877 16.7171 21.9138 15.8991 30.8549C12.2309 31.697 10 34.4361 10 38.3797C10 39.3986 10.8149 40.2246 11.82 40.2246C12.8251 40.2246 13.6399 39.3986 13.6399 38.3797C13.6399 36.5778 14.2879 35.3287 15.9621 34.6801C16.4883 38.8959 18.51 42.8103 21.6894 45.658C23.4598 47.2453 24.5597 49.4876 24.5597 52.1551C24.5597 53.174 25.3745 54 26.3796 54H34.1448C35.1499 54 35.9648 53.174 35.9648 52.1551C35.9648 50.9986 36.8865 50.0642 38.0274 50.0642H45.7926C46.9299 50.0642 47.8552 51.0021 47.8552 52.1551C47.8552 53.174 48.67 54 49.6751 54H57.4403C58.4454 54 59.2603 53.174 59.2603 52.1551V47.7465C62.9078 45.6316 65.6647 42.2645 67.0375 38.2567H68.3601C70.3671 38.2567 72 36.6014 72 34.5668V30.385C72 28.3504 70.3671 26.6952 68.3601 26.6952ZM60.4736 13.1028V17.9926C59.4265 17.2599 58.3001 16.6417 57.1139 16.156C58.0847 14.4069 59.4056 13.5362 60.4736 13.1028ZM41.91 14.6417C44.6529 14.6417 46.8845 16.904 46.8845 19.6845C46.8845 22.465 44.6529 24.7273 41.91 24.7273C39.1671 24.7273 36.9354 22.465 36.9354 19.6845C36.9354 16.904 39.1671 14.6417 41.91 14.6417ZM68.3601 34.5668H65.6872C64.8568 34.5668 64.1318 35.1366 63.9247 35.9518C62.9226 39.8967 60.2685 43.1866 56.6429 44.978C56.0173 45.2871 55.6204 45.9308 55.6204 46.6363V50.3102H51.1974C50.4363 48.0244 48.301 46.3743 45.7926 46.3743H38.0274C35.4661 46.3743 33.3614 48.0687 32.6198 50.3102H28.0792C27.6762 47.4812 26.2755 44.8438 24.1001 42.8936C21.1537 40.2544 19.4638 36.4578 19.4638 32.4772C19.4638 24.872 25.6156 18.5775 33.3671 18.5775C33.0858 20.8203 33.6614 22.9826 34.8836 24.7273H33.1742C32.1691 24.7273 31.3542 25.5533 31.3542 26.5722C31.3542 27.5911 32.1691 28.4171 33.1742 28.4171H50.6458C51.6509 28.4171 52.4658 27.5911 52.4658 26.5722C52.4658 25.5533 51.6509 24.7273 50.6458 24.7273H48.9364C50.9349 21.8742 51.0331 18.1514 49.3144 15.2281C50.2858 13.4403 51.6266 12.5554 52.7085 12.1179V17.2307C52.7085 18.0728 53.271 18.8079 54.0754 19.0175C58.1369 20.0757 61.5601 23.0431 63.2324 26.9552C64.1066 29.0004 66.0926 30.385 68.3601 30.385V34.5668Z"
          fill={props.pigfill}
        />
        <path
          d="M57.4406 24.7274C56.4355 24.7274 55.6206 25.5534 55.6206 26.5723V28.5403C55.6206 29.5591 56.4355 30.3852 57.4406 30.3852C58.4457 30.3852 59.2605 29.5591 59.2605 28.5403V26.5723C59.2605 25.5534 58.4457 24.7274 57.4406 24.7274Z"
          fill={props.pigfill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.8288 2.82828C14.5164 3.1407 14.5164 3.64723 14.8288 3.95965L16.5259 5.65676L14.8287 7.35397C14.5163 7.66639 14.5163 8.17292 14.8287 8.48534C15.1411 8.79776 15.6477 8.79776 15.9601 8.48534L17.6573 6.78813L19.3543 8.48513C19.6667 8.79755 20.1733 8.79755 20.4857 8.48513C20.7981 8.17271 20.7981 7.66618 20.4857 7.35376L18.7887 5.65676L20.4856 3.95986C20.798 3.64744 20.798 3.14091 20.4856 2.82849C20.1732 2.51607 19.6666 2.51607 19.3542 2.82849L17.6573 4.52539L15.9602 2.82828C15.6478 2.51586 15.1412 2.51586 14.8288 2.82828Z"
          fill={props.fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M73.7677 15.8891C73.5724 16.0843 73.5724 16.4009 73.7677 16.5962L74.8283 17.6568L73.7678 18.7174C73.5725 18.9127 73.5725 19.2292 73.7678 19.4245C73.963 19.6198 74.2796 19.6198 74.4749 19.4245L75.5354 18.364L76.5961 19.4246C76.7913 19.6199 77.1079 19.6199 77.3032 19.4246C77.4985 19.2294 77.4985 18.9128 77.3032 18.7175L76.2425 17.6568L77.3033 16.5961C77.4986 16.4008 77.4986 16.0842 77.3033 15.889C77.108 15.6937 76.7915 15.6937 76.5962 15.889L75.5354 16.9497L74.4748 15.8891C74.2795 15.6938 73.9629 15.6938 73.7677 15.8891Z"
          fill={props.fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.85378 46.657C7.53858 46.657 7.28306 46.9125 7.28306 47.2277V48.9398L5.57071 48.9398C5.2555 48.9398 4.99998 49.1954 4.99998 49.5106C4.99998 49.8258 5.2555 50.0813 5.57071 50.0813H7.28306V51.7935C7.28306 52.1087 7.53858 52.3642 7.85378 52.3642C8.16899 52.3642 8.42451 52.1087 8.42451 51.7935V50.0813H10.1365C10.4517 50.0813 10.7072 49.8258 10.7072 49.5106C10.7072 49.1954 10.4517 48.9398 10.1365 48.9398L8.42451 48.9398V47.2277C8.42451 46.9125 8.16899 46.657 7.85378 46.657Z"
          fill={props.fill}
        />
        <circle cx="1.5" cy="24.157" r="1.5" fill={props.fill} />
        <circle cx="75.5" cy="47.157" r="1.5" fill={props.fill} />
      </svg>
    </div>
  );
};
export const SelectArrow = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.22176 0.778245C0.831231 1.16877 0.831231 1.80193 1.22176 2.19246L8.29282 9.26353C8.68335 9.65405 9.31651 9.65405 9.70704 9.26353L16.7781 2.19246C17.1686 1.80194 17.1686 1.16877 16.7781 0.778245C16.3876 0.387721 15.7544 0.387721 15.3639 0.778245L8.99993 7.14221L2.63597 0.778245C2.24544 0.387721 1.61228 0.387721 1.22176 0.778245Z"
          fill={props.fill}
        />
      </svg>
    </div>
  );
};

// footer
export const FaceBooksvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM17.6677 16.7028V25.4077H14.066V16.7031H12.2667V13.7034H14.066V11.9024C14.066 9.4552 15.0821 8 17.9688 8H20.372V11.0001H18.8698C17.7461 11.0001 17.6718 11.4193 17.6718 12.2017L17.6677 13.7031H20.3891L20.0706 16.7028H17.6677Z"
          fill="#BDBDBD"
        />
      </svg>
    </div>
  );
};
export const Youtubesvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM22.6677 10.4996C23.4021 10.7011 23.9804 11.2948 24.1767 12.0488C24.5333 13.4154 24.5333 16.2667 24.5333 16.2667C24.5333 16.2667 24.5333 19.1179 24.1767 20.4845C23.9804 21.2385 23.4021 21.8323 22.6677 22.0339C21.3369 22.4 16 22.4 16 22.4C16 22.4 10.6631 22.4 9.33217 22.0339C8.59782 21.8323 8.01949 21.2385 7.82322 20.4845C7.46667 19.1179 7.46667 16.2667 7.46667 16.2667C7.46667 16.2667 7.46667 13.4154 7.82322 12.0488C8.01949 11.2948 8.59782 10.7011 9.33217 10.4996C10.6631 10.1333 16 10.1333 16 10.1333C16 10.1333 21.3369 10.1333 22.6677 10.4996Z"
          fill="#BDBDBD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3999 19.2V13.8667L18.6666 16.5334L14.3999 19.2Z"
          fill="#BDBDBD"
        />
      </svg>
    </div>
  );
};
export const Instagramsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51822C13.3924 7.4768 13.6833 7.46667 16.0008 7.46667H15.9981C18.3164 7.46667 18.6062 7.4768 19.5164 7.51822C20.4248 7.55982 21.0453 7.70365 21.5893 7.91467C22.1511 8.13245 22.6258 8.42401 23.1004 8.89868C23.5751 9.373 23.8667 9.84909 24.0853 10.4103C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8675 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8675 9.373 23.5753 8.89886 23.1006C8.42437 22.6263 8.13281 22.1502 7.91467 21.5889C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47698 18.6076 7.46667 18.3176 7.46667 16.0001C7.46667 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70294 10.9529 7.91449 10.4102C8.13316 9.84909 8.42472 9.373 8.89939 8.89868C9.37371 8.42419 9.8498 8.13263 10.4111 7.91467C10.9536 7.70365 11.5737 7.55982 12.4822 7.51822Z"
          fill={props.fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.2352 9.00448C15.3839 9.00425 15.5438 9.00432 15.7163 9.0044L16.0008 9.00448C18.2792 9.00448 18.5492 9.01266 19.449 9.05355C20.281 9.0916 20.7325 9.23062 21.0333 9.34742C21.4316 9.50209 21.7155 9.68698 22.014 9.98565C22.3126 10.2843 22.4975 10.5688 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9464 12.551C22.9873 13.4506 22.9962 13.7208 22.9962 15.9982C22.9962 18.2755 22.9873 18.5457 22.9464 19.4453C22.9084 20.2773 22.7694 20.7289 22.6526 21.0293C22.4979 21.4275 22.3126 21.7111 22.014 22.0096C21.7153 22.3083 21.4317 22.4932 21.0333 22.6478C20.7329 22.7652 20.281 22.9038 19.449 22.9419C18.5494 22.9828 18.2792 22.9917 16.0008 22.9917C13.7222 22.9917 13.4521 22.9828 12.5525 22.9419C11.7205 22.9035 11.269 22.7644 10.968 22.6476C10.5698 22.493 10.2853 22.3081 9.98665 22.0094C9.68798 21.7107 9.50309 21.427 9.34806 21.0286C9.23126 20.7282 9.09206 20.2766 9.05419 19.4446C9.0133 18.545 9.00513 18.2748 9.00513 15.996C9.00513 13.7172 9.0133 13.4484 9.05419 12.5489C9.09224 11.7169 9.23126 11.2653 9.34806 10.9645C9.50273 10.5663 9.68798 10.2818 9.98665 9.98316C10.2853 9.68449 10.5698 9.4996 10.968 9.34458C11.2688 9.22724 11.7205 9.08857 12.5525 9.05035C13.3397 9.01479 13.6448 9.00413 15.2352 9.00235V9.00448ZM20.5555 10.4214C19.9902 10.4214 19.5315 10.8795 19.5315 11.445C19.5315 12.0104 19.9902 12.469 20.5555 12.469C21.1209 12.469 21.5795 12.0104 21.5795 11.445C21.5795 10.8797 21.1209 10.421 20.5555 10.421V10.4214ZM11.6182 15.9999C11.6182 13.5798 13.5803 11.6177 16.0003 11.6176C18.4205 11.6176 20.3821 13.5798 20.3821 15.9999C20.3821 18.42 18.4206 20.3813 16.0005 20.3813C13.5804 20.3813 11.6182 18.42 11.6182 15.9999Z"
          fill={props.fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.0007 13.1557C17.5716 13.1557 18.8452 14.4292 18.8452 16.0002C18.8452 17.5711 17.5716 18.8447 16.0007 18.8447C14.4297 18.8447 13.1562 17.5711 13.1562 16.0002C13.1562 14.4292 14.4297 13.1557 16.0007 13.1557V13.1557Z"
          fill={props.fill}
        />
      </svg>
    </div>
  );
};

// search
export const SearchIconsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 18 18"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" />
      </svg>
    </div>
  );
};

// mypage
export const PointPigsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 19"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 8C13 7.45 13.45 7 14 7C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9C13.45 9 13 8.55 13 8ZM6 7H11V5H6V7ZM20 5.5V12.47L17.18 13.41L15.5 19H10V17H8V19H2.5C2.5 19 0 10.54 0 7.5C0 4.46 2.46 2 5.5 2H10.5C11.41 0.79 12.86 0 14.5 0C15.33 0 16 0.67 16 1.5C16 1.71 15.96 1.9 15.88 2.08C15.74 2.42 15.62 2.81 15.56 3.23L17.83 5.5H20ZM18 7.5H17L13.5 4C13.5 3.35 13.59 2.71 13.76 2.09C12.79 2.34 12 3.06 11.67 4H5.5C3.57 4 2 5.57 2 7.5C2 9.38 3.22 14.15 4.01 17H6V15H12V17H14.01L15.56 11.85L18 11.03V7.5Z" />
      </svg>
    </div>
  );
};
export const Cartsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 21 20"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" />
      </svg>
    </div>
  );
};
export const Profilesvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 20"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" />
      </svg>
    </div>
  );
};
export const AnswerArrow = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 15 17"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z" />
      </svg>
    </div>
  );
};
export const PagenationArrowsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 8 12"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" />
      </svg>
    </div>
  );
};
export const Heartsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 30 29"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.9998 28.025L12.8248 26.045C5.09976 19.04 -0.000244141 14.42 -0.000244141 8.75C-0.000244141 4.13 3.62976 0.5 8.24975 0.5C10.8598 0.5 13.3648 1.715 14.9998 3.635C16.6348 1.715 19.1398 0.5 21.7498 0.5C26.3698 0.5 29.9998 4.13 29.9998 8.75C29.9998 14.42 24.8998 19.04 17.1748 26.06L14.9998 28.025Z" />
      </svg>
    </div>
  );
};
export const Eurosvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 18 18"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 15.5C9.49 15.5 7.32 14.08 6.24 12H12V10H5.58C5.53 9.67 5.5 9.34 5.5 9C5.5 8.66 5.53 8.33 5.58 8H12V6H6.24C7.32 3.92 9.5 2.5 12 2.5C13.61 2.5 15.09 3.09 16.23 4.07L18 2.3C16.41 0.87 14.3 0 12 0C8.08 0 4.76 2.51 3.52 6H0V8H3.06C3.02 8.33 3 8.66 3 9C3 9.34 3.02 9.67 3.06 10H0V12H3.52C4.76 15.49 8.08 18 12 18C14.31 18 16.41 17.13 18 15.7L16.22 13.93C15.09 14.91 13.62 15.5 12 15.5Z" />
      </svg>
    </div>
  );
};
export const LinkIconsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 28 14"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.6666 0.333328H15.3333V2.99999H20.6666C22.8666 2.99999 24.6666 4.79999 24.6666 6.99999C24.6666 9.19999 22.8666 11 20.6666 11H15.3333V13.6667H20.6666C24.3466 13.6667 27.3333 10.68 27.3333 6.99999C27.3333 3.31999 24.3466 0.333328 20.6666 0.333328ZM12.6666 11H7.33329C5.13329 11 3.33329 9.19999 3.33329 6.99999C3.33329 4.79999 5.13329 2.99999 7.33329 2.99999H12.6666V0.333328H7.33329C3.65329 0.333328 0.666626 3.31999 0.666626 6.99999C0.666626 10.68 3.65329 13.6667 7.33329 13.6667H12.6666V11ZM8.66663 5.66666H19.3333V8.33333H8.66663V5.66666Z" />
      </svg>
    </div>
  );
};
export const Addresssvg = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 32 32"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2.66667C10.84 2.66667 6.66663 6.84001 6.66663 12C6.66663 19 16 29.3333 16 29.3333C16 29.3333 25.3333 19 25.3333 12C25.3333 6.84001 21.16 2.66667 16 2.66667ZM9.33329 12C9.33329 8.32001 12.32 5.33334 16 5.33334C19.68 5.33334 22.6666 8.32001 22.6666 12C22.6666 15.84 18.8266 21.5867 16 25.1733C13.2266 21.6133 9.33329 15.8 9.33329 12Z" />
        <path d="M16 15.3333C17.8409 15.3333 19.3333 13.841 19.3333 12C19.3333 10.1591 17.8409 8.66667 16 8.66667C14.159 8.66667 12.6666 10.1591 12.6666 12C12.6666 13.841 14.159 15.3333 16 15.3333Z" />
      </svg>
    </div>
  );
};
export const LikeIconsvg = (props) => {
  return (
    <div
      style={{
        transform: `${props.rotate}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 18"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.11 3.72L10.54 6.61C10.42 7.2 10.58 7.81 10.96 8.27C11.34 8.73 11.9 9 12.5 9H18V10.08L15.43 16H7.34C7.16 16 7 15.84 7 15.66V7.82L11.11 3.72ZM12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83V15.66C5 16.95 6.05 18 7.34 18H15.44C16.15 18 16.8 17.63 17.16 17.03L19.83 10.88C19.94 10.63 20 10.36 20 10.08V9C20 7.9 19.1 7 18 7H12.5L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0ZM2 7H0V18H2C2.55 18 3 17.55 3 17V8C3 7.45 2.55 7 2 7Z" />
      </svg>
    </div>
  );
};
export const Showsvg = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05292C17.289 3.48892 13.806 0.750916 9.998 0.750916H10.002C6.194 0.750916 2.711 3.48892 0.75 8.05292C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
export const Hidesvg = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.76057 11.3668C7.18557 10.7928 6.83557 10.0128 6.83557 9.1378C6.83557 7.3848 8.24757 5.9718 9.99957 5.9718C10.8666 5.9718 11.6646 6.3228 12.2296 6.8968"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.1047 9.69885C12.8727 10.9889 11.8567 12.0069 10.5677 12.2409"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.65451 14.4723C3.06751 13.2263 1.72351 11.4063 0.749512 9.13729C1.73351 6.85829 3.08651 5.02829 4.68351 3.77229C6.27051 2.51629 8.10151 1.83429 9.99951 1.83429C11.9085 1.83429 13.7385 2.52629 15.3355 3.79129"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4475 5.99078C18.1355 6.90478 18.7405 7.95978 19.2495 9.13678C17.2825 13.6938 13.8065 16.4388 9.99953 16.4388C9.13653 16.4388 8.28553 16.2988 7.46753 16.0258"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.8868 1.24957L2.11279 17.0236"
          stroke={props.stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

// write
export const CommentIconsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 20"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z" />
      </svg>
    </div>
  );
};
export const Pencilsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 19 18"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z" />
      </svg>
    </div>
  );
};
export const PencilFillsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 19 19"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
export const Questionsvg = (props) => {
  return (
    <div
      style={{
        margin: `${props.margin}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 20 20"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z" />
      </svg>
    </div>
  );
};
export const Closesvg = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 18 18"
        fill={props.fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.22208 1.22082C0.831557 1.61134 0.831557 2.24451 1.22208 2.63503L7.58604 8.99899L1.22105 15.364C0.830522 15.7545 0.830522 16.3877 1.22105 16.7782C1.61157 17.1687 2.24474 17.1687 2.63526 16.7782L9.00026 10.4132L15.3642 16.7772C15.7547 17.1677 16.3879 17.1677 16.7784 16.7772C17.169 16.3866 17.169 15.7535 16.7784 15.363L10.4145 8.99899L16.7774 2.63607C17.1679 2.24554 17.1679 1.61238 16.7774 1.22186C16.3869 0.831332 15.7537 0.831333 15.3632 1.22186L9.00026 7.58478L2.63629 1.22082C2.24577 0.830296 1.61261 0.830296 1.22208 1.22082Z"
        />
      </svg>
    </div>
  );
};
