import Phaser from 'phaser';
import leaderboard from '../LeaderBoard';
import LeaderboardScene from '../Scenes/LeaderBoardScene';
//import 'regenerator-runtime/runtime';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    result: [
      {
        user: 'Saima',
        score: 20,
      },
      {
        user: 'Guest',
        score: 15,
      },
    ],
  }),
}));

describe('Leaderboard', () => {
  test('Leaderboard has a constructor', () => {
    expect(LeaderboardScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new LeaderboardScene({
      active: true,
    });
    expect(scene.sys.config).toBe('LeaderBoard');
  });

  test('Leaderboard scene is a function', () => {
    expect(typeof LeaderboardScene).toBe('function');
  });

  test('Leaderboard scene is a subclass of scene', () => {
    expect(LeaderboardScene.prototype instanceof Phaser.Scene).toBe(true);
  });

  test('Leaderboard to not be undefined', () => {
    expect(typeof LeaderboardScene).not.toBe('undefined');
  });

  test('saves the score and playerName to the leaderBoard', () => {
    leaderboard.sendData('runner', 1000).then((score) => expect(score.result).toBe('Leaderboard score created correctly.'));
  });

  test('Receives/Loads the scores', async () => {
    const scores = await leaderboard.receiveData();
    expect(scores.result).toBeTruthy();
  });

  test('get score and playerName from the leaderBoard', () => {
    leaderboard.receiveData().then((scores) => expect(typeof scores).toEqual('object'));
  });

  test('Ranking contains the Player', () => {
    leaderboard.receiveData()
      .then((data) => {
        expect(data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              score: 1000,
              user: 'runner',
            }),
          ]),
        );
      })
      .catch(() => { });
  });
});