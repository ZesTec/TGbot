function ReadTxtFromFile(filename: string)
{
    let fs = require('fs');
    let text = fs.readFileSync(filename, 'utf8')
    return text;
};
export default ReadTxtFromFile;








