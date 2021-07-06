const { Builder, By, Key, until, webdriver, WebDriver } = require('selenium-webdriver');
const fs = require('fs');

(async function pullData() {
    let driver = await new Builder().forBrowser('chrome').build();
    try
    {
        await driver.get('https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/moves');
        //get all the links to gather data for
        const moveRows = await driver.findElements(By.css("tr"));
        //get all the urls from the links
        const moveData = {};

        console.log('Gathering data from moves table.');
        for (let i = 0; i < moveRows.length; i++) {
            const row = moveRows[i];
            const move = await row.findElements(By.css('td'));
            if (move.length == 0)
                continue;
            
            let result = {};
            result.name = await move[1].getText();
            result.spCost = await move[4].getText();
            result.power = await move[5].getText();
            result.attribute = 'Attribute.' + await move[2].getText();
            result.skillType = 'SkillType.' + await move[3].getText();
            result.isInheritable = (await move[6].findElements(By.css('i'))).length > 0;
            result.description = (await (await move[1].findElement(By.css('a'))).getAttribute('href'));
            
            let moveConstantName = result.name.split(/[\s\'\-\,]+/)
            .filter(s => s && s.length > 0)
            .map((s, i) => {
                s = s.toLowerCase();
                if (i > 0)
					s = s[0].toUpperCase() + s.substring(1);
				return s;
			}).reduce((acc, s) => acc + s);
			
            moveData[moveConstantName] = result;
            process.stdout.write('\r\x1b[K');
            process.stdout.write('Gathered ' + (i + 1) + '/' + moveRows.length);
        }
        process.stdout.write('\r\x1b[K');
        console.log('Move data gathered from table.');

        console.log('Gathering additional data from individual pages.');
        const moveKeys = Object.keys(moveData);
        for (let i = 0; i < moveKeys.length; i++) {
            const move = moveData[moveKeys[i]];

            const url = move.description;
            console.log(url);
            await driver.navigate().to(url.toString());
            
            move.description = await (await driver.findElement(By.css('div.info-box p'))).getText();
            
            process.stdout.write('\r\x1b[K');
            process.stdout.write('Gathered ' + (i + 1) + '/' + moveKeys.length);
        }
        process.stdout.write('\r\x1b[K');
        console.log('Additional data gathered.');

        console.log('Saving to output.json');
        fs.writeFile('output.json', JSON.stringify(moveData, null, '\t'), function (err) {
            if (err) console.log(err);
        });
        console.log('Saving completed.')
    }
    finally
    {
        driver.quit();
    }
})();
