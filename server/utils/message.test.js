// let expect = require('expect');

// let {generateMessage} = require('./message');

// describe('generateMessage', () => {
// 	it('should generate correct message object' , () =>{
// 		let from = 'Mark';
// 		let text = 'Some Message';
// 		let message = generateMessage(from, text);

// 		expect( typeof message.createdAt).toBe("number");
// 		expect(message).toInclude({from,text});
// 	});

// });


var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect( typeof message.createdAt).toBe('number');
 expect(message).toMatchObject({from, text});
  });
});
