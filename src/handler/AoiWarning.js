const {default: axios} = require("axios");
const json = require("../../package.json");
module.exports = async () => {
    try {
        const res = await axios.get("https://api.leref.ga/package/version");

        if (json.version !== res.data.version) {

            console.warn(
                "\x1b[31mUyarı! Bu Paketin Yeni Sürümü Çıktı || : \u001b[33mv" +
                res.data.version +
                " Sürümü Bu Projede Mevcut Değil\u001b[0m",
            )
        }
    } catch {
    }
};
