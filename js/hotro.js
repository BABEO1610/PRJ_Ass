function submitRequest() {
    const typeEl = document.getElementById('req-type');
    const descEl = document.getElementById('req-desc');
    const container = document.getElementById('resident-request-list');

    if (!typeEl || !descEl || !container) {
        alert("Lỗi form hỗ trợ!");
        return;
    }

    const type = typeEl.value;
    const desc = descEl.value.trim();

    if (!desc) {
        alert("Vui lòng nhập mô tả!");
        return;
    }

    const newReq = {
        id: Date.now(),
        resident: "Nguyễn Văn A",
        type: type,
        desc: desc,
        status: "pending"
    };

    const list = getRequests();// Gọi hàm từ db.js
    list.push(newReq);
    saveRequests(list);// Gọi hàm từ db.js

    descEl.value = '';
    renderSupportRequests();
    alert("Gửi thành công!");
}

function renderSupportRequests() {
    const container = document.getElementById('resident-request-list');
    if (!container) return;

    const list = getRequests();
    const myRequests = list.filter(r => r.resident === "Nguyễn Văn A");

    if (myRequests.length === 0) {
        container.innerHTML = '<p>Chưa có yêu cầu nào.</p>';
        return;
    }

    let html = '';
    myRequests.forEach(req => {
        html += `
            <div class="bill-item">
                <div><strong>${req.type}</strong>: ${req.desc}</div>
                <span class="badge status-${req.status}">${req.status}</span>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderSupportRequests);
