# test-darwoft
Test de Evaluacion para propuesta Front End en DarWoft

Crear una aplicación web con las siguientes secciones:

# Home
- Debe ser mostrada por defecto al abrir la aplicación.
- No requiere autenticación.
- Mostrar el acceso a la galería.
- Mostrar acceso al login si es necesario.

# Login
- Utilizando la REST de prueba (https://jsonplaceholder.typicode.com/users) crear un login
- La sesión del usuario debe durar 1 hora o hasta cerrar la ventana (no la solapa).
- La sesión es local en el navegador.
- El almacenamiento de la sesión es a elección del desarrollador.

# Galería
- Muestra 5 imágenes a la vez en tamaño pequeño, obtenidas del REST de prueba
(http://jsonplaceholder.typicode.com/photos)
- Debe tener los botones siguiente y anterior, que con cada click debe repetir la llamada al
servidor (como un paginador) y buscar las siguientes 5 imágenes.
- Al hacer click en cada imagen abrir un popup mostrando la misma en tamaño grande.
- Al hacer doble click en cada imagen debe mostrar una nueva pantalla con la imagen y el
detalle de la misma
- La galería puede ser ordenada por dos características a elección.
- Almacenar el resultado de las llamadas para optimizar la aplicación que sea persistente a
nivel local
- Botón volver para ir al home.
- Requiere autenticación. Si no posee volver al home y notificar el motivo.

# Usuario
- Mostrar los datos del usuario actual
- Requiere autenticación. Si no posee volver al home y notificar el motivo.

# La aplicación también debe:
- Ser responsiva.
- Estar modularizada.
- Mostrar un loading cuando sea necesario.
- Contar con tipado de datos.
- Contar con unit testing.
- Contar con código comentado.
- Se debe tener routing
- Controlar ruta inexistente y por defecto.
- Si contiene menú o barra de navegación, mostrar la ruta activa.
- Estar separada en componentes que puedan ser reutilizados.
- La calidad del código es importante

# Bonus
- Usar SASS para los estilos
- Usar linter
