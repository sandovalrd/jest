const handlers = require('./index')

describe('endpoinds', () => {
    describe('users', () => {
        describe('get', () => {
            it('return to user json', async() => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1 })
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await handlers({ axios }).get({}, res)
                expect(res.status.mock.calls).toEqual([
                    [200]
                ])
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])

            })
        })
        describe('post', () => {
            it('create a resource', async() => {
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1 })
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                const req = {
                    body: 'request body'
                }
                await handlers({ axios }).post(req, res)
                expect(res.status.mock.calls).toEqual([
                    [201]
                ])
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
                expect(axios.post.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users', 'request body']
                ])
            })
        })
        describe('put', () => {
            it('updates a resource', async() => {
                const axios = {
                    put: jest.fn()
                }
                const res = {
                    sendStatus: jest.fn()
                }
                const req = {
                    body: 'request body',
                    params: {
                        id: 12
                    }
                }
                await handlers({ axios }).put(req, res)
                expect(res.sendStatus.mock.calls).toEqual([
                    [204]
                ])
                expect(axios.put.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users/12',
                        'request body'
                    ]
                ])
            })
        })
        describe('delete', () => {
            it('delete a resource', async() => {
                const axios = {
                    delete: jest.fn()
                }
                const res = {
                    sendStatus: jest.fn()
                }
                const req = {
                    params: {
                        id: 54
                    }
                }
                await handlers({ axios }).delete(req, res)
                expect(res.sendStatus.mock.calls).toEqual([
                    [204]
                ])
                expect(axios.delete.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users/54']
                ])
            })
        })
    })
})