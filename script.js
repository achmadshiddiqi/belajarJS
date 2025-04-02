var s = '';

//Bagian Atas
for(var i = 0; i < 5; i++) {

	for( z = 5; z > i; z-- ) {
		s = s + ' ';
	}

	for( x = 0; x <= i; x++ ) {
		s = s + '4';
	}
	
	for( y = 0; y < i; y++ ) {
		s += '5';
	}

	s += '\n';
}

//Bagian Tengah
for(var p = 0; p < 1; p++) {

	for( q = 0; q < 11; q++) {
		s += '8';
	}
	s += '\n';
}

//Bagian Bawah
for(var a = 0; a < 5; a++) {

	for( b = 0; b <= a; b++ ) {
		s += ' ';
	}

	for( c = 5; c > a; c--) {
		s += '6';
	}

	for( d = 4; d > a; d--) {
		s += '7';
	}

	s += '\n';

}

console.log(s);