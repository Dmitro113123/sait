// Функция для проверки состояния избранного и его отображения на странице
function checkFavorite() {
    // Получаем элемент, куда нужно добавить сохраненный элемент из избранного
    var favorite = document.getElementById("favorite");
    
    // Проверяем, есть ли элемент в localStorage
    if(localStorage.getItem("favoriteItem")) {
      // Если элемент есть в избранном, добавляем его на страницу
      favorite.innerHTML = "Избранный элемент: " + localStorage.getItem("favoriteItem");
    } else {
      // Если элемента нет в избранном, удаляем его со страницы
      favorite.innerHTML = "";
    }
  }
  
  // Вызываем функцию для проверки состояния избранного и его отображения на странице при загрузке страницы
  checkFavorite();
  
  // Функция для очистки избранного
  function clearFavorites() {
    // Очищаем localStorage
    localStorage.removeItem("favoriteItem");
    // Удаляем элемент из избранного со страницы
    checkFavorite();
    alert("Избранное очищено");
  }
