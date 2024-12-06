/// <reference types="cypress" />
import BankingPage from "../support/pages/BankingPage";

describe('Uji Coba Menambah Customer ', () => {
    const Banking = new BankingPage();

    beforeEach(() => {
        Banking.visit();
        Banking.navigateToManagerLogin();
    });

    it('Penambahan Customer Baru', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', 'ruswandi', 'E12456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Validasi penambahan duplikat customer', () => {

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
        Banking.searchCustomer('agum');

        // Verifikasi bahwa "agum" muncul di tabel (dalam kolom First Name)
        cy.get('table').contains('td', 'agum').should('exist');
 
    });

    it('Validasi Penambahan Customer dengan hanya Firstname', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('agum', '', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Validasi Penambahan Customer dengan hanya Lastname', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', 'ruswandi', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Validasi Penambahan Customer dengan hanya Postcode', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', '', '123456');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });
    
    it('Validasi Penambahan Customer dengan field kosong', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('', '', '');
        Banking.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
    });


    it('Validasi Penambahan Customer FirstName dengan kombinasi karakter & number', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails1('@g+*&^^123', 'ruswandi', '123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer LastName dengan kombinasi karakter & number', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', '12r-_-$@#', 'E1234589');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer postcode dengan kombinasi karakter & number', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum', 'ruswandi', 'E123+*&%$');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer semua kolom dengan kombinasi karakter & number', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('@g%$#@12', 'r%^##@#%124', 'E123+*&%$');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully');
    });

    it('Validasi Input Field First Name dengan Huruf Kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('AGUM','ruswandi','w123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Last  Name dengan Huruf Kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','RUSWANDI','w123456');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Field Postcode dengan Huruf Kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','ruswandi','AZSDFGH');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Seluruh Field  dengan Huruf Kapital', () => {
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('AGUM','RUSWANDI','AZSDFGH');
        Banking.submitCustomerForm();
        Banking.verifyAlertText('Customer added successfully')
    });

    it('Validasi pengujian tombol Home di addCustomer', () => {
        Banking.clickAddCustomer();
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('be.visible');
        cy.get('button[ng-click="customer()"]').should('be.visible');
        cy.get('button[ng-click="manager()"]').should('be.visible');
    });
    });

   

