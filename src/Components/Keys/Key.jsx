const Key = ({ name, note }) => {
  return (
    <div className="key">
      <svg
        width="38"
        height="3"
        viewBox="0 0 38 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="38" height="3" fill="white" />
        <rect width="38" height="3" fill="url(#paint0_linear_0_37)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_37"
            x1="-4.8169"
            y1="-0.566667"
            x2="0.725275"
            y2="15.9299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AE67FA" />
            <stop offset="0.973958" stop-color="#F49867" />
          </linearGradient>
        </defs>
      </svg>

      <h3>{name}</h3>
      <p>{note}</p>
    </div>
  );
};

export default Key;
