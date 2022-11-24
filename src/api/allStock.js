export const getAllStock = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL_LEARNING_PREDICTION}${process.env.REACT_APP_API_URL_ALL_STOCK}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if(data == {}) {
        return {}
      } else {
        return JSON.parse(data)
      }
    })
    .catch(() => {
      console.error('getAllStock error');
      return {}
    })
}