export const sortedData = (data, softBy) =>
	data.sort((a, b) => b[softBy] - a[softBy]);
