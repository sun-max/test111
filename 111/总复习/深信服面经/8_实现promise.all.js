var nums=[2,7,11,15],target=9;
var  twoSum=function(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                console.log(i,j);
            }
        }
    }
}
twoSum(nums,target);//时间复杂度是O(n^2)

//通过哈希表
function getIndexArr(arr,target){
    var map=new Map();
    for(var i=0;i<arr.length;i++){
        map.set(arr[i],i);
    }
    for(var j=0;j<arr.length;j++){
        if(map.has(target-arr[j])&&map.get(target-arr[i])!==j){
            return [j,map.get(target-array[j])];
        }
    }
}

function getIndexArr(array,target){
	var map = new Map();
	for (var i=0;i < array.length; i++) {
		if (map.has(target-array[i]) && map.get(target-array[i]) !== i) {
			return [i,map.get(target-array[i])];
		}
		map.set(array[i],i);
	}
}
