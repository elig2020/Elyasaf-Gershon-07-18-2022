class el {

    // visit URL / general
    open(){
        cy.visit('http://automation.herolo.co.il')
    }
    wait(){
        cy.wait(1000)
    }

    // Scenario 1
    get FooterLabel(){
        return cy.get('.Footer__Label-sc-159s1ql-1 > span')
    }
    get nameField(){
        return cy.get('[name="name"]') 
    }
    get emailField(){
        return cy.get('[name="email"]') 
    }
    get phoneField(){
        return cy.get('[name="phone"]') 
    }
    get sendBtn(){
        return cy.get('.Footer__Button-sc-159s1ql-7')
    }
    get thanksMsg(){
        return cy.get('.thankYou__title-avz2fr-5 > span')
    }
    get goToSite(){
        return cy.get('.thankYou__button-avz2fr-9')
    }
    get logo(){
        return cy.get('.thankYou__header-avz2fr-1 > img')
    }

    // Scenario 2
    get cardsContainer(){
        return cy.get('.services__CardsContainer-sc-1us4jnj-2.bAonCo')
    }
    get cardImg(){
        return cy.get(':nth-child(1) > .serviceCard__ServiceImg-sc-2g56at-1')
    } 
    get cardTitle(){
        return cy.get(':nth-child(1) > .serviceCard__TextContainer-sc-2g56at-2 > .serviceCard__Title-sc-2g56at-3 > span')
    }

    // Scenario 3
    get sliderTitle(){
        return cy.get('.portfolio__Portfolio-sc-80s039-0 > .typography__Title-sc-2ylieu-1 > span')
    }
    get sliderDots(){
        return cy.get('.portfolio__Portfolio-sc-80s039-0 > .slick-slider > .slick-dots')
    }
    get sliderTrack(){
        return cy.get('.slick-track')
    }
    get sliderImage(){
        return cy.get('.slick-slide.slick-cloned')
    }

    // Scenario 4
    get contactUsTitle(){
        return cy.get('.contactUs__TextContainer-sc-17vknwe-11 > .typography__Title-sc-2ylieu-1 > span')
    }
    get myName(){
        return cy.get('#name')
    }
    get myCompany(){
        return cy.get('#company')
    }
    get myEmail(){
        return cy.get('#email')
    }
    get myPhone(){
        return cy.get('#telephone')
    }
    get submitBtn(){
        return cy.get('.form__ButtonContainer-y0ft28-3 > .commun__Button-zi6nvq-0')
    }
    get jugglingImg(){
        return cy.get('#juggling')
    }

    // Scenario 5
    get whatsApp(){
        return cy.get('.callUsWhatsapp__BtnWhatsapp-rkzbui-0')
    }
    get backToTop(){
        return cy.get('.backToTop__BtnGoUp-z83xj1-0')
    }
    get scrollDown(){
        return cy.get('.socialMediaBar__container-sc-1ry1db0-1.fQFsPD')
    }

    // Scenario 6
    get portraitImage(){
        return cy.get('.contactPerson__Img-sc-1mn7cct-0.kMFFwY')
    }
    get socialMediaBar(){
        return cy.get('.socialMediaBar__container-sc-1ry1db0-1')
    }
    get address(){
        return cy.get('.socialMediaBar__SocialMediaBar-sc-1ry1db0-0 > .commun__ContactText-zi6nvq-7 > span')
    }
}

export default new el();