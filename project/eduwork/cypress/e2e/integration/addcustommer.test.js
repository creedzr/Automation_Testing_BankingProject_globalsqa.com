/// <reference types="cypress" />

describe('Menambah Custommer', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); 
        cy.get('button[ng-click="manager()"]').click();
 
    });
    
    
    it('Penambahan Customer Baru', () => {
      
       //menambah customer baru
       cy.get('button[ng-click="addCust()"]').click();
       cy.get('input[ng-model="fName"]').type('agum');
       cy.get('input[ng-model="lName"]').type('ruswandi');
       cy.get('input[ng-model="postCd"]').type('1212');
       cy.get('.btn.btn-default').click();

       //notif berhasil menambahkan customer baru
       cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Customer added successfully');
    });
    });

    it('Validasi penambahan duplikat customer', () => {
       //menambahkan duplikasi
       cy.get('button[ng-click="addCust()"]').click();
       cy.get('input[ng-model="fName"]').type('agum');
       cy.get('input[ng-model="lName"]').type('ruswandi');
       cy.get('input[ng-model="postCd"]').type('1212');
       cy.get('.btn.btn-default').click();

       //notif peringatan 
       cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Please check the details. Customer may be duplicate.');
     });  
     
   });


    it('Validasi Penambahan Customer dengan hanya lastname ', () => {
        cy.get('button[ng-click="addCust()"]').click();
        cy.get('input[ng-model="fName"]').clear(); 
        cy.get('input[ng-model="lName"]').type('ruswandi'); 
        cy.get('input[ng-model="postCd"]').clear(); 

        cy.get('.btn.btn-default').click();

        // Verifikasi apakah pesan error muncul untuk kolom yang kosong (fName dan postCd)
        cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
         cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
 
    });

    it('Validasi Penambahan Customer dengan hanya  fname ', () => {
        cy.get('button[ng-click="addCust()"]').click();
        cy.get('input[ng-model="fName"]').type('ruswandi'); 
        cy.get('input[ng-model="lName"]').clear(); 
         cy.get('input[ng-model="postCd"]').clear(); 

        cy.get('.btn.btn-default').click();

        // Verifikasipakah pesan error muncul untuk kolom yang kosong (lName dan postCd)
         cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
         cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
 
    });

    it('Validasi Penambahan Customer dengan hanya  postd ', () => {
        cy.get('button[ng-click="addCust()"]').click();
        cy.get('input[ng-model="fName"]').clear(); 
        cy.get('input[ng-model="lName"]').clear(); 
        cy.get('input[ng-model="postCd"]').type(1212); 

        cy.get('.btn.btn-default').click();

        // Verifikasipakah pesan error muncul untuk kolom yang kosong (fName dan lName)
         cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
         cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        
    });

    it('Validasi Penambahan Customer dengan  filed kosong', () => {
        cy.get('button[ng-click="addCust()"]').click();
        cy.get('input[ng-model="fName"]').clear(); 
        cy.get('input[ng-model="lName"]').clear(); 
        cy.get('input[ng-model="postCd"]').clear(); 

        cy.get('.btn.btn-default').click();

        // Verifikasipakah pesan error muncul untuk kolom yang kosong (fName,lName dan postCd)
         cy.get('input[ng-model="fName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
         cy.get('input[ng-model="lName"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
         cy.get('input[ng-model="postCd"]').should('have.prop', 'validationMessage', 'Please fill out this field.');
        
    });

        // untuk validasi karakter 
        const symbols = '@guuuu%$&*';
        const normal = 'ryu123';
        const normal2 = 'xerses';

       it('Validasi penambahan Custommer dengan karakter di First Name', () => {
        cy.get('button[ng-click="addCust()"]').click();
        
        cy.get('input[ng-model="fName"]').type(symbols);
        cy.get('input[ng-model="lName"]').type(normal);
        cy.get('input[ng-model="postCd"]').type(normal2);

        cy.get('.btn.btn-default').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Customer added successfully');
        });
    });

    it('Validasi penambahan Custommer dengan karakter di Last Name', () => {
        cy.get('button[ng-click="addCust()"]').click();
        
        cy.get('input[ng-model="fName"]').type(normal);
        cy.get('input[ng-model="lName"]').type(symbols);
        cy.get('input[ng-model="postCd"]').type(normal2);

        cy.get('.btn.btn-default').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Customer added successfully');
        });
    });

    it('Validasi penambahan Custommer dengan karakter di Postcode', () => {
        cy.get('button[ng-click="addCust()"]').click();
        
        cy.get('input[ng-model="fName"]').type(normal);
        cy.get('input[ng-model="lName"]').type(normal2);
        cy.get('input[ng-model="postCd"]').type(symbols);

        cy.get('.btn.btn-default').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Customer added successfully');
        });
    });

    it('Validasi penambahan Custommer dengan karakter di semua kolom', () => {
        cy.get('button[ng-click="addCust()"]').click();
        
        cy.get('input[ng-model="fName"]').type(symbols);
        cy.get('input[ng-model="lName"]').type(symbols);
        cy.get('input[ng-model="postCd"]').type(symbols);

        cy.get('.btn.btn-default').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Customer added successfully');
        });
    });


    it('Test panjang karakter tanpa mengetik manual', () => {
        cy.get('button[ng-click="addCust()"]').click();

        const maxAllowedLength = 225; // Batas panjang karakter yang diinginkan
        const longString = 'A'.repeat(1000); // String panjang (lebih dari batas)
        const longString1 = 'B'.repeat(1000);
        const longString2 = 'C'.repeat(1000);
    
        // Langsung set nilai input tanpa mengetik
        cy.get('input[ng-model="fName"]').invoke('val', longString).trigger('input');
        cy.get('input[ng-model="lName"]').invoke('val', longString1).trigger('input');
        cy.get('input[ng-model="postCd"]').invoke('val', longString2).trigger('input');
    
        // Verifikasi panjang karakter
        cy.get('input[ng-model="fName"]').invoke('val').then((value) => {
            cy.log(`Panjang karakter yang diterima: ${value.length}`);
            
            // Cek apakah panjang melebihi batas
            if (value.length > maxAllowedLength) {
                cy.log('Field ini tidak memiliki batas panjang karakter atau batasnya sangat tinggi.');
            } else {
                cy.log(`Field ini memiliki batas panjang karakter: ${value.length}`);
            }
    
            // Assertion hanya untuk mencatat apakah field seharusnya dibatasi
            expect(value.length).to.be.greaterThan(maxAllowedLength, 'Field tidak membatasi jumlah karakter.');
        });

        cy.get('input[ng-model="lName"]').invoke('val').then((value) => {
            cy.log(`Panjang Karakter yang diterima: ${value.length}`);

            if (value.length > maxAllowedLength) {
                cy.log('Field ini tidak memiliki batas panjang karakter');
            } else {
                 cy.log(`Field ini memiliki batas panjang karakter: ${value.length}`);
            }

            expect(value.length).to.be.greaterThan(maxAllowedLength, 'Field tidak membatasi jumlah karakter.');
            
        });

        cy.get('input[ng-model="postCd"]').invoke('val').then((value) => {
            cy.log(`Panjang Karakter yang diterima: ${value.length}`);

            if (value.length > maxAllowedLength) {
                cy.log('Field ini tidak memiliki batas panjang karakter');
            } else {
                 cy.log(`Field ini memiliki batas panjang karakter: ${value.length}`);
            }

            expect(value.length).to.be.greaterThan(maxAllowedLength, 'Field tidak membatasi jumlah karakter.');
            
        });

        cy.get('.btn.btn-default').click();

       //notif berhasil menambahkan customer baru
       cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Customer added successfully');
       });
});
});