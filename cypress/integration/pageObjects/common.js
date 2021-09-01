/// <reference types="cypress" />

export class commonMethods {
    openMainPage() {
        cy.visit('http://automationpractice.com/index.php')
    }

    searchBar(searchText) {
        cy.get('#search_query_top').type(searchText+'{enter}')
    }

    homePage() {
        cy.get('.logo').click()
    }

    viewShoppingCart() {
        cy.get('[title="View my shopping cart"]').trigger('mouseover')
    }

    checkoutCart() {
        cy.get('#button_order_cart').click()
    }

    addProduct() {
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    }

    moreAboutProduct() {
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .lnk_view > span')
    }

    quickViewProduct() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open')
    }

    closeQuickView() { 
        cy.get('.fancybox-close').click()
    }

    continueShopping() {
        cy.get('.continue > span').click()
    }

    checkoutPopUp () {
        cy.get('.button-medium > span').click()
    }
    
    getOptionTopMenu (menuOption) {
        cy.get('#block_top_menu > .sf-menu > li > a').contains(menuOption, {matchCase: false}).click()
    }

    getChildTopMenu (menuOption, menuChild) {
        cy.get('#block_top_menu > .sf-menu > li > a')
        .contains(menuOption, {matchCase: false})
        .siblings('.submenu-container').invoke('attr', 'style', 'display: block')
        .contains(menuChild, {matchCase: false}).click()
    }

    openContactForm () {
        cy.get('#contact-link > a').click()
    }

    openSignInUp () {
        cy.get('.login').click()
    }

    getInformationLinkFooter (nameLink) {
        cy.get('#block_various_links_footer > .toggle-footer > li > a')
        .contains(nameLink, {matchCase: false}).click()
    }

    getMyAccountLinkFooter (nameLink) {
        cy.get('.bullet > li > a')
        .contains(nameLink, {matchCase: false}).click()
    }
}

export const commonMethodsPage = new commonMethods()