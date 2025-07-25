class HomePage {
    
    weblocaters = {
        search_input: '.form-control.input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessages: 'div.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.weblocaters.search_input).type(productName)
        cy.get(this.weblocaters.click_search).click()
    }

    addToCart(){
        cy.contains(this.weblocaters.addtocart).first().click()
    }

    verifySuccessMessage(){
        return cy.get(this.weblocaters.successMessages)
    }
}

export default HomePage;