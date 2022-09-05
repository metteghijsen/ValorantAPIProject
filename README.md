![image](https://user-images.githubusercontent.com/84067173/169560423-6099bdd7-023e-46e4-8f0f-90c62edbc401.png)

# Valorant API Project

## Project description
In this project, I took a first dive into the use of APIs. I made use of the Valorant API. Some properties of each agent are shown on the webpage. 
Namely:
- Agent icon (profile picture)
- Agent background
- Agent name
- Agent description
- Names of each ability
- Icons of each ability
- Description of each ability
- Voiceline of the agent

## Installation
You can "install" this web page by downloading it and running it on a live server. You could use an external application such as [XAMPP](https://www.apachefriends.org/download.html) for this purpose. IDEs like Visual Studio Code have this feature built in.

When using XAMPP it is important to put the project in the htdocs folder. Then you can click on the Apache module. When you go to your browser and type in localhost/project name, it should open. 

In case you have Visual Studio Code installed, you can open the project in there. Clicking on the 'Go Live' button in the status bar will open a live server where you should be able to see the project.

## Usage
If you go to [my school-website](https://i481695.hera.fhict.nl/valorant-api-project/), you can use the project without installing it.

When you enter the web page you will see a brief overview of all the agents in Valorant. You can scroll through this looking for a specific agent. You can read everything there is to know about this agent. 

First you see a general description of the agent. Below that are four abilities shown. When you hover over one of these abilities, the description underneath will change depending on which ability you are hovering over. This way you can read how to use each ability and what it does. Also included at the bottom of the box is the agent's voice-line. You can listen to it by pressing the play button.

## Architecture
When the main page file (index.php) opens, you may notice that it is almost completely empty. This is strange, of course, because there is a lot to see on the web page. The only thing that can be found in this file is the title of the web page, a scrollToTop button and a section for the agents.

This is because the Javascript file (script.js) does most of the work. This file takes data from the Valorant API, and from this data creates HTML elements in a forEach loop. This forEach loop ensures that this happens to every agent, and not for just one agent. All of these HTML elements are collected in the agent section.

In addition, I use the [AOS library](https://michalsnik.github.io/aos/) to make the web page feel a little more alive to the user. 

The (style.css) specifies the styling of one agent box. This is because each box is styled the same way. It also contains the background and fonts that are used.

## Roadmap
- Adding a search bar so you can search for a specific agent.
- Clicking on an ability will open a gif or a YouTube video of how this ability is used.
- Agents with range abilities will have YouTube links with lineups included in the description of the ability.
- Class of the agent is shown with the agent (Duelist, Controller, Initiator, or Sentinel).

## Link to the Valorant API
https://valorant-api.com/   
