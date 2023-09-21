const year = 2050 ;                                 //change to year and replace : with =
const status = 'student';                          //missing semi colon and =
let count = 0                                      // let allows my count to change

if (year === 2050) {                               //? assignment to comparison === ask coach about this

	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	
    const date = 'April';                            //first date variable
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	count += 4;                                      //?this should be the correct count format and we have listed 4 holidays so far

	if (status === "student") {
	  console.log('June', 'Youth Day');
	  count =+ 1;                             
  }

	console.log('August', 'Women’s Day');   
	console.log('September', 'Heritage Day');

	const date2 = 'December';                       //new variable date2 to resolve conflicts
	console.log(date2, 'Day of Reconciliation');
	count += 3;

	if (status === "parent") {

	  console.log(date2, 'Christmas Day');
	  count += 1;
  }

	console.log(date2, 'Day of Goodwill');
	count += 1;
}


console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);