const testcase = {
    description: 'Tescase-API',
    positive: {
        case1: '[@Get] Create User with valid request data will return status code 200',
        case2: '[@Post] Create User with valid request data will return status code 200',
        case3: '[@positive] Put User berhasil mengupdate data Occupation dan Nationality',
        case4: '[@positive Get{id}] user menggunakan data user id yang valid'
    },
    negative: {
        case1: '[@negative] Put User gagal mengupdate data ketika age bernilai 0',
        case2: '[@negative] Put User gagal mengupdate data ketika data hobbies merupakan empty array',
        case3: '[@negative] Put User gagal mengupdate data ketika data id null', 
        case4: '[@negative Get{id}]user gagal mendapatkan data ketika data id yang diinputkan invalid'

    }

};

module.exports = {
    testcase
};