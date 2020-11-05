import { getGifs } from '../../../helpers/getGifs';

describe( 'Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async() => {
      const gifs = await getGifs('robotech');
      expect( gifs.length ).toBe( 10 )               
    })
    
} )