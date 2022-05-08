import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function DashboardItem({ item, onEdit, onDelete }) {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			name: '',
			password: '',
		},
	});

	const [showPass, setShowPass] = useState(false);

	const submit = (data) => {
		onEdit({ ...item, ...data });
	};

	return (
		<div className='container' id={item.id}>
			<p>{item.name}</p>
			<p style={{cursor: 'pointer'}} onClick={() => setShowPass(!showPass)}>
				{showPass ? item.password : '********'}
			</p>
			<form onSubmit={handleSubmit(submit)}>
				<input type='text' placeholder='Edit name' {...register('name')} />
				<input
					type='text'
					placeholder='Edit password'
					{...register('password')}
				/>
				<button type='submit'>Save</button>
			</form>
			<button onClick={() => onDelete(item)}>Delete</button>
		</div>
	);
}
