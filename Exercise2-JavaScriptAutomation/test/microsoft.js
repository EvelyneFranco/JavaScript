module.exports={
    'microsoft test'(browser){
        browser
        .url('https://www.microsoft.com/en-us/')
        .assert.title("Microsoft - Official Home Page")

        .waitForElementVisible('a[id=shellmenu_1]',1000)
        .click('a[id=shellmenu_1]')
        .waitForElementVisible('button[id=c-shellmenu_43]',1000)
        .click('button[id=c-shellmenu_43]')
        .waitForElementVisible('a[id=c-shellmenu_44]')
        //Get windows 10
        .assert.elementPresent('a[id=c-shellmenu_44]')
        .waitForElementVisible('a[id=c-shellmenu_46]')
        //Why upgrade
        .assert.elementPresent('a[id=c-shellmenu_46]')
        .waitForElementVisible('a[id=c-shellmenu_47]')
        //Features
        .assert.elementPresent('a[id=c-shellmenu_47]')

        //click on by windows 10
        .click('a[id=c-shellmenu_44]')
        //close register alert
        .useXpath()
        .waitForElementVisible('//div[contains(@class,"c-glyph glyph-cancel")]',1000)
        .click('//div[contains(@class,"c-glyph glyph-cancel")]')

        //validate text un get windows, the option in the exersice is not displayed but I will validate another one 
        .waitForElementVisible('//h1[@id="DynamicHeading_productTitle"]',2000)
        .assert.containsText('//h1[@id="DynamicHeading_productTitle"]','Windows 10 Home')

        //buscar
        .waitForElementVisible('//button[@aria-label="Buscar"][contains(.,"Buscar")]',1000)
        .click('//button[@aria-label="Buscar"][contains(.,"Buscar")]')
        .waitForElementVisible('//input[contains(@aria-label,"search expanded")]',1000)
        .setValue('//input[contains(@aria-label,"search expanded")]','Visual Studio Community')
        .click('//button[@aria-label="Buscar"][contains(.,"Buscar")]')
        .saveScreenshot('./reports/search-result.png')

        // search result 
        .waitForElementVisible('//h3[@class="f-hyperlink"]',1000)
        //validate search result is 20
        .expect.elements('//h3[@class="f-hyperlink"]').count.to.equal(20)
        
        //print the results
        
        
        browser.elements('xpath','//h3[@class="f-hyperlink"]',function (allResults){
           allResults.value.forEach(function (searchResult){

                browser.elementIdText(searchResult.ELEMENT, function (resultText) {
                     console.log('\n', resultText.value)
                 })
           })
                    
           
        })

        // next button 3 times
        browser.assert.elementPresent('//span[contains(.,"Siguiente")]')
       .click('//span[contains(.,"Siguiente")]')
       browser.assert.elementPresent('//span[contains(.,"Siguiente")]')
       .click('//span[contains(.,"Siguiente")]')
       browser.assert.elementPresent('//span[contains(.,"Siguiente")]')
       .click('//span[contains(.,"Siguiente")]')

       
    
       
    }
}