var s = '';

for( var x = 0; x < 10; x++) {
	for( y = 0; y < 5; y++ ) {
		for( z = 0; z < 1; z++) {
			s += ' ';
		}

		s = s + '*';
	}



	s += '\n';
}

console.log(s);