
function form(formEl, nameEL, emailEl, messageEl, buttonEl) {

  const form = document.querySelector(formEl);
  const username = form.querySelector(nameEL);
  const email = form.querySelector(emailEl);
  const messageText = form.querySelector(messageEl);
  const formControl = form.querySelectorAll('.form-control');
  const button = form.querySelector(buttonEl);
  const modal = document.querySelector(".contact__modal");


  function inputListenner() {
    username.addEventListener('input', () => {
      if (username.value === "") {
        username.parentElement.dataset.status = 'false';
        setErrorFor(username, 'Please fill your Name');
        submitButton();
      } else if (username.value.length < 3) {
        username.parentElement.dataset.status = 'false';
        setErrorFor(username, 'Please fill your Name more than 3 symbols');
        submitButton();
      }
      else {
        setSuccessFor(username);
        username.parentElement.dataset.status = 'true';
        submitButton();
      }
    });
    email.addEventListener('input', () => {
      if (email.value === '') {
        email.parentElement.dataset.status = 'false';
        setErrorFor(email, 'Please fill your Email address');
        submitButton();
      } else if (!isEmail(email.value)) {
        email.parentElement.dataset.status = 'false';
        setErrorFor(email, 'Please fill the valid Email address');
        submitButton();
      }
      else {
        setSuccessFor(email);
        email.parentElement.dataset.status = 'true';
        submitButton();
      }
    });
    messageText.addEventListener('input', () => {
      if (messageText.value === '') {
        messageText.parentElement.dataset.status = 'false';
        setErrorFor(messageText, 'Please type your message');
        submitButton();
      } else if (messageText.value.length < 5) {
        messageText.parentElement.dataset.status = 'false';
        setErrorFor(messageText, 'Please type message more than 5 symbols');
        submitButton();
      }
      else {
        setSuccessFor(messageText);
        messageText.parentElement.dataset.status = 'true';
        submitButton();
      }
    });

  }
  inputListenner();



  form.addEventListener('submit', (e) => {
    const message = {
      loading: "Loading.....",
      succes: "Thanks, for for your message. I will contact you soon!",
      failure: "Error",

    };
    e.preventDefault();

    const statusMesage = document.createElement("div");
    statusMesage.textContent = message.loading;
    statusMesage.style.cssText = `
    display:block;
    margin: 10px auto;
    weidth:40px;
    height:40px;
    font-size: 14px;
    position:absolute;
    text-align:center;
    `;
    form.append(statusMesage);

    // /* CONVERT FORMDATA TO JSON OBJECT */
    //     const formData = new FormData(form).entries();
    //     let jsonObject = {};
    //     for (const [key,value] of formData){
    //       jsonObject[key] = value;
    //     }
    //     console.log(jsonObject);
    //     const dataBase = 'mail.php';

    //    async function postData (url, data){
    //       const response = await fetch (url, {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers:{
    //               "Content-type":'aplication/json'
    //             }
    //       });
    //       console.log(data);
    //       if (response.ok) {
    //         console.log(response.status);

    //         // statusMesage.textContent = message.succes;
    //         showThanksModal(message.succes);
    //         form.reset();
    //         formReset ();

    //         setTimeout(() => {
    //           statusMesage.remove();
    //       }, 3000);

    //       }else{
    //         console.log(response.status);
    //         statusMesage.textContent = `${message.failure}, ${response.status} Cant connect to server`;
    //       }

    //     }
    //     postData(dataBase,jsonObject);

    const request = new XMLHttpRequest();
    request.open("POST", "mail.php");
    const formData = new FormData(form);
    request.send(formData);
    request.addEventListener("load", () => {
      if (request.status === 200) {
        console.log(request.response);
        showThanksModal(message.succes);
        form.reset();
        formReset();
        statusMesage.remove();
      } else {
        console.log(request.response);
        statusMesage.textContent = `${message.failure}, ${request.response} Cant connect to server`;
      }
    });



  });


  function submitButton() {
    if (formControl[0].dataset.status === 'true' && formControl[1].dataset.status === 'true' && formControl[2].dataset.status === 'true') {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'disabled');
    }
  }


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('.message');
    formControl.querySelector('.check').style.visibility = "hidden";
    formControl.querySelector('.replace').style.visibility = "visible";
    span.style.display = 'block';
    span.innerText = message;

  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('.message');
    formControl.querySelector('.replace').style.visibility = "hidden";
    formControl.querySelector('.check').style.visibility = "visible";
    formControl.dataset.status = 'true';
    span.style.display = '';

  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  function formReset() {
    formControl.forEach(item => {
      item.dataset.status = 'false';
      button.setAttribute('disabled', 'disabled');
      item.querySelector('.check').style.visibility = "hidden";

    });
  }

  function showThanksModal(message) {
    const prevModalBox = document.querySelector(".contact__modal-dialog");
    modal.style.display = "block";
    prevModalBox.style.display = "none";
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("contact__modal-dialog");
    thanksModal.innerHTML = `
          <div class="contact__modal-content">
          <div class="contact__modal-title">
          ${message}</div></div>
          `;
    modal.append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalBox.style.display = "block";
      modal.style.display = "none";
      closeModal();
    }, 4000);
  }
  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("active");
  }
  function openModal() {
    modal.style.display = "block";
    document.body.classList.add("active");
  }
}

export default form;