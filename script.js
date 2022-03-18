//Met fetch doe ik een asynchroon request naar de Valorant API
fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true").then((response) => {
    //Ik krijg nu een object terug, dat zet ik om naar data met .json
    return response.json();
    //Dit is ook een promise, dus die vangen we wederom op met .then
}).then((data) => {
    const agents = data["data"]
    const agents_element = document.getElementById("agents");

    agents.forEach((agent) => {
        console.log(agent);
        //hoofdelement aanmaken character
        const agent_element = document.createElement("div");
        agent_element.classList.add("agentBox")

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

        //div aanmaken voor images van alle abilities
        const agent_ability_images_element = document.createElement("div");
        agent_ability_images_element.classList.add("abilityImages")

        //images aanmaken voor abilities
        const agent_ability_image_1_element = document.createElement("img");
        agent_ability_image_1_element.setAttribute("src",agent["abilities"][0]["displayIcon"]);

        const agent_ability_image_2_element = document.createElement("img");
        agent_ability_image_2_element.setAttribute("src",agent["abilities"][1]["displayIcon"]);

        const agent_ability_image_3_element = document.createElement("img");
        agent_ability_image_3_element.setAttribute("src",agent["abilities"][2]["displayIcon"]);

        const agent_ability_image_4_element = document.createElement("img");
        agent_ability_image_4_element.setAttribute("src",agent["abilities"][3]["displayIcon"]);

        //div voor namen van alle abilities
        const agent_ability_names_element = document.createElement("div");
        agent_ability_names_element.classList.add("abilityNames");

        //p elementen aanmaken voor naam van elke ability
        const agent_ability_1_name_element = document.createElement("p");
        agent_ability_1_name_element.innerHTML = agent["abilities"][0]["displayName"];

        const agent_ability_2_name_element = document.createElement("p");
        agent_ability_2_name_element.innerHTML = agent["abilities"][1]["displayName"];

        const agent_ability_3_name_element = document.createElement("p");
        agent_ability_3_name_element.innerHTML = agent["abilities"][2]["displayName"];

        const agent_ability_4_name_element = document.createElement("p");
        agent_ability_4_name_element.innerHTML = agent["abilities"][3]["displayName"];


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

        //images van abilities toevoegen
        agent_element.appendChild(agent_ability_images_element);
        agent_ability_images_element.appendChild(agent_ability_image_1_element);
        agent_ability_images_element.appendChild(agent_ability_image_2_element);
        agent_ability_images_element.appendChild(agent_ability_image_3_element);
        agent_ability_images_element.appendChild(agent_ability_image_4_element);

        //namen van abilities toevoegen
        agent_element.appendChild(agent_ability_names_element);
        agent_ability_names_element.appendChild(agent_ability_1_name_element);
        agent_ability_names_element.appendChild(agent_ability_2_name_element);
        agent_ability_names_element.appendChild(agent_ability_3_name_element);
        agent_ability_names_element.appendChild(agent_ability_4_name_element);


        //audio source toevoegen aan audio element
        agent_audio_element.appendChild(agent_audio_source_element);
        agent_element.appendChild(agent_audio_element);
    })
})

