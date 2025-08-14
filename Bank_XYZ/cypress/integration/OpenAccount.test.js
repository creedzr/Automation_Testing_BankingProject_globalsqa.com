/// <reference types="cypress" />
import  BankingPage from "../support/pages/BankingPage";

describe('Validasi Fitur Menambah Rekening', () => {
    const Banking = new  BankingPage();

    beforeEach(() => {
        Banking.visit();
        Banking.navigateToManagerLogin();
    });


    it('Harus berhasil membuka akun dengan mata uang Dollar untuk customer baru', () => {
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
    

    it('Harus berhasil membuka akun dengan mata uang Pound', () => {
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

    it('Harus berhasil membuka akun dengan mata uang Rupee', () => {
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


    it('Harus berhasil menambah akun Dollar kedua untuk customer yang sama', () => {
        //menambah akun dollar ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        Banking.selectCustomer('Hermoine Granger', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Account created successfully');

        //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Harus berhasil menambah akun Dollar ketiga untuk customer yang sama ', () => {
        //menambah akun dollar ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Dollar kedua');
        Banking.selectCustomer('Hermoine Granger', 'Dollar')
        Banking.clickProcess();
        Banking.verifyAlertText('Account created successfully');


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
        Banking.verifyAlertText('Account created successfully');

         //validasi rekening dollar tertambahkan
        cy.log('mengecek akun dollar tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Hermoine');
        cy.get('table').contains('td', 'Hermoine').should('exist');
        
    });

    it('Harus berhasil menambah akun Pound kedua untuk customer yang sama', () => {
        //menambah akun pound ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        Banking.selectCustomer('Ron Weasly', 'Pound')
        Banking.clickProcess();
        Banking.verifyAlertText('Account created successfully');

        //validasi rekening pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Harus berhasil menambah akun Pound ketiga untuk customer yang sama', () => {
        //menambah akun Pound ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Pound kedua');
        Banking.selectCustomer('Ron Weasly', 'Pound')
        Banking.clickProcess();
        Banking.verifyAlertText('Account created successfully');


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
        Banking.verifyAlertText('Account created successfully');

         //validasi rekening Pound tertambahkan
        cy.log('mengecek akun Pound tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Ron');
        cy.get('table').contains('td', 'Ron').should('exist');
        
    });

    it('Harus berhasil menambah akun Rupee kedua untuk customer yang sama ', () => {
        //menambah akun Rupee ganda 
        Banking.navigateToOpenaccount();
        cy.log('Menambah akun Rupee kedua');
        Banking.selectCustomer('Harry Potter', 'Rupee')
        Banking.clickProcess();
        Banking.verifyAlertText('Account created successfully');

        //validasi rekening Rupee tertambahkan
        cy.log('mengecek akun Rupee tertambahkan')
        Banking.navigateToCustomer();
        Banking.searchCustomer('Harry');
        cy.get('table').contains('td', 'Harry').should('exist');
    });

    it('Harus berhasil menambah akun Rupee ketiga untuk customer yang sama', () => {
         //menambah akun Rupee ganda 
         Banking.navigateToOpenaccount();
         cy.log('Menambah akun Rupee kedua');
         Banking.selectCustomer('Harry Potter', 'Rupee')
         Banking.clickProcess();
         Banking.verifyAlertText('Account created successfully');
 
 
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
         Banking.verifyAlertText('Account created successfully');
 
          //validasi rekening Rupee tertambahkan
         cy.log('mengecek akun Rupee tertambahkan')
         Banking.navigateToCustomer();
         Banking.searchCustomer('Harry');
         cy.get('table').contains('td', 'Harry').should('exist');
         
    });

    it('Harus menavigasi ke halaman Home dari halaman Open Account', () => {
        Banking.navigateToOpenaccount();
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('be.visible');
        cy.get('button[ng-click="customer()"]').should('be.visible');
        cy.get('button[ng-click="manager()"]').should('be.visible');
    });

});
