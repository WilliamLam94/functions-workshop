/**
 * Lösenordskollen med funktioner
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * STEG 3 🌟
 * Refaktorera funktionen till att räkna antalet specialtecken (inte bara
 * antalet unika).
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två (unika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
	'password', // 🚨
	'p@*swd', // 🔐
	'pa$sword', // 🔐
	'p@ssw%rd', // 🔐
	'pa$$word', // 🔐
	'secretpassword', // 🚨
	'secret-password', // 🔐
	'such-password-much-secure-very-long', // 🔐
	'$$$', // 🚨
];

const specialChars = [
	'@',
	'$',
	'%',
	'*',
	'^',
	'<',
	'>',
	'?',
	'!',
	'(',
	')',
	'[',
	']',
	'{',
	'}',
	"'",
];

// named function
// function specialCharsCounter(password) {
// 	password = password.toLowerCase();

// 	let specialCharsCount = 0;

// 	specialChars.forEach((specialChar) => {
// 		const passwordHasSpecialChar = password.includes(specialChar);

// 		if (passwordHasSpecialChar) {
// 			specialCharsCount++;
// 		}
// 	});
// 	return specialCharsCount;
// }

//arrow function
//* denna funktionen tar emot en sträng och en array med strängar.

const specialCharsCounter = (string, stringArray) => {
	string = string.toLowerCase();

	let specialCharsCount = 0;

	stringArray.forEach((specialChar) => {
		const splitString = string.split('');
		splitString.forEach((char) => {
			if (char === specialChar) {
				specialCharsCount++;
			}
		});
	});
	return specialCharsCount;
};

passwords.forEach((password) => {
	const specialCharsCount = specialCharsCounter(password, specialChars);

	// - eller har minst 16 tecken
	if (password.length >= 16) {
		console.log(
			`lösenordet: ${password} = lösenordet har minst 16 tecken och innehåller ${specialCharsCount} specialtecken`
		);
	}

	// - eller har minst 12 tecken och minst 1 bindestreck
	else if (password.length >= 12 && password.includes('-')) {
		console.log(
			`lösenordet: ${password} = lösenordet har minst 12 tecken, minst 1 bindestreck och innehåller ${specialCharsCount} specialtecken`
		);
	}

	// - minst 6 tecken varav minst två specialtecken enligt nedan
	else if (password.length >= 6 && specialCharsCount >= 2) {
		console.log(
			`lösenordet: ${password} = lösenordet har minst 6 tecken varav minst två specialtecken. Innehåller ${specialCharsCount} specialtecken`
		);
	}

	//- minst 8 tecken varav minst ett specialtecken enligt nedan
	else if (password.length >= 8 && specialCharsCount >= 1) {
		console.log(
			`lösenordet: ${password} = lösenordet har minst 8 tecken varav minst ett specialtecken. Innehåller ${specialCharsCount} specialtecken`
		);
	} else {
		console.log(
			`lösenordet: ${password} = lösenordet är ej giltigt. Innehåller ${specialCharsCount} specialtecken`
		);
	}
});
