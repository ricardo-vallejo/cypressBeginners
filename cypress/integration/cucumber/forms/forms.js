/// <reference types="cypress" />

import {And, Given, Then} from "cypress-cucumber-preprocessor/steps"
import {formPage} from "../../pages/forms"

Given(`the form page`, () => {
    formPage.gettingInitialPage()
})
Then(`fill the first name {string}`, formName => {
    formPage.fillingFirstName(formName)
})
And(`fill the first message {string}`, formMessage => {
    formPage.fillingFirstMessage(formMessage)
})
And(`submit the first button`, () => {
    formPage.clickingFirstSubmit()
})

Then(`fill the second name {string}`, formName => {
    formPage.fillingSecondName(formName)
})
And(`fill the second message {string}`, formMessage => {
    formPage.fillingSecondMessage(formMessage)
})
And(`solve the captcha`, () => {
    formPage.fillCaptcha()
})
And(`submit the second button`, () => {
    formPage.clickingSecondSubmit()
})