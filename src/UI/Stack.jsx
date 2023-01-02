import PropTypes from "prop-types";

const Stack = ({ children }) => {
	return <div className="stack">{children}</div>;
};

export default Stack;

Stack.propTypes = {
	children: PropTypes.node.isRequired,
};
