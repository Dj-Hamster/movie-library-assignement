 var app = angular.module('myApp', []);
    app.controller('myController', function ($scope) {

        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
  {
    "title":"Ocean's 8",
    "director":"Gary Ross",
    "releaseDate":"13/06/2018",
    "type":"action"
  },
  {
    "title":"Solo: A Star Wars Story",
    "director":"Ron Howard",
    "releaseDate":"23/05/2018",
    "type":"Sci-Fi"
  },
  {
    "title":"Deadpool 2",
    "director":"David Leitch",
    "releaseDate":"16/05/2018",
    "type":"Comedy"
  },
  {
    "title":"Avengers: Infinite War",
    "director":"Anthony Russo, Joe Russo",
    "releaseDate":"25/04/2018",
    "type":"action"
  },
  {
    "title":"The First Purge",
    "director":"Gerard McMurray",
    "releaseDate":"04/07/2018",
    "type":"Horror"
  },
  {
    "title":"Mission: Impossible - Fallout",
    "director":"Christopher McQuarrie",
    "releaseDate":"01/08/2018",
    "type":"Thriller"
  },
  {
    "title":"The Mummy",
    "director":"Christopher McQuarrie",
    "releaseDate":"14/06/2017",
    "type":"Fantasy"
  },
  {
    "title":"Hunger Games",
    "director":"Gary Ross",
    "releaseDate":"21/03/2012",
    "type":"Thriller"
  },
  {
    "title":"John Wick",
    "director":"David Leitch",
    "releaseDate":"29/10/2014",
    "type":"Thriller"
  }
];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.director != undefined) {
                var movie = [];
                movie.name = $scope.name;
                movie.director = $scope.director;

                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.director = null;
            }
        };

        // REMOVE SELECTED ROW(s) FROM TABLE.
        $scope.removeRow = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                if (!value.Remove) {
                    arrMovie.push(value);
                }
            });
            $scope.movieArray = arrMovie;
        };

        // FINALLY SUBMIT THE DATA.
        $scope.submit = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                arrMovie.push('Name:' + value.name + ', Director:' + value.director);
            });
            $scope.display = arrMovie;
        };
    });