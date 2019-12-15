function primeHighest(a, b) {
	for (let i = secondVal; i = firstVal; i--) {
		for (let j = 2; j <= i / 2; ++j) {
			if (i % j !== 0) {
				let prime = i;
				break;
			}
		}
	}
	return prime
}



	primeHighest = (low, high) => {
		if (low > high) {
       let temp = low;
       low = high;
       high = temp;
    }
		
		while (high > low) {
			let flag = 0;
			for (let j = 2; j <= high / 2; ++j) {
				if (high % j === 0) {
					flag = 1;
					break;
				}
			}
			if (flag === 0) 
				console.log(high);
				return high
			   --high;
		}
	}; 
