/// <reference types="cypress" />

export class createAccountMethods {

    submitCreateRequest (email) {
        cy.get('#email_create').type(email)
        //cy.get('#SubmitCreate').click()
/*         cy.visit({
            url: 'http://automationpractice.com/index.php',
            method: 'POST',
            qs: {
                controller:'authentication',
                back: 'my-account#account-creation'
            },
            body: {
                controller:"authentication",
                SubmitCreate:1,
                ajax:true,
                email_create:email,
                back:"my-account",
                token:"ce65cefcbafad255f0866d3b32d32058"
            }
        }) */

        // V2
         cy.visit({
            url: 'http://automationpractice.com/index.php',
            method: 'POST',
            qs: {
                controller:'authentication',
                back: 'my-account'
            },
            body: `controller=authentication&SubmitCreate=1&ajax=true&email_create=email3%40email.com&back=my-account&token=ce65cefcbafad255f0866d3b32d32058`,
            headers: {
                'Accept': "application/json, text/javascript, */*; q=0.01",
                'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                'X-Requested-With': "XMLHttpRequest"
            }
        })
        

        // V3
/*         cy.request({
            url: 'http://automationpractice.com/index.php',
            method: 'POST',
            form: true,
            qs: {
                controller:'authentication',
                back: 'my-account#account-creation'
            },
            body: `controller=authentication&SubmitCreate=1&ajax=true&email_create=${email}&back=my-account&token=ce65cefcbafad255f0866d3b32d32058`,
            headers: {
                'Accept': "application/json, text/javascript, ; q=0.01",
                'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                'X-Requested-With': "XMLHttpRequest"
            }
        }) */
        
    }
}

export const createAccountPage = new createAccountMethods()