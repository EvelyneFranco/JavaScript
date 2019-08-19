module.exports ={
    url:"https://www.youtube.com/",
    elements: {

        SignIn : {
            selector: '(//yt-formatted-string[contains(.,"Sign in")])[1]',
            locateStrategy: 'xpath'
        }
        

    },

    commands: [{
       
        asserSignIn(selector){
            return this
            .assert.containsText(selector,'SIGN IN');
         }

    }]
}