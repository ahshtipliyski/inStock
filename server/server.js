const express = require('express');
const app = express();
const cors = require('cors');
const sPort = 8080;
const warehouseRoutes = require('./routes/warehouses');
const inventoryRoutes = require('./routes/inventory');

app.use(express.json());
app.use(cors());

app.use('/warehouses', warehouseRoutes);
app.use('/inventory', inventoryRoutes);

//fix
app.listen(sPort, () => console.log(`Server listening on port: ${sPort}`));