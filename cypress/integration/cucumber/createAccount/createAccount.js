/// <reference types="cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"
import {createAccountPage} from "../../pages/createAccount"

Given(`the sign up page`, () => {
    createAccountPage.gettingInitialPage()
})

And(`I write my information`, () => {
    createAccountPage.fillingInformation()
})

And(`I check the terms of use`, () => {
    createAccountPage.checkingTerms()
})

When(`I sign up`, () => {
    createAccountPage.clickSubmit()
})

Then(`The server return a captcha`, () => {
    createAccountPage.checkCaptchaRequest()
})