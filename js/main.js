/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

'use strict'; // Demande un interprétation stricte du code
let a = 'Bonjour';
console.log(a);


let degrer = prompt('Temperature en celcius : ');

parseInt(degrer);

if (!isNaN(degrer))
    alert(`${degrer}°C = ${(degrer * 9 / 5) + 32}°F`);
