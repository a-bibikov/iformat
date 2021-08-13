const formatPrice = (price, currency, digits) => {
	let formatter = new Intl.NumberFormat("ru", {
		style: "currency",
		currency: currency,
		minimumFractionDigits: digits
	});

	return formatter.format(price);
}

export default formatPrice