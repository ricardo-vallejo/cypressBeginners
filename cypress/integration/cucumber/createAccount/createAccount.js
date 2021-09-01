/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps"
import { commonMethodsPage } from "../../pageObjects/common"
import { contactPage } from "../../pageObjects/contactPage"
import { createAccountPage } from "../../pageObjects/createAccountPage"

Given(`the main page`, () => {
    commonMethodsPage.openMainPage()
    commonMethodsPage.openSignInUp()
    createAccountPage.submitCreateRequest('email3@email.com')
})