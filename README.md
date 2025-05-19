# React Interview Test :uk:
This project was built as a React coding test for a job apply.

The project is build using HTML5, CSS3, Typescript+React.
I used **VITE** instead of **CRA** because its faster and is how I usually work.

## **Installation**

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

## Notes and Considerations

These are several notes I took during the development process.
Here I explain some changes I would make to certain parts of the project, but due to time constraints, I decided not to implement them. Still, I find it useful to share them.
Think of this as a kind of TODO list:

- **Folder structure**: As development progressed, I realized that the project structure wasn’t ideal. Folders like UI or Icons are not very clear and can lead to confusion.
- **Use of context**: My goal was to showcase React knowledge in the best possible way. While developing the scroll feature, I used context here even though I know it's not the best practice.
- **Confusing naming**: In some parts of the code, the naming makes things harder to understand.
- **Overuse of components**: I improved this in some areas — for example, I ended up removing the InfoBar component, which I felt was unnecessary (as you can see in the commits). However, components like AppProvider are still confusing and kind of irrelevant.
- **Map configuration**: The Map component, which handles the Google Map, is quite messy. I tried to abstract the configuration to clean it up, but it didn’t initialize properly. Due to time constraints, I left it as an idea rather than implementing it.


Thanks for everything! ☺️

---------------------------------------------------
# Prueba Técnica en React :es:

Este proyecto firna oarte de una prueba técnica de React

El proyecto se desarolló utilizando HTML5, CSS3 y Typescript con React.  
Usé **VITE** en lugar de **CRA** porque es más rápido y es como suelo trabajar.

## Instalaci

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

## Notas y Consideraciones

Estas son varias notas que tome durante el proceso de desarrollo. 
Aqui expongo algunos cambios que haria a ciertas partes del proyecto pero que, sobretodo por tiempo, ya no me planteo en desarollar pero si me parece interesante comentar.
Tomad esto como una especie de TODO list:

- **Estructura de carpetas**: A medida que desarrollaba me di cuenta de que la estructura del proyecto no funcionaba del todo. Carpetas como UI o como Icons no son claras y dan punto a confusion.
- **Uso de context**: Mi idea era mostrar conocmiento sobre react de la mejor manera posible. Al desarrollar el scroll, implemente el contexto aqui aunque se que no es la mejor de las practicas.
- **Naming confuso**: En algunos puntos del codigo, el naming vuelve confuso algunas partes.
- **Sobreutilizacion de componentes**: Este punto lo fui mejorando en algunos apartados, como el componente InfoBar que me parecia excesivo y acabe por borrar como podeis ver en los commits. Aun asi, hay componentes como el AppProvider que dan pie a confusion y son irrelevantes..
- **Configuracion del mapa**: El componente Map que cuenta con el mapa de google es bastante confuso. Intente hacer una abstraccion de la configuracion para solucionarlo pero no me inicializaba bien y por tal de poder entregar el proyecto lo matuve como idea no implementada por falta de tiempo. 


Gracias por todo! ☺️
