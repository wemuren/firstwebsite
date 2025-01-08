function toggleAccordion(header) {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    const isActive = item.classList.contains('active');
  
    // Закрываем все активные элементы
    document.querySelectorAll('.accordion-item').forEach((element) => {
        element.classList.remove('active');
        element.querySelector('.accordion-header').classList.remove('active');
        element.querySelector('.accordion-content').style.display = 'none';
        element.querySelector('.accordion-icon').textContent = '+';
    });
  
    // Если текущий элемент не активен, открываем его
    if (!isActive) {
        item.classList.add('active');
        header.classList.add('active');
        content.style.display = 'block';
        header.querySelector('.accordion-icon').textContent = '-';
    }
}


const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');

// Добавляем слушатель на бургер
burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show'); // Переключаем класс для отображения меню
});
