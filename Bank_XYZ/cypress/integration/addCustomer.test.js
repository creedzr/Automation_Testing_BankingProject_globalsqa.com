/// <reference types="cypress" />
import BankingPage from "../support/pages/BankingPage";

describe('Menambah Customer ', () => {
    const managerPage = new BankingPage();

    beforeEach(() => {
        managerPage.visit();
        managerPage.navigateToManagerLogin();
    });

    it('Penambahan Customer Baru', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum', 'ruswandi', 'E12456');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully');
    });

    it('Validasi penambahan duplikat customer', () => {

        //menambah custommer pertama
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum','ruswandi','E12456')
        managerPage.submitCustomerForm();
       
        managerPage.verifyAlertText('Customer added successfully');

        //menambah customer ke dua
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('agum','ruswandi','E12456');
        managerPage.submitCustomerForm();

        //validasi penambahan duplikat Customer
        managerPage.navigateToCustomer();
        managerPage.searchCustomer('agum');

        // Verifikasi bahwa "agum" muncul di tabel (dalam kolom First Name)
        cy.get('table').contains('td', 'agum').should('exist');
 
    });

    it('Validasi Penambahan Customer dengan hanya Firstname', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('agum', '', '');
        managerPage.submitCustomerForm();
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Validasi Penambahan Customer dengan hanya Lastname', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('', 'ruswandi', '');
        managerPage.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Validasi Penambahan Customer dengan hanya Postcode', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('', '', '123456');
        managerPage.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });
    
    it('Validasi Penambahan Customer dengan field kosong', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('', '', '');
        managerPage.submitCustomerForm();
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
    });


    it('Validasi Penambahan Customer FirstName dengan kombinasi karakter & number', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails1('@g+*&^^123', 'ruswandi', '123456');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer LastName dengan kombinasi karakter & number', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum', '12r-_-$@#', 'E1234589');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer postcode dengan kombinasi karakter & number', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum', 'ruswandi', 'E123+*&%$');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully');
    });

    it('Validasi Penambahan Customer semua kolom dengan kombinasi karakter & number', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('@g%$#@12', 'r%^##@#%124', 'E123+*&%$');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully');
    });

    it('Validasi Input Field First Name dengan Huruf Kapital', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('AGUM','ruswandi','w123456');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Last  Name dengan Huruf Kapital', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum','RUSWANDI','w123456');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Field Postcode dengan Huruf Kapital', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('agum','ruswandi','AZSDFGH');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully')
    });

    it('Validasi Input Seluruh Field  dengan Huruf Kapital', () => {
        managerPage.clickAddCustomer();
        managerPage.fillCustomerDetails('AGUM','RUSWANDI','AZSDFGH');
        managerPage.submitCustomerForm();
        managerPage.verifyAlertText('Customer added successfully')
    });

    it('Validasi pengujian tombol Home di addCustomer', () => {
        managerPage.clickAddCustomer();
        managerPage.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('exist');
        cy.get('button[ng-click="customer()"]').should('exist');
        cy.get('button[ng-click="manager()"]').should('exist');
    });
    });

   

