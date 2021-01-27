import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Basic({ children }) {
	const [showMenu, setShowMenu] = useState(false)

	const handleMenuExpansion = () => {
		if (showMenu === true) {
			setShowMenu(false)
		} else {
			setShowMenu(true)
		}
	}

	return(
			<>
			<nav className="navbar is-black" role="navigation" aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item"><h4 className=""><strong>BugBase</strong></h4></Link>

						<a role="button" className={(showMenu === true) ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbar-main" onClick={(e) => handleMenuExpansion(e)}>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

				<div id="navbar-main" className={(showMenu === true) ? "navbar-menu is-active" : "navbar-menu"}>
					<div className="navbar-start">
	
					</div>

					<div className="navbar-end">
						<Link to="/" className="navbar-item">Home</Link>
						<Link to="/login" className="navbar-item">Login</Link>
					</div>
				</div>
				</div>
			</nav>

			<div className="container">
			<div style={{ marginTop: 10 }}>
			{children}
			</div>
			</div>
			</>
		)
	}

Basic.propTypes = {
  children: PropTypes.any
}

export default Basic;