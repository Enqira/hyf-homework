const resolveAfterFunc = resolveAfter => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function run successfully")
    }, resolveAfter * 1000)
  })
}

resolveAfterFunc(3).then(res => console.log(`Promise ${res}`))

// with asyn await
async function asyncAwaitFunc(resolveAfter) {
  try {
    const res = await resolveAfterFunc(resolveAfter)
    console.log(`Async ${res}`)
  } catch (error) {
    console.log(error)
  }
}
asyncAwaitFunc(5)
