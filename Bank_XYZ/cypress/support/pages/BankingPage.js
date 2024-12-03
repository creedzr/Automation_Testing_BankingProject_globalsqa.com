class BankingPage {
    // Fungsi untuk membuka halaman login Banking
    visit() {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    // Fungsi untuk menavigasi ke halaman login Manager
    navigateToManagerLogin() {
        cy.get('button[ng-click="manager()"]').click();
    }

    // Fungsi untuk menavigasi ke halaman Open Account
    navigateToOpenaccount() {
        cy.get('button[ng-click="openAccount()"]').click();
    }

    // Fungsi untuk menavigasi ke halaman Customer
    navigateToCustomer() {
        cy.get('button[ng-click="showCust()"]').click();
    }

    // Fungsi untuk menavigasi ke halaman Home
    navigateTohome() {
        cy.get('button[ng-click="home()"]').click();
    }

    // Fungsi untuk mengklik tombol Add Customer
    clickAddCustomer() {
        cy.get('button[ng-click="addCust()"]').click();
    }

    // Fungsi untuk mengirimkan formulir customer
    submitCustomerForm() {
        cy.get('.btn.btn-default').click({ timeout: 1000 });
    }

    // Fungsi untuk mengklik tombol Process pada halaman Open Account
    clickProcess() {
        cy.get('button[type="submit"]').click();
    }

    // Fungsi untuk memverifikasi teks alert
    verifyAlertText(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include(expectedText);
        });
    }

    // Fungsi untuk memilih customer dan mata uang pada halaman Open Account
    selectCustomer(name, currency) {
        cy.get('select#userSelect').select(name);
        cy.get('select#currency').select(currency);
    }

    // Fungsi untuk mengisi detail customer seperti nama depan, nama belakang, dan kode pos
    fillCustomerDetails(firstName, lastName, postCode) {
        cy.get('input[ng-model="fName"]').type(firstName); 
        cy.get('input[ng-model="lName"]').type(lastName); 
        cy.get('input[ng-model="postCd"]').type(postCode); 
    }

    // Fungsi untuk mengisi detail customer dengan pengecekan nilai yang ada
    fillCustomerDetails1(firstName, lastName, postCode) {
        cy.get('input[ng-model="fName"]').clear();
        if (firstName) {
            cy.get('input[ng-model="fName"]').type(firstName);
        }

        cy.get('input[ng-model="lName"]').clear();
        if (lastName) {
            cy.get('input[ng-model="lName"]').type(lastName);
        }

        cy.get('input[ng-model="postCd"]').clear();
        if (postCode) {
            cy.get('input[ng-model="postCd"]').type(postCode);
        }
    }

    // Fungsi untuk mencari customer berdasarkan teks
    searchCustomer(text) {
        cy.get('input[placeholder="Search Customer"]').type(text);
    }

    // Fungi Untuk Sort
    sortFname() {
        cy.get('a[ng-click="sortType = \'fName\'; sortReverse = !sortReverse"]').click();
    }

    sortLname() {
        cy.get('a[ng-click="sortType = \'lName\'; sortReverse = !sortReverse"]').click();
    }

    sortPostcd() {
        cy.get('a[ng-click="sortType = \'postCd\'; sortReverse = !sortReverse"]').click();
    }

    //Fungsi tombol delete di customer
    deleteCustomer(){
        cy.get('button[ng-click="deleteCust(cust)"]').click();
    }
}

export default BankingPage;
