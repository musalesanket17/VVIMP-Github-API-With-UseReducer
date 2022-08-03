import React, { useReducer, useState } from "react";

const initValue = {
  isLoading: true,
  isError: false,
  data: [],
  token: ""
};

const gitReducer = (state, action) => {
  switch (action.type) {
    case "FEACHING_USER_LOADING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case "FEACHING_USER_SUCSESS": {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }

    case "FEACTING_USER_FAILED": {
      return {
        ...state,
        isLoading: true,
        isError: true
      };
    }

    default:
      return state;
  }
};

export const githubloading = { type: "FEACHING_USER_LOADING" };
export const githubsucsess = { type: "FEACHING_USER_SUCSESS" };
export const githubfailed = { type: "FEACTING_USER_FAILED" };

const fetchUser = (dispatch, query) => {
  // alert("hii")
  // console.log(query);
  dispatch(githubloading);
  fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ ...githubsucsess, payload: res.items });
      // console.log(res.items)
    })
    .catch((err) => {
      dispatch(githubfailed);
    });
};

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
