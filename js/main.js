function handleLogin() {
    const role = document.getElementById('role-selector').value;
    // document.getElementById('login-screen').classList.add('hidden');

    if (role === 'ADMIN') {
        // document.getElementById('admin-app').classList.remove('hidden');
        // renderAdminUI(); // Hàm này nằm bên admin.js
        window.location.href = 'admin.html';
    } else {
        // document.getElementById('resident-app').classList.remove('hidden');
        // renderResidentUI(); // Hàm này nằm bên resident.js
        window.location.href = 'resident.html';
    }
}

function handleLogout() {
    window.location.href = 'login.html';
}