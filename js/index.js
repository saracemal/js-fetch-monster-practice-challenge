document.addEventListener("DOMContentLoaded", () => {


    fetch('http://localhost:3000/monsters')
    .then((response) => response.json())
    .then((data) => renderAllMonsters(data))

    function renderAllMonsters(monstersArray) {
        monstersArray.forEach((monsterObj) => {
            renderNewMonster(monsterObj)
        })
    };
    
    function renderNewMonster(monster) {
    //name, age, description
        const createMonster = document.querySelector("div#create-monster")
    
        const newDiv = document.createElement('div')
        const newH3 = document.createElement('h3')
        const newPTag = document.createElement('p')
        const newDesc = document.createElement('p')
        const newMonsterBtn = document.createElement('button')
        newH3.textContent = monster.name
        newPTag.textContent = monster.age
        newDesc.textContent = monster.description
        newMonsterBtn.className.add('like-btn')
        newMonsterBtn.textContent = "Create New Monster"
    
        newDiv.append(newH3, newPTag, newDesc, newMonsterBtn)
        createMonster.append(newDiv)
    
        newMonsterBtn.addEventListener("submit", function(e) {
            e.preventDefault();
    
            //name, age, description
            const newName = e.target.name.value
            const newAge = e.target.age.value
            const newDesc = e.target.description.value
    
            fetch('http://localhost:3000/monsters', {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                },
                body: JSON.stringify({
                    name: newName,
                    age: newAge,
                    description: newDesc
                })
                })
                .then((response) => response.json())
                .then((data) => renderNewMonster(data))
        })
    }
    
    

})









// we need a button to load a new set of monsters
// load new monsters button --> needs a button CSS selector and inner text to say load more monsters
// fetch("http://localhost:3000/monsters/?_limit=50")
// .then(response => response.json())
// .then(monsters => monsters)