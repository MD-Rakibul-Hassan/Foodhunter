

export const axiosOpenIntence = axios.create({
	baseURL: url ? url : "",
});
return axiosOpenIntence;