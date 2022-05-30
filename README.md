# Aplicación SPA con Login ReactSJS

Esta aplicación es la resolución del ejercicio propuesto a los alumnos en la
clase de ReactJS.

## Ejercicio

Crear una SPA que permita realizar las operaciones CRUD a los datos almacenados
en una API. La SPA debe contar con un Login y los usuarios tienen que estar
divididos en roles: Admin y User. Los usuarios con rol Admin deben ser los
únicos capaces de modificar los datos de la API. Los usuarios no registrados no
deben ser capaces de acceder a los datos. El usuario logueado debe poder
desloguearse Usar react-router para el manejo de rutas. Se sugiere la
utilización de la API mockapi.io para la generación de la data de usuarios y el
contenido a mostrar en la SPA.

### Análisis

Context AuthContext - Guarda los datos del usuario logueado DataContext -
Contiene la lógica del CRUD

Navegación Admin/User - Redireccionan a inicio cuando no hay usuario logueado
(Navigate y consumo de AuthContext) Login - Redirecciona a Admin/User según role
de usuario (useNavigate y consumo de AuthContext)

Componentes Login - Ejecuta la lógica de autenticación con formulario
controlado. Cambia datos de usuario logueado (useState y consumo de AuthContext)
Admin - Ejecuta todas las acciones de CRUD con formulario controlado (useState y
consumo de DataContext) User - Renderiza tabla con datos almacenados en
DataContext viewsWrappers(HOC) - Creación de Componentes de vistas para las
distintas páginas
