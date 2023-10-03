const { handleDelivered } = require('./handler');

describe('Vendor Handler', () => {
  it('should log a "thank you" message when handling delivered event', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const payload = {
      store: 'One Piece',
      orderId: '3D2Y',
      customer: 'Monkey D. Luffy',
      address: 'Marineford',
    };
    
    handleDelivered(payload);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(`VENDOR: Thank you for delivering ${payload.orderId}`);
    
    consoleLogSpy.mockRestore();
  });
});
