
document.addEventListener('DOMContentLoaded', () => {
    
    //alert("Profile Works");
    //console.log("Profile works");

    // Load the selected portfolio from local storage
  const selectedPortfolio = localStorage.getItem('selectedPortfolio');
  //If set, update all elements
  setProfile(selectedPortfolio);
  if (selectedPortfolio) {
    setProfile(selectedPortfolio);
  }
  const profileBelialBtn =  document.querySelector('.profileBelial');
  profileBelialBtn.addEventListener("click", () => {Coin1()});
  
  document.querySelector('.profileMichal').addEventListener("click", () => Coin2());
  // Assign click event listeners using querySelector
  /*
  document.querySelector('.profileBelial').addEventListener('click', () => {setProfile('Belial');
     });
  document.querySelector('.profileMichal').addEventListener('click', () => {setProfile('Michal');
});*/
});


const star1 = document.getElementById("star1");
  const coin1 = document.getElementById("coin1");
  const coin2 = document.getElementById("coin2");
  const coinDIV1 = document.getElementById("coinDIV1");
  const coinDIV2 = document.getElementById("coinDIV2");
  const coinDesc1 = document.getElementById("coinDesc1");
  const coinDesc2 = document.getElementById("coinDesc2");
  const title1 = document.getElementById("title1");
  //coin1?.addEventListener("click", () => Coin1());
  //coin2?.addEventListener("click", () => Coin2());

  function hideCommon(homehref) {
    title1?.classList.add("hidden");
    star1?.classList.toggle("hidden");
    setInterval(() => {
      location.replace(homehref);
    }, 1000);
  }

  function Coin1() {
    setProfile("Belial");
    hideCommon("/home/");
    coinDIV2?.classList.add("hidden");
    coinDesc1?.classList.add("hidden");

  }
  function Coin2() {
    setProfile("Michal");
    hideCommon("/home2/");
    coinDIV1?.classList.add("hidden");
    coinDesc2?.classList.add("hidden");
  }

  function setProfile(portfolio) {
    //alert("Setting names");
    //Select every element to change
    const footerNames = document.querySelectorAll(".footerName");
    //const headerName = document.querySelector(".headerName");
     //Apply change to element
    footerNames.forEach((foot) =>{
        console.log("Foot");
        foot.innerHTML = portfolio;
    })
    //headerName.innerHTML = portfolio;

    // Save selected portfolio in local storage
    localStorage.setItem('selectedPortfolio', portfolio);
}