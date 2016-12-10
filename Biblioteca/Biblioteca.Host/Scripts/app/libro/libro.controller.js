app.controller('libroController', [
    '$scope',
    'libroService',
    function ($scope, libroService) {
        $scope.libros = [];
        $scope.libroActual = {
            Id: '0',
            Nombre: ''
        };
        $scope.accionActual = "Agregar";
        $scope.obtenerLibros = function () {
            libroService.obtenerLibros()
            .then(function (response) {
                $scope.libros = response.data;
            });

        }
        $scope.salvarLibro = function () {
            if ($scope.accionActual === 'Agregar') {
                libroService.agregarLibro($scope.libroActual)
                 .then(function (response) {
                     $scope.obtenerLibros();
                     alert('Libro Agregado!');
                     $scope.limpiar();

                 });
            }
            else if ($scope.accionActual === "Editar") {
                libroService.editarlibro($scope.libroActual)
                 .then(function (response) {
                     $scope.obtenerLibros();
                     $scope.limpiar();
                     alert('Libro Agregado!');

                 });
            }
            else if ($scope.accionActual === "Eliminar") {
                libroService.eliminarLibro($scope.libroActual)
                 .then(function (response) {
                     $scope.obtenerLibros();
                     $scope.limpiar();
                     alert('Libro Eliminado!');

                 });
            }
        }

        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar'
            $scope.libroActual = {
                Id: '0',
                nombre: ''
            }
        }
        $scope.editar = function (libro) {
            $scope.accionActual = 'Editar'
            $scope.libroActual = JSON.parse(JSON.stringify(libro));;


        }
        $scope.eliminar = function (editorial) {
            $scope.accionActual = 'Eliminar'
            $scope.editorialActual = JSON.parse(JSON.stringify(editorial));;


        }
        $scope.obtenerEditoriales();

    }
]);