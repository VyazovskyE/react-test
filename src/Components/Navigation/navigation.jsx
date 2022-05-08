import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default function Navigation() {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className='nav'>
			{user ? (
				<button onClick={logout}>Logout</button>
			) : (
				<>
					<Link to='../login'>Have account? Please Log In</Link>
					<Link to='../SignIn'>Don't have an accout? Please Sign In</Link>
				</>
			)}
		</nav>
	);
}
