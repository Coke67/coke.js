module.exports = async d => {
    const {code} = d.util.openFunc(d);

    d.message.delete().catch(e => {
        d.aoiError.fnError(d, "custom", {}, "Mesaj silinirken bir hata ile karşılaşıldı: " + e);
    });

    return {
        code: d.util.setCode({function: d.func, code})
    }
} 
