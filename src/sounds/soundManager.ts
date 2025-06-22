import { Howl } from 'howler';

// Définition des sons
export const clickSound = new Howl({
  src: ['/sounds/click.mp3'],
  volume: 0.5, // tu peux ajuster
  preload: true
});

// Tu peux ajouter d’autres sons ici plus tard :
/*
export const errorSound = new Howl({
  src: ['/sounds/error.mp3'],
  volume: 0.7
});
*/
