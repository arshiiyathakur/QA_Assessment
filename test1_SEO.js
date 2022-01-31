
describe('Test header meta tags for SEO', () => {
   
  // it('verify META tags for SEO', () =>{
   
  //     cy.visit("http://uitestingplayground.com/home")
  //     cy.on('window:confirm', cy.stub().as('confirm'))
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //         // returning false here prevents Cypress from
  //         // failing the test
  //     return false
  //     })
       it("Verify meta tag page title for SEO", () => {
        cy.visit("http://uitestingplayground.com/home")
       cy.title().should("eq", "UI Test Automation Playground");
        });

       it("Verify meta tag page description for SEO", () => {
        cy.visit("http://uitestingplayground.com/home")
       cy.get('meta[name="viewport"]').should(
       "have.attr",
       "content",
       "width=device-width, initial-scale=1, shrink-to-fit=no"
       );
       });
      })

