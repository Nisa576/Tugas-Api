const testcase = {
    description: '[@getById user] GetById User API Test',
    positive: {
        case1: '[@positive] User menggunakan data user id yang valid.'
    },
    negative: {
        case1: '[@negative] User gagal mendapatkan data ketika data id yang diinputkan invalid.'
    }
};

module.exports = {
    testcase
};