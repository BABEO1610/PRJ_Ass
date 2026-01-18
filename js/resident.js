function submitRequest() {
    const typeEl = document.getElementById('req-type');
    const descEl = document.getElementById('req-desc');

    if (!typeEl || !descEl) return;

    const type = typeEl.value;
    const desc = descEl.value;

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
    renderResidentUI();
    alert("Gửi thành công!");
}

function renderResidentUI() {
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
        const statusClass = `status-${req.status}`;
        html += `
            <div class="bill-item">
                <div><strong>${req.type}</strong>: ${req.desc}</div>
                <span class="badge ${statusClass}">${req.status}</span>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    renderResidentUI();      
    renderHomeServices();    
});


function renderHomeServices() {
    const container = document.getElementById("home-service-list");
    if (!container) return;

    const services = [
        { key: "nuoc", name: "💧 Nước sinh hoạt" },
        { key: "dien", name: "⚡ Điện sinh hoạt" },
        { key: "guixe", name: "🚗 Gửi xe" },
        { key: "baotri", name: "🛠️ Bảo trì định kỳ" }
    ];

    const paidServices = JSON.parse(localStorage.getItem("paidServices")) || {};

    let html = "";

    services.forEach(s => {
        const paid = paidServices[s.key];
        html += `
            <div class="home-service-item">
                <strong>${s.name}</strong>
                <span class="badge ${paid ? "pay-paid" : "pay-unpaid"}">
                    ${paid ? "Đã thanh toán" : "Chưa thanh toán"}
                </span>
            </div>
        `;
    });

    container.innerHTML = html;
}

