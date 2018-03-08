contactApp.controller('addContact', function ($scope, $state, $rootScope, $stateParams) {
    var self = this;


    fromListItemClick = function () {
        if ($stateParams.selectedContact != undefined) {
            self.selectedContact = $stateParams.selectedContact;
            self.selectedIndex = $stateParams.selectedIndex;
            console.log(self.selectedContact);
            self.id = self.selectedContact.id;
            self.name = self.selectedContact.name;

            var temp = self.selectedContact.name.split(" ");
            self.firstName = temp[0];
            self.lastName = temp[1];
            self.emailList = self.selectedContact.email;
            self.contactList = self.selectedContact.contact_no;

        } else {
            self.emailList = [{ category: "Office", email_id: "" }];
            self.contactList = [{ category: "Office", mobile: "" }];
        }
    }
    fromListItemClick();

    self.addMoreClick = function () {

        self.emailList.push({ category: "Office", email_id: "" })
    }

    self.addMorePhoneClick = function () {

        self.contactList.push({ category: "Office", mobile: "" })
    }

    self.onSaveClick = function () {
        //self.id != undefined ? self.id : 

        // if (self.firstName != undefined) {
            if ($stateParams.selectedContact == undefined) {

                var newContact = {
                    id: $rootScope.contactsInfo.length + 1,
                    name: self.firstName + " " + self.lastName,
                    email: self.emailList,
                    contact_no: self.contactList

                }
                $rootScope.contactsInfo.push(newContact);
            } else {
                $rootScope.contactsInfo[self.selectedIndex].id = self.id;
                $rootScope.contactsInfo[self.selectedIndex].name = self.firstName + " " + self.lastName;
                $rootScope.contactsInfo[self.selectedIndex].email = self.emailList;
                $rootScope.contactsInfo[self.selectedIndex].contact_no = self.contactList;

            }

            $state.go('contact');
        //}
    }

    self.onCancelClick = function () {
        $state.go('contact');
    }
    self.removePhoneClick = function (index) {

        if (self.contactList.length > 1) {
            self.contactList.splice(index, 1);
        }
    }
    
    self.removeMailClick = function (index) {

        if (self.emailList.length > 1) {
            self.emailList.splice(index, 1);
        }
    }

});