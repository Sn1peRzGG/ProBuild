// Отримуємо всі елементи навігації
const navLinks = document.querySelectorAll('.menu_item a');

// Функція, яка визначає, який розділ знаходиться у верхній частині сторінки
function getCurrentSection() {
    for (const section of navLinks) {
        const targetId = section.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const rect = targetSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            return section;
        }
    }
    return null;
}

// Функція для виділення відповідного елемента навігації
function highlightNav() {
    // Знімаємо підсвічування з усіх елементів навігації
    navLinks.forEach(link => link.classList.remove('active'));

    const currentSection = getCurrentSection();
    if (currentSection) {
        // Виділяємо поточний елемент навігації
        currentSection.classList.add('active');
    }
}

// Викликаємо функцію при прокручуванні сторінки
window.addEventListener('scroll', highlightNav);


// Отримуємо всі <ul> елементи з класами "section"
var sections = document.querySelectorAll('.section');

// Додаємо слухач подій на кожен <ul> елемент
sections.forEach(function(section) {
var items = section.querySelectorAll('.element'); // Отримуємо всі <li> елементи в поточному <ul>

    // Додаємо слухач подій на кожен <li> елемент в поточному <ul>
    items.forEach(function(item) {
        item.addEventListener('click', function() {
        // Прибираємо клас .active з усіх <li> елементів в поточному <ul>
        items.forEach(function(li) {
            li.classList.remove('active');
        });

        // Додаємо клас .active до натиснутого <li> елемента
        item.classList.add('active');
        });
    });
});