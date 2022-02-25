const Interpreter = require("../../interpreter.js");
module.exports = async (client) => {
    const cmds = client.cmd.ready.allValues();
    let chan;
    const data = {
        client: client,
    };
    for (const cmd of cmds) {
        if (cmd.channel?.includes("$")) {
            const id = await Interpreter(
                client,
                data,
                [],
                {name: "ChannelParser", code: cmd.channel},
                client.db,
                true,
            );
            chan = client.channels.cache.get(id?.code);
            data.channel = chan;
            data.guild = chan?.guild;
        } else {
            chan = client.channels.cache.get(cmd.channel);
            data.channel = chan;
            data.guild = chan?.guild;
        }
        await Interpreter(
            client,
            data,
            [],
            cmd,
            client.db,
            false,
            chan?.id,
            {},
            chan,
        );
    }
console.log(
        "\x1b[36mcoke.js.js \x1b[0m Başlatıldı|| \x1b[32mv " +
        "\x1b[36mcoke.js \x1b[0m|| \x1b[32m" +
        require("../../../package.json").version +
        "\x1b[0m || \x1b[36mLalayke Development\x1b[0m",
    );
};
