import React, { useState } from "react";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="무슨 생각해?"
          maxLength={100}
        />
        <input type="submit" value="future" />
      </form>
    </>
  );
};

export default Home;
