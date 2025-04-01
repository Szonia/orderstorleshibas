import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger opciók konfigurálása
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Candy Shop API",
      description: "API dokumentáció a webshophoz",
      contact: {
        name: "Your Name",
        email: "your-email@example.com",
      },
      version: "1.0.0",
    },
    basePath: "/api", // Base path for your API endpoints
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // Az API végpontokat tartalmazó fájlok elérési útja
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Swagger dokumentáció hozzáadása az Express alkalmazáshoz
export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
