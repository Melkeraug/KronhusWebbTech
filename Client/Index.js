async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: data, moreData`;
}

getAll().then((all) => {
  console.log('all the data')
})