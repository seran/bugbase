import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Empty({ children }) {

	return(
		<div className="container">
			{props.children}
		</div>
		)
	}

AppRoute.propTypes = {
  children: PropTypes.any
}

export default Empty;