function camelToSnake(data: any): any {
	if (typeof data === "object" && data !== null) {
		if (Array.isArray(data)) {
			return data.map((item) => camelToSnake(item));
		} else {
			const snakeData: { [key: string]: any } = {};
			for (const camelKey in data) {
				if (Object.prototype.hasOwnProperty.call(data, camelKey)) {
					const snakeKey = camelKey
						.replace(/([A-Z])/g, "_$1")
						.toLowerCase();
					snakeData[snakeKey] = camelToSnake(data[camelKey]);
				}
			}
			return snakeData;
		}
	} else {
		return data;
	}
}

// Sample data object
const data = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	address: {
		streetAddress: "123 Main St",
		city: "Anytown",
		state: "CA",
		postalCode: "12345",
	},
	phoneNumbers: [
		{
			type: "home",
			number: "555-555-1234",
		},
		{
			type: "work",
			number: "555-555-5678",
		},
	],
};

// Convert camelCase keys to snake_case keys
const snakeData = camelToSnake(data);

// Print the original and converted data objects
console.log("Original data:", data);
console.log("Converted data:", snakeData);
