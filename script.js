document.getElementById('whatsappButton').addEventListener('click', function() {
    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    // Validação básica
    if (name === '' || email === '' || service === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `Olá, meu nome é ${name} (${email}).\n\n*Serviço de interesse:* ${service}\n\n*Minha mensagem:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Link do WhatsApp com a mensagem pré-preenchida
    const whatsappLink = `https://wa.me/5511974461251?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.open(whatsappLink, '_blank');
});