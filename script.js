//Met fetch doe ik een asynchroon request naar de Valorant API
fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true").then((response) => {
    //Ik krijg nu een object terug, dat zet ik om naar data met .json
    return response.json();
    //Dit is ook een promise, dus die vangen we wederom op met .then
}).then((data) => {
    const agents = data["data"]
    const agents_element = document.getElementById("agents");

    agents.forEach((agent) => {
        console.log(agent["voiceLine"]["mediaList"][0]["wwise"]);
        console.log(agent);
        //hoofdelement aanmaken character
        const agent_element = document.createElement("div");

        //h2 voor de naam aanmaken
        const agent_name_element = document.createElement("h2");
        agent_name_element.innerHTML = agent["displayName"];

        //image aanmaken voor achtergrond
        const agent_background_element = document.createElement("img");
        agent_background_element.setAttribute("src", agent["background"]);

        //image aanmaken voor agentafbeelding
        const agent_image_element = document.createElement("img");
        agent_image_element.setAttribute("src", agent["displayIconSmall"]);

        //p element aanmaken voor agentbeschrijving
        const agent_description_element = document.createElement("p");
        agent_description_element.innerHTML = agent["description"];

        //audio element aanmaken voor voiceline
        const agent_audio_element = document.createElement("audio");
        agent_audio_element.controls = true;
        //source aanmaken dat in audio element komt
        const agent_audio_source_element = document.createElement("source");
        agent_audio_source_element.setAttribute("src",agent["voiceLine"]["mediaList"][0]["wave"]);

        //Alles toevoegen aan de HTML
        agent_element.appendChild(agent_image_element);
        agent_element.appendChild(agent_background_element);
        agent_element.appendChild(agent_name_element);
        agent_element.appendChild(agent_description_element);
        agents_element.appendChild(agent_element);

        //audio source toevoegen aan audio element
        agent_audio_element.appendChild(agent_audio_source_element);
        agent_element.appendChild(agent_audio_element);

        // const agent_ability_images = document.createElement("img")
        // agent_ability_images.setAttribute("src",agent["abilities, displayIcon"])
        // agent_element.appendChild(agent_ability_images)
    })
})

