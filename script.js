// Add this TypeScript code in a separate `script.ts` file
window.onload = function () {
    var form = document.getElementById('form');
    var resumeOutput = document.getElementById('resumeOutput');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get values from the form
        var firstName = document.getElementById('fname').value;
        var lastName = document.getElementById('lname').value;
        var dob = document.getElementById('dob').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var educationt = document.getElementById('educationt').value;
        var skills = document.getElementById('Skills').value;
        var workExperience = document.getElementById('workExperience').value;
        // Format the CV
        var cv = "\n            <h2>Generated CV</h2>\n            <p><strong>First Name:</strong> <span contenteditable=\"true\" > ".concat(firstName, " </span></p>\n            <p><strong>Last Name:</strong> <span  contenteditable=\"true\" >  ").concat(lastName, " </span></p>\n            <p><strong>Date of Birth:</strong><span  contenteditable=\"true\" >  ").concat(dob, " </span></p>\n            <p><strong>Email:</strong> <span  contenteditable=\"true\"> ").concat(email, " </span></p>\n            <p><strong>Phone:</strong> <span  contenteditable=\"true\"> ").concat(phone, " </span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(educationt, "</p>\n            <h3>Skills</h3>\n            <p  contenteditable=\"true\">").concat(skills, "</p>\n            <h3>Work Experience</h3>\n            <p  contenteditable=\"true\">").concat(workExperience, "</p>\n        ");
        // Display the CV
        resumeOutput.innerHTML = cv;
    });
};
