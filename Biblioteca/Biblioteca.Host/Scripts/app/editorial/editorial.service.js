app.service('editorialService',
    [
        '$http',
        'miConfiguracion',

function($http, miConfiguracion){
    function obtenerEditoriales(){
        return $http.get(miConfiguracion.urlBackend + 'api/editorial');
    }
    function agregarEditorial(nuevaEditorial){
        return $http.post(miConfiguracion.urlBackend + 'api/editorial', nuevaEditorial);
    }
    function editarEditorial(editorial)
    {
        return $http.put(miConfiguracion.urlBackend + 'api/editorial/' + editorial.Id, editorial);
    }
    function eliminarEditorial(editorial) {
        return $http.delete(miConfiguracion.urlBackend + 'api/editorial/' + editorial.Id);
    }
    return{
        obtenerEditoriales: obtenerEditoriales,
        agregarEditorial: agregarEditorial,
        editarEditorial: editarEditorial,
        eliminarEditorial: eliminarEditorial
    }
    
}
    
    ]);