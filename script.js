function apostarv() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Você ganhou, sim nessa casa de aposta você SEMPRE GANHA`;

    // Animação de destaque na mensagem
    mensagem.style.color = '#1b5e20';
    mensagem.style.transition = 'transform 0.3s ease';
    mensagem.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        mensagem.style.transform = 'scale(1)';
    }, 300);
}

 async function apostar(opcao) {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Você apostou: "${opcao}". Boa sorte! (apostando em 5s)`;

    // Animação de destaque na mensagem
    mensagem.style.color = '#1b5e20';
    mensagem.style.transition = 'transform 0.3s ease';
    mensagem.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        mensagem.style.transform = 'scale(1)';
    }, 300);

    await new Promise(resolve => setTimeout(resolve, 5000));
    apostarv()
}



