let fs = require('fs');

export function ReadTxtFromFile(filename: string)
{
    //let fs = require('fs');
    let text = fs.readFileSync(filename, 'utf8')
    return text;
};

export function WriteTxtfromFile(filename: string,text: string):void
{
    
    console.log(filename);
    console.log(text);
    fs.writeFileSync(filename,text);
   


};



