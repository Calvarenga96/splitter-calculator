const bill = document.querySelector("#bill");
const custom = document.querySelector("#custom");
const numberOfPeople = document.querySelector("#people");

// I capture the value of the data entered by the user to make the calculations and be able to update while in real time
const billValue = bill.addEventListener("input", (e) => {
	return Number(e.target.value);
});

const customValue = custom.addEventListener("input", (e) => {
	return Number(e.target.value);
});

const numberOfPeopleValue = numberOfPeople.addEventListener("input", (e) => {
	return Number(e.target.value);
});

// Here I extract the values of the selected button
const tipValues = (tipButton) => {
	let buttonValue = Number(tipButton.value);

	return buttonValue;
};

export { billValue, customValue, numberOfPeopleValue, tipValues };
