interface IProps<T> {
	baseQuery: string;
	queryObject?: T | string;
}

export const queryBuilder = <T>({ baseQuery, queryObject }: IProps<T>) => {
	const query = new URL(baseQuery, window.location.origin);

	if (queryObject) {
		Object.entries(queryObject).forEach(([key, value]) => {
			if (!key || !value) return;
			query.searchParams.append(key, value);
		});
	}

	const decodedQueryString = decodeURIComponent(query.toString());

	return decodedQueryString.replace(window.location.origin || "", "");
};
