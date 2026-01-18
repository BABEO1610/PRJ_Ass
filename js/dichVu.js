document.addEventListener("DOMContentLoaded", () => {
    checkNewBillingPeriod();
    loadPaymentStatus();
});

function loadPaymentStatus() {
    const paidServices = JSON.parse(localStorage.getItem("paidServices")) || {};

    document.querySelectorAll(".service-card").forEach(card => {
        const serviceKey = card.dataset.service;

        if (paidServices[serviceKey]) {
            markAsPaid(card);
        }
    });
}

function payService(serviceKey, btn) {
    const ok = confirm("Xác nhận thanh toán dịch vụ này?");
    if (!ok) return;

    // Lưu trạng thái
    const paidServices = JSON.parse(localStorage.getItem("paidServices")) || {};
    paidServices[serviceKey] = true;
    localStorage.setItem("paidServices", JSON.stringify(paidServices));

    // Update UI
    const card = btn.closest(".service-card");
    markAsPaid(card);

    alert("Thanh toán thành công!");
}

function markAsPaid(card) {
    const unpaid = card.querySelector(".pay-unpaid");
    if (unpaid) {
        unpaid.classList.remove("pay-unpaid");
        unpaid.classList.add("pay-paid");
        unpaid.textContent = "Đã thanh toán";
    }

    const btn = card.querySelector(".btn-pay");
    if (btn) btn.remove();
}

function checkNewBillingPeriod() {
    const currentPeriod = "2026-01"; // demo tháng hiện tại
    const savedPeriod = localStorage.getItem("billingPeriod");

    if (savedPeriod !== currentPeriod) {
        localStorage.removeItem("paidServices");
        localStorage.setItem("billingPeriod", currentPeriod);
    }
}

