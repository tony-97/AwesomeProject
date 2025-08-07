import React from 'react';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { TouchableOpacity } from 'react-native';

interface Props {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
  color?: string;
  style?: object;
}

const FavoriteIcon: React.FC<Props> = ({
  isFavorite,
  onPress,
  size = 28,
  color,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <MaterialDesignIcons
      name={isFavorite ? 'star' : 'star-outline'}
      size={size}
      color={color || (isFavorite ? '#FFD700' : '#888')}
    />
  </TouchableOpacity>
);

export default FavoriteIcon;
