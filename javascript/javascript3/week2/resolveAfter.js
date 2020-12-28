const resolveAfterFunc = resolveAfter => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am called asynchronously")
    }, resolveAfter * 1000)
  })
}

// with .then
resolveAfterFunc(5).then(res => console.log(res))

// with asyn await
async function asyncAwaitFunc(resolveAfter) {
  const res = await resolveAfterFunc(resolveAfter)
  console.log(res)
}
asyncAwaitFunc(3)
