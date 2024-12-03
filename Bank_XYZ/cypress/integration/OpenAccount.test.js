/// <reference types="cypress" />
import  BankingPage from "../support/pages/BankingPage";

describe('Menambah Rekening', () => {
    const Banking = new  BankingPage();

    beforeEach(() => {
        Banking.visit();
        Banking.navigateToManagerLogin();
    });


    it('Membuka akun Rekening Dollaar', () => {
        //membahcustomer
        cy.log('Menambah Customer')
        Banking.clickAddCustomer();
        Banking.fillCustomerDetails('agum','ruswandi','E12456');
        Banking.submitCustomerForm();
        
        //membuka rekening dollar
        Banking.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        Banking.selectCustomer('agum ruswandi', 'Dollar');
        Banking.clickProcess();
       
       //Validasi rekening sudah terdaftar
       Banking.navigateToCustomer();
       cy.log('Mengecek Rekening Dollar yg sudah terdaftar');
       Banking.searchCustomer('agum');
       cy.get('table').contains('td', 'agum').should('exist');
       
    });
    

    it('Membuka akun rekening Pondsterling', () => {
         //membahcustomer
         cy.log('Menambah Customer')
         Banking.clickAddCustomer();
         Banking.fillCustomerDetails('agum','ruswandi','E12456');
         Banking.submitCustomerForm();
        

        //membuka rekening dollar
        Banking.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        Banking.selectCustomer('agum ruswandi', 'Dollar');
        Banking.clickProcess();
       

        //membuka rekening Pondsterling
        cy.log('Menambah Rekening Pound');
        Banking.selectCustomer('agum ruswandi', 'Pound');
        Banking.clickProcess();
        
        //Validasi rekening sudah terdaftar
        Banking.navigateToCustomer();
        cy.log('Mengecek Rekening Dollar & Pound yg sudah terdaftar');
        Banking.searchCustomer('agum');
        cy.get('table').contains('td', 'agum').should('exist');

    });

    it('Menambah Rekening Ruppe', () => {
         //membahcustomer
         cy.log('Menambah Customer');
         Banking.clickAddCustomer();
         Banking.fillCustomerDetails('agum','ruswandi','E12456');
         Banking.submitCustomerForm();
         
        //membuka rekening dollar
        Banking.navigateToOpenaccount();
        cy.log('Menambah Rekening Dollar');
        Banking.selectCustomer('agum ruswandi', 'Dollar');
        Banking.clickProcess();

        //membuka rekening Pondsterling
        cy.log('Menambah Rekening Pound');
        Banking.selectCustomer('agum ruswandi', 'Pound');
        cy.log('Menambah Rekening Pound');
        Banking.clickProcess();
        
         //menambah rekening Rupee
        cy.log('Menambah Rekening Rupee');
        Banking.selectCustomer('agum ruswandi', 'Rupee');
        Banking.clickProcess();
        
         //validasi 
        Banking.navigateToCustomer();
        cy.log('Mengecek Rekening Dollar,Pound & Rupee yg sudah terdaftar');
        Banking.searchCustomer('agum');
        cy.get('table').contains('td', 'agum').should('exist');


    });


    it('Validasi pengujian  menambah akun dollar kedua ', () => {
        //menambah akun dollar ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        Banking.selectCustomer('Hermoine Granger', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');

        //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Validasi pengujian  menambah akun dollar ketiga ', () => {
        //menambah akun dollar ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        Banking.selectCustomer('Hermoine Granger', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');


        //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        

        //menambah akun dollar ketiga
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Dollar ketiga');
        Banking.selectCustomer('Hermoine Granger', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');

         //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Validasi pengujian menambah akun Pond ke dua', () => {
        //menambah akun pound ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        Banking.selectCustomer('Ron Weasly', 'Pound')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');

        //validasi rekening pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Validasi pengujian menambah akun Pound ketiga', () => {
        //menambah akun Pound ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        Banking.selectCustomer('Ron Weasly', 'Pound')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');


        //validasi rekening Pound tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        

        //menambah akun Pound ketiga
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Pound ketiga');
        Banking.selectCustomer('Ron Weasly', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');

         //validasi rekening Pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Validasi pengujian menambakan akun Rupee kedua ', () => {
        //menambah akun Rupee ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Rupee kedua');
        Banking.selectCustomer('Harry Potter', 'Rupee')
        Banking.clickProcess();
        Banking.verifyAlertText('Bankingount created successfully');

        //validasi rekening Rupee tertambahkan
        cy.log('mengecek akun Rupee tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Harry');
        cy.get('table').contains('td', 'Harry').should('exist');
    });

    it('Validasi pengujian Menambakan akun Rupee ketiga', () => {
         //menambah akun Rupee ganda 
         Banking.navigateToOpenaccount();
         cy.log('Menambah akun Rupee kedua');
         Banking.selectCustomer('Harry Potter', 'Rupee')
         Banking.clickProcess();
         Banking.verifyAlertText('Bankingount created successfully');
 
 
        //validasi rekening Rupee tertambahkan
         cy.log('mengecek akun Rupee tertambahkan')
         Banking.navigateToCustomer();
         Banking.searchCustomer('Harry');
         cy.get('table').contains('td', 'Harry').should('exist');
         
 
         //menambah akun Rupee ketiga
         Banking.navigateToOpenaccount();
         cy.log('Menambah akun Ruppe ketiga');
         Banking.selectCustomer('Harry Potter', 'Rupee')
         Banking.clickProcess();
         Banking.verifyAlertText('Bankingount created successfully');
 
          //validasi rekening Rupee tertambahkan
         cy.log('mengecek akun Rupee tertambahkan')
         Banking.navigateToCustomer();
         Banking.searchCustomer('Harry');
         cy.get('table').contains('td', 'Harry').should('exist');
         
    });

    it('Validasi pengujian tombol Home di Open account', () => {
        Banking.navigateToOpenaccount();
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('exist');
        cy.get('button[ng-click="customer()"]').should('exist');
        cy.get('button[ng-click="manager()"]').should('exist');
    });

});
