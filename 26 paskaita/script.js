
const displayExp = (exp) => {
    const expSector = document.getElementById('experience');
    exp.forEach(experience => {

        const divForJob = document.createElement('div');
        divForJob.setAttribute("class", "job");
        expSector.append(divForJob);
        divForJob.innerHTML = "";

        const date = document.createElement('h4');
        date.innerText = `${experience.startYear} - ${experience.finishYear}`;

        const company = document.createElement('p');
        company.setAttribute("class", "emp");
        company.innerText = experience.companyName;

        const divForDate = document.createElement('div');
        divForDate.setAttribute("class", "date");
        divForDate.append(date, company);
        divForJob.append(divForDate);


        const position = document.createElement('h3');
        position.innerText = experience.position;

        const description = document.createElement('p');
        description.innerText = experience.description;

        const divForInfo = document.createElement('div');
        divForInfo.setAttribute("class", "info");
        divForInfo.append(position, description);
        divForJob.append(divForInfo);
    });
}


const fetchExp = async () => {
    try {
        const response = await fetch('https://zany-skitter-caper.glitch.me/experiences');
        if (response.ok) {
            const exp = await response.json();
            displayExp(exp);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchExp();

const displaySkills = (skills) => {
    const skillsSector = document.getElementById('skills');
    skills.forEach(skill => {

        const title = document.createElement('p');
        title.innerText = skill.title;

        const level = document.createElement('p');
        level.innerText = skill.level;

        const divforSkillBox = document.createElement('div');
        divforSkillBox.setAttribute("class", "skillbox");
        divforSkillBox.append(title, level);
        skillsSector.append(divforSkillBox);


        const divForLevel = document.createElement('div');
        divForLevel.setAttribute("class", "skill");
        divforSkillBox.append(divForLevel);

        const divForSkillLevel = document.createElement('div');
        divForSkillLevel.setAttribute("class", "skill_level");
        divForLevel.append(divForSkillLevel);
        divForSkillLevel.style.width = `${skill.level}%`;


    });
}


const fetchSkills = async () => {
    try {
        const response = await fetch('https://zany-skitter-caper.glitch.me/skills');
        if (response.ok) {
            const skills = await response.json();
            displaySkills(skills);
        }
    } catch (error) {
        console.log(error);
    }
};

fetchSkills();