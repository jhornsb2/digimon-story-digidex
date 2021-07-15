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
        const digimonData = {};

        for (let i = 0; i < digimonUrls.length; i++) {
            const url = digimonUrls[i];
            await driver.navigate().to(url.toString());
            let result = {};
            
            let infoTableCells = await driver.findElements(By.css('.quick-facts-box div table.info-table tbody tr td'));
            let name = await infoTableCells[0].getText();
            
            //get all tables since they arent labeled
            let tables = await driver.findElements(By.css('table'));
            for (let j = 0; j < tables.length; j++) {
                const table = tables[j];
                const headerCells = await table.findElements(By.css('thead tr th'));
                //filter down to attack moves table
                if (headerCells.length == 8) {
                    //get all of the moves from the table
                    const moveRows = await table.findElements(By.css('tbody tr'));
                    //process the moves
                    for (let k = 0; k < moveRows.length; k++) {
                        const moveRow = moveRows[k];
                        const moveCells = await moveRow.findElements(By.css('td'));
                        let moveName = await moveCells[1].getText();
                        moveName = 'skills.' + moveName.split(/[\s\'\-\,]+/)
                        .filter(s => s && s.length > 0)
                        .map((s, i) => {
                            s = s.toLowerCase();
                            if (i > 0)
                                s = s[0].toUpperCase() + s.substring(1);
                            return s;
                        }).reduce((acc, s) => acc + s)
                        let moveLevel = await moveCells[2].getText();
                        result[moveLevel] = moveName;
                    }
                }
            }

            digimonData['export const ' + name.toUpperCase() + ': SkillMapping'] = result;
        }
        
        fs.writeFile('output.json', JSON.stringify(digimonData, null, '\t'), function (err) {
            if (err) console.log(err);
        });
    }
    finally
    {
        driver.quit();
    }
})();
