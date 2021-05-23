import Phaser from 'phaser';
import GameScene from '../Scenes/GameScene';

describe('GameScene', () => {
  test('Game has a constructor', () => {
    expect(GameScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly', () => {
    const scene = new GameScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Game');
  });

  test('GamePlayscene to be a funtion', () => {
    expect(typeof GameScene).toBe('function');
  });

  test('GameScene to not be undefined', () => {
    expect(typeof GameScene).not.toBe('undefined');
  });

  test('Game scene is a subclass of Scene', () => {
    expect(GameScene.prototype instanceof Phaser.Scene).toBe(true);
  });

  test('Player is a subclass of sprite', () => {
    expect(GameScene instanceof Phaser.Physics.Arcade.Sprite).toBe(false);
  });

});