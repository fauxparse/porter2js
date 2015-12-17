var should = require('chai').should(),
    porter2 = require('../porter2');

EXAMPLES = [
  ['generously', 'generous'],
  ['consign', 'consign'],
  ['consigned', 'consign'],
  ['consigning', 'consign'],
  ['consignment', 'consign'],
  ['consist', 'consist'],
  ['consisted', 'consist'],
  ['consistency', 'consist'],
  ['consistent', 'consist'],
  ['consistently', 'consist'],
  ['consisting', 'consist'],
  ['consists', 'consist'],
  ['consolation', 'consol'],
  ['consolations', 'consol'],
  ['consolatory', 'consolatori'],
  ['console', 'consol'],
  ['consoled', 'consol'],
  ['consoles', 'consol'],
  ['consolidate', 'consolid'],
  ['consolidated', 'consolid'],
  ['consolidating', 'consolid'],
  ['consoling', 'consol'],
  ['consolingly', 'consol'],
  ['consols', 'consol'],
  ['consonant', 'conson'],
  ['consort', 'consort'],
  ['consorted', 'consort'],
  ['consorting', 'consort'],
  ['conspicuous', 'conspicu'],
  ['conspicuously', 'conspicu'],
  ['conspiracy', 'conspiraci'],
  ['conspirator', 'conspir'],
  ['conspirators', 'conspir'],
  ['conspire', 'conspir'],
  ['conspired', 'conspir'],
  ['conspiring', 'conspir'],
  ['constable', 'constabl'],
  ['constables', 'constabl'],
  ['constance', 'constanc'],
  ['constancy', 'constanc'],
  ['constant', 'constant'],
  ['knack', 'knack'],
  ['knackeries', 'knackeri'],
  ['knacks', 'knack'],
  ['knag', 'knag'],
  ['knave', 'knave'],
  ['knaves', 'knave'],
  ['knavish', 'knavish'],
  ['kneaded', 'knead'],
  ['kneading', 'knead'],
  ['knee', 'knee'],
  ['kneel', 'kneel'],
  ['kneeled', 'kneel'],
  ['kneeling', 'kneel'],
  ['kneels', 'kneel'],
  ['knees', 'knee'],
  ['knell', 'knell'],
  ['knelt', 'knelt'],
  ['knew', 'knew'],
  ['knick', 'knick'],
  ['knif', 'knif'],
  ['knife', 'knife'],
  ['knight', 'knight'],
  ['knightly', 'knight'],
  ['knights', 'knight'],
  ['knit', 'knit'],
  ['knits', 'knit'],
  ['knitted', 'knit'],
  ['knitting', 'knit'],
  ['knives', 'knive'],
  ['knob', 'knob'],
  ['knobs', 'knob'],
  ['knock', 'knock'],
  ['knocked', 'knock'],
  ['knocker', 'knocker'],
  ['knockers', 'knocker'],
  ['knocking', 'knock'],
  ['knocks', 'knock'],
  ['knopp', 'knopp'],
  ['knot', 'knot'],
  ['knots', 'knot'],
  ['outings', 'outing'],
  ['atlases', 'atlas'],
];

describe('#stem', function() {
  for (var i = 0; i < EXAMPLES.length; i++) {
    global.example = EXAMPLES[i];

    it('stems ' + global.example[0] + ' to ' + global.example[1], function() {
      porter2.stem(global.example[0]).should.equal(global.example[1]);
    });
  }
});

describe('#stemAll', function() {
  it('stems a full sentence of text', function() {
    porter2
      .stemAll('Actually, I knocked loudly, but apparently ineffectually')
      .should.equal('actual i knock loud but appar ineffectu');
  });
});
