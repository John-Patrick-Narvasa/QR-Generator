

import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs';


inquirer
    .prompt([
        {
        type: 'input',
        name: 'url',
        message: 'Insert the URL: '
        }
    ])
    .then((answers) => {
        const Url = answers.url;
        var qr_svg = qr.image(Url);
        qr_svg.pipe(fs.createWriteStream('qr-url.png')); 
        
        console.log('QR code generated successfully!');

        fs.writeFile('qr-code.txt', Url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    });
    