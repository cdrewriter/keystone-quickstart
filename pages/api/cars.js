async function graphql(query, variables = {}) {
  const result = await fetch('http://localhost:3000/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  });
  return result.json();
}

const GET_TODOS = `
    query GetItemCars {
      allItemCars {
        id
        name
      }
    }
  `;

export default function fetchData() {
    graphql(GET_TODOS)
      .then(function(result) {
        //console.log(result.data)
        result.data
      })
      .catch(function(error) {
        console.log(error);
        document.querySelector('.results').innerHTML = '<p>Error</p>';
      });
  }

