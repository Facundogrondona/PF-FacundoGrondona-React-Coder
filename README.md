# Tienda Web - Coder House

Este proyecto está destinado al curso de React.Js impartido por Coder House, en el mismo se realizara una tienda web.
El progreso del mismo se verá reflejado aqui con explicación e imagenes.

***
***

# Estado del proyecto
***
Finalizado


Se adjunta resumen de usabilidad en archivo gif:

![resumen](https://user-images.githubusercontent.com/87046340/175163404-2491a0a7-3724-4a6e-bb89-e7bf029558f9.gif)


## Dependencias Descargadas
***
- Sass:
  
  Se utiliza Sass por ser un gran precompilador de css generando una facilidad notable en la implementación de hojas de estilos.
- React-Bootstrap
  
  Se utiliza react-bootstrap por ser una versión limpia de bootstrap y fixeada para utilizar en react, la misma cuanta con los componentes esenciales de bootstrap adaptados para react.
- Material UI
  
  Se utiliza Material UI solo en los iconos a gusto personal.
- Sweet Alert
  
  Se utiliza Sweet Alert con el fin de modificar y darle estilos a las alertas utilizadas en la app.
- React-Router-Dom
  
  Se utiliza react-router-dom por ser esencial a la hora de controlar las rutas navegables de nuestra aplicación.
- Firebase
  
  Se utiliza firebase como conexión con nuestra db de los productos, ordenes y usuarios.

## Módulos y Hooks utilizados
***
1. useState:

    Usado para generar estados locales de nuestro componente y así guardarlos y modificarlos posteriormente.

2. useEffect:

    Usado para montar y hacer un render de los componentes solo cuando es necesario mostrarlos.

3. useParam:

    Usado para capturar lo enviado por la url.

4. Axios:
    
    Usado para el consumo de API's y promesas.

5. BrowserRouter, Routes y Route:

    HOC que engloba a otros componentes y definimos las rutas navegables de nuestra aplicación.
    
6. Firebase:

    Se utiliza Firebase y Firestore para la gestión de la base de datos y su respuesta en las peticiones asincronas.

## Para poder ver la aplicación desde local
***
1. Desde la opción Code copiamos el link de HTTPS:
  
2. En nuestro pc levantamos git bash o la consola y ejecutamos el siguiente comando:
    git clone 

3. Abrimos nuestro editor de texto navegamos a nuestra carpeta raiz del proyecto clonado y en la consola ejecutamos:

    npm install

4. Finalmente en la misma consola ejecutamos el siguiente comando para levantar nuestro servidor de react:

    npm start
