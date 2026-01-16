function handleLogin() {
    const role = document.getElementById('role-selector').value;
    document.getElementById('login-screen').classList.add('hidden');

    if (role === 'ADMIN') {
        document.getElementById('admin-app').classList.remove('hidden');
        renderAdminUI(); // Hàm này nằm bên admin.js
    } else {
        document.getElementById('resident-app').classList.remove('hidden');
        renderResidentUI(); // Hàm này nằm bên resident.js
    }
}

function handleLogout() {
    document.getElementById('admin-app').classList.add('hidden');
    document.getElementById('resident-app').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}