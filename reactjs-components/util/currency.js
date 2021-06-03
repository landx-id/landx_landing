export function toIDR(money) {
    return Intl.NumberFormat("id-ID",{
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(money);
}