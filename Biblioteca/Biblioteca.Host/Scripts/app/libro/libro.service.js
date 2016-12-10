app.service('libroService',
    [
        '$http',
        'miConfiguracion',

function ($http, miConfiguracion) {
    function obtenerLibros() {
        return $http.get(miConfiguracion.urlBackend + 'api/libro');
    }
    function agregarLibro(nuevoLibro) {
        return $http.post(miConfiguracion.urlBackend + 'api/libro', nuevoLibro);
    }
    function editarLibro(libro) {
        return $http.put(miConfiguracion.urlBackend + 'api/libro/' + libro.Id, libro);
    }
    function eliminarLibro(libro) {
        return $http.delete(miConfiguracion.urlBackend + 'api/libro/' + libro.Id);
    }
    function agregarEditorial(libro, editorial) {
        return $http.put(miConfiguracion.urlBackend + 'api/libro/' + libro.Id +'/editorial/'+editorial.Id);

    }
    return {
        agregarEditorial: agregarEditorial,
        obtenerLibros: obtenerLibros,
        agregarLibro: agregarLibro,
        editarLibro: editarLibro,
        eliminarLibro: eliminarLibro
    }

}

    ]);