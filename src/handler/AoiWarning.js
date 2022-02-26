const {default: axios} = require("axios");
const json = require("../../package.json");
module.exports = async () => {
    try {
        const res = await axios.get("https://api.leref.ga/package/version");

        if (json.version !== res.data.version) {

            console.warn(
                "",
            )
        }
    } catch {
    }
};
