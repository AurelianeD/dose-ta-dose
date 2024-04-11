async function getFileSize(url: string) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const blob = await response.blob();
			const fileSizeBytes = blob.size;
			const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(1); // Convert bytes to megabytes and round to 1 decimal place
			return fileSizeMB;
		} else {
			console.error('Failed to fetch the file:', response.status);
			return null;
		}
	} catch (error) {
		console.error('Error fetching the file:', error);
		return null;
	}
}

export { getFileSize };
