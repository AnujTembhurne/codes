// 5. Print all prime numbers occurring in 1st 50 natural numbers
	// HINT1: google how to check if a number is prime or not
    // HINT2: use nested loops
	for (let i = 2; i < 50; i++) {
		let flag = 0;
        for(let j=2;j<i;j++){
			if(i%j==0){
				flag=1;
				break;
			}
		}
		if (i > 1 && flag == 0) {
			console.log(i);
		}  
        }
    