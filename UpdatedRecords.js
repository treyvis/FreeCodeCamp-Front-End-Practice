var collection = {};

function updateRecords(id, prop, value) {
	if (value === ""){
		delete collection[id][prop];
		return	collection;
	}

	if(prop !== "tracks"){
		collection[id][prop] = value;
	} else {
		if (collection[id][prop] === undefined) {
			var newTracks = [];
			newTracks.push(value);
			collection[id][prop] = newTracks;
		} else {
			collection[id][prop].push(value);
		}
	}
	return collection;
}
