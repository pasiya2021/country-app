import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _ScreenLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CountryListScreen" options={{ headerShown: false }} />
            <Stack.Screen name="CountryDetailsScreen" options={{ headerShown: false }} />
        </Stack>
    )
}