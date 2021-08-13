export default class Formatter {
    constructor (locale = 'ru-RU', currency = "RUB", currencyType = "symbol") {
        this.locale = locale
        this.currency = currency
        this.currencyType = currencyType
    }

    formatPrice (price, digits = 0, locale = this.locale, currency = this.currency, currencyType = this.currencyType) {
        let formatter = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
            currencyDisplay: currencyType,
            minimumFractionDigits: digits
        });

        return formatter.format(price);
    }

    formatDate = (value) => {
        return value
    }

    formatPhone = (value) => {
        return value
    }

    formatEmail = (value) => {
        return value
    }
}