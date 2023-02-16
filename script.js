const content = document.getElementsByClassName('mobile-menu');
const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const phoneNumber = document.querySelector('[data-phone-number]');
const country = document.querySelector('[data-country]');
const accountType = document.querySelector('[data-account-type]');
const username = document.querySelector('[data-username]');
const submit = document.querySelector('[data-submit]');
let SubmitformData = document.querySelector('#data-form-data')
const notification = document.querySelector('[data-notification]');
const notMother = document.querySelector('[data-notificationMother]');

// Function to toggle the visibility of the mobile menu 
function classToggle() {
    const navs = document.querySelectorAll('.mobile-menu');
    navs.forEach(nav => nav.classList.toggle('hide'));
}

// Event listener to toggle the visibility of the mobile menu on clicking the menu icon
document.querySelector('.bars').addEventListener('click', classToggle);

// Event listeners to toggle the 'active' class on each mobile menu item
for (var i = 0; i < content.length; i++) {
    content[i].addEventListener('click', function () {
        this.classList.toggle('active');
        content[2].classList.remove('active');
    });
}

// Function to send data to the API
const sendData = () => {
  
  SubmitformData.addEventListener('submit', async function (e) {
    e.preventDefault();
    const scrollEffect = () => {
      window.scrollTo({
        top: 1,
        left: 100,
        behavior: 'smooth',
      })
    }
    // scrollEffect()
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      
      var formdata = new FormData();
      formdata.append("email", email.value);
      formdata.append("password", password.value);
      formdata.append("phone", phoneNumber.value);
      formdata.append("country", country.value);
      formdata.append("account_type", accountType.value);
      formdata.append("username", username.value);
      formdata.append("reg_type", "email");
      
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    //function that help screen to scroll to the top
     
      //send post request to the API route
    const result = await fetch(" https://test.api.copaly.com/api/v1/auth/register", requestOptions)
    if (!result.ok) {
        scrollEffect()
        notMother.style.display = "block"
        notMother.style.background = "#EF8D9C"
        notification.style.color = "white"
        notification.innerHTML = "Error registering"
        setTimeout(function () { 
          notMother.style.display = "none"
        }, 5000)
      
      } else {
        notMother.style.display = "block"
        notMother.style.background = "#B0DB7D"
      notification.innerHTML = "Registration successful"
      scrollEffect()
      
      console.log(result);
        setTimeout(function(){
        notMother.style.display = "none";
        },5000)
        setTimeout(function () {
          window.location.href = "download.html";
        }, 6000)
    }
    
  })
}
sendData()
