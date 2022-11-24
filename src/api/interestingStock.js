export const getInterestingStock = async interestingArr => {
  return await fetch(`${process.env.REACT_APP_API_URL_LEARNING_PREDICTION}${process.env.REACT_APP_API_URL_INTERESTING}`, {
    method: "POST",
    body: JSON.stringify({ data: interestingArr }),
    headers: {'Content-Type': 'application/json'},
  }).then(async res => {
    const result = await res.json()
    return typeof(result) === "object" ? [] : JSON.parse(result);
  }).catch((e) => {
    console.error('getInterestingStock error', e);
  })
}