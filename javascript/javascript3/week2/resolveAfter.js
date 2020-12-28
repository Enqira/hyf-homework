const resolveAfterFunc = resolveAfter => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, resolveAfter * 1000)
  })
}

resolveAfterFunc(5).then(() => console.log("I am called asynchronously"))

// with asyn await
async function asyncAwaitFunc(resolveAfter) {
  await resolveAfterFunc(resolveAfter).then(() =>
    console.log("I am async func")
  )
}
asyncAwaitFunc(3)
