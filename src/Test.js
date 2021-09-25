import React from "react";

const Test = () => {
  var name = "Hamza Abdous";
  var message = "this is my message";
  return (
    <>
      <Person name={name} />
      <Message message={message} />
    </>
  );
};
const Person = (props) => {
  return <h2>{props.name}</h2>;
};

const Message = (props) => {
  return <p>{props.message}</p>;
};
export default Test;
