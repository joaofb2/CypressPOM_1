/// <reference types="cypress" />
import { MainPagePO } from '../page.po/main.page.po.js';
const mainPagePO = new MainPagePO()


describe('My First Test', () => {

    it('Visit and Search FAILED', () => {
        cy.visit('https://www.amazon.es/-/pt')
        //mainPagePO.AcceptCookies()
        mainPagePO.SearchFail()
        //mainPagePO.SearchPass()
    });

    
});