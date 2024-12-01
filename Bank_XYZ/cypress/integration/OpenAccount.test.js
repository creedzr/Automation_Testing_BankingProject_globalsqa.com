/// <reference types="cypress" />
import  BankingPage from "../support/pages/BankingPage";

describe('Menambah Rekening', () => {
    const acc = new  BankingPage();

    beforeEach(() => {
        acc.visit();
        acc.navigateToManagerLogin();
    });


    it('Membuka akun Rekening Dollaar', () => {
        //membahcustomer
        cy.log('Menambah Customer')
        acc.clickAddCustomer();
        acc.fillCustomerDetails('agum','ruswandi','E12456');
        acc.submitCustomerForm();
        
        //membuka rekening dollar
        acc.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        acc.selectCustomer('agum ruswandi', 'Dollar');
        acc.clickProcess();
       
       //Validasi rekening sudah terdaftar
       acc.navigateToCustomer();
       cy.log('Mengecek Rekening Dollar yg sudah terdaftar');
       acc.searchCustomer('agum');
       cy.get('table').contains('td', 'agum').should('exist');
       
    });
    

    it('Membuka akun rekening Pondsterling', () => {
         //membahcustomer
         cy.log('Menambah Customer')
         acc.clickAddCustomer();
         acc.fillCustomerDetails('agum','ruswandi','E12456');
         acc.submitCustomerForm();
        

        //membuka rekening dollar
        acc.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        acc.selectCustomer('agum ruswandi', 'Dollar');
        acc.clickProcess();
       

        //membuka rekening Pondsterling
        cy.log('Menambah Rekening Pound');
        acc.selectCustomer('agum ruswandi', 'Pound');
        acc.clickProcess();
        
        //Validasi rekening sudah terdaftar
        acc.navigateToCustomer();
        cy.log('Mengecek Rekening Dollar & Pound yg sudah terdaftar');
        acc.searchCustomer('agum');
        cy.get('table').contains('td', 'agum').should('exist');

    });

    it('Menambah Rekening Ruppe', () => {
         //membahcustomer
         cy.log('Menambah Customer');
         acc.clickAddCustomer();
         acc.fillCustomerDetails('agum','ruswandi','E12456');
         acc.submitCustomerForm();
         
        //membuka rekening dollar
        acc.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        acc.selectCustomer('agum ruswandi', 'Dollar');
        acc.clickProcess();

        //membuka rekening Pondsterling
        cy.log('Menambah Rekening Pound');
        acc.selectCustomer('agum ruswandi', 'Pound');
        cy.log('Menambah Rekening Pound');
        acc.clickProcess();
        
         //menambah rekening Rupee
        cy.log('Menambah Rekening Rupee');
        acc.selectCustomer('agum ruswandi', 'Rupee');
        acc.clickProcess();
        
         //validasi 
        acc.navigateToCustomer();
        cy.log('Mengecek Rekening Dollar,Pound & Rupee yg sudah terdaftar');
        acc.searchCustomer('agum');
        cy.get('table').contains('td', 'agum').should('exist');


    });


    it('Validasi pengujian  menambah akun dollar kedua ', () => {
        //menambah akun dollar ganda 
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        acc.selectCustomer('Hermoine Granger', 'Dollar')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');

        //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Validasi pengujian  menambah akun dollar ketiga ', () => {
        //menambah akun dollar ganda 
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        acc.selectCustomer('Hermoine Granger', 'Dollar')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');


        //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        

        //menambah akun dollar ketiga
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Dollar ketiga');
        acc.selectCustomer('Hermoine Granger', 'Dollar')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');

         //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Validasi pengujian menambah akun Pond ke dua', () => {
        //menambah akun pound ganda 
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        acc.selectCustomer('Ron Weasly', 'Pound')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');

        //validasi rekening pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Validasi pengujian menambah akun Pound ketiga', () => {
        //menambah akun Pound ganda 
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        acc.selectCustomer('Ron Weasly', 'Pound')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');


        //validasi rekening Pound tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        

        //menambah akun Pound ketiga
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Pound ketiga');
        acc.selectCustomer('Ron Weasly', 'Dollar')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');

         //validasi rekening Pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Validasi pengujian menambakan akun Rupee kedua ', () => {
        //menambah akun Rupee ganda 
        acc.navigateToOpenaccount();
        cy.log('Menambah akun Rupee kedua');
        acc.selectCustomer('Harry Potter', 'Rupee')
        acc.clickProcess();
        acc.verifyAlertText('Account created successfully');

        //validasi rekening Rupee tertambahkan
        cy.log('mengecek akun Rupee tertambahkan')
        acc.navigateToCustomer();
        acc.searchCustomer('Harry');
        cy.get('table').contains('td', 'Harry').should('exist');
    });

    it('Validasi pengujian Menambakan akun Rupee ketiga', () => {
         //menambah akun Rupee ganda 
         acc.navigateToOpenaccount();
         cy.log('Menambah akun Rupee kedua');
         acc.selectCustomer('Harry Potter', 'Rupee')
         acc.clickProcess();
         acc.verifyAlertText('Account created successfully');
 
 
        //validasi rekening Rupee tertambahkan
         cy.log('mengecek akun Rupee tertambahkan')
         acc.navigateToCustomer();
         acc.searchCustomer('Harry');
         cy.get('table').contains('td', 'Harry').should('exist');
         
 
         //menambah akun Rupee ketiga
         acc.navigateToOpenaccount();
         cy.log('Menambah akun Ruppe ketiga');
         acc.selectCustomer('Harry Potter', 'Rupee')
         acc.clickProcess();
         acc.verifyAlertText('Account created successfully');
 
          //validasi rekening Rupee tertambahkan
         cy.log('mengecek akun Rupee tertambahkan')
         acc.navigateToCustomer();
         acc.searchCustomer('Harry');
         cy.get('table').contains('td', 'Harry').should('exist');
         
    });

    it('Validasi pengujian tombol Home di OpenAccount', () => {
        acc.navigateToOpenaccount();
        acc.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('exist');
        cy.get('button[ng-click="customer()"]').should('exist');
        cy.get('button[ng-click="manager()"]').should('exist');
    });

});
