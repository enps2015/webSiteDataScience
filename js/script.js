const glossarioItems = document.querySelectorAll('.glossario');

glossarioItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Crie um elemento para o pop-up
    const popup = document.createElement('div');
    popup.classList.add('glossario-popup');
    popup.textContent = item.title; // Define o conteúdo do pop-up

    // Posicione o pop-up
    popup.style.position = 'absolute';
    popup.style.top = `${item.offsetTop + item.offsetHeight}px`;
    popup.style.left = `${item.offsetLeft}px`;

    // Adicione o pop-up ao documento
    document.body.appendChild(popup);
  });

  item.addEventListener('mouseout', () => {
    // Remova o pop-up ao retirar o mouse
    const popup = document.querySelector('.glossario-popup');
    if (popup) {
      document.body.removeChild(popup);
    }
  });
});