import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#967F96',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './gcthree.png',
    fullDecal: './gcthree.png',
});

export default state;