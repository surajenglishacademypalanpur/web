function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* Medium logic */
const standardSelect = document.getElementById("standardSelect");
const mediumSelect = document.getElementById("mediumSelect");

standardSelect.addEventListener("change", () => {
  mediumSelect.value = "";

  if (standardSelect.value === "Std. 08") {
    mediumSelect.querySelector('option[value="English Medium"]').style.display = "block";
  } else if (standardSelect.value === "Std. 09" || standardSelect.value === "Std. 10") {
    mediumSelect.querySelector('option[value="English Medium"]').style.display = "none";
    mediumSelect.value = "Gujarati Medium";
  }
});

/* Google Form submit */
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("formMsg");
  msg.textContent = "Submitting...";

  const url = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  const data = new FormData(this);

  fetch(url, { method: "POST", mode: "no-cors", body: data });

  msg.textContent = "Enquiry submitted successfully!";
  msg.style.color = "green";
  this.reset();
});
