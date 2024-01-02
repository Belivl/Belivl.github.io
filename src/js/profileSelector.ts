// profileSelector.js

type Profile = 'Belial' | 'Michal'; // Add more profiles as needed

// Function to set a cookie with the selected profile
function setProfileCookie(profile: Profile): void {
    document.cookie = `selectedProfile=${profile}; expires=Thu, 20 Dec 2024 23:59:59 UTC; path=/`;
}


// Function to get the value of a cookie by name
function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

// Function to update the social link based on the selected profile
function updateSocialLink(profile: Profile): void {
    const socialLink = document.getElementById('socialLink') as HTMLAnchorElement;
    if (profile === 'Belial') {
        socialLink.href = 'https://social-link-Belial.com';
        socialLink.innerHTML = "Belial MSGR";
    } else if (profile === 'Michal') {
        socialLink.href = 'https://social-link-Michal.com';
        socialLink.innerHTML = "Michal MSGR";
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

document.addEventListener('DOMContentLoaded', function () {
    const profileButtons = document.querySelectorAll('.profile-button') as NodeListOf<HTMLButtonElement>;

    profileButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedProfile = button.dataset.profile as Profile;
            setProfileCookie(selectedProfile);
            updateSocialLink(selectedProfile);
            switchHeaderName(selectedProfile);
            //alert(selectedProfile);
        });
    });
});
