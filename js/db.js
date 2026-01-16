const DB_KEY = 'chungcu_requests';

function getRequests() {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
}

function saveRequests(requests) {
    localStorage.setItem(DB_KEY, JSON.stringify(requests));
}