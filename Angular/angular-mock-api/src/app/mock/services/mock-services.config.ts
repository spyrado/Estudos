import { HttpResponse } from '@angular/common/http'
import { of } from 'rxjs'

export default {
  GET: {
    'https://jsonplaceholder.typicode.com/users': {
      handler: getAllUrsers
    }
  }
}

function getAllUrsers() {
  return of(
    new HttpResponse(
      {
        status: 200,
        body: [
          {
            id: 1,
            name: 'Viktor',
          },
          {
            id: 2,
            name: 'Nicolas',
          },
        ]
      }
    )
  )
}