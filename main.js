// 1. Hämta diven från 
// 2. 
// 3. 
// 4. 

/**Öppnar GitHub i en annan flik */
function openGitHubNewWindow () {
    const openGitHub = document.getElementById("gitHubLink");
    openGitHub.onclick = window.open("https://github.com/JennyWeij");
    
}

/**Öppnar LinkedIn i en annan flik */
function openLinkedInNewWindow () {
    const openLinkedIn = document.getElementById("linkedInLink");
    openLinkedIn.onclick = window.open("https://www.linkedin.com/in/jenny-weijland-frontend/");
}