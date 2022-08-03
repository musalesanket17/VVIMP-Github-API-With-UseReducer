export const githubloading = { type: "FEACHING_USER_LOADING" };
export const githubsucsess = { type: "FEACHING_USER_SUCSESS" };
export const githubfailed = { type: "FEACTING_USER_FAILED" };

export const fetchUser = (dispatch, query) => {
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
