import Phaser from 'phaser';
import form from '../Objects/UserNameForm';

const scene = {
  sys: {
    game: {
      globals: {
        username: 'Angelos',
      },
    },
  },
};

describe('Helpers for scenes', () => {
  test('form is correctly built', () => {
    form.createForm(scene);
    const forms = document.querySelector('form');
    expect(forms.children.length).toBe(2);
    expect(forms.children[0].placeholder).toBe('Please Enter your Name');
    expect(forms.children[0].getAttribute('type')).toBe('text');
    expect(forms.children[1].getAttribute('type')).toBe('submit');
  });
});