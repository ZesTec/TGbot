function ReadTxtFromFile(filename: string)
{
    let fs = require('fs');
    let text = fs.readFile(filename, 'utf8')
    return text;
};
export default ReadTxtFromFile;








