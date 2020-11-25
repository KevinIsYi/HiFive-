const createUser = ( req, res ) => {
    return res.json({
        ok: true
    });
};

const loginUser = ( req, res ) => {
    return res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    loginUser
}