// // lib/graphqlRequest.ts
// const GRAPHQL_ENDPOINT = "https://your-wordpress-site.com/graphql"; // Replace with your WordPress GraphQL endpoint

// // Function to fetch data from GraphQL API
// export const fetchGraphQL = async (
//   query: string,
//   variables: Record<string, any> = {}
// ) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   const body = JSON.stringify({
//     query,
//     variables,
//   });

//   try {
//     const response = await fetch(GRAPHQL_ENDPOINT, {
//       method: "POST",
//       headers,
//       body,
//     });

//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }

//     // Trying to parse the JSON response
//     const result = await response.json();

//     if (result.errors) {
//       throw new Error(
//         result.errors.map((error: any) => error.message).join(", ")
//       );
//     }

//     return result.data;
//   } catch (error) {
//     console.error("Error fetching data from GraphQL API:", error);

//     // If the response isn't JSON or another error occurs, log the raw response text
//     const rawText = await response.text(); // We await here correctly
//     console.error("Raw response text:", rawText);

//     throw new Error("Error fetching data from GraphQL API");
//   }
// };

// // GraphQL query to fetch posts with pagination and categories
// export const mainQuery = `
//   query mainQuery($after: String, $before: String, $categoryId: ID) {
//     posts(
//       where: {
//         status: PUBLISH,
//         orderby: {field: DATE, order: DESC},
//         categoryIn: [$categoryId]
//       },
//       after: $after,
//       before: $before
//     ) {
//       nodes {
//         slug
//         title
//         excerpt(format: RENDERED)
//         featuredImage {
//           node {
//             sourceUrl
//             altText
//           }
//         }
//         categories {
//           nodes {
//             name
//             id
//           }
//         }
//       }
//       pageInfo {
//         hasNextPage
//         hasPreviousPage
//         endCursor
//         startCursor
//       }
//     }
//   }
// `;

// // GraphQL query to fetch a single post by slug
// export const singlePostQuery = `
//   query singlePostQuery($slug: String!) {
//     postBy(slug: $slug) {
//       title
//       content(format: RENDERED)
//       featuredImage {
//         node {
//           sourceUrl
//           altText
//         }
//       }
//       categories {
//         nodes {
//           name
//           id
//         }
//       }
//     }
//   }
// `;
