export const NotionButton = () => {
  return (
    <a
      href="https://thunder-slouch-7c4.notion.site/Calendar-Puzzle-Pentomino-Solver-1d117266fbd680dc92fec605b175fcd2"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed group right-0 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-white h-[40px] w-[40px] flex items-center rounded-l-full border-l border-y border-gray-200 shadow-sm transition-all duration-300 hover:w-auto hover:pr-4 hover:shadow-md">
        {/* Icon container - fixed width to ensure visibility */}
        <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
          <svg
            fill="#000000"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
          </svg>
        </div>

        {/* Text with hidden by default but visible on hover */}
        <div className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 whitespace-nowrap">
          <span className="text-sm text-gray-800">
            Curious how it works?{" "}
            <span className="underline text-blue-600">Read my journey →</span>
          </span>
        </div>
      </div>
    </a>
  );
};
