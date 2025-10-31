// Автоматическое добавление всех фото из папки images/
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const totalImages = 20; // Максимальное количество фото, можно изменить

    for (let i = 1; i <= totalImages; i++) {
        const image = new Image();
        image.src = `images/photo${i}.jpg`;
        image.alt = `Фото ${i}`;
        image.onerror = () => image.remove(); // если файла нет — не показывать
        gallery.appendChild(image);
    }
});
