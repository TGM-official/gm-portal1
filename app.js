// Granth Mitra - Portal Interactive Routing Engine

// Toggle Header Auth Dropdown Popup Matrix
function toggleDropdown() {
    const dropdown = document.getElementById('loginDropdown');
    if (dropdown) dropdown.classList.toggle('hidden');
}

// Close Dropdown when user clicks anywhere away from the portal button area
window.addEventListener('click', function(e) {
    if (!e.target.closest('.relative')) {
        const dropdown = document.getElementById('loginDropdown');
        if (dropdown) dropdown.classList.add('hidden');
    }
});

// Toggle Auth Popup Cards Visibility
function toggleAuthPopup(show) {
    const popup = document.getElementById('authPopup');
    if (popup) {
        if (show) popup.classList.remove('hidden');
        else popup.classList.add('hidden');
    }
}

// Volunteer External App Dashboard Redirect Logic Track
function executeVolunteerRedirect() {
    toggleAuthPopup(false);
    alert("➔ Redirecting Session: Safely exiting the public-facing application workspace to authenticate your individual credentials on the separate Google Apps Script `/volunteer-dashboard` framework web app.");
    window.open("https://google.com", "_blank");
}

// 🔒 Private Administrative Secure Access Verification Routing Block
function loadSeparateAdminDashboard() {
    const inputPasskey = prompt("🔒 Enter ACT Admin Security Authorization Passkey:");
    
    if (!inputPasskey) return; // User canceled the process

    // Secure Lightfoot Verification Key: actAdmin2026
    if (inputPasskey === "actAdmin2026") {
        toggleAuthPopup(false);
        // Direct the browser window completely off the index home screen to open your dedicated panel file
        window.location.href = "admin.html";
    } else {
        alert("❌ Access Authorization Denied: Invalid cryptographic token. Only verified Akanksha Charitable Trust executive credentials pass this node protocol.");
    }
}
