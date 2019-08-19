module.exports ={
    'YouTube Testing Left Menu'(browser){

        const pageMenu=browser.page.YouTubeMenuPage();
        const pageHome=browser.page.YouTubeHomePage();
        const pageSquare=browser.page.YouTubeDotSquarePage();
        const pageResult=browser.page.YouTubeResultPage();
        
        pageMenu
            .navigate()
            .waitForElementVisible('@leftMenuIcon',1000)
            .clickMenu('@leftMenuIcon')

            //Validate that these 3 elements are displayed and enabled.
            .assertHome('@InicioElement')
            .assertTrending('@TendenciasElement')
            .assertSusciptions('@SuscripcionesElement')
            

        pageHome
            .waitForElementVisible('@SignIn',1000)
            .asserSignIn('@SignIn')

        pageSquare
           //make square icon visible 

            .clickVisible('@makeItVisible')
            .waitForElementVisible('@square',3000)
            .clickSquare('@square')
            .clickSquare('@square')
//--------------------------------------------------------------------------
             //click in square icon
            .waitForElementVisible('@square2',2000)
            .clickSquare2('@square2')
            .saveScreenshot('./reports/square.png')

            //print elements 
            //.waitForElementVisible('@squareElements',1000)

            
            browser.elements('xpath','//div[@class="menu-container style-scope ytd-multi-page-menu-renderer"]',function (allResults){
                allResults.value.forEach(function (searchResult){
     
                     browser.elementIdText(searchResult.ELEMENT, function (resultText) {
                          console.log('\n', resultText.value)
                      })
                })
                         
                
             })

        pageResult
             .searchAutomatingValues('@searchBox')
             .searchButtonClick('@searchButton')

             //assert result
             .waitForElementVisible('@searchResult',1000)
             .aseertFirstResultText('@searchResult')

             //print number of views
             .clickResult('@searchResult')
             .waitForElementVisible('@viewElement',2000)
             .getText('@viewElement', function(result){
                 console.log(result.value)
             })

             
             .waitForElementVisible('@tittleText',1000)

             //success test
             .assertTittleSuccess('@tittleText')
             .saveScreenshot('./reports/success.png')

             //failed test 
              .assertFails('@tittleText')
              //screenshot for failed test will be created in a folder called YoutubeTest
              
    }

    
}