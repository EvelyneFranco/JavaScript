module.exports ={
    url:"https://www.youtube.com/",
    elements: {

        leftMenuIcon : {
            selector: '(//yt-icon[@id="guide-icon"])[1]',
            locateStrategy: 'xpath'
        },
        InicioElement : {
            selector: '//span[@class="title style-scope ytd-guide-entry-renderer"][contains(.,"Home")]',
            locateStrategy: 'xpath'
        },

        TendenciasElement : {
            selector: '//span[@class="title style-scope ytd-guide-entry-renderer"][contains(.,"Trending")]',
            locateStrategy: 'xpath'
        },

        SuscripcionesElement : {
            selector: '//span[@class="title style-scope ytd-guide-entry-renderer"][contains(.,"Subscriptions")]',
            locateStrategy: 'xpath'
        }

    },
    commands: [{
        clickMenu(selector){
            return this
                .click(selector);
            
        },
        assertHome(selector){
            return this
            .assert.elementPresent(selector,'Home option is displayed');
         },
         assertTrending(selector){
            return this
            .assert.elementPresent(selector,'Trending option is displayed');
         },
         assertSusciptions(selector){
            return this
            .assert.elementPresent(selector,'Susciptions option is displayed');
         }

    }]
}