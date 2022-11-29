// 1. Hämta diven från 
// 2. 
// 3. 
// 4. 
window.addEventListener("DOMContentLoaded");

/**Funktion som öppnar min sida på GitHub */
function openMyGitHub () {
    const openGitHub = document.getElementById("gitHubLink");
    openGitHub.onclick = window.open("https://github.com/JennyWeij");
    
}

/**Funktion som öppnar min sida på LinkedIn  */
function openMyLinkedIn () {
    const openLinkedIn = document.getElementById("linkedInLink");
    openLinkedIn.onclick = window.open("https://www.linkedin.com/in/jenny-weijland-frontend/");
}

/**Funktion som öppnar min mailadress och tillåter användaren att skriva mail till mig */
function openMyMail () {
    const openMail = document.getElementById("mailLink");
    openMail.onclick = window.open("mailto:jennyweij@outlook.com");
}

/**Funktion som skapar och fadear in en bild som visar mina jobberfarenheter */
function openMyPictureEducation () {
    const img1 = document.createElement("educationPicture");

}

/**Funktion som skapar och fadear in en bild som visar mina utbildningar */
function openMyPictureExperience () {
    const img2 = document.createElement("experiencePicture");
    img2.classList = "explainText";

}