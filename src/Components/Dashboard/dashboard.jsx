import React, { useContext, useEffect, useState } from 'react';
import './dashboard.scss';
import { useForm } from 'react-hook-form';
import AuthContext from '../../context/authContext';
import DashboardItem from './dashboard-item';

const keyGenerator = () => {
	let array = new Uint32Array(8);
	window.crypto.getRandomValues(array);
	let str = '';
	for (let i = 0; i < array.length; i++) {
		str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-2);
	}
	return str;
};

export default function Dashboard() {
	const { user } = useContext(AuthContext);
	const [items, setItems] = useState([]);
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			name: '',
			password: '',
		},
	});

	useEffect(() => {
		const savedItems = localStorage.getItem(`${user}-items`);
		if (savedItems) {
			setItems(JSON.parse(savedItems));
		}
	}, [user]);

	const updateStorage = (items) => {
		localStorage.setItem(`${user}-items`, JSON.stringify(items));
	};

	function addNewItem(data) {
		const newItem = items.every((item) => item.name !== data.name);

		if (!newItem) {
			alert('Item already exists');
			return;
		}

		if (data.name === '' || data.password === '') {
			alert('Please fill in all fields');
			return;
		}

		const item = {
			name: data.name,
			password: data.password,
			id: keyGenerator(),
		};

		const newItems = [...items, item];

		setItems(newItems);
		updateStorage(newItems);
		reset();
	}

	const handleEdit = (item) => {

    const uniqueName = items.every((i) => i.name !== item.name);

    if (!uniqueName) {
      alert('Item already exists');
      return;
    }

		const currentItems = [...items];

		const index = currentItems.findIndex((i) => i.id === item.id);

		currentItems[index].name = item.name ? item.name : currentItems[index].name;
    currentItems[index].password = item.password ? item.password : currentItems[index].password;

		setItems(currentItems);
		updateStorage(currentItems);
	};

	const handleDelete = (item) => {
		const currentItems = items.filter((i) => i.id !== item.id);

		setItems(currentItems);
		updateStorage(currentItems);
	};

	return (
		<div className='dashboard-wrapp'>
			<div className='form-wrapp'>
				<form
					action='submit'
					className='form'
					onSubmit={handleSubmit(addNewItem)}
				>
					<input
						type='text'
						className='form__input'
						name='name'
						placeholder='Enter name of your tab'
						{...register('name')}
					/>
					<input
						type='password'
						className='form__input'
						name='password'
						placeholder='Enter password of your tab'
						{...register('password')}
					/>
					<input
						type='submit'
						value='Add new item'
						className='form__button--add'
					/>
				</form>
			</div>
			<div className='items-container'>
				{items.length > 0 ? (
					items.map((item) => (
						<DashboardItem
							item={item}
							key={item.id}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))
				) : (
					<p>No items yet</p>
				)}
			</div>
		</div>
	);
}
