import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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
    basePath: "/api", 
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
