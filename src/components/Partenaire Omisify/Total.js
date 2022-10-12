const initialValue = 0;
const Total = (props) => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    initialValue
  );
  return <p>{total}</p>;
};

export default Total;
