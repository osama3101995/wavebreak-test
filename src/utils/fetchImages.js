export default function fetchImages(page = 1) {
  return fetch(
    `https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&image_type=photo&page=${page}`
  ).then((res) => res.json());
}

export function fetchOneImage(id) {
  return fetch(
    `https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&id=${id}&image_type=photo`
  ).then((res) => res.json());
}
