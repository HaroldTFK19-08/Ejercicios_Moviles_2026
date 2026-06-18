import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = ({ user }) => {
    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {user.name[0]}
                </Text>
            </View>
            <View>
                <Text style={styles.name}>
                    {user.name}
                </Text>
                <Text style={styles.email}>
                    {user.email}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#0366d6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatarText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        color: 'gray',
    },
});

export default Lista;
