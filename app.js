const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views'); // Views are in csemotors/views
app.use(express.static('public')); // Serve public folder
const inventoryRoutes = require('./routes/inventory');
app.use('/', inventoryRoutes);

app.get('/', (_req, res) => {
  res.render('index');
});

app.get('/inventory', (_req, res) => {
  res.send('Inventory page coming soon!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
