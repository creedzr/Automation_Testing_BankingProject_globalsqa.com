/// <reference types="cypress"/>
import  BankingPage from "../support/pages/BankingPage";

describe('Validasi Fitur User ', () => {
    const Banking = new BankingPage;
    beforeEach(() => {
        Banking.visit();
        Banking.navigateToCustomerlogin();
    });


    it('Harus menampilkan pesan error saat deposit menggunakan huruf (input tidak valid)', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();

        //melakukan deposit rekening dollar
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('abnmci');
        Banking.submitdeposit();
        cy.get('input[ng-model="amount"]').should('have.prop', 'validationMessage', 'Please fill out this field.');

    });



    it('Harus berhasil menambahkan nilai ke rekening dollar', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();

        //melakukan deposit rekening dollar
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('1000');
        Banking.submitdeposit();

        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');

    });
});