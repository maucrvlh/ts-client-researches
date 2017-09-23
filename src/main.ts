import { compiler } from './const';

function hello(compiler: string): string {
    return `Hello, from ${compiler}`;
}

function showHello(divName: string) {
    let element = document.getElementById(divName);
    element.innerHTML = hello(compiler);
}

function lowfunc(): Promise<string> {
    return new Promise((resolve: any) => {
        setTimeout(() => { resolve('teste') }, 2000);
    });
}

async function x(): Promise<string> {
    return await lowfunc();
}

showHello('greeting');

x().then(r => alert(r));