var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, { [key]: value })
}
var obj = {prop : 1}
updateObjectWithKeyAndValue(obj, 'prop2', 2)
obj

function destructivelyUpdateObjectWithKeyAndValue(obect, key, value){
  obj[key] = value
}
