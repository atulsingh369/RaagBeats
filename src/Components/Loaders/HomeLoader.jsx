import "./homeloader.css";

const HomeLoader = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        height="128px"
        width="128px"
        className="pl">
        <circle
          strokeDashoffset={-376.4}
          strokeDasharray="377 377"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={8}
          stroke="hsl(101, 96%, 45%)"
          fill="none"
          r={60}
          cy={64}
          cx={64}
          className="pl__ring1"
        />
        <circle
          strokeDashoffset={-329.3}
          strokeDasharray="329.9 329.9"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={7}
          stroke="hsl(109, 84%, 55%)"
          fill="none"
          r={52.5}
          cy={64}
          cx={64}
          className="pl__ring2"
        />
        <circle
          strokeDashoffset={-288.6}
          strokeDasharray="289 289"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={6}
          stroke="hsl(120, 84%, 66%)"
          fill="none"
          r={46}
          cy={64}
          cx={64}
          className="pl__ring3"
        />
        <circle
          strokeDashoffset={-254}
          strokeDasharray="254.5 254.5"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={5}
          stroke="hsl(120, 88%, 80%)"
          fill="none"
          r={40.5}
          cy={64}
          cx={64}
          className="pl__ring4"
        />
        <circle
          strokeDashoffset={-225.8}
          strokeDasharray="226.2 226.2"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={4}
          stroke="hsl(120, 86%, 92%)"
          fill="none"
          r={36}
          cy={64}
          cx={64}
          className="pl__ring5"
        />
        <circle
          strokeDashoffset={-203.9}
          strokeDasharray="204.2 204.2"
          strokeLinecap="round"
          transform="rotate(-90 64 64)"
          strokeWidth={3}
          stroke="hsl(0, 0%, 100%)"
          fill="none"
          r={32.5}
          cy={64}
          cx={64}
          className="pl__ring6"
        />
      </svg>
    </>
  );
};

export default HomeLoader;
