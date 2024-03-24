export const Button = ({ children, method }) => {
  return (
    <>
      <button
        className="mt-6 w-[156px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
        onClick={method}
      >
        {children}
      </button>
    </>
  );
};
