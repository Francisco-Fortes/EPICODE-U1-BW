// This function will check if the checkbox on the welcome page has been selected and if not, it will show an error

const isCheckboxTicked = function () {
  if (document.getElementById('consent-checkbox').checked) {
    alert('Your ready to take the exam!')
  } else {
    alert(
      'You must agree to answer the questions by yourself before proceeding',
    )
  }
}
