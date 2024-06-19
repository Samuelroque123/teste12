document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const specialty = document.getElementById('specialty').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    if (fullName && email && specialty && appointmentDate) {
        addAppointment(fullName, email, specialty, appointmentDate);
        sendEmailReminder(fullName, email, specialty, appointmentDate);
    }

    document.getElementById('appointmentForm').reset();
});

function addAppointment(fullName, email, specialty, appointmentDate) {
    const appointmentList = document.getElementById('appointmentsList');

    const li = document.createElement('li');
    li.textContent = `Nome: ${fullName}, E-mail: ${email}, Especialidade: ${specialty}, Data e Hora: ${appointmentDate}`;

    appointmentList.appendChild(li);
}

function sendEmailReminder(fullName, email, specialty, appointmentDate) {
    const templateParams = {
        fullName: fullName,
        email: email,
        specialty: specialty,
        appointmentDate: appointmentDate
    };

    emailjs.send('service_elga47e', 'template_5np9ct9', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
