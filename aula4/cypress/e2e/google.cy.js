/// <reference = cypress>

const website = 'https://www.google.com/'


describe('Access to the search engine', () => {

    it('Should return Inatel\'s homepage on the first result', () => {
        cy.visit(website)
        cy.get('textarea').first().should('be.visible').type('Inatel')
        cy.get('textarea').first().type('{enter}')
        cy.get('h3').first().should('be.visible').click()
        cy.url({ timeout: 10000 }).should('include', 'inatel.br/home/')
    })

    it('Should access the website', () => {
        cy.visit(website)
        cy.url().should('eq', website)
    })

    it('Should display the Google logo', () => {
        cy.visit(website)
        cy.get('img[alt="Google"]').should('be.visible')
    })

    it('Should be able to use the search bar', () => {
        cy.visit(website)
        cy.get('textarea').first().should('be.visible').type('Inatel')
        cy.get('textarea').first().type('{enter}')
        cy.url().should('include', '/search?q=Inatel')
    })

    describe('Search with Invalid Input', () => {
        it('Should display a no results message when searching with invalid input', () => {
            let randomS = Math.random().toString(36).substring(2, 15)
            cy.visit(website)
            cy.get('textarea').first().should('be.visible').type(randomS)
            cy.get('textarea').first().type('{enter}')
            cy.url().should('include', `/search?q=${randomS}`)
            cy.get('h3').should('not.exist')
        })
    })
})

describe('Search engine results', () => {
    it('Should display search suggestions when typing in the search bar', () => {
        cy.visit(website)
        cy.get('textarea').first().should('be.visible').type('Inatel')
        cy.get('ul > li').first().find('span').first().invoke('text').should('eq', 'inatel')
    })

    
})
