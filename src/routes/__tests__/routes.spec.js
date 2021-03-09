import { getPathToRoute } from '../routes'

describe('Routes', () => {
  it('should get the correct path by name', () => {
    const routeName = 'home'
    const expectedPath = '/'
    const path = getPathToRoute(routeName)

    expect(path).toBe(expectedPath)
  })
})
