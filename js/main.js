/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Elouan Kerouanton
 * @version 0.2
 * @since   2023-09-05
 */

'use strict'; // Demande un interprétation stricte du code

let degre = '';

//redemande tant que l'utilisateur n'a pas donné un nombre
do {
    degre = parseFloat(prompt('Temperature en °C : '));

    if (isNaN(degre)) {
        alert(`Donne un nombre`);
    } else {
        alert(`${degre}°C = ${(degre * 9 / 5) + 32}°F`);
    }
} while (isNaN(degre));