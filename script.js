function mincost(arr)
{ 
//write your code here
// return the min cost
  let pq = [];
	for(let i=0; i<arr.length; i++){
		pq.push(arr[i]);
	}
	
	pq.sort(function(a,b){
		return a-b;
	});
	
	let res = 0;
	while(pq.length > 1){
		let first = pq.shift();
		let second = pq.shift();

		res += (first + second);
		pq.push(first + second);
		pq.sort(function(a,b){
	  		return a-b;
	  	});
	}
	return res;
}

module.exports=mincost;