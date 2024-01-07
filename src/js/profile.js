
// profileSelector.js

document.addEventListener('DOMContentLoaded', () => {
    
    //alert("Profile Works");
    //console.log("Profile works");

    // Load the selected portfolio from local storage
  const selectedPortfolio = localStorage.getItem('selectedPortfolio');
  //If set, update all elements
  if (selectedPortfolio) {
    setProfile(selectedPortfolio);
  }
  // Assign click event listeners using querySelector
  /*
  document.querySelector('.profileBelial').addEventListener('click', () => {setProfile('Belial');
     });
  document.querySelector('.profileMichal').addEventListener('click', () => {setProfile('Michal');
});*/
});

export function setProfile(portfolio) {
    //alert("Setting names");
    //Select every element to change
    const footerNames = document.querySelectorAll(".footerName");
    const headerNames = document.querySelectorAll(".headerNames");

     //Apply change to element
    footerNames.forEach((foot) =>{
        console.log("Foot");
        foot.innerHTML = portfolio;
    })
    headerNames.forEach((nav) =>{
        console.log("Nav");
        nav.innerHTML = portfolio;
    })

    // Save selected portfolio in local storage
    localStorage.setItem('selectedPortfolio', portfolio);
}
