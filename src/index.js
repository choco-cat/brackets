module.exports = function check(str, bracketsConfig) {
    let bracketsConfigStr = [];
    let oldStr = '';
    bracketsConfig.forEach(elementArr => {
        bracketsConfigStr.push(elementArr.join(''));
    });

    while (str !== oldStr) {
        oldStr = str;
        bracketsConfigStr.forEach(bracketsElement => {
            str = str.replace(bracketsElement, '');
        });
    }

    return str !== '' ? false : true;
}
