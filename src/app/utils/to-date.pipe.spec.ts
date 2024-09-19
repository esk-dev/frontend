import { ToDatePipe } from './from-timestamp.pipe';

describe('ToDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
