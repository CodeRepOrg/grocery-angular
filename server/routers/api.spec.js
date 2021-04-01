const fetch = require('node-fetch');

describe('the stack canary spec', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe('DB tests', () => {
    it('Insert value on db', () => {
        fetch('http://localhost:3000/api/insert', {
            method: 'POST',
            body: JSON.stringify({
                item: 'pipoca',
                quantidade: 1,
                unidade: 'kg',
                status: 'comprar',
                nome: 'jp',
                obs: 'boa'
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(json => {
            expect(json).toStrictEqual({ err: false, msg: 'inserted' })
        });
    });
    it('Get list', () => {
        fetch('http://localhost:3000/api/list')
        .then(res => res.json())
        .then(json => {
            expect(json).toStrictEqual({ err:false, msg: [
                {
                    item: 'pipoca',
                    quantidade: 1,
                    unidade: 'kg',
                    status: 'comprar',
                    nome: 'jp',
                    obs: 'boa'
                }
              ] })
        });
    });
    it('Delete value', () => {
        fetch('http://localhost:3000/api/clean', {
            method: 'POST',
            body: JSON.stringify({
                item: 'pipoca',
                quantidade: 1,
                unidade: 'kg',
                status: 'comprar',
                nome: 'jp',
                obs: 'boa'
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(json => {
            expect(json).toStrictEqual({ err: false, msg: 'deleted' })
        });
    });
});