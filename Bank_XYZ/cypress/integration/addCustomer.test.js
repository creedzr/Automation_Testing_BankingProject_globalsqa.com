/// <reference types="cypress" />
import BankingPage from "../support/pages/BankingPage";

describe('Validasi Fitur Menambah Customer ', () => {
    const Banking = new BankingPage();

    beforeEach(() => {
        Banking.visit();
        Banking.navigateToManagerLogin();
    });

    it('Harus berhasil menambah customer baru dengan data yang valid', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', 'ruswandi', 'E12456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Harus menampilkan pesan error saat penambahan customer duplikat dengan data yang sama', () => {

        //menambah custommer pertama
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','ruswandi','E12456')
        Banking.submitCustomerForm();
       
        Banking.verifyAlertText('Customer added successfully');

        //menambah customer ke dua
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('agum','ruswandi','E12456');
        Banking.submitCustomerForm();

        //validasi penambahan duplikat Customer
        Banking.navigateToCustomer();
        

        // Verifikasi bahwa "agum" muncul di tabel (dalam kolom First Name)
        cy.get('table').contains('td', 'agum').should('exist');
 
    });

    it('Harus menampilkan pesan error saat menambah customer hanya dengan First Name', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('agum', '', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Harus menampilkan pesan error saat menambah customer hanya dengan Last Name', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', 'ruswandi', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Harus menampilkan pesan error saat menambah customer hanya dengan Postcode', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', '', '123456');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });
    
    it('Harus menampilkan pesan error saat semua field customer kosong', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', '', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
    });


    it('Harus berhasil menambah customer dengan First Name berisi kombinasi karakter dan angka', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('@g+*&^^123', 'ruswandi', '123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Harus berhasil menambah customer dengan Last Name berisi kombinasi karakter dan angka', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', '12r-_-$@#', 'E1234589');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Harus berhasil menambah customer dengan Postcode berisi kombinasi karakter dan angka', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', 'ruswandi', 'E123+*&%$');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Harus berhasil menambah customer dengan semua field berisi kombinasi karakter dan angka', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('@g%$#@12', 'r%^##@#%124', 'E123+*&%$');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Harus berhasil menambah customer dengan First Name huruf kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('AGUM','ruswandi','w123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Harus berhasil menambah customer dengan Last Name huruf kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','RUSWANDI','w123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Harus berhasil menambah customer dengan Postcode huruf kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','ruswandi','AZSDFGH');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Harus berhasil menambah customer dengan semua field huruf kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('AGUM','RUSWANDI','AZSDFGH');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Harus menavigasi ke halaman Home dari halaman Add Customer', () => {
        Banking.clickAddCustomer();
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('be.visible');
        cy.get('button[ng-click="customer()"]').should('be.visible');
        cy.get('button[ng-click="manager()"]').should('be.visible');
    });
    });

   

