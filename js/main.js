/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Elouan Kerouanton
 * @version 0.2
 * @since   2023-09-05
 */

'use strict'; // Demande un interprétation stricte du code

let btConvertir = document.querySelector('button.BTconvertir');
let btEffacer = document.querySelector('button.BTeffacer');
let ulHistorique = document.querySelector('ul.Historique');
let pReponce =  document.querySelector('p.pReponce');
let inputDegre = document.querySelector('input.inputDegre');

//convertie et ajoute à l'historique
btConvertir.addEventListener('click', () => {
        let degre = parseFloat(inputDegre.value);

        if (isNaN(degre)) {
            alert(`Donné un nombre`);
        } else {
            pReponce.innerHTML = `Résultat : ${(degre * 9 / 5) + 32}°F`;
            ulHistorique.innerHTML += '<li>' + `${degre}°C = ${(degre * 9 / 5) + 32}°F` + '</li>';
        }
});

//Efface historique
btEffacer.addEventListener('click', () => {
    ulHistorique.innerHTML = '';
    inputDegre.value = '';
    pReponce.innerHTML = 'Résultat : ';
});
