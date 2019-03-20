console.log('hello!');


// Require the lib, get a working terminal
var term = require( 'terminal-kit' ).terminal ;


//term.clear();
term.fullscreen(true);
term( 'Hello world!\n' );
term.wrap.blue( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^\n');
term.grabInput(true);

term.drawImage('3102.jpg', {
    shrink: {
        width: 180,
        height: 140
    }
});

term.on( 'key' , function( name , matches , data ) {
	//console.log( "'key' event:" , name ) ;
	if ( name === 'CTRL_C' ) { term.grabInput( false );}
} ) ;
