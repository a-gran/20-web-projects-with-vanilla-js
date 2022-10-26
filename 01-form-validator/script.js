// alex@yandex.ru

const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')

// Show input error (показать ошибку ввода)
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Checking if the fields are full
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    input.value.trim() === ''
      ? showError(input, `${getFieldName(input)} is required`)
      : showSuccess(input)
  })
}

// Get field name
const getFieldName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1)

// Check length password and username
const checkLengthInput = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} должно быть больше ${min} символов`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} должно быть меньше ${max} символов`)
  } else {
    showSuccess(input)
  }
}

// Check passwords match
const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) showError(password2, 'Пароль недостаточно надежный')
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password1, password2])
  checkLengthInput(username, 3, 15)
  checkLengthInput(password1, 6, 30)
  checkPasswordsMatch(password1, password2)
})
