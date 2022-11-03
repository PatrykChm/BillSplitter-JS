const billInput = document.querySelector('.bill-card-bill')
const peopleInput = document.querySelector('.bill-card-people')
const tipButtons = document.querySelectorAll('.bill-card__tip-button')
const customTip = document.querySelector('.custom-tip')
const resetButton = document.querySelector('.bill-card__reset-button')
const tipAmount = document.querySelector('.tip-value')
const totalAmount = document.querySelector('.total-value')
const error = document.querySelector('.error')

const clearInputs = () => {
	billInput.value = ''
	peopleInput.value = ''
	customTip.value = ''
	error.classList.remove('error-active')
	totalAmount.textContent = '0'
	tipAmount.textContent = '0'
}
const checkInput = () => {
	if (peopleInput.value === '') {
		error.classList.add('error-active')
		tipAmount.textContent = ''
		totalAmount.textContent = ''
	} else {
		error.classList.remove('error-active')
	}
}

const checkBill = () => {
	tipButtons.forEach(button => {
		button.addEventListener('click', () => {
			const tipAmountValue = (billInput.value * button.value) / 100 / peopleInput.value
			const totalAmountValue = parseInt(billInput.value) / peopleInput.value + tipAmountValue

			if (peopleInput.value === '') {
				tipAmount.textContent = '0'
				error.classList.add('error-active')
			} else {
				error.classList.remove('error-active')
				tipAmount.textContent = tipAmountValue.toFixed(2)
				totalAmount.textContent = totalAmountValue.toFixed(2)
			}
		})
	})
}

const checkCustomBill = () => {
	const tipCustomValue = (billInput.value * customTip.value) / 100 / peopleInput.value
	const totalCustomValue = parseInt(billInput.value) / peopleInput.value + tipCustomValue

	if (peopleInput.value === '') {
		tipAmount.textContent = '0'
		error.classList.add('error-active')
	} else {
		error.classList.remove('error-active')
		tipAmount.textContent = tipCustomValue.toFixed(2)
		totalAmount.textContent = totalCustomValue.toFixed(2)
	}
}
addEventListener('keyup', checkCustomBill)
addEventListener('keyup', checkBill)
resetButton.addEventListener('click', clearInputs)
