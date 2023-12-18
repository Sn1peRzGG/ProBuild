// Отримуємо всі елементи <section>
const configurePcSections = document.querySelectorAll('.configure-pc');

// Додаємо подію 'click' до кожного <section> елементу
configurePcSections.forEach(function(item) {
    item.addEventListener('click', function() {
        // Знімаємо клас 'active' з усіх елементів
        configurePcSections.forEach(function(li) {
            li.classList.remove('active');
        });
        
        // Додаємо клас 'active' до натиснутого елементу
        item.classList.add('active');
        
    });
});

// Отримуємо елементи з додатковою інформацією
const additionalInfos = document.querySelectorAll('.additional-info');

// Додаємо подію 'click' до кожного елемента <section class="configure-pc">
configurePcSections.forEach(function(section, index) {
    section.addEventListener('click', function() {
        // Сховати всю додаткову інформацію
        additionalInfos.forEach(function(info) {
            info.style.display = 'none';
        });

        // Показати відповідну додаткову інформацію для вибраного елемента
        additionalInfos[index].style.display = 'flex';
    });
});

// Знаходимо всі елементи з класом .additional-info
const sections = document.querySelectorAll('.additional-info');

// Функція, яка встановлює хештег у URL та показує відповідний елемент
function showSection(id) {
    window.location.hash = id; // Встановлюємо хештег у URL
    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = 'flex'; // Показуємо збігаючийся елемент
            section.classList.add('active'); // Додаємо клас .active до збігаючогося елемента
        } else {
            section.style.display = 'none'; // Приховуємо елементи, які не збігаються
            section.classList.remove('active'); // Видаляємо клас .active у не збігаючихся елементів
        }
    });
}

// Функція для вибору відповідного елемента згідно з хештегом у URL
function selectSectionFromHash() {
    const hash = window.location.hash.substr(1); // Видаляємо символ #
    sections.forEach(section => {
        if (section.id === hash) {
            showSection(hash); // Викликаємо функцію showSection для збігаючогося елемента
        }
    });
}

// Встановлюємо обробник кліку для кожного елемента
sections.forEach(section => {
    section.addEventListener('click', () => {
        showSection(section.id); // Викликаємо функцію showSection при кліку на елемент
    });
});

// Викликаємо функцію selectSectionFromHash при завантаженні сторінки, якщо є хештег
if (window.location.hash) {
    selectSectionFromHash(); // Видаляємо символ # і вибираємо відповідний елемент
}

// Встановлюємо обробник події при зміні хештега у URL
window.addEventListener('hashchange', selectSectionFromHash);

function addHashToLink(id) {
    window.location.hash = id; // Додаємо хештег до URL
    const sections = document.querySelectorAll('.configure-pc');
    sections.forEach(section => {
        section.classList.remove('active'); // Видаляємо клас .active у всіх елементів
    });
    const clickedSection = document.getElementById(id);
    clickedSection.classList.add('active'); // Додаємо клас .active до клікнутого елемента
}

// Функція для встановлення активного класу відповідно до хештегу при завантаженні сторінки або при зміні хештега
function setActiveClassFromHash() {
    const hash = window.location.hash.substr(1);
    const sections = document.querySelectorAll('.configure-pc');

    if (hash) {
        // Якщо є хештег, знайти відповідний елемент та додати клас .active
        sections.forEach(section => {
            if (section.id === hash) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    } else {
        // Якщо немає хештега, додати клас .active до першого елемента
        sections[0].classList.add('active');
    }
}

// Викликаємо функцію setActiveClassFromHash при завантаженні сторінки
setActiveClassFromHash();

// Встановлюємо обробник події при зміні хештега у URL
window.addEventListener('hashchange', setActiveClassFromHash);