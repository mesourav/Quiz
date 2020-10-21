function submitForm(e) {
    e.preventDefault();
    let name = document.forms["name-form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "question.html";
}
