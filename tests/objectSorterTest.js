const objectSorter = require('../index'),
    chai = require('chai'),
    expect = chai.expect, // we are using the "expect" style of Chai
    assert = chai.assert; // we are using the "expect" style of Chai

describe('Test obbjectSorter for a given json object', () => {

    it('Given object has array property at top level, the default sort function should sort the items in the array.', function () {
        let obj = {
            a: "0",
            b: ["t", "z", "a"]
        };

        objectSorter(obj);

        expect(obj.c.length).to.equal(3);
        expect(obj.c[0]).to.equal('a');
        expect(obj.c[2]).to.equal('z');
    });

    it('Given object has nested array property at lower level, the default sort function should sort the items in the array.', function () {
        let obj = {
            a: "0",
            b: {
                e: [5, 7, 3],
                f: ['tiger', 'cat', 'dog', 'horse']
            },
            c: ["t", "z", "a"]
        };

        objectSorter(obj);

        expect(obj.c.length).to.equal(3);
        expect(obj.c[0]).to.equal('a');
        expect(obj.c[2]).to.equal('z');

        expect(obj.b.e[0]).to.equal(3);
        expect(obj.b.e[1]).to.equal(5);
        expect(obj.b.e[2]).to.equal(7);

        expect(obj.b.f[0]).to.equal('cat');
        expect(obj.b.f[1]).to.equal('dog');
        expect(obj.b.f[2]).to.equal('horse');
    });

    it('Given object has array property at top level, the sort function should sort the items in the array.', function () {
        let obj = {
            a: "b",
            c: ["t", "z", "a"]
        };

        objectSorter(obj);

        expect(obj.c.length).to.equal(3);
        expect(obj.c[0]).to.equal('a');
        expect(obj.c[2]).to.equal('z');
    });

    it('Given object has array property at nested level, the sort function should sort the items in the array.', function () {
        let nameComparator = (a, b) => {
            if (!a || !b || !a.name || !b.name || typeof a.name !== 'string' || typeof b.name !== 'string') {
                return 1;
            }

            return a.name.localeCompare(b.name);
        };
        let obj = {
            d: [
                {
                    name: "before"
                },
                {
                    name: "after"
                },
                {
                    name: "updateSpace",
                    mm: [
                        {
                            name: 41,
                            value: "zz"
                        },
                        {
                            name: 32,
                            value: "ddd"
                        }
                    ]
                }
            ]
        };

        objectSorter(obj, nameComparator);

        expect(obj.d.length).to.equal(3);
        expect(obj.d[0].name).to.equal('after');
        expect(obj.d[2].name).to.equal('updateSpace');
    });

});

