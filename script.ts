// Add this TypeScript code in a separate `script.ts` file
window.onload = function() {
    const form = document.getElementById('form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const firstName = (document.getElementById('fname') as HTMLInputElement).value;
        const lastName = (document.getElementById('lname') as HTMLInputElement).value;
        const dob = (document.getElementById('dob') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const educationt = (document.getElementById('educationt') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        // Format the CV
        const cv = `
            <h2>Generated CV</h2>
            <p><strong>First Name:</strong> <span contenteditable="true" > ${firstName} </span></p>
            <p><strong>Last Name:</strong> <span  contenteditable="true" >  ${lastName} </span></p>
            <p><strong>Date of Birth:</strong><span  contenteditable="true" >  ${dob} </span></p>
            <p><strong>Email:</strong> <span  contenteditable="true"> ${email} </span></p>
            <p><strong>Phone:</strong> <span  contenteditable="true"> ${phone} </span></p>
            <h3>Education</h3>
            <p contenteditable="true">${educationt}</p>
            <h3>Skills</h3>
            <p  contenteditable="true">${skills}</p>
            <h3>Work Experience</h3>
            <p  contenteditable="true">${workExperience}</p>
        `;

        // Display the CV
        resumeOutput.innerHTML = cv;
       
    });
};
  
