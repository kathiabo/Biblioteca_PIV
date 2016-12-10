app.controller('editorialController', [
    '$scope',
    'editorialService',
    function ($scope, editorialService) {
        $scope.editoriales = [];
        $scope.editorialActual = {
            Id: '0',
            Nombre: ''
        };
        $scope.accionActual = "Agregar";
        $scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
            .then(function (response) {
                $scope.editoriales = response.data;
            });

        }
        $scope.salvarEditorial = function () {
            if ($scope.accionActual === 'Agregar') {
                editorialService.agregarEditorial($scope.editorialActual)
                 .then(function (response) {
                     $scope.obtenerEditoriales();
                     alert('Editorial Agregada!');
                     $scope.limpiar();

                 });
            }
            else if ($scope.accionActual === "Editar") {
                editorialService.editarEditorial($scope.editorialActual)
                 .then(function (response) {
                     $scope.obtenerEditoriales();
                     $scope.limpiar();
                     alert('Editorial Agregada!');

                 });
            }
            else if ($scope.accionActual === "Eliminar") {
                editorialService.eliminarEditorial($scope.editorialActual)
                 .then(function (response) {
                     $scope.obtenerEditoriales();
                     $scope.limpiar();
                     alert('Editorial Eliminada!');
                               
                 }, function(error)
                 {
                     alert('Error al Eliminar editorial');
            
                 });
            
             }
        }


        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar'
            $scope.editorialActual = {
                Id: '0',
                nombre: ''
            }
        }
          $scope.editar = function (editorial) {
              $scope.accionActual = 'Editar'
              $scope.editorialActual = JSON.parse(JSON.stringify(editorial));;
                 

          }
          $scope.eliminar = function (editorial) {
              $scope.accionActual = 'Eliminar'
              $scope.editorialActual = JSON.parse(JSON.stringify(editorial));;


          }
          $scope.obtenerEditoriales();
        
    }
]);