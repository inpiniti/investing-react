export const getAllStock = async () => {
  return await fetch('http://113.131.152.55:5000/test2')
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