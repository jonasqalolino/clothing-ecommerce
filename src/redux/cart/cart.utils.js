export const addItemToCart = (cartItems, cartItemToAdd) => {
	//  👇 if there's no equal value, this variable will be UNDEFINED then proceed to line 18
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	)

	if (existingCartItem) {
		// 👇 this will overwrite the existing object in cartItems array; returns new version
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem //  👈 then we dont need to update the quantity;
		)
	}

	//  👇 cloning existing items and adding new object item
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	)

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	)
}
