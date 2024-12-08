function createContactPage() {
    const content = document.getElementById('content');
    content.textContent = "";

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const nameField = document.createElement('div');
    nameField.classList.add('form-field');

    const nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name: '

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;

    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);

    const emailField = document.createElement('div');
    emailField.classList.add('form-field');

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email: ';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id - 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    emailField.appendChild(emailLabel);
    emailField.appendChild(emailInput);

    const messageField = document.createElement('div');
    messageField.classList.add('form-field');

    const messageLabel = document.createElement('label');
    messageLabel.for = 'message';
    messageLabel.textContent = 'Message: ';

    const messageTextArea = document.createElement('textarea');
    messageTextArea.id = 'message';
    messageTextArea.name = 'message';
    messageTextArea.required = true;

    messageField.appendChild(messageLabel);
    messageField.appendChild(messageTextArea);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';

    contactForm.appendChild(nameField);
    contactForm.appendChild(emailField);
    contactForm.appendChild(submitBtn);

    content.appendChild(headline);
    content.appendChild(contactForm);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Thank you, ${nameInput.value}! Your message has been sent.`)
        contactForm.reset();
    });
}

export { createContactPage };