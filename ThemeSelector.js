import React, { useContext } from 'react';
import { Text, ListItem, View } from 'native-base';
import { ThemeContext } from './ThemeContext';
import { themes } from './theme';

export const ThemeSelector = () => {
    const { setTheme } = useContext(ThemeContext);

    const handleUserSelect = (teamId) => {
        setTheme(teamId);
    };

    return (
        <View>
            <Text>Select a theme:</Text>
            {Object.keys(themes).map((teamId) => {
                return <ListItem key={teamId} onPress={() => handleUserSelect(teamId)}>
                    <Text>{teamId}</Text>
                </ListItem>
            })}
        </View>
    );
}
