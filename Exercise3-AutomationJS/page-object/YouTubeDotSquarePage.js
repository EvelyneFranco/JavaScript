module.exports ={
    url:"https://www.youtube.com/",
    elements: {

        squareElements : {
            selector: '//div[@class="menu-container style-scope ytd-multi-page-menu-renderer"]',
            locateStrategy: 'xpath'
        },

        makeItVisible : {
            selector: '//div[@class="style-scope app-drawer visible"]',
            locateStrategy: 'xpath'
        },

        square : {
            selector: '//div[@class="style-scope app-drawer"]',
            locateStrategy: 'xpath'
        },

        square2 :{
            selector: '(//yt-icon[@class="style-scope ytd-topbar-menu-button-renderer"])[2]',
            locateStrategy: 'xpath'
        }
        

    },
    commands: [{
        clickVisible(selector){
            return this
                .click(selector);
            
        },

        clickSquare(selector){
            return this
                .click(selector);
        },

        clickSquare2(selector){
            return this
                .click(selector);
        }
    }]
}