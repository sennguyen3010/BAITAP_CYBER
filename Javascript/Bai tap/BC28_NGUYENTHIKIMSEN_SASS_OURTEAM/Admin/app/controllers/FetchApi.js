const FetchApi = (url) => {
  return axios({
    url: url,
    method: 'GET',
  });
};
