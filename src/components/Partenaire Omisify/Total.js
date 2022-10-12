const Total = (props) => {
  let total2 = 0;
  for (let i = 0; i < props.parts.length; i++) {
    total2 += props.parts[i].exercises;
  }
  return total2;
};

export default Total;
