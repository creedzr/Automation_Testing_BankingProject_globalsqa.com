/// <reference types="cypress" />
describe('Menambah Custommer', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); 
        cy.get('button[ng-click="manager()"]').click();
 
    });


it('Test panjang karakter tanpa mengetik manual', () => {
    cy.get('button[ng-click="addCust()"]').click();

    const maxAllowedLength = 225; // Batas panjang karakter yang diinginkan
    const inputs = [
        { selector: 'input[ng-model="fName"]', value: 'A'.repeat(1000) },
        { selector: 'input[ng-model="lName"]', value: 'B'.repeat(1000) },
        { selector: 'input[ng-model="postCd"]', value: 'C'.repeat(1000) },
    ];

    // Helper untuk memeriksa panjang karakter
    const checkLength = (selector, value, maxLength) => {
        cy.get(selector)
            .invoke('val', value)
            .trigger('input')
            .invoke('val')
            .then((inputValue) => {
                const actualLength = inputValue.length;
                cy.log(`Panjang karakter pada field ${selector}: ${actualLength}`);
                
                if (actualLength > maxLength) {
                    cy.log(`Field ini tidak memiliki batas panjang karakter.`);
                } else {
                    cy.log(`Field ini memiliki batas panjang karakter: ${actualLength}`);
                }

                // Assertion: Pastikan panjang karakter tidak melebihi batas
                expect(actualLength).to.be.at.most(maxLength, `Field ${selector} seharusnya membatasi jumlah karakter.`);
            });
    };

    // Iterasi untuk memeriksa semua input field
    inputs.forEach((input) => {
        checkLength(input.selector, input.value, maxAllowedLength);
    });

    // Klik tombol submit
    cy.get('.btn.btn-default').click();

    // Verifikasi alert setelah submit
    cy.on('window:alert', (alertText) => {
        cy.log(`Teks alert: ${alertText}`);
        expect(alertText).to.include('Customer added successfully');
    });
});
});
