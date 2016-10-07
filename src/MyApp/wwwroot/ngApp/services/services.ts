namespace MyApp.Services {
    
   export class FortuneCookieService {
       private getRandom(upper) {
           return ;


       }
       public getFortune() {
          
           let fortunes = [
                'They make everyday drives so much better!',
           ];

           return fortunes;

       }
    }


   angular.module('MyApp').service('FortuneCookieService', FortuneCookieService);
      

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('MyApp').service('movieService', MovieService);
    export class ProductService {
        listProducts() {
            let products = [
                { id: 1, name: 'Suzuki GSXR 1000', price: 12500, imgsrc: '/images/gsxr1000.jpg' },
                { id: 2, name: 'Suzuki Bandit', price: 8500, imgsrc: '/images/bandit1250.jpg' },
                { id: 3, name: 'Suzuki M90', price: 11500, imgsrc: '/images/m90.jpg' }

            ];
            return products;
        }

    }

    angular.module('MyApp').service('productService', ProductService);
}

