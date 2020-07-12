import React from "react";
//import { Link } from 'react-router-dom';
import "../Locations/Locations.scss";
import search from "../../Assets/Icons/Icon-search.svg";
import arrow from "../../Assets/Icons/Icon-arrow-right.svg";
import plus from "../../Assets/Icons/Icon-add.svg";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default class Locations extends React.Component {
	constructor() {
		super();
		this.state = {
			isClicked: false,
			isOpen: false,

			name: "",
			address: "",
			location: "Toronto",
			contactname: "",
			position: "",
			phone: "",
			email: "",
			description: "",
		};
	}

	render() {
		const warehouse = this.props.warehouse;

		const handleSubmit = (event) => {
			event.preventDefault();

			if (
				!this.state.name ||
				!this.state.address ||
				!this.state.location ||
				!this.state.contactname ||
				!this.state.position ||
				!this.state.phone ||
				!this.state.email ||
				!this.state.description
			) {
				console.log("please fill out entire form");
			} else {
				this.setState({ isOpen: false });
				console.log("submitted successfully");
				console.log(
					this.state.name,
					this.state.address,
					this.state.location,
					this.state.contactname,
					this.state.position,
					this.state.phone,
					this.state.email,
					this.state.description
				);
			}
		};

		const handleChange = (e) => {
			const target = e.target;
			const value = target.value;
			const name = target.name;

			this.setState({
				[name]: value,
			});
		};

		// function handleClick() {
		//  this.setState({
		//      isClicked: true,
		//  });
		// }

		// console.log(warehouse);

		// console.log(name)
		//console.log(warehouse)

		// console.log(name)
		return (
			<>
				<div className='floating__button'>
					<button
						className='AddNew'
						onClick={() => this.setState({ isOpen: true })}
					>
						<img src={plus} alt='' />
						{this.state.isClicked}
					</button>

					<Modal
						className='modal__content'
						isOpen={this.state.isOpen}
						contentLabel='Test modal'
					>
						<h1>Add New</h1>
						<div className='modal'>
							<form className='modal__form' onSubmit={handleSubmit}>
								<div className='modal__inputcontainer modal--warehouse'>
									<label className='modal__label' htmlFor='name'>
										WAREHOUSE
									</label>
									<input
										value={this.state.name}
										onChange={handleChange}
										className='warehouse__input'
										name='name'
										type='text'
										placeholder='Name & ID'
									/>
								</div>

								<div className='modal__inputcontainer modal--hidden'>
									<input />
								</div>

								<div className='modal__inputcontainer modal--right'>
									<label htmlFor='address'>ADDRESS</label>
									<input
										name='address'
										value={this.state.address}
										onChange={handleChange}
										type='address'
										placeholder='Enter Address'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='location'>
										LOCATION
									</label>
									<select
										type='text'
										className='modal__select'
										name='location'
										value='Toronto'
									>
										<option value='Toronto'>Toronto, CAN</option>
									</select>
								</div>

								<div className='modal__inputcontainer modal--right'>
									<label className='modal__label' htmlFor='contactname'>
										CONTACT NAME
									</label>
									<input
										name='contactname'
										value={this.state.contactname}
										onChange={handleChange}
										type='text'
										placeholder='Enter Name'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='position'>
										POSITION
									</label>
									<input
										name='position'
										value={this.state.position}
										onChange={handleChange}
										type='text'
										placeholder='Enter Position'
									/>
								</div>
								<div className='modal__inputcontainer modal--right'>
									<label className='modal__label' htmlFor='phone'>
										PHONE NUMBER
									</label>
									<input
										name='phone'
										value={this.state.phone}
										onChange={handleChange}
										type='phone'
										placeholder='(000) - 000 - 0000'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='email'>
										EMAIL
									</label>
									<input
										name='email'
										value={this.state.email}
										onChange={handleChange}
										type='email'
										placeholder='email@instock.com'
									/>
								</div>

								<div className='modal__inputcontainer description__input'>
									<label className='modal__label'>CATEGORIES</label>
									<textarea
										type='text'
										value={this.state.description}
										onChange={handleChange}
										name='description'
										placeholder='Use commas to separate each category'
									/>
								</div>
								<div className='modal__buttons'>
									<button className='modal__save' type='submit'>
										SAVE
									</button>
									<button
										className='modal__cancel'
										onClick={() => this.setState({ isOpen: false })}
									>
										CANCEL
									</button>
								</div>
							</form>
						</div>
					</Modal>
				</div>

				<div className='location'>
					<div className='location__container'>
						<div className='location__header'>
							<h1 className='location__title'>Locations</h1>
						</div>
						<div className='location__search'>
							<img
								className='location__search--icon'
								src={search}
								alt='Search Icon'
							></img>
							<input
								className='location__search--input'
								type='search'
								placeholder='Search Location'
							></input>
						</div>
					</div>
					<div className='location__headings'>
						<h5 className='location__headings--text'>Warehouse</h5>
						<h5 className='location__headings--text'>Contact</h5>
						<h5 className='location__headings--text'>Contact Information</h5>
						<h5 className='location__headings--text'>Categories</h5>
					</div>
				</div>
				{warehouse.map((warehouse) => {
					return (
						<div className='warehouse' key={uuidv4()}>
							<div className='warehouse__container'>
								<div className='warehouse__name'>
									<h2 className='warehouse__name--title'>{warehouse.name}</h2>
									<p className='warehouse__name--address'>
										{warehouse.address.street}
									</p>
									<p className='warehouse__name--address'>
										{warehouse.address.location}
									</p>
								</div>
								<div className='warehouse__details'>
									<div className='warehouse__contact'>
										<p>{warehouse.contact.name}</p>
										<p className='warehouse__contact--position'>
											{warehouse.contact.position}
										</p>
									</div>
									<div className='warehouse__contactInfo'>
										<p>{warehouse.contact.phone}</p>
										<p>{warehouse.contact.email}</p>
									</div>
									<div className='warehouse__categories'>
										<p>{warehouse.inventoryCategories}</p>
									</div>
								</div>
							</div>
							<div className='warehouse__arrow'>
								{/* <Link to={'/locations/id/${id}'}> */}
								<img
									className='warehouse__arrow--right'
									src={arrow}
									alt='right arrow icon'
								></img>
								{/* </Link> */}
							</div>
						</div>
					);
				})}
			</>
		);
	}
}
