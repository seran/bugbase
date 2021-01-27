import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
	return <Route {...rest} render={props => (
		<Layout {...props}>
			<Component {...props} />
		</Layout>
		)}
		/>
}

AppRoute.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
}

export default AppRoute;