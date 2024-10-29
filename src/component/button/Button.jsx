const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, variant } = props;
  return (
    <>
      <button className={`${variant} text-white font-bold py-1 px-4 lg:py-2 lg:px-6 bg-blue-500 rounded-3xl font-light mt-6 `}>{children}</button>
    </>
  );
};

export default Button;
