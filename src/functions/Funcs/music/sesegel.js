module.exports = async (d) => {
  const data = d.util.openFunc(d);

  const [
    voiceId = d.member.voice?.channelId,
    selfMute = "no",
    selfDeaf = "yes",
    debug = "no",
  ] = data.inside.splits;

  const vc = await d.util.getChannel(d, voiceId);

  if (![d.util.channelTypes.Voice, d.util.channelTypes.Stage].includes(vc.type))
    return d.aoiError.fnError(
      d,
      "custom",
      { inside: data.inside },
      "Sağlanan Kanal Id Ses/Sahne Kanalı İçinde Değil",
    );

  if (!d.client.voiceManager)
    return d.aoiError.fnError(
      d,
      "custom",
      {},
      "Ses Sınıfı Başlatılmamış.",
    );

  try {
    await d.client.voiceManager.manager.joinVc({
      voiceChannel: vc,
      textChannel: d.channel,
      selfMute: selfMute === "yes",
      selfDeaf: selfDeaf === "yes",
      debug: debug === "yes",
    });
  } catch (e) {
    d.aoiError.fnError(d, "custom", {}, "Şu Nedenle Sese Katılamadım:: " + e);
  }

  return {
    code: d.util.setCode(data),
  };
};
