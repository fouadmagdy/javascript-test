import { pipe, always, applySpec } from 'ramda';
import R from 'ramda'

const getValue = (o, sortKey) => sortKey ? o[sortKey] : o

const sort = (list, sortKey) => {
  // SHOULD IMPLEMENT
  const diff = function (a, b) { return a - b; }
  return R.sort(diff, list)
};

const findIndex = (list, sortKey) => value => {
  // SHOULD IMPLEMENT
  let item
  for (let i = 0; i < list.length; i++) {
    if (list[i] == value) {
      item = list[i]
      break
    }
  }
  return item - 1;
}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  return R.insert(sortKey, item, list);
}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT

  return R.without([value], list)
}

export const List = ({ sortKey, initial, initialOrder }) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      initialOrder: true
    })
  }
}
