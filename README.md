Entrega proyecto final

Este proyecto se trata de una tienda online de entradas para eventos de musica. 

En la home page del proyecto tamien se incluyen los datos para probar usuario y administrador.
Usario de prueba:
email: yamiusu@yahoo.com password: yamiusu23

Admin de prueba:
email: admin@eventos.com password: admin2023

MockAPi Link 
https://mockapi.io/projects/63a21bbcba35b96522f039e3

Deploy link https://agustinahoyossg.github.io/entrega-final
Problemas: al deployar en Github pages, el link generado da un error 404, hay que apretar en el boton volver para acceder a la home page.

Como usuario, podemos:
 - Loguearnos. Todos los datos vienen de MockApi.
 - Registrarnos. Todos los datos se guardan en MockApi.
 - Ver el listado de eventos, abrir un modal con mas detalles. Todos los datos vienen de MockApi.
 - Agregar la cantidad deseada de entradas a nuestro carrito de compras desde el modal, o agregar un solo elemento directamente desde
 las cards de la lista.
 - Modificar las cantidades desde el carrito de compra, se puede restar hasta eliminar por completo el producto.
 - Enviar el pedido.
 - Los pedidos enviados exitosamente quedan guardados en el backend.
 - El usuario cuenta con una vista de su perfil en donde aparece su nombre, avatar y email.


Como Admin podemos:
 - Loguearnos
 - Ver una lista de pedidos recibidos, con datos provenientes de MockApi detallados en una tabla
 - Procesar cada pedido (eliminando o enviando, las dos opciones eliminan el producto de la lista de pedidos pendientes, tanto en front como en backend)
 - En la vista de admin podemos dar de alta nuevos eventos, eliminar o modificar los existentes. (impacta lista de productos en backend)
 Problemas: Al dar de alta un nuevo evento, no aparece automaticamente en la lista de elementos a modificar en la vista de administrador,
 pero una vez relogueado se vera el nuevo producto reflejado en la lista correspondiente, tanto para admin como para usuario.
 

