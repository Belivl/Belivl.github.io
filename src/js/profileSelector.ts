// profileSelector.js
import { getCookie,setCookie } from "./utils";
type Profile = 'Belial' | 'Michal'; // Add more profiles as needed



const footerName = document.querySelector("#footerName") as HTMLSpanElement;
const headerName = document.querySelector("#headerName") as HTMLDivElement;
const msgrLink = document.querySelector("#msgrLink") as HTMLLinkElement;
const msgrLink2 = document.querySelector("#msgrLink2") as HTMLLinkElement;
const navLinkPort = document.querySelector("#navLinkPort") as HTMLLinkElement;
const navLinkPortHome = document.querySelector("#navLinkPortHome") as HTMLLinkElement;
const homeIMG = document.querySelector("#homeIMG") as HTMLImageElement;
const belialBanner = document.querySelector("#aboutBelial") as HTMLDivElement;

const btnProfile1 = document.querySelector("#coin1");
const btnProfile2 = document.querySelector("#coin2");


btnProfile1?.addEventListener('click', function (){
    //btnProfile1.innerHTML = "Ok";
    setCookie("profile","Belial",1)
    setInterval(() => {
      location.replace("/home/");
    }, 1000);
})
btnProfile2?.addEventListener('click', function (){
    //btnProfile2.innerHTML = "Ok";
     setCookie("profile","Michal Jelinski",1)
     setInterval(() => {
      location.replace("/home2/");
    }, 1000);
})


function setProfile(currentProfile){
    if(currentProfile === "Belial"){
            if(msgrLink2){
                msgrLink2.href = "https://m.me/BelialDesign";
            }
            msgrLink.href = "https://m.me/BelialDesign";
            navLinkPortHome.href = "/home/";
            homeIMG.src = "/logo.png";
            navLinkPort.href = "";
            navLinkPort.href = "/portfolio/";
            belialBanner.classList.remove("hidden");
        }else {
            if(msgrLink2){
                msgrLink2.href = "https://m.me/michaljelinskiofficial";
            }
            msgrLink.href = "https://m.me/michaljelinskiofficial";
            navLinkPortHome.href = "/home2/";
            homeIMG.src = "/profile.jpg";
            navLinkPort.href = "";
             navLinkPort.href = "/gallery/portfolio/";
             belialBanner.classList.add("hidden");
        }
}

function checkCookie() {
    let currentProfile = getCookie("profile");
    if (currentProfile != "") {
        footerName.innerHTML = currentProfile;
        headerName.innerHTML = currentProfile;
        
        setProfile(currentProfile);
      //alert("Welcome again " + okCookies);
    } else {
      currentProfile = "profile";
      if (currentProfile != "" && currentProfile != null) {
        //alert("Set your " + okCookies);
      }
    } 
    if(!currentProfile){
        setProfile("Michal");
    }
  }
  document.addEventListener("DOMContentLoaded", (event) => {
    setProfile("Belial");
    checkCookie();
  });




/* 

// Function to update the social link based on the selected profile
function updateSocialLink(profile: Profile): void {
    const socialLink = document.getElementById('socialLink') as HTMLAnchorElement;
    const footerName = document.getElementById('footerName') as HTMLAnchorElement;
    if (profile === 'Belial') {
        socialLink.href = 'https://social-link-Belial.com';
        socialLink.innerHTML = "Belial MSGR";
        footerName.innerHTML = "Belial";
    } else if (profile === 'Michal') {
        socialLink.href = 'https://social-link-Michal.com';
        socialLink.innerHTML = "Michal MSGR";
        footerName.innerHTML = "Michal";
    }
    // No default case, so the link remains unchanged for other profiles
}

// Function to set the header name based on the selected profile
function switchHeaderName(profile: Profile): void {
    const headerName = document.getElementById('headerName') as HTMLHeadingElement;
    const footerName = document.getElementById('footerName') as HTMLHeadingElement;
    
    if (profile === 'Belial') {
        headerName.textContent = 'Belial';
        footerName.textContent = 'Belial';
    } else if (profile === 'Michal') {
        headerName.textContent = 'Michal Jelinski';
        footerName.textContent = 'Michal Jelinski';
    }
    // No default case, so the header name remains unchanged for other profiles
}

export default function updateFooter() {
    const selectedProfile = getCookie('selectedProfile');
    const footerName = document.getElementById('footerName') as HTMLHeadingElement;
    footerName.innerHTML = selectedProfile.toString();
}

 window.onload = function () {
            updateFooter();
        };

document.addEventListener('DOMContentLoaded', function () {
    const profileButtons = document.querySelectorAll('.profile-button') as NodeListOf<HTMLButtonElement>;
    getCookie("selectedProfile");
    profileButtons.forEach(function (button) {
        //console.log("added button profile")
        button.addEventListener('click', function () {
            const selectedProfile = button.dataset.profile as Profile;
            // Function to set a cookie with the selected profile
            //setCookie("selectedProfile",selectedProfile,1)
            updateSocialLink(selectedProfile);
           // switchHeaderName(selectedProfile);
        });
    });
});*/
