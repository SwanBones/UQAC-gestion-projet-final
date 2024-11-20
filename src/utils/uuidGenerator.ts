const generateUUID = () => {
	// Generate a random UUID (v4)
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0; // Random number (0-15)
		const v = c === "x" ? r : (r & 0x3) | 0x8; // Version-specific bit manipulations
		return v.toString(16); // Convert to hex
	});
};
export default generateUUID;
