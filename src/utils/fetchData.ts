export const fetchData = async (
  url = "https://exercisedb.p.rapidapi.com/exercises"
) => {
  var _0xcd3c = [
    "\x30\x34\x38\x36\x37\x32\x32\x39\x61\x33\x6D\x73\x68\x62\x63\x61\x39\x39\x34\x35\x37\x64\x37\x65\x30\x31\x32\x38\x70\x31\x63\x62\x64\x63\x66\x6A\x73\x6E\x61\x30\x36\x39\x33\x65\x37\x37\x61\x39\x66\x31",
  ];

  const exercise_api_key = _0xcd3c[0];

  const data = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": exercise_api_key,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return data;
};
