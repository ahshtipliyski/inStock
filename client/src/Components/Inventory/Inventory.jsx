import React, { Component } from "react";
import "./Inventory.scss";
import Modal from "react-modal";
import Switch from "react-switch";
import search from "../../Assets/Icons/Icon-search.svg";
import InventoryItem from "../InventoryItem/InventoryItem";
import plus from "../../Assets/Icons/Icon-add.svg";


Modal.setAppElement("#root");
class Inventory extends Component {
	state = {
		isClicked: false,
		isOpen: false,

		product: "",
		lastOrdered: "",
		city: "",
		country: "Canada",
		quantity: "",
		checked: false,
		itemDescription: "",
	};

	// handleSubmit = (event) => {
	//   event.preventDefault();

	//   if (
	//     !this.state.product ||
	//     !this.state.lastOrdered ||
	//     !this.state.city ||
	//     !this.state.country ||
	//     !this.state.quantity ||
	//    ) {
	// alert("please fill out form")

	//    } else {

	//       //axios POST goes here
	//    }
	// }
	

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		});
	};

	handleSwitchChange = (checked) => {
		this.setState({ checked });
	};

	render() {
		const inventory = this.props.inventory;
    const { handleUpdateInventory } = this.props
		//console.log(inventory)
		return (
			<>
				<div className='floating__button'>
					{!this.state.isOpen && (
						<button
							className='AddNew'
							onClick={() => this.setState({ isOpen: true })}
						>
							<img src={plus} alt='' />
						</button>
					)}

					<Modal
						className='modal__content'
						isOpen={this.state.isOpen}
						contentLabel='Test modal'
					>
						<h1>Create New</h1>
						<div className='modal'>
							<form className='modal__form' onSubmit={this.handleSubmit}>
								<div className='modal__inputcontainer modal--right'>
									<label htmlFor='address'>PRODUCT</label>
									<input
										name='product'
										value={this.state.product}
										onChange={this.handleChange}
										type='text'
										placeholder='Item Name'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='location'>
										LAST ORDERED
									</label>
									<input
										type='text'
										value={this.state.lastOrdered}
										onChange={this.handleChange}
										placeholder='yyyy-mm-dd'
										className='modal__select'
										name='lastOrdered'
									></input>
								</div>

								<div className='modal__inputcontainer modal--right'>
									<label className='modal__label' htmlFor='contactname'>
										CITY
									</label>
									<input
										name='city'
										value={this.state.city}
										onChange={this.handleChange}
										type='text'
										placeholder='City'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='position'>
										COUNTRY
									</label>
									<select
										type='text'
										className='modal__select'
										name='country'
										value='Canada'
									>
										<option value='Canada'>Canada</option>
									</select>
								</div>
								<div className='modal__inputcontainer modal--right'>
									<label className='modal__label' htmlFor='phone'>
										QUANTITY
									</label>
									<input
										name='quantity'
										value={this.state.quantity}
										onChange={this.handleChange}
										type='text'
										placeholder='0'
									/>
								</div>

								<div className='modal__inputcontainer'>
									<label className='modal__label' htmlFor='email'>
										STATUS
									</label>
									<div className='switch__container'>
										<label>
											<span className='switch__label'>In Stock</span>
											<Switch
												onChange={this.handleSwitchChange}
												checked={this.state.checked}
											/>
										</label>
									</div>
								</div>

								<div className='modal__inputcontainer description__input'>
									<label className='modal__label'>ITEM DESCRIPTION</label>
									<textarea
										type='text'
										value={this.state.itemDescription}
										onChange={this.handleChange}
										name='itemDescription'
										placeholder='(Optional)'
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

				<div className='inventory'>
					<div className='inventory__container'>
						<div className='inventory__header'>
							<h1 className='inventory__title'>Inventory</h1>
						</div>
						<div className='inventory__search'>
							<img
								className='inventory__search--icon'
								src={search}
								alt='Search Icon'
							></img>
							<input
								className='inventory__search--input'
								type='search'
								placeholder='Search Location'
							></input>
						</div>
					</div>
					<div className='inventory__headings'>
						<h5 className='inventory__headings--text'>ITEM</h5>
						<h5 className='inventory__headings--text'>LAST ORDERED</h5>
						<h5 className='inventory__headings--text'>LOCATION</h5>
						<h5 className='inventory__headings--text'>QUANTITY</h5>
						<h5 className='inventory__headings--text'>STATUS</h5>
					</div>
				</div>
				<InventoryItem inventory={this.props.inventory} handleUpdateInventory={this.handleUpdateInventory} />
			</>
		);
	}
}

export default Inventory;
