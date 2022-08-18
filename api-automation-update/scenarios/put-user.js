const testcase = {
    description: '[@put user] Put User API Test',
    positive: {
        case1: '[@positive] User berhasil mengupdate data Occupation dan Nationality'
    },
    negative: {
        case1: '[@negative1] User gagal mengupdate data ketika age bernilai 0.',
        case2: '[@negative2]User gagal mengupdate data ketika data hobbies merupakan empty array.',
        case3: '[@negative3] User gagal mengupdate data ketika data id null.'
    }
};

module.exports = {
    testcase
};