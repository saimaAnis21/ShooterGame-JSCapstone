import Phaser from 'phaser';
import GameOverScene from '../Scenes/GameOverScene';

describe('GameOverScene', () => {
  test('GameOver has a constructor', () => {
    expect(GameOverScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new GameOverScene({
      active: true,
    });
    expect(scene.sys.config).toBe('GameOver');
  });

  test('Game Over scene is a function', () => {
    expect(typeof GameOverScene).toBe('function');
  });

  test('Game Over scene is a subclass of scene', () => {
    expect(GameOverScene.prototype instanceof Phaser.Scene).toBe(true);
  });

  test('Gameover to not be undefined', () => {
    expect(typeof GameOverScene).not.toBe('undefined');
  });
});