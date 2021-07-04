const { Builder, By, Key, until, webdriver, WebDriver } = require('selenium-webdriver');
const fs = require('fs');

(async function pullData() {
    let driver = await new Builder().forBrowser('chrome').build();
    try
    {
        await driver.get('https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon');
        //get all the links to gather data for
        const digimonLinks = await driver.findElements(By.css("a[href^='https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/digimon/']"));
        //get all the urls from the links
        const digimonUrls = await Promise.all(digimonLinks.map(e => e.getAttribute('href')));
        const digimonData = await Promise.all(digimonUrls.map(async (url, index) => {
            await driver.navigate().to(url.toString());
            let result = {};
            result.fieldGuideNumber = index + 1;
            let infoTableCells = await driver.findElements(By.css('.quick-facts-box div table.info-table tbody tr td'));
            result.name = await infoTableCells[0].getText();
            result.stage = await infoTableCells[1].getText();
            result.attribute = await infoTableCells[2].getText();
            result.type = await infoTableCells[3].getText();
            result.memoryUsage = await infoTableCells[4].getText();
            result.equipmentSlots = await infoTableCells[5].getText();
            let description = await driver.findElement(By.css('div.info-box'));
            result.description = await description.getText();
            let supportSkill = await driver.findElements(By.css('.table-no-stretch tbody tr td'));
            result.supportSkill = {
                name: await supportSkill[0].getText(),
                description: await supportSkill[1].getText()
            };
            result.digivolvesFrom = [];
            result.digivolvesTo = [];
            return result;
        }));
        
        fs.writeFile('output.json', JSON.stringify(digimonData, null, '\t'), function (err) {
            if (err) console.log(err);
        });
    }
    finally
    {
        driver.quit();
    }
})();