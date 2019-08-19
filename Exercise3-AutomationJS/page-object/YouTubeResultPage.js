module.exports ={
    url:"https://www.youtube.com/",

    elements: {

        searchBox : {
            selector: '//input[@aria-label="Search"]',
            locateStrategy: 'xpath'
        },

        searchButton :{
            selector :'//button[@class="style-scope ytd-searchbox"][contains(.,"Search")]',
            locateStrategy: 'xpath'
        },

        searchResult :{
            selector :'//a[contains(@title,"Automating with Node.js - 001")]',
            locateStrategy: 'xpath'
        },

        viewElement :{
            selector :'//span[@class="view-count style-scope yt-view-count-renderer"]',
            locateStrategy: 'xpath'
        },

        tittleText :{
            selector :'//yt-formatted-string[contains(.,"Automating with Node.js - 001")]',
            locateStrategy: 'xpath'

        }
        
        

    },

    commands: [{
       
        searchAutomatingValues(selector){
            return this
            .setValue(selector,'Automating with Node.js – 001');
         },

         searchButtonClick(selector){
            return this
                .click(selector);
         },

         aseertFirstResultText(selector){
             return this
                .assert.containsText(selector,'Automating with Node.js - 001');
         },

         clickResult(selector){
             return this
                .click(selector);
         },

         assertFails(selector){
            return this
            .assert.containsText(selector,'Automation with Selenium');
         },

         assertTittleSuccess(selector){
            return this
            .assert.containsText(selector,'Automating with Node.js - 001');
         }

                

    }]
}