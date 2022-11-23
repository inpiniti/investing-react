export const getInterestingStock = async interestingArr => {
  return await fetch('http://113.131.152.55:5000/interesting', {
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