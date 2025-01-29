## Archivos modificados

### 1. `index.html`
Se creó una página principal con un formulario para agregar un cliente y una tabla para mostrar los clientes existentes. Además, se implementaron botones para editar y eliminar clientes directamente desde la interfaz.

### 2. `app.js`
El archivo `app.js` maneja la lógica de JavaScript para interactuar con la API REST. Las funcionalidades implementadas incluyen:
- Obtener todos los clientes mediante un `GET` request.
- Crear un nuevo cliente mediante un `POST` request.
- Actualizar los detalles de un cliente mediante un `PUT` request.
- Eliminar un cliente mediante un `DELETE` request.
- Funciones para limpiar el formulario después de crear o actualizar un cliente.
- Funciones para editar y eliminar clientes directamente desde la tabla.

### 3. `get_client_by_id.php`
Se añadió un archivo PHP que permite obtener los detalles de un cliente específico por su ID. Este archivo responde a un `GET` request con el ID del cliente y devuelve la información correspondiente en formato JSON.

## Requisitos

- PHP 7.0 o superior.
- MySQL.
- Servidor local (por ejemplo, XAMPP o MAMP).
- Conexión a internet para hacer peticiones API.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/fgescalona/api-rest-clientes-php.git
   
2. Crea la base de datos y las tablas en MySQL.
   Puedes usar el archivo API.REST.PHP/sql/setup.sql para configurar la base de datos
   
3. Inicializa el servidor
   Dentro de la carpeta del proyecto ejecuta:
   ```bash
   php -S localhost:8080

## Endpoints de la API

1. **GET /api-rest/get_all_client.php**
   - **Descripción**: Obtiene todos los clientes almacenados en la base de datos.
   - **Método**: `GET`
   - **Parámetros**: Ninguno.
   - **Respuesta Exitosa (200 OK)**:
     ```json
     [
       {
         "id": 1,
         "name": "Juan Pérez",
         "email": "juan@example.com",
         "city": "Madrid",
         "telephone": "123456789"
       },
       {
         "id": 2,
         "name": "María López",
         "email": "maria@example.com",
         "city": "Barcelona",
         "telephone": "987654321"
       }
     ]
     ```
   - **Respuesta de Error (500 Internal Server Error)**:
     ```json
     {
       "message": "Error al obtener los clientes."
     }
     ```

2. **GET /api-rest/get_client_by_id.php?id={id}**
   - **Descripción**: Obtiene los detalles de un cliente específico por su ID.
   - **Método**: `GET`
   - **Parámetros**:
     - `id`: El ID del cliente a buscar.
   - **Respuesta Exitosa (200 OK)**:
     ```json
     {
       "id": 1,
       "name": "Juan Pérez",
       "email": "juan@example.com",
       "city": "Madrid",
       "telephone": "123456789"
     }
     ```
   - **Respuesta de Error (404 Not Found)**:
     ```json
     {
       "message": "Cliente no encontrado."
     }
     ```

3. **POST /api-rest/create_client.php**
   - **Descripción**: Crea un nuevo cliente en la base de datos.
   - **Método**: `POST`
   - **Parámetros**:
     - `name`: Nombre del cliente.
     - `email`: Correo electrónico del cliente.
     - `city`: Ciudad del cliente.
     - `telephone`: Teléfono del cliente.
   - **Cuerpo de la solicitud** (Ejemplo):
     ```json
     {
       "name": "Carlos Gómez",
       "email": "carlos@example.com",
       "city": "Sevilla",
       "telephone": "555123456"
     }
     ```
   - **Respuesta Exitosa (201 Created)**:
     ```json
     {
       "message": "Cliente creado correctamente."
     }
     ```
   - **Respuesta de Error (400 Bad Request)**:
     ```json
     {
       "message": "Datos incompletos o inválidos."
     }
     ```

4. **PUT /api-rest/update_client.php**
   - **Descripción**: Actualiza los datos de un cliente existente.
   - **Método**: `PUT`
   - **Parámetros**:
     - `id`: ID del cliente a actualizar.
     - `name`: Nombre del cliente (opcional).
     - `email`: Correo electrónico del cliente (opcional).
     - `city`: Ciudad del cliente (opcional).
     - `telephone`: Teléfono del cliente (opcional).
   - **Cuerpo de la solicitud** (Ejemplo):
     ```json
     {
       "id": 1,
       "name": "Juan Pérez Updated",
       "email": "juan.updated@example.com",
       "city": "Madrid Updated",
       "telephone": "123456789"
     }
     ```
   - **Respuesta Exitosa (200 OK)**:
     ```json
     {
       "message": "Cliente actualizado correctamente."
     }
     ```
   - **Respuesta de Error (400 Bad Request)**:
     ```json
     {
       "message": "Datos incompletos o inválidos."
     }
     ```

5. **DELETE /api-rest/delete_client.php**
   - **Descripción**: Elimina un cliente de la base de datos.
   - **Método**: `DELETE`
   - **Parámetros**:
     - `id`: El ID del cliente a eliminar.
   - **Respuesta Exitosa (200 OK)**:
     ```json
     {
       "message": "Cliente eliminado correctamente."
     }
     ```
   - **Respuesta de Error (404 Not Found)**:
     ```json
     {
       "message": "Cliente no encontrado."
     }
     ```

    
   
