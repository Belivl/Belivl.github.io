// profileSelector.js
import { getCookie,setCookie } from "./utils.js";
type Profile = 'Belial' | 'Michal'; // Add more profiles as needed


const title1 = document.querySelector("#title1") as HTMLDivElement;
const coinDesc1 = document.querySelector("#coinDesc1") as HTMLDivElement;
const coinDesc2 = document.querySelector("#coinDesc2") as HTMLDivElement;
const coin1 = document.querySelector("#coinDIV1") as HTMLDivElement;
const coin2 = document.querySelector("#coinDIV2") as HTMLDivElement;
const star = document.querySelector("#star1") as HTMLDivElement;

const footerName = document.querySelector("#footerName") as HTMLSpanElement;
const headerName = document.querySelector("#headerName") as HTMLDivElement;
const msgrLink = document.querySelector("#msgrLink") as HTMLLinkElement;
const msgrLink2 = document.querySelector("#msgrLink2") as HTMLLinkElement;
const navLinkPort = document.querySelector("#navLinkPort") as HTMLLinkElement;

const homeIMG = document.querySelector("#homeIMG") as HTMLImageElement;
//const belialBanner = document.querySelector("#aboutBelial") as HTMLDivElement;

const btnProfile1 = document.querySelector("#coin1");
const btnProfile2 = document.querySelector("#coin2");


btnProfile1?.addEventListener('click', function (){
    //btnProfile1.innerHTML = "Ok";
    setCookie("profile","Belial",30)
    loadingAnim();
    coin2.classList.add("hidden");
    setInterval(() => {
      location.replace("/home/");
    }, 1000);
})
btnProfile2?.addEventListener('click', function (){
    //btnProfile2.innerHTML = "Ok";
     setCookie("profile","Michal Jelinski",30)
     loadingAnim();
     coin1.classList.add("hidden");
     setInterval(() => {
      location.replace("/home2/");
    }, 1000);
})

function loadingAnim(){
    title1.classList.add("hidden");
    coinDesc1.classList.add("hidden");
    coinDesc2.classList.add("hidden");
    star.classList.remove("hidden");
}


function setProfile(currentProfile){
    if(currentProfile === "Belial"){
            if(msgrLink2){
                msgrLink2.href = "https://m.me/BelialDesign";
            }
            msgrLink.href = "https://m.me/BelialDesign";
            //navLinkPortHome.href = "/home/";
            if(homeIMG){
                homeIMG.src = "/images/logo.png";
            }
             if(navLinkPort){
                 navLinkPort.href = "";
                navLinkPort.href = "/portfolio/";
            }
            if (headerName) {
                headerName.innerHTML = currentProfile;
            }   
           
            //belialBanner.classList.remove("hidden");
            
        }else {
            if(msgrLink2){
                msgrLink2.href = "https://m.me/michaljelinskiofficial";
            }
            msgrLink.href = "https://m.me/michaljelinskiofficial";
            //navLinkPortHome.href = "/home2/";
            if (homeIMG) {
                homeIMG.src = "/images/profile.jpg";
            }
            if (navLinkPort) {
                navLinkPort.href = "";
                navLinkPort.href = "/gallery/portfolio/";
            }
            if (headerName) {
                 headerName.innerHTML = currentProfile;
            }
            
            
             //belialBanner.classList.add("hidden");
            
        }
}

function checkCookie() {
    let currentProfile = getCookie("profile");
    if (currentProfile != "") {
        if (footerName) {
            footerName.innerHTML = currentProfile;
        }
        if (headerName) {
            headerName.innerHTML = currentProfile;
        }
        
        
        setProfile(currentProfile);
      //alert("Welcome again " + okCookies);
    } else {
      currentProfile = "profile";
      if (currentProfile != "" && currentProfile != null) {
        //alert("Set your " + okCookies);
      }
    } 
    if(!currentProfile){
        setProfile("Belial");
    }
  }
  document.addEventListener("DOMContentLoaded", (event) => {
    //alert("Working");
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
