/// <reference types="cypress" />
import BankingPage from "../support/pages/BankingPage";

describe('Validasi Fitur Transaksi', () => {
    const Banking = new BankingPage;
    beforeEach(() => {
        Banking.visit();
        Banking.navigateToCustomerlogin();
    });


    it('Harus dapat menampikan Transaksi di rekening Dollar', () => {
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

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();
        //assertion
        cy.log('muncul assertion');
        cy.contains('Date-Time').should('be.visible');

        
    });
});