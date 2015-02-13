var AhoCorasick = require('../');
var should = require('should');
describe('AhoCorasick', function () {
    var ac = null;
    beforeEach(function () {
        ac = new AhoCorasick();
        ac.add('123');
        ac.add('321');
    });
    it('search after build', function () {
        ac.build();
        var res = ac.search('12321');
        res.should.be.an.Array;
        res[0].should.eql('123');
        res[1].should.eql('321');
    });
    it('search before build', function () {
        try {
            ac.search('12321');
        }
        catch (e) {
            e.message.should.eql('please build before search');
        }
    });
});