function classnames() {
	let classes = [];

	for (let i = 0; i < arguments.length; i++) {
		let arg = arguments[i];

		if (!arg) {
			continue;
		}

		let argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		}
		else if (Array.isArray(arg) && arg.length) {
			let inner = classnames.apply(null, arg);

			if (inner) {
				classes.push(inner);
			}
		}
		else if (argType === 'object') {
			for (let key in arg) {
				if (hasOwnProperty.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

export default classnames;
