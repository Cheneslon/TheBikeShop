namespace MyApp.Controllers {
      export class ContactController{
        public ok() {
            this.$uibModalInstance.close();



           }
        constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance) {
        }
           
        }
    export class HomeController {
        public contact() {
            this.$uibModal.open({

                controller: ContactController,
                controllerAs: 'contactController',
                templateUrl: '/ngApp/views/contact.html',
           

            });


        }
        constructor(private $uibModal: ng.ui.bootstrap.IModalService) { }
    }



    export class AboutController {
        public message = 'Welcome to the "Shop"!';
    }
    export class TheCruisers {
        public message = "This page is for the Curisers.";
    }
    export class Offroad {
        public message = "This page is for the Dirt bikes.";
    }
    export class Sportbikes {
        public message = "This page is for the Sportbikes.";

    };
   
    export class ProductListController {
        public products;
        constructor(productService: MyApp.Services.ProductService) {
            this.products = productService.listProducts();
        }
    }
    export class ProductDetailsController {
        public product;

        constructor($stateParams: ng.ui.IStateParamsService, productService:MyApp.Services.ProductService) {
            let productId = $stateParams['id'];
            this.product = productService.listProducts().filter((p) => p.id == productId)[0];
            

        }
    }
}
