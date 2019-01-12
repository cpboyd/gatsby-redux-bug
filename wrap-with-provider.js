import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/state/createStore"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
    // Use store per-page for rendering:
    const store = createStore();
    return (<Provider store={store}>{element}</Provider>);
}
