import React from "react"
import reduce, { CountProps } from "./reduce"

class Base extends React.Component {
  componentWillMount() {
    const { increment } = this.props;
    increment();
  }
  
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    )
  }
}

Base.propTypes = CountProps

export default reduce(Base)
