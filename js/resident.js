function submitRequest() {
    const type = document.getElementById('req-type').value;
    const desc = document.getElementById('req-desc').value;

    if (!desc) { alert("Vui lòng nhập mô tả!"); return; }

    const newReq = {
        id: Date.now(),
        resident: "Nguyễn Văn A",
        type: type,
        desc: desc,
        status: "pending" 
    };

    const list = getRequests(); // Gọi hàm từ db.js
    list.push(newReq);
    saveRequests(list); // Gọi hàm từ db.js

    document.getElementById('req-desc').value = '';
    renderResidentUI();
    alert("Gửi thành công!");
}

function renderResidentUI() {
    const list = getRequests();
    const myRequests = list.filter(r => r.resident === "Nguyễn Văn A");
    const container = document.getElementById('resident-request-list');
    
    if (myRequests.length === 0) {
        container.innerHTML = '<p>Chưa có yêu cầu nào.</p>';
        return;
    }

    let html = '';
    myRequests.forEach(req => {
        let statusClass = `status-${req.status}`;
        html += `
            <div class="bill-item">
                <div><strong>${req.type}</strong>: ${req.desc}</div>
                <span class="badge ${statusClass}">${req.status}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}