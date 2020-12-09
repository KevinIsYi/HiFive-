# Programación para Internet

## Estudiante: Kevin Rodríguez

## Descripción
* Este proyecto es un sitio de compra de ropa en línea. Para el Frontend se utilizó React.js y el Backend fue hecho con Node.js, Express.js y la base de datos usada es MongoDB. 
* La comunicación entre el Frontend y el Backend se hace a través de una API.
* Para poder correr el proyecto, es necesario tener instalado MongoDBCompass y Node.js en su versión 14.15.0 o superior.


## Instalación del Frontend
1. Descargar el proyecto.
2. Crear otra carpeta (fuera de lo descargado), para evitar errores, lo más recomendable es el nombre de la carpeta tenga puras letras minúsculas y números y, si son varias palabras, separarlas por un guión.
3. Desde la línea de comandos, navegar hacia la nueva carpeta y ejecutar comando **npx create-react-app .** (El punto está incluido en el comando)
4. Este comando creará tardará entre tres y cinco minutos e instalará todo lo necesario para un nuevo proyecto de React.js
5. Eliminar todos los archivos creados a excepción de la carpeta **node_modules**.
6. Ir a la carpeta donde se descargó el proyecto, y copiar o cortar todos los archivos a la carpeta donde se ejecutó el comando previamente mencionado.
7. En el proyecto se utilizaron algunos paquetes adicionales para, los cuales también se deben de instalar a través de los siguientes comandos:
- npm install react-icons
- npm install react-media
- npm install react-router-dom
- npm install sweetalert2
8. Estos paquetes se usuaron para: los íconos, hacer responsiva la sección del header, la navegación y los mensajes de éxito/error respectivamente.
9. Ejecutar el comando **npm start** para arrancar el Frontend.

## Instalación del Backend
1. Desde la línea de comandos, ir hacia la carpeta Backend del proyecto.
2. Ejecutar el siguiente comando: **npm install express**
- Este comando creará la carpeta node_modules y descargará los modulos necesarios para el funcionamiento de express.
3. Al igual que en el Frontend, se utilizaron algunos paquetes adicionales para implementar algunas funciones, es necesario instalarlos con los comandos:
- npm install bcryptjs
- npm install cors
- npm install dotenv
- npm install express-validator
- npm install mongoose
4. Estos paquetes fueron usados para: encriptar y desencriptar las contraseñas, habilitar cors, habilitar las variables de entorno, disponer de varios middlewares, hacer las operaciones con la base de datos.
5. Crear archivo .env y escribir *PORT=4000* (o cualquier otro puerto que se encuentre disponible).
6. Para arrancar el Backend, se puede usar el comando **npm start**. El comando npm run dev no servirá a menos que se instale nodemon con **npm install nodemon**

## Base de Datos
1. Crear una cuenta en el siguiente enlace: https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_canada_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=Cj0KCQjwiYL3BRDVARIsAF9E4GfQWQYG_pbTlJA5eixJKM75IaFYqk4nUBlKe0iXkKn4kXc1HZmKSikaAtKzEALw_wcB e iniciar sesión.
2. Dar click en **Build a Cluster**.
3. Dar click en **Crear Cluster** (versión gratuita).
4. Dar click en **Create Cluster**. Este paso puede tardar entre tres y cinco minutos en completarse.
5. Ya que haya terminado, dar click en **connect**.
6. Seleccionar opción **Connect using MongoDB Compass**.
7. Copiar el enlace proporcionado en la página y pegarlo en MongoDBCompass (sin dar click en *connect*).
8. Cerrar el cuadro de diálogo y dar click en la opción de **Database Access** y crear un nombre de usuario y contraseña y guardar temporalmente ambos campos.
9. En **Database User Privileges** seleccionar *Write and read to any database*.
10. En el enlace que se colocó en MongoDBCompass, cambiar *strider* por el nombre de usuario creado y *password* (incluyendo los <>) por la contraseña creada.
11. El enlace debe ser similar a: mongodb+srv://*usuario:contraseña@cluster0.y2y49.mongodb.net/?authSource=admin&replicaSet=atlas-eqfu1e-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true*
12. Dar click en **connect**.
13. Si se permite el acceso a la base de datos, ya se puede cerrar la página.

## Conectar Backend a la Base de Datos
1. Ir al archivo .env de la carpeta Backend, y escribir una nueva variable llama DB_CNN.
2. El valor de la variable será la ruta de conexión haciendo algunas modificaciones.
3. Quedará algo similar a lo siguiente: **DB_CNN=mongodb+srv://usuario:contraseña@cluster0.uyz6d.mongodb.net/nombre_de_la base_de_datos**
4. El nombre de la base de datos puede ser cualquiera, en el proyecto se le dio el nombre de hifive_app.
5. En la carpeta Backend, ejecutar el comando **npm start**, si todo está correcto, se debe ver en la consola los siguientes mensajes: 
* **Server running on port 4000**
* **DB Online**