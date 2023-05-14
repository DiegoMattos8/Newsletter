

function enviar(){
    const form = document.getElementById('newsletter-form');


  

  // get the email input field value
  const emailInput = document.querySelector('.email-field');
  const email = emailInput.value;

  // do something with the email, e.g., send it to a server

  // display the success message
  const modalContent = document.querySelector('.modal-teste');
  modalContent.innerHTML = '<p>Email cadastrado com sucesso!</p>';

    
}