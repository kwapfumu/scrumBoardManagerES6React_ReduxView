/** A throttling function receives two parameters, the original function you want to have 
	throttled and wait. It returns a throttled version of the passed function that, when invoked repeatedly, will only actually call the
	original function at most once per every wait milliseconds. The throttling function you will implement is also smart enough to invoke 
	the original function immediately if the calling arguments change.*/
export const throttle = (func, wait) => {
	let context, args, prevArgs, argsChanged, result;
	let previous = 0;
	return function() {
		let now, remaining;
		if(wait){
			now = Date.now();
			remaining = wait - (now - previous);
		}
		context = this;
		args = arguments;
		argsChanged = JSON.stringify(args) != JSON.stringify(prevArgs);
		prevArgs = {...args};
		if (argsChanged || wait && (remaining <= 0 || remaining > wait)) {
			if(wait){
				previous = now;
			}
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
};