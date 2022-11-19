
const Btn = (props) => {
  return (
    <button type="button" className={`btn btn-${props.color}`}>
      Click Me
    </button>
  );
};

export default Btn;
