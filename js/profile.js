const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');
const profile = document.getElementById('profile');
const deleteAvatarButton = document.getElementById('deleteAvatar');

// Прослуховуємо подію зміни файлу
avatarInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Зчитуємо вміст файлу як URL-адресу даних (data URL)
    reader.onloadend = function () {
        // Створюємо інстанцію зображення
        const img = new Image();
        img.src = reader.result;

        // Очікуємо завантаження зображення
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Збільшуємо розмір канвасу для покращення якості
            const size = 256;
            canvas.width = size;
            canvas.height = size;

            // Обрізаємо зображення до круглої форми
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();

            // Встановлюємо результат обрізаного зображення
            ctx.drawImage(img, 0, 0, size, size);

            avatarPreview.src = canvas.toDataURL();
            avatarPreview.style.display = 'block';

            // Зберігаємо URL-адресу даних у Local Storage
            localStorage.setItem('avatar', avatarPreview.src);

            // Приховуємо елемент #profile
            profile.style.display = 'none';
        };
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Перевіряємо, чи є збережений аватар у Local Storage при завантаженні сторінки
window.onload = function () {
    const storedAvatar = localStorage.getItem('avatar');

    if (storedAvatar) {
        avatarPreview.src = storedAvatar;
        profile.style.display = 'none';
        avatarPreview.style.display = 'block';
    }
};

// Додаємо обробник події для кнопки "Clear logo"
deleteAvatarButton.addEventListener('click', function() {
    // Видаляємо збережений аватар із Local Storage
    localStorage.removeItem('avatar');

    // Приховуємо елементи, пов'язані із аватаром
    avatarPreview.style.display = 'none';
    profile.style.display = 'block';
});