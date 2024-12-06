/// <reference types="cypress"/>
import  BankingPage from "../support/pages/BankingPage";

describe('Uji Coba test Customer ', () => {
    const Banking = new BankingPage;
    beforeEach(() => {
        Banking.visit();
        Banking.navigateToCustomerlogin();
    });


    it('Validasi penambahan deposit di rekening dollar', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
    });
});