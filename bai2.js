const bookingReservation = {
    bookingId: "BK-2024-8891",
    guestName: "Trần Minh Quang",
    roomType: "Deluxe Ocean View",
    roomPrice: 1500000,
    checkInHour: 9,
    discountCode: "SUMMER10"
};

// Lỗi 1: bookingReservation.priceKey sai, phải dùng bookingReservation[priceKey].
// Lỗi 2: bookingReservation.key sai trong for...in, phải dùng bookingReservation[key].

const isVoucherValid = false;

const priceKey = "roomPrice";
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;

if (bookingReservation.checkInHour < 12) {
    earlySurcharge = basePrice * 0.3;
    bookingReservation.earlySurcharge = earlySurcharge;
}

const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

if (!isVoucherValid) {
    bookingReservation.discountCode = undefined;
}

console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");

for (const key in bookingReservation) {
    console.log(key + ": " + bookingReservation[key]);
}
// Lỗi 1: bookingReservation.priceKey sai, phải dùng bookingReservation[priceKey].
// Lỗi 2: bookingReservation.key sai trong for...in, phải dùng bookingReservation[key].