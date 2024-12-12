/// <reference types="cypress"/>
import  BankingPage from "../support/pages/BankingPage";

describe('Validasi Fitur User di rekening Dollar ', () => {
    const Banking = new BankingPage;
    beforeEach(() => {
        Banking.visit();
        Banking.navigateToCustomerlogin();
    });


    it('Harus menampilkan pesan error saat deposit menggunakan huruf di rekening Dollar', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('abnmci');
        Banking.submitdeposit();
        cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });

    it('Harus menampilkan pesan error saat deposit menggunakan simbol di rekening Dollar', () => {
         //memilih user
         cy.log('Memilih user')
         Banking.selectuser('Harry Potter');
         Banking.loginusername();
        
         //melakukan deposit rekening dollar
         cy.log('memilih rekening');
         Banking.selectaccount('1004');
         //assertion
         cy.contains('Harry Potter').should('be.visible');
         cy.contains('Account Number : 1004').should('be.visible');
         cy.contains('Currency : Dollar').should('be.visible');
         
         Banking.deposit();
         cy.log('memasukan jumlah');
         Banking.enteramount('%$#@&^!');
         Banking.submitdeposit();
         cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
    });


    it('Harus Tidak Ada Respons Saat Deposit Menggunakan Nilai minus  di rekening Dollar', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('-1000');
        Banking.submitdeposit();
        cy.get('button[type="submit"]').should('not.be.disabled');
       
   });


   it('Harus menampilkan pesan error saat deposit menggunakan huruf dan angka di rekening Dollar', () => {
    //memilih user
    cy.log('Memilih user')
    Banking.selectuser('Harry Potter');
    Banking.loginusername();
   
    //melakukan deposit rekening dollar
    cy.log('memilih rekening');
    Banking.selectaccount('1004');
    //assertion
    cy.contains('Harry Potter').should('be.visible');
    cy.contains('Account Number : 1004').should('be.visible');
    cy.contains('Currency : Dollar').should('be.visible');
    
    Banking.deposit();
    cy.log('memasukan jumlah');
    Banking.enteramount('100adfgh');
    Banking.submitdeposit();
    cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
});


    it('Harus berhasil menambahkan nilai ke rekening dollar', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();

        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('5000');
        Banking.submitdeposit();
        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');

    });
    
    it('Harus muncul pesan error saat withdrawl menggunakan huruf di rekening Dollar', () => {
         //memilih user
         cy.log('Memilih user')
         Banking.selectuser('Harry Potter');
         Banking.loginusername();

         //memilih rekening
         cy.log('memilih rekening');
         Banking.selectaccount('1004');

        //masuk menu withdrawl
         Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('affffk');
        cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });


    it('Harus muncul pesan error saat withdrawl mengunakan simbol di rekening dollar ', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1004');

        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('@#$%^&*');
        cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
    });


    it('Harus Tidak Ada Respons Saat withdrawl Menggunakan Nilai minus  di rekening Dollar', () => {
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('1000');
        Banking.submitdeposit();
        

        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('-1000');
        cy.get('button[type="submit"]').should('not.be.disabled');

    });


    it('Withdrawal harus ditolak ketika jumlah melebihi saldo di rekening Dollar', () => {
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('5000');
        Banking.submitdeposit();
        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');
        
        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('7000');
        Banking.submitwithdrawl();
        //assertion
        cy.contains('Transaction Failed. You can not withdraw amount more than the balance.').should('be.visible');
    });

    it('Harus berhasil melakukan withdrawl di rekening Dollar', () => {
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening dollar
        cy.log('memilih rekening');
        Banking.selectaccount('1004');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('5000');
        Banking.submitdeposit();
        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');
        

        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('2000');
        Banking.submitwithdrawl();
        //assertion
        cy.contains('Transaction successful').should('be.visible');
    });


    it('Harus berhasil melakukan Logout di halaman user', () => {
        cy.log('Memilih user');
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');

        //logouta
        cy.log('melakukan logout');
        Banking.Logout();
        
        //assertion
        cy.contains('Your Name :').should('be.visible');
        cy.get('#userSelect').should('exist').and('be.visible')
        
    });

    it('Harus berhasil memvalidasi tombol navigasi Home di halaman user', () => {
        cy.log('Memilih user');
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
        
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1004').should('be.visible');
        cy.contains('Currency : Dollar').should('be.visible');

        cy.log('kembali ke halaman utama')
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('be.visible');
        cy.get('button[ng-click="customer()"]').should('be.visible');
        cy.get('button[ng-click="manager()"]').should('be.visible');
    });
});