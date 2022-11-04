const { createStore } = require("redux");
const { default: userReducer } = require("./reducer");

const store = createStore(userReducer);


export default store
