// =============================================================================
// Explore NFTs
// =============================================================================


describe('Explore Hicetnunc Homepage', () => {

    beforeEach(() => {
        cy.viewport(1800, 1000)
            // Cypress.Cookies.preserveOnce();
    })

    it('Go to home page and try to buy a product', () => {
        cy.visit("https://www.hicetnunc.xyz/");
        cy.scrollTo('bottom', { duration: 8000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 8000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 5000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 5000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 5000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 5000 });
        cy.wait(1000)
        cy.scrollTo('bottom', { duration: 5000 });
    });


});