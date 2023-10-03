// const handler = require('./handler');
// const eventPool = require('../../eventPool');

// describe('Driver Event Handler', () => {
//     it('should log the pickup event and emit in-transit and delivered events', () => {
//         const consoleLogSpy = jest.spyOn(console, 'log');
//         const eventEmitSpy = jest.spyOn(eventPool, 'emit');

//         const payload = {
//             store: 'One Piece',
//             orderId: '3D2Y',
//             customer: 'Monkey D. Luffy',
//             address: 'Marineford',
//         };
        
//         handler.handlePickup(payload);

//         expect(consoleLogSpy).toHaveBeenCalled('DRIVER: picked up ${payload.orderId}');
//         expect(eventEmitSpy).toHaveBeenCalledWith('in-transit', payload);
//         expect(eventEmitSpy).toHaveBeenCalledWith('delivered', payload);
//     });
// });

const { handlePickup } = require('./handler');

jest.useFakeTimers();

describe('Driver Handler', () => {
  it('should simulate pickup, in-transit, and delivered events', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const socketEmitSpy = jest.fn();

    const payload = {
      store: 'One Piece',
      orderId: '3D2Y',
      customer: 'Monkey D. Luffy',
      address: 'Marineford',
    };

    const socketMock = {
      emit: socketEmitSpy,
    };

    handlePickup(payload, socketMock);

    expect(consoleLogSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    expect(consoleLogSpy).toHaveBeenCalledWith(`DRIVER: in-transit ${payload.orderId}`);
    expect(socketEmitSpy).toHaveBeenCalledWith('in-transit', payload);

    jest.advanceTimersByTime(3000); // Simulate delivery after 3 seconds

    expect(consoleLogSpy).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderId}`);
    expect(socketEmitSpy).toHaveBeenCalledWith('delivered', payload);

    consoleLogSpy.mockRestore();
  });
});
