# React Interview Test :uk:
This project was built as a React coding test for a job apply.

The project is build using HTML5, CSS3, Typescript+React.
I used **VITE** instead of **CRA** because its faster and is how I usually work.

## Instalation

Step by step on how to install and setup the project locally


```bash
  #Clone the repository
  git clone https://github.com/jhuelmo/react-test.git my-project
  cd my-project
```

```bash
  #Install dependencies
  npm i
```

```bash
  #Generate a .env using the .env.template and add a GoogleMaps api key
  VITE_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
```

```bash
  #Run the server
  npm run dev
```
After the server is running, the project will be aviable in the following route:
👉 http://localhost:5173/

![image](https://github.com/user-attachments/assets/8628dcd4-21e6-4dfc-8cc2-dbfb57d5f14c)

### !!CAUTION!!
If the api key through .env file is not working, hardcode it in the file mapUtils.ts
```bash
   const mapsURL = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE`;
```

Thanks for everything! ☺️

---------------------------------------------------
# Prueba Técnica en React :es:

Este proyecto firna oarte de una prueba técnica de React

El proyecto se desarolló utilizando HTML5, CSS3 y Typescript con React.  
Usé **VITE** en lugar de **CRA** porque es más rápido y es como suelo trabajar.

## Instalación

Pasos para instalar y configurar el proyecto localmente:

```bash
  # Clonar el repositorio
  git clone https://github.com/jhuelmo/react-test.git my-project
  cd my-project
```

```bash
  #Generar un archivo .env utilizando .env.template y añadir una api key de GoogleMaps
  VITE_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
```

```bash
  # Ejecutar el servidor de desarrollo
  npm run dev
```


Una vez que el servidor esté ejecutado, el proyecto estará disponible en la ruta:
👉 http://localhost:5173/

![image](https://github.com/user-attachments/assets/8628dcd4-21e6-4dfc-8cc2-dbfb57d5f14c)

### !!CUIDADO!!
Si la api key del .env no funciona, introducirla a mano en el archivo mapUtils.ts
```bash
   const mapsURL = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI`;
```

Gracias por todo! ☺️
