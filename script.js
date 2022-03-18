//Met fetch doe ik een asynchroon request naar de Valorant API
fetch("https://valorant-api.com/v1/agents").then((antwoord) => {
    //Ik krijg nu een object terug, dat zet ik om naar data met .json
    return antwoord.json();
    //Dit is ook een promise, dus die vangen we wederom op met .then
}).then((data) => {
    const agents = data["data"]
    const agents_element = document.getElementById("agents");

    agents.forEach((agent) => {
        console.log(agent);
        //Hoofdelement aanmaken character
        const agent_element = document.createElement("div");
        //H2 voor de naam aanmaken
        const agent_name_element = document.createElement("h2");
        agent_name_element.innerHTML = agent["displayName"];

        const agent_image_element = document.createElement("img");
        agent_image_element.setAttribute("src", agent["displayIconSmall"]);

        const agent_description_element = document.createElement("p");
        agent_description_element.innerHTML = agent["description"];
        // agent_element.style.backgroundImage = agent["background"];

        //Alles toevoegen aan de HTML
        agent_element.appendChild(agent_image_element);
        agent_element.appendChild(agent_name_element);
        agent_element.appendChild(agent_description_element)
        agents_element.appendChild(agent_element);
    })
})

