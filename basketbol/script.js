 

// Функция для добавления/удаления элемента в избранное
function toggleFavorite() {
    // Получаем элемент, который нужно добавить/удалить в избранное
    var item = document.getElementById("item");
    
    // Проверяем, есть ли элемент в localStorage
    if(localStorage.getItem("favoriteItem") === item.innerHTML) {
      // Если элемент уже есть в избранном, удаляем его
      localStorage.removeItem("favoriteItem");
      alert("Элемент удален из избранного");
    } else {
      // Если элемента еще нет в избранном, добавляем его
      localStorage.setItem("favoriteItem", item.innerHTML);
      alert("Элемент добавлен в избранное");
    }
  }

  var slider = document.querySelector('.slider');
  var slides = slider.querySelector('.slides');
  var images = slides.querySelectorAll('img');
  var current = 0;
  
  function showSlide() {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
    images[current].classList.add('active');
    slides.style.transform = 'translateX(-' + (current * 100 / images.length) + '%)';
  }
  
  function prevSlide() {
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    showSlide();
  }
  
  function nextSlide() {
    current++;
    if (current === images.length) {
      current = 0;
    }
    showSlide();
  }
  
  showSlide();
