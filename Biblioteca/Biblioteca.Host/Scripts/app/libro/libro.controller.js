app.controller('libroController', [
    '$scope',
    'libroService',
    'editorialService',
    function ($scope, libroService, editorialService) {
        $scope.libros = [];
        $scope.editoriales = [];
        $scope.libroActual = {
            Id: '0',
            Nombre: '',
            Ano:''
        };
        $scope.editorialSeleccionada = undefined;
        $scope.accionActual = "Agregar";
        $scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
            .then(function (response) {
                $scope.editoriales = response.data;

            });

        }
        
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
                     libroService.agregarEditorial(response.data, $scope.editorialSeleccionada)
                     .then(function (response2) {
                         $scope.obtenerLibros();
                         $scope.limpiar();
                         alert('Libro Agregado!')
                     });

                 });
            }

            else if ($scope.accionActual === "Editar") {
                libroService.editarLibro($scope.libroActual)
                 .then(function (response) {
                     libroService.agregarEditorial(response.data, $scope.editorialSeleccionada)
                     .then(function (response2) {
                         $scope.obtenerLibros();
                         $scope.limpiar();
                         alert('Libro Editado!')
                     });


                 })
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
                    nombre: '',
                    Ano:''
                }
                $scope.editorialSeleccionada = undefined;
            }
            $scope.editar = function (libro) {
                $scope.accionActual = 'Editar'
                $scope.libroActual = JSON.parse(JSON.stringify(libro));;
                $scope.editorialSeleccionada = undefined;
                $scope.editorialSeleccionada = $scope.editoriales.find(function (editorial) {
                    return editorial.Id === libro.Editorial.Id;

                });



            }
            $scope.eliminar = function (libro) {
                $scope.accionActual = 'Eliminar'
                $scope.libroActual = JSON.parse(JSON.stringify(libro));;
                $scope.editorialSeleccionada = undefined;
                $scope.editorialSeleccionada = $scope.editoriales.find(function (editorial) {
                    return editorial.Id === libro.Editorial.Id;

                });
            }
 
            $scope.obtenerEditoriales();
            $scope.obtenerLibros();

        }
]);