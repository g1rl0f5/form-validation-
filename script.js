function validate(event) {
    event.preventDefault(); // Prevent form from submitting by default

    // Get the form input elements
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    // Name Validation
    if (name.value.trim() === '') {
        alert("Name is required!");
        name.focus();
        return false;
    }

    // Email Validation (Empty check)
    if (email.value.trim() === '') {
        alert("Email is required!");
        email.focus();
        return false;
    }

    // Email Validation using Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        alert("Enter a valid email address!");
        email.focus();
        return false;
    }


    alert("Form submitted successfully!");
     document.feedbackform.reset();
}
