import React, { useEffect, useRef, useState } from 'react';
import Brendyol from '../../assets/images/brendyol.png';
import './header.scss';
import { VscAccount } from 'react-icons/vsc';
import { TfiHeart } from 'react-icons/tfi';
import { BsBasket } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MegaMenu from './MegaMenu';
import Account from './Account';

function Header(props) {
	const [categoryName, setCategoryName] = useState([]);
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const products = useSelector((state) => state.product);
	const timerRef = useRef();
	console.log(props.user);

	useEffect(() => {
		axios
			.get('https://brendyol-fashion-backend.vercel.app/api/categories')
			.then((res) => setCategoryName(res.data));
	}, []);

	function handleMouseEnter() {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setShowMegaMenu(true);
		}, 600);
	}

	function handleMouseLeave() {
		clearTimeout(timerRef.current);
		setShowMegaMenu(false);
	}

	const activeLink = 'activeLink';
	return (
		<div className='header'>
			<div className='header-section'>
				<div className='header-section-logo'>
					<Link to='/'>
						<img className='header-section-logo-img' src={Brendyol} alt='' />
					</Link>
				</div>
				<div className='header-section-icons'>
					{props.user ? (
						<p className='hello-user'>Welcome {props.user.userName}</p>
					) : null}
					{props.user == null ? <Account /> : <Account user={props.user} />}
					<Link className='icons' to='favorites'>
						<TfiHeart />
					</Link>
					<Link className='icons' to='basket'>
						<BsBasket />
						{products?.length ? (
							<span className='basket-count'>{products?.length}</span>
						) : null}
					</Link>
				</div>
			</div>
			<div className='category-names' onMouseLeave={handleMouseLeave}>
				<ul className='category-names-ul'>
					{categoryName &&
						categoryName.map((category, i) => (
							<li key={i} onMouseEnter={handleMouseEnter}>
								<NavLink
									to={`category/${category.name}`}
									className={({ isActive }) => (isActive ? activeLink : '')}
									onClick={handleMouseLeave}
								>
									{category.name}
								</NavLink>
							</li>
						))}
				</ul>
				{showMegaMenu && (
					<MegaMenu
						handleMouseLeave={handleMouseLeave}
						categoryName={categoryName}
					/>
				)}
			</div>
		</div>
	);
}

export default Header;
