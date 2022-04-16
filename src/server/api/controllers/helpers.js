export function returnBadRequest(response, body = {}) {
  response
    .writeHead(400, {
      'Content-Type': 'application/json'
    })
    .end(JSON.stringify({ status: 'Bad request', ...body }))
}

export function returnNotFound(response) {
  response
    .writeHead(404, {
      'Content-Type': 'application/json'
    })
    .end(JSON.stringify({ status: 'Not Found' }))
}

export function returnOk(response, data) {
  const payload = !!data ? data : { status: 'Ok' }
  response
    .writeHead(200, {
      'Content-Type': 'application/json'
    })
    .end(JSON.stringify({ data: payload }))
}
