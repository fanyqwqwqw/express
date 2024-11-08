const express = require('express');
const axios = require('axios'); // Para realizar solicitudes HTTP

const app = express();
const port = 3000;

app.get('/api/express', async (req, res) => {
  try {
    // Ejemplo: consulta al servicio FastAPI
    const fastapi_url = 'http://fastapi.somee.com/fastapi';
    const response = await axios.get(fastapi_url);
    
    // Enviar datos procesados
    res.json({
      from_express: "Hello from Express.js!",
      fastapi_data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to FastAPI" });
  }
});

app.listen(port, () => {
  console.log(`Express.js server running on port ${port}`);
});
