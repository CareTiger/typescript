function snakeToCamel(data: any): any {
	if (typeof data === "object" && data !== null) {
		if (Array.isArray(data)) {
			return data.map((item) => snakeToCamel(item));
		} else {
			const camelData: { [key: string]: any } = {};
			for (const snakeKey in data) {
				if (Object.prototype.hasOwnProperty.call(data, snakeKey)) {
					const camelKey = snakeKey.replace(
						/_([a-z])/g,
						(match, p1) => p1.toUpperCase()
					);
					camelData[camelKey] = snakeToCamel(data[snakeKey]);
				}
			}
			return camelData;
		}
	} else {
		return data;
	}
}

// Sample data object
const sampleData = {
	first_name: "John",
	last_name: "Doe",
	age: 30,
	address: {
		street_address: "123 Main St",
		city: "Anytown",
		state: "CA",
		postal_code: "12345",
	},
	phone_numbers: [
		{ type: "home", number: "555-555-1234" },
		{ type: "work", number: "555-555-5678" },
	],
};

// Convert camelCase keys to snake_case keys
const convertedData = snakeToCamel(sampleData);

// Print the original and converted data objects
console.log("Original data:", data);
console.log("Converted data:", convertedData);
