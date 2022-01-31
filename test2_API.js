describe("Verify and validate API automation with CURD operations", () => {

  it("Test GET Request", () => {
        cy.request("https://restful-booker.herokuapp.com/booking")
             .then((response) => {
              expect(response.status).equal(200)
        })
  })
 

  it("Test POST Request", () => {
    url: 'https://restful-booker.herokuapp.com/booking'
    Cypress.Commands.add('returnBody', (url, token) => {
      return cy.request({ /* options */ })
        .its("body");
    });
    it("should return foo value", () => {
      cy.returnBody('https://restful-booker.herokuapp.com/auth', token).then(returned_value => {
        cy.log(returned_value);
        expect(returned_value).to.deep.equal("foo-value");
      })
    })
        cy.request({
             method: 'POST',
             url: 'https://restful-booker.herokuapp.com/auth',
             body: {
              "bookingid": 22
             }
        }).then((response) => { 
               expect(response.body.bookingid).equal(response.body.bookingid);
                //expect(response.body.password).equal(response.body.password);
                //expect(response.body).has.property("password","password123"); 
        })
  })

  it("Test PUT Request", () => {
        cy.request({
                failOnStatusCode: false,
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/auth',
                body: { 
                  "bookingid": 33
                }
        }).then((response) => { 
          expect(response.body.bookingid).equal(response.body.bookingid);
        })          
  })        

  it("Test DELETE Request", () => {
        cy.request({
                  failOnStatusCode: false,
                  method : 'DELETE',
                  url: 'https://restful-booker.herokuapp.com/booking'
                  }).then((response) => {
                   expect(response.body.bookingid).to.be.empty;
                   
        })	
  })

})