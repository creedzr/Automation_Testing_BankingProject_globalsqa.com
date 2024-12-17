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



    it('Harus dapat menampikan Transaksi di rekening Pound', () => {
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening Pound
        cy.log('memilih rekening');
        Banking.selectaccount('1005');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1005').should('be.visible');
        cy.contains('Currency : Pound').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('7000');
        Banking.submitdeposit();
        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');
        
        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('5000');
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

    it('Harus dapat menampikan Transaksi di rekening Ruppe', () => {
        cy.log('Memilih user')
        Banking.selectuser('Harry Potter');
        Banking.loginusername();
       
        //melakukan deposit rekening Rupee
        cy.log('memilih rekening');
        Banking.selectaccount('1006');
        //assertion
        cy.contains('Harry Potter').should('be.visible');
        cy.contains('Account Number : 1006').should('be.visible');
        cy.contains('Currency : Rupee').should('be.visible');
        
        Banking.deposit();
        cy.log('memasukan jumlah');
        Banking.enteramount('10000');
        Banking.submitdeposit();
        //assertion
        cy.log('muncul assertion');
        cy.contains('span', 'Deposit Successful').should('be.visible');
        
        //masuk menu withdrawl
        Banking.withdrawl();
        cy.contains('Amount to be Withdrawn :').should('be.visible');
        cy.log('memasukan jumlah');
        Banking.enterwithdrawl('5000');
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

    it('Harus dapat mengatur history tanggal Transaksi', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();

        //masuk ke menu tanggal
        cy.log('memilih tanggal mulai')
        Banking.startdate('2015-01-02T10:30');

        cy.log('memilih akhir tanggal')
        Banking.enddate('2024-12-17T19:05:04')
    });

    it('Harus dapat  menggunakan button scroll', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();

        //menggunakan scroll kekanan
        cy.log('menggunakan scroll right');
        Banking.scrollright(5);

        //menggunakan scroll ke kiri
        cy.log('menggunakan scroll left');
        Banking.scrollleft(2);

        //menggukana scroll TOP
        cy.log('menggunakan scroll Top');
        Banking.scrollTop();
    });

    it('Harus dapat menggunakan Tombol sort', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();

        //menggukan sort
        cy.log('menggukan sort pertama');
        Banking.sort();
        //assetion
        cy.contains('Jul 28, 2015 12:00:00 AM').should('be.visible');

        cy.log('menggunakan sort ke dua')
        Banking.sort();
        //assertion
        cy.contains('Jan 1, 2015 12:00:00 AM').should('be.visible');
    });

    it('Harus dapat menggukan tombol reset', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();

        //menggukan fungsi reset
        cy.log('menggukan reset');
        Banking.reset();
        //assertion
        cy.contains('Date-Time ').should('be.visible');
    });

    it('Harus berhasil Logout dari halaman transaksi', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();

        //logout
        cy.log('logout');
        Banking.Logout();

        //assertion
        cy.contains('Your Name :').should('be.visible');
        cy.get('#userSelect').should('exist').and('be.visible')
    });

    it('Harus berhasil navigasi ke Home di halaman Transaksi', () => {
        //memilih user
        cy.log('Memilih user')
        Banking.selectuser('Hermoine Granger');
        Banking.loginusername();

        //memilih rekening
        cy.log('memilih rekening');
        Banking.selectaccount('1001');

        //masuk menu transaksi
        cy.log('masuk ke menu transaksi')
        Banking.transaction();
        //kembali ke halaman utama
        cy.log('kembali ke halaman utama')
        Banking.navigateTohome();

        //assertion
        cy.get('button[ng-click="home()"]').should('be.visible');
        cy.get('button[ng-click="customer()"]').should('be.visible');
        cy.get('button[ng-click="manager()"]').should('be.visible');
    });
});