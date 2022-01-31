
describe('Test Broken Links the links which are valid and exists', () => {
   
    it('verify links accross the pages', () =>{
     
        cy.visit("http://uitestingplayground.com/home")
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })
        //check for valid and existing links 
        cy.wrap('passed').as('ctrl')
        cy.get("a:not([href*='mailto:]']").each($el => {
 
                if ($el.prop('href').length > 0) {
                    const message = $el.text()
                    expect($el, message).to.have.attr("href").not.contain("undefined")
                    cy.log($el.attr('href'))                       
                }
        })
    })
})

