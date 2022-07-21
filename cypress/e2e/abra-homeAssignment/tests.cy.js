/// <reference types="cypress" />

import el from "../../pom/mainPage"

const nTests = require('../../fixtures/data-driven/contactData.json')

describe('Sanity tests', () => {

    beforeEach(() => {
        el.open();
        cy.fixture('data').then(function(data){
            this.data = data
        })
    })
        
    it(`Check Scenario 1 - fill fields and send the form`, function(){
        el.FooterLabel.should('have.text', 'איך אפשר לעזור?')
        el.nameField.type(this.data.name)
        el.emailField.type(this.data.email)
        el.phoneField.type(this.data.phone)
        el.sendBtn.click()

        el.thanksMsg.should('have.text', 'תודה!')
        el.goToSite.click()
        el.logo.should('be.visible')
        cy.go('back')
    }) 

    it(`Check Scenario 2 - verifies text and icons`, function(){
        el.wait()
        el.cardImg.scrollIntoView().should('be.visible')
        el.cardTitle.should('have.text', 'מיקור חוץ לפיתוח Frontend ובודקי איכות')   
    })

    it(`Check Scenario 3 - verifies that all images exists using (each) array`, function(){ 
        el.sliderTitle.scrollIntoView().should('have.text', 'עבודות לדוגמה')
        el.sliderDots.should('be.visible')
        const elements = el.sliderTrack

        elements.each(($el) => {
            cy.wrap($el).children().should('be.visible')
        })   
    })

    it(`Check Scenario 4 - verifies text and icons`, function(){
        el.contactUsTitle.scrollIntoView().should('be.visible').should('have.text', 'רוצים לשמוע עוד?')
        el.myName.click({ force: true }).type(this.data.name)
        el.myCompany.click({ force: true }).type(this.data.company)
        el.myEmail.click({ force: true }).type(this.data.email)
        el.myPhone.click({ force: true }).type(this.data.phone)
        el.submitBtn.click()
        el.wait()
        el.jugglingImg.should('be.visible')
    })

    it(`Check Scenario 5 - verifies text and icons`, function(){
        el.whatsApp.should('be.visible').click()
        el.submitBtn.scrollIntoView()   
    })

    it(`Check Scenario 6 - verifies text, links(array) and back-to-top btn in footer`, function(){
        el.portraitImage.scrollIntoView().should('be.visible')
        el.address.should('be.visible').should('have.text', this.data.address)
        
        el.socialMediaBar.each((link) => {
            cy.wrap(link).children().click({ multiple: true })
        })

        el.backToTop.should('be.visible').click()
    })

    nTests.forEach(test => {

        it.only(`Check Scenario 7 - several negative tests`, function(){
            el.myName.click({ force: true }).type(test.name)
            el.myCompany.click({ force: true }).type(test.company)
            el.myEmail.click({ force: true }).type(test.email)
            el.myPhone.click({ force: true }).type(test.phone)
        })
    })    
    
})
