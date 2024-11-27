/// <reference = cypress>

const website = 'https://books.goalkicker.com/'

describe('GoalKicker Books Website', () => {
    beforeEach(() => {
        cy.visit(website)
    })

    it('Should load the homepage successfully', () => {
        cy.url().should('eq', website)
    })

    it('Should display the GoalKicker\'s title', () => {
        cy.get('h1').should('contain.text', 'Programming Notes for Professionals')
    })

    it('Should list available programming books', () => {
        cy.get('.books .bookContainer.grow').should('have.length.greaterThan', 0);
    })

    it('Should navigate to a specific book page', () => {
        cy.get('img[alt="JavaScript book"]').parent('a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/JavaScriptBook/')
        cy.get('h1').should('contain.text', 'JavaScript® Notes for Professionals')
    })

    it('Should download a book PDF', () => {
        cy.get('img[alt="JavaScript book"]').parent('a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/JavaScriptBook/')
        cy.get('button.download').should('have.attr', 'onclick').and('include', 'JavaScriptNotesForProfessionals.pdf')
    })

    it('Should display a message for non-existent book pages', () => {
        cy.visit(website + 'NonExistentBook/', { failOnStatusCode: false })
        cy.contains('404').should('be.visible')
    })
})
