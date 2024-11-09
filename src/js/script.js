import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Função para animação de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Mostrar/ocultar o menu de navegação em telas pequenas
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Carrinho de compras (Simulação simples)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('total-price');
  cartItemsDiv.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `<p>Pizza ${item.name} - R$ ${item.price}</p>`;
    cartItemsDiv.appendChild(itemDiv);
  });

  totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Exemplo de evento para adicionar item ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-name');
    const itemPrice = parseFloat(button.getAttribute('data-price'));
    addToCart(itemName, itemPrice);
  });
});

// Inicializa a exibição do carrinho
updateCartDisplay();
