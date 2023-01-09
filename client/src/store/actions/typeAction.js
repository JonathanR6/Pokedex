export const GET_TYPES = "GET_TYPES";

const {REACT_APP_API_URL} = process.env

const typesResults = (value) => {
  return {
    type: GET_TYPES,
    payload: value,
  };
};

export const allTypes = () => (dispatch) => {
  fetch(`${REACT_APP_API_URL}/types`)
    .then((r) => r.json())
    .then((r) => dispatch(typesResults(r)))
    .catch((err) =>
      console.log("hubo un error al hacer la peticion de los tipos")
    );
};
