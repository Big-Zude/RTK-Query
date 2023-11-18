import React, { useState } from 'react';
//import { useGetTodosQuery } from './apiSlice';
import {
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    View,
    SafeAreaView,
    Button
} from 'react-native';
import { useGetUsersQuery } from './apiSlice';
import { CreateUser } from './CreateUser';

export const UserList = () => {
    const query = "React Developer"
    const { data, isLoading } = useGetUsersQuery(query);
    console.log("data", JSON.stringify(data))
    const [modalVisible, setModalVisible] = useState(false);

    const handleClose = () => {
        setModalVisible(false)
    }

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>id: {item.id}</Text>
                        <Text>name: {item.name}</Text>
                        <Text>phone: {item.phone}</Text>
                        <Text>email: {item.email}</Text>
                    </View>)}
            />
            <Button title="Create User" onPress={() => setModalVisible(true)} />
            <CreateUser visible={modalVisible} onClose={handleClose}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 5,
        paddingHorizontal: 18,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        gap: 2
    },

});