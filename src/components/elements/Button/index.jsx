const Button = (props) => {
  const { classname, children, path } = props;
  return (
    <button href={path} className={classname}>
      {children}
    </button>
  );
};

export default Button;
