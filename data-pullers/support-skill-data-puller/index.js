const { Builder, By, Key, until, webdriver, WebDriver } = require('selenium-webdriver');
const fs = require('fs');

(async function pullData() {
    let driver = await new Builder().forBrowser('chrome').build();
    try
    {
        await driver.get('https://www.grindosaur.com/en/games/digimon/digimon-story-cyber-sleuth/support-skills');
        //get all the links to gather data for
        const supportSkillRows = await driver.findElements(By.css("tr"));
        //get all the urls from the links
        const supportSkillData = {};

        for (let i = 0; i < supportSkillRows.length; i++) {
            const row = supportSkillRows[i];
            const supportSkill = await row.findElements(By.css('td'));
            if (supportSkill.length == 0)
                continue;
            
            let result = {};
            result.name = await supportSkill[0].getText();
			result.description = await supportSkill[1].getText();
            
			let supportSkillConstantName = result.name.split(/[\s'-,]+/).map((s, i) => {
                s = s.toLowerCase();
                if (i > 0)
					s = s[0].toUpperCase() + s.substring(1);
				return s;
			}).reduce((acc, s) => acc + s);
			
            supportSkillData[supportSkillConstantName] = result;
        }
        
        fs.writeFile('output.json', JSON.stringify(supportSkillData, null, '\t'), function (err) {
            if (err) console.log(err);
        });
    }
    finally
    {
        driver.quit();
    }
})();
