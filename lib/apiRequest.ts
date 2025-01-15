export async function apiRequest<T, R>(url: string, method: "GET" | "POST" | "DELETE", body?: T): Promise<R> {
	const options: RequestInit = {
		method,
		headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}` },
		body: body ? JSON.stringify(body) : undefined,
	};

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options);
	const res = await response.json();

	if (!response.ok) {
		throw new Error(`${res.message}`);
	}

	return res;
}
