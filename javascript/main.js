/* CURRENTLY IN: javascript/main.js */



(function(){
	var formInput = $( '.decide-button' );
	var Decision = $( '.answer' );
	formInput.on(
		'click'
		, function( e ) {
			//e.stopPropagation();
		//e.preventDefault();

			// grab the task in the input field
			var choice1 = $( '#one1' ).val();
			var choice2 = $( '#one2' ).val();

			// validate task
			/*function validate( choice, alertChoice ) {
				if ( choice == "" || choice == " " ) {
				alert(alertChoice);
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
				}
			}

			if (!validate( choice1 'You forgot to enter something, idiot!')) {
	e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			
			}*/

			if ( choice1 == "" || choice1 == " " ) {
				alert('You forgot to enter something, idiot!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}
      
			if ( choice2== "" || choice2 == " " ) {
				alert('You forgot about the second box, idiot!!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}

			var rando = Math.random();
    
		if(rando < 0.5) { var finalChoice = choice1;
		} 
		else {var finalChoice = choice2;
	}
      
      

			// if we made it here, then task is valid 
			var end = $( '.end' );
			end.text( finalChoice );
		
		}
	);




// second question 

	var formInput2 = $( '.decide-button2' );
	var Decision2 = $( '.answer2' );
	formInput2.on(
		'click'
		, function( e ) {
		
			// grab the task in the input field
			var choicetwo = $( '#two1' ).val();
		

			if ( choicetwo == "" || choicetwo == " " ) {
				alert('You forgot to enter something, idiot!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}

		var rando = Math.random();
    
		if(rando < 0.5) { var finalChoice2 = 'NO';
		} 
		else {var finalChoice2 = 'YES';
		}
      
      	// if we made it here, then valid
			var end2 = $( '.end2' );
			end2.text( finalChoice2 );	
		}
	);

//third question

var formInput3 = $( '.decide-button3' );
	var Decision3 = $( '.answer3' );
	formInput3.on(
		'click'
		, function( e ) {
		
			// grab the task in the input field
			var choicethree1 = $( '#three1' ).val();
			var choicethree2 = $( '#three2' ).val();
			var choicethree3 = $( '#three3' ).val();
		

			if ( choicethree1 == "" || choicethree1 == " " ) {
				alert('You forgot to enter something, idiot!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}


			if ( choicethree2 == "" || choicethree2 == " " ) {
				alert('You forgot to enter something, idiot!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}


			if ( choicethree3 == "" || choicethree3 == " " ) {
				alert('You forgot to enter something, idiot!');
				e.stopPropagation();
				// there is nothing left to do, so peace
				return;
			}

			var threes = $('.three')
			var threesLeng = threes.length

			var desicionThree = Math.floor(Math.random() * (threesLeng)) + 1;
			console.log(threesLeng, desicionThree);

			var winner = $('#three' + desicionThree).val();

			console.log(winner);

			/*var rando = Math.random();
    
			if(rando < 0.5) { var finalChoice3 = choicethree1;
			} 
			else {var finalChoice3 = choicethree2;
			}*/

      	// if we made it here, then task is valid 
			var end3 = $( '.end3' );
			end3.text( winner );
			

		}
	);

		var plusbutton = $( '.plus' );
			plusbutton.on(
				'click'
				, function( e ){
					var newInput = $('<input/>');
					console.log(newInput)


					newInput.addClass('form-control three');
					newInput.attr('id','three'+ ($('.three').length +1))
					console.log(newInput)
					$('.NEXT').append(newInput).append( ' or ' );

				} 
			);

			var minusbutton = $( '.minus' );
			minusbutton.on(
				'click'
				, function( e ){
					var takeaway = $('<input/>');
					takeaway.removeClass('form-control three');

				} 
			);

/*

//add input

//put inside click event of plus button
var newInput = $('<input/>')
console.log(newInput)


newInput.addClass('form-control three')
newInput.attr('id','three'+ ($('.three').length +1))
console.log(newInput)
$('.deciderInput').append(newInput)
*/
//$($('.section').get(0)).find('.fullPage-slidesNav').hide();

$.fn.fullpage( {
	resize: true,
	//loopBottom: true,
	slidesNavigation: true,
	afterRender: function(){
            $($('.section').get(0)).find('.fullPage-slidesNav').hide();
        }
} );

$( '.arrow-up' ).on('click', function() {

		$.fn.fullpage.moveSectionUp();
});

$( '.arrow-down' ).on('click', function() {

		$.fn.fullpage.moveSectionDown();
});

$( 'h1' ).on('click', function() {
		$.fn.fullpage.moveSectionDown();
	})


})();
