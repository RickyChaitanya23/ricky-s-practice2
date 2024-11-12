/// <reference types= "cypress"/>
describe('example to do test multiple specs', () =>
{  
    it("Css check", () =>
    {
        //cy.login("username", "password");
        cy.logouts()
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.VerifyRadioButtons()

        cy.get("input#checkBoxOption1 ").click();
        cy.log("clicked on option 2")

        cy.get('body').find('select').select('option2')
        cy.log("Australia has been selected for text")

        cy.get("input#autocomplete").type('Aus')
        cy.log("Australia has been selected for text")

        cy.get("input#name").type('ricky')
        cy.log("created an alert for the text")



    
    })
})