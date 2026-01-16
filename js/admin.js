function renderAdminUI() {
    const list = getRequests(); // Gọi hàm từ db.js
    const tbody = document.getElementById('admin-request-list');
    
    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Chưa có dữ liệu</td></tr>';
        return;
    }

    let html = '';
    list.forEach(req => {
        let statusClass = `status-${req.status}`;
        let actions = req.status === 'pending' ? `
            <button onclick="updateStatus(${req.id}, 'approved')">✅ Duyệt</button>
            <button onclick="updateStatus(${req.id}, 'rejected')">❌ Hủy</button>
        ` : '<span>Đã xử lý</span>';

        html += `
            <tr>
                <td>${req.resident}</td>
                <td>${req.type}</td>
                <td>${req.desc}</td>
                <td><span class="badge ${statusClass}">${req.status}</span></td>
                <td>${actions}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function updateStatus(id, newStatus) {
    let list = getRequests();
    const index = list.findIndex(item => item.id === id);
    if (index !== -1) {
        list[index].status = newStatus;
        saveRequests(list);
        renderAdminUI(); 
    }
}