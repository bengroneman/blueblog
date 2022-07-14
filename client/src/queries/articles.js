import gql from 'graphql-tag';

export const GET_ARTICLES = gql`
	query GetArticles {
		articles {
			data {
				id
				attributes {
					title
					description
					createdAt
					author {
						data {
							attributes {
								name
							}
						}
					}
					content
				}
			}
		}
	}
`;
