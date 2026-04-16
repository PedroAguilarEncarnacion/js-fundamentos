const form = document.querySelector("form");
const message = document.getElementById("message");

form.addEventListener("submit", (event)=> {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();

  if (fullName === "" || email === "") {
    message.textContent = "Please complete all fields.";
    return;
  }

  message.textContent = `Name: ${fullName} | Email: ${email}`;
});