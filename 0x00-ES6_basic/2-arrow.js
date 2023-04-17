function getNeighborhoodsList() {
  const neighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (newNeighborhood) => {
    neighborhoods.push(newNeighborhood);
    return neighborhoods;
  };

  return {
    neighborhoods,
    addNeighborhood
  };
}

export default getNeighborhoodsList;
