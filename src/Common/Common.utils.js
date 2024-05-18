import {Dimensions, Alert} from 'react-native';
const {width, height} = Dimensions.get('window');
const diagonal = Math.sqrt(height * height + width * width);
/**
 * Scales the value responsively, based on the screen size.
 * @param {number} size The value thaṭ you want to scale.
 */
const scale = size => {
  return (diagonal / 800) * size;
};
/**
 * Scales the value responsively, based on the screen's diagonal size, and multiplies it to a factor.
 * @param {number} size The value thaṭ you want to scale.
 * @param {number} [factor] The factor by which you want to scale. 0.75 by default.
 */
export const moderateScale = (size, factor = 0.75) =>
  size + (scale(size) - size) * factor;