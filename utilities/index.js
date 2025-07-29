const utilities = {
  buildInventoryDetail(inventoryItem) {
    const { make, model, year, price, mileage, description, image } = inventoryItem;
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
    const formattedMileage = new Intl.NumberFormat('en-US').format(mileage);

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${make} ${model} Details</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
      </head>
      <body>
        <header>
          <div class="header-top">
            <div class="logo">CSE Motors</div>
            <div class="account-link"><a href="/my-account">My Account</a></div>
            <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/inventory">Inventory</a></li>
              <li><a href="/upgrades">Upgrades</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </nav>
        </header>
        <main class="inventory-detail">
          <h1>${make} ${model}</h1>
          <div class="detail-container">
            <img src="/images/inventory/${image}" alt="${make} ${model}">
            <div class="detail-content">
              <h2>${make} ${model} Details</h2>
              <p><strong>Year:</strong> ${year}</p>
              <p><strong>Price:</strong> ${formattedPrice}</p>
              <p><strong>Mileage:</strong> ${formattedMileage} miles</p>
              <p><strong>Description:</strong> ${description}</p>
            </div>
          </div>
        </main>
        <footer>
          <p>© 2025 CSE Motors</p>
        </footer>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const navToggle = document.querySelector('.nav-toggle');
            const nav = document.querySelector('nav');
            navToggle.addEventListener('click', () => {
              nav.classList.toggle('active');
              navToggle.textContent = nav.classList.contains('active') ? '×' : '☰';
            });
          });
        </script>
      </body>
      </html>
    `;
  },
};

module.exports = utilities;