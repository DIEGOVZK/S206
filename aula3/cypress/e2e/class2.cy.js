/// <reference = cypress>

const website = 'https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login'

function getDateStringAsID() {
    return new Date().toISOString().split('T')[0].replace(/-/g, '')
}

function registerGenericUser() {
    cy.visit(website)
    cy.get('.btn-link').click()
    cy.get('#firstName').type(getDateStringAsID())
    cy.get('#Text1').type(getDateStringAsID())
    cy.get('#username').type(getDateStringAsID())
    cy.get('#password').type(getDateStringAsID())
    cy.get('.btn-primary').should('be.enabled')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding.ng-scope.alert.alert-success').should('contain.text', 'Registration successful')
}

describe('Resgister and login', () => {
    it('Should access the website', () => {
        cy.visit(website)
        cy.url().should('eq', website)
    })

    it('Should fail to login the first time', () => {
        cy.visit(website)
        cy.get('#username').type(getDateStringAsID())
        cy.get('#password').type(getDateStringAsID())
        cy.get('.btn-primary').click()
        cy.get('.ng-binding.ng-scope.alert.alert-danger').should('contain.text', 'Username or password is incorrect')
    })

    it('Should login with the new user', () => {
        registerGenericUser()
        cy.get('#username').type(getDateStringAsID())
        cy.get('#password').type(getDateStringAsID())
        cy.get('.btn-primary').should('be.enabled')
        cy.get('.btn-primary').click()
        cy.get('.ng-binding.ng-scope').should('contain.text', 'Hi ' + getDateStringAsID() + '!')
    })

    it('Should delete the user', () => {
        registerGenericUser()

        cy.get('#username').type(getDateStringAsID())
        cy.get('#password').type(getDateStringAsID())
        cy.get('.btn-primary').should('be.enabled')
        cy.get('.btn-primary').click()
        cy.get('.ng-binding.ng-scope').should('contain.text', 'Hi ' + getDateStringAsID() + '!')

        cy.get('.ng-binding.ng-scope')
            .contains(getDateStringAsID())
            .parent()
            .find('a[ng-click="vm.deleteUser(user.id)"]')
            .click()
        cy.get('.ng-binding.ng-scope').should('contain.text', 'Hi ' + '!')

        // Should fail to login the second time
        cy.visit(website)
        cy.get('#username').type(getDateStringAsID())
        cy.get('#password').type(getDateStringAsID())
        cy.get('.btn-primary').click()
        cy.get('.ng-binding.ng-scope.alert.alert-danger').should('contain.text', 'Username or password is incorrect')
    })
})
