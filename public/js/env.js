let ioUrl;
let appUrl;

const env = 'DEV';

function setEnvironmentSpecifics(env) {
    switch (env) {
        case 'DEV':
            ioUrl = `http://localhost:3000`;
            break;
    }
    appUrl = ioUrl + '/api';
}

setEnvironmentSpecifics(env);