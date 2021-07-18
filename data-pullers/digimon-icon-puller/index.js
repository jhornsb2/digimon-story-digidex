const { Builder, By, Key, until, webdriver, WebDriver } = require('selenium-webdriver');
const fs = require('fs');
const fetch = require('node-fetch');

(async function pullData() {
    let driver = await new Builder().forBrowser('chrome').build();
    try
    {
        await driver.get('https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon');
        //get all the links to gather data for
        const digimonLinks = await driver.findElements(By.css("a[href^='https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/']"));
        //get all the urls from the links
        const digimonUrls = await Promise.all(digimonLinks.map(e => e.getAttribute('href')));
        
        for (let i = 0; i < digimonUrls.length; i++) {
            const url = digimonUrls[i];
            await driver.navigate().to(url.toString());
            let result = {};
            result.fieldGuideNumber = url.substring(url.lastIndexOf('/') + 1).split('-')[0];
            let iconImage = await driver.findElement(By.css('.quick-facts-box img'));
            
            let iconUrl = await iconImage.getAttribute('src');
            console.log(iconUrl);
            
            let iconName = iconUrl.substring(iconUrl.lastIndexOf('/') + 1);
            let iconNum = iconName.substring(0, iconName.indexOf('-'));
            if (iconNum.length == 1)
                iconName = '00' + iconName;
            else if (iconNum.length == 2)
                iconName = '0' + iconName;
            console.log(iconName);

            fs.writeFile(
                'output/' + iconName,
                await (await fetch(iconUrl)).buffer(),
                (err) => { if (err) console.log(err); }
            );
        }

    }
    finally
    {
        driver.quit();
    }
})();
