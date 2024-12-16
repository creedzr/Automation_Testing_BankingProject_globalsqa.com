class BankingPage {
    // Fungsi untuk membuka halaman login Banking
    visit() {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    // Fungsi untuk menavigasi ke halaman login Manager
    navigateToManagerLogin() {
        cy.get('button[ng-click="manager()"]').should('be.visible').click();
    }

    // Fungsi untuk menavigasi ke halaman Open Account
    navigateToOpenaccount() {
        cy.get('button[ng-click="openAccount()"]').should('be.visible').click();
    }

    // Fungsi untuk menavigasi ke halaman Customer
    navigateToCustomer() {
        cy.get('button[ng-click="showCust()"]').should('be.visible').click();
    }

    // Fungsi untuk menavigasi ke halaman Home
    navigateTohome() {
        cy.get('button[ng-click="home()"]').should('be.visible').click();
    }

    // Fungsi untuk mengklik tombol Add Customer
    clickAddCustomer() {
        cy.get('button[ng-click="addCust()"]').should('be.visible').click();
    }

    // Fungsi untuk mengirimkan formulir customer
    submitCustomerForm() {
        cy.get('.btn.btn-default').should('be.visible').click({ timeout: 1000 });
    }

    // Fungsi untuk mengklik tombol Process pada halaman Open Account
    clickProcess() {
        cy.get('button[type="submit"]').should('be.visible').click();
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
        cy.get('button[ng-click="deleteCust(cust)"]').should('be.visible').click();
    }

    //fungsi tombol untuk customer login
    navigateToCustomerlogin(){
        cy.get('button[ng-click="customer()"').click();
    }

    //fungsi ini untuk memilih user login
    selectuser(name){
        cy.get('#userSelect').select(name);
    }

    //fungsi untuk tombol login
    loginusername(){
        cy.get('.btn.btn-default').should('be.visible').click();
    }

    //fungsi untuk tombol untuk memilih deposit
    deposit(){
        cy.get('button[ng-click="deposit()"]').should('be.visible').click();
    
    }

    //fungsi mengisi jumlah yg mau di deposit
    enteramount(amount){
        cy.get('input[ng-model="amount"]').clear().type(amount);
    }

    //fungsi untuk submit deposit
    submitdeposit(){
        cy.get('.btn.btn-default').should('be.visible').click();
    }

    //fungsi untuk memilih akun user
    selectaccount(id){
        cy.get('#accountSelect').select(id);
    }

    //fungsi tombol untuk memilih withdrawl
    withdrawl(){
        cy.get('button[ng-click="withdrawl()"]').should('be.visible').click();
    }
    
    //fungsi untuk mengisi jumlah/nilai withdrawl
    enterwithdrawl(withdrawl){
        cy.get('input[ng-model="amount"]').clear().type(withdrawl);
    }

    //fungsi tombol untuk submit withdrawl
    submitwithdrawl(){
        cy.get('.btn.btn-default').should('be.visible').click();
    }

    // fungsi untu masuk menu transaktion
    transaction(){
        cy.get('button[ng-click="transactions()"').should('be.visible').click();
    }

    //fungsi tombol untuk logout user
    Logout(){
        cy.get('button[ng-click="byebye()"]').should('be.visible').click();
    }
}

export default BankingPage;
