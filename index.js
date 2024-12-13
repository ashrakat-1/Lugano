// إضافة وظيفة حجز الموعد
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // جمع البيانات المدخلة
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    // عرض رسالة تأكيد الحجز
    const confirmationMessage = `تم حجز الموعد بنجاح، ${name}!\nتاريخ الحجز: ${date}\nتم إرسال رسالة تأكيد على بريدك الإلكتروني: ${email}.`;
    document.getElementById('confirmation-message').textContent = confirmationMessage;

    // مسح البيانات المدخلة بعد الحجز
    document.getElementById('booking-form').reset();
});
