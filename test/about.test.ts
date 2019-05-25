import * as request from 'supertest';
import { app } from '../src/app';
import { version } from '../package.json';

export default describe('About route', () => {
    it('should get version number', () =>
        request(app)
            .get(`/about`)
            .expect(200)
            .expect({ version }));
});
