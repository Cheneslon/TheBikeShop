namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('Offroad', {
                url: '/Offroad',
                templateUrl: '/ngApp/views/Offroad.html',
                controller: MyApp.Controllers.Offroad,
                controllerAs: 'controller'
            })
            .state('Sportbikes', {
                url: '/Sportbikes',
                templateUrl: '/ngApp/views/Sportbikes.html',
                controller: MyApp.Controllers.Sportbikes,
                controllerAs: 'controller'
            })
            .state('TheCruisers', {
                url: '/TheCruisers',
                templateUrl: '/ngApp/views/TheCruisers.html',
                controller: MyApp.Controllers.TheCruisers,
                controllerAs: 'controller'
            })
           
         .state('productlist', {
             url: '/productlist',
             controller: MyApp.Controllers.ProductListController,
             templateUrl: '/ngApp/views/productlist.html',
             controllerAs: 'controller'
        })
         .state('productDetails', {
             url: '/productDetails/:id',
             controller: MyApp.Controllers.ProductDetailsController,
             templateUrl: '/ngApp/views/productDetails.html',
             controllerAs: 'controller'
        });
         

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
