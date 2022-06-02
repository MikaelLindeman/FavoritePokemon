/**
 * A helper to helps create different HTTP requests needing for this project
 * a mini-library
 * @returns 
 */
export const httpHelper = () => {
    //Make a request to the URL 
	const customFetch = async (url, options = {}) => {
		const defaultMethod = "GET"
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
        //Abort the request after a certain amount of time if server doesn't give a response
		const controller = new AbortController()
		options.signal = controller.signal

		options.method = options.method || defaultMethod
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		setTimeout(() => {
			controller.abort()
		}, 3000)

		try {
			const response = await fetch(url, options)
			return await response.json()
		} catch (err) {
			return err
		}
	}
    //Fetch request with the URL and generated options and return answer accordingly
	const get = (url, options = {}) => customFetch(url, options)

	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

	return {
		get,
		post,
		put,
		del,
	}
}