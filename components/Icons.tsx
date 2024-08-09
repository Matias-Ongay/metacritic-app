import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

type IconProps = {
  size?: number;
  color?: string;
  [key: string]: any; // Permitir cualquier otra prop
};

export const CircleInfoIcon = (props: IconProps) => {
  return <FontAwesome6 name="circle-info" size={32} color="white" {...props} />;
};

export const HomeIcon = (props: IconProps) => {
  return <FontAwesome name="home" size={32} color="white" {...props} />;
};
export const InfoIcon = (props: IconProps) => {
  return <FontAwesome6 name="circle-info" size={32} color="white" {...props} />;
};
 