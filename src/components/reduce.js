import PropTypes from "prop-types"
import { connect } from "react-redux"

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export const CountProps = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)