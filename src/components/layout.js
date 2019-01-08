import React from "react"
import { Link } from "gatsby"
import reduce, { CountProps } from "./reduce"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = CountProps

const ConnectedCounter = reduce(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
          <li>
            <Link to="/a/">a</Link>
          </li>
          <li>
            <Link to="/b/">b</Link>
          </li>
          <li>
            <Link to="/c/">c</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
