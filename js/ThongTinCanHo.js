function payRoom(btn) {
            if (confirm("Bạn có chắc chắn muốn đặt phòng này không?")) {
                btn.style.display = "none";
                //Update badge
                const card = btn.closest('.room-card');
                const badge = card.querySelector('.badge');
                if (badge) {
                    badge.textContent = "Đã đặt";
                    badge.classList.remove('unpaid');
                    badge.classList.add('paid');
                }

                alert("Đặt phòng thành công!");
            }
        }