var contactApp = angular.module('contactApp', ['ui.router']);

contactApp.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
    
        .state('contact', {
            url: '/contact',
            templateUrl: '/app/views/contact-list.html',
            controller: 'contactList',
            controllerAs: "CL",
            params: {
                newContact: null,
               
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            template: '<h1>This is dashbord view!<h1>',
            
        })
        .state('addContacts', {
            url: '/addContacts',
            templateUrl: '/app/views/add-contact.html',
            controller: 'addContact',
            controllerAs: "AC",
            params: {
                selectedContact: null,     
                selectedIndex :null         
            }           
        });
      $urlRouterProvider.otherwise("/contact");

       
});