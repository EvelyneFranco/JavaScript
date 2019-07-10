module.exports={
    'linkedin test' (browser){
        browser
        .url('https://www.linkedin.com/?originalSubdomain=mx')
        .waitForElementVisible('body', 1000)
        
        .waitForElementVisible('a[class=nav__button-tertiary]', 1000)
        .click('a[class=nav__button-tertiary')

        . waitForElementVisible('h2[class=title]',1000)
        .assert.containsText('h2[class=title]', 'Make the most of your professional life')

        //FirstName 
        . waitForElementVisible('button[type=submit]',1000)
        .click('button[type=submit]')
        .useXpath()
        .waitForElementVisible('//strong[contains(.,"Please enter your first name")]')
        .assert.containsText('//strong[contains(.,"Please enter your first name")]','Please enter your first name')
        .waitForElementVisible('//input[@name="firstName"]',1000)
        .setValue('//input[@name="firstName"]', 'Evelyne')

        //lastName
        . waitForElementVisible('//span[@class="fill-v2"][contains(.,"Agree & Join")]',1000)
        .click('//span[@class="fill-v2"][contains(.,"Agree & Join")]')
        .waitForElementVisible('//strong[contains(.,"Please enter your last name")]',1000)
        .assert.containsText('//strong[contains(.,"Please enter your last name")]','Please enter your last name')
        .setValue('//input[contains(@name,"lastName")]','Franco')

        //email
        . waitForElementVisible('//span[@class="fill-v2"][contains(.,"Agree & Join")]',1000)
        .click('//span[@class="fill-v2"][contains(.,"Agree & Join")]')
        .waitForElementVisible('//strong[contains(.,"Please enter your email address")]',1000)
        .assert.containsText('//strong[contains(.,"Please enter your email address")]','Please enter your email address')
    }

    
        
    
}