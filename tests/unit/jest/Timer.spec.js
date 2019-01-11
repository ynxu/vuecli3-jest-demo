describe("timer mocks demo", () => {
  const {timerGame,infiniteTimerGame} = require("../../../src/js/timerGame");
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("timer game test demo", () => {
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test("test run all timers", () => {
    const callback = jest.fn();
    timerGame(callback);
    //
    expect(callback).not.toHaveBeenCalled();
    // 执行所有计时器
    jest.runAllTimers();
    //
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("run pending timer", () => {
    const callback = jest.fn();
    infiniteTimerGame(callback);

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),100);
    // 只执行当前等待的计时器
    jest.runOnlyPendingTimers();

    expect(callback).toHaveBeenCalled();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
  });

  test("advanceTimerByTime demo", () => {
    const callback = jest.fn();
    timerGame(callback);
    //
    expect(callback).not.toHaveBeenCalled();
    // 执行所有计时器
    jest.advanceTimersByTime(1000);
    //
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  // jest.clearAllTimers() // 清除所有计时器
});
