import React, { useReducer, useState } from "react";
import { fetchUser } from "../reducer/github/action";
import { gitReducer } from "../reducer/github/reducer";

const initValue = {
  isLoading: true,
  isError: false,
  data: [],
  token: ""
};

// console.log(gitReducer)

export default function GitRe() {
  const [state, dispatch] = useReducer(gitReducer, initValue);
  const [text, setText] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Type here!"
        type="text"
      />
      <button
        onClick={() => {
          fetchUser(dispatch, text);
        }}
      >
        Serch
      </button>
      <div>
        {/* {console.log(state.data)} */}
        {state.data.map((el) => (
          <h1 key={el.login}> {el.login}</h1>
        ))}
      </div>
    </>
  );
}
