async function graphql(query, variables = {}) {
  const result = await fetch('https://graphqlmiass.herokuapp.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': '7unBxREeIjc4FipG5VmkC3Kj6eNaDDr3',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  });
  return result.json();
}

const GET_TODOS = `
    query MyQuery {
      ks {
        id
        name
      }
    }
  `;

export default function fetchData() {
    graphql(GET_TODOS)
      .then(function(result) {
        console.log(result.data)

      })
      .catch(function(error) {
        console.log(error);
        document.querySelector('.results').innerHTML = '<p>Error</p>';
      });
  }

