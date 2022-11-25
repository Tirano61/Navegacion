

import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


interface Props{
    name: string,
}

export const TouchableIcon = ( { name }: Props) => {

    const { changeIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity
        onPress={ () => changeIcon(name) }
    >
        <Icon name={ name } size={40} color="#900" />
    </TouchableOpacity>
  )
}
