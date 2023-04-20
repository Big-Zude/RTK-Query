import React, { useState } from 'react';
import { Modal, TextInput, Button, StyleSheet, View, Alert } from 'react-native';
import { useCreateUserMutation } from './apiSlice';

export const CreateUser = ({ visible, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [createUser] = useCreateUserMutation()

    const handleSubmit = () => {
        const formData = {
            name,
            phone,
            email,
            id
        }
        createUser(formData)
            .unwrap()
            .then(() => {
                Alert.alert("User created");
                setName('');
                setPhone('')
                setEmail('')
                setId('')
                setAddress('')
                setCompany('')
                setWebsite('')
            })
            .catch(() =>
                Alert.alert("there was an error"),
            );
        onClose();
        setName('');
        setPhone('')
        setEmail('')
        setId('')
        setAddress('')
        setCompany('')
        setWebsite('')
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <TextInput
                    placeholder="Id"
                    value={id}
                    onChangeText={setId}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Phone"
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Address"
                    value={address}
                    onChangeText={setAddress}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Website"
                    value={website}
                    onChangeText={setWebsite}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Company"
                    value={company}
                    onChangeText={setCompany}
                    style={styles.input}
                />
                <Button title="Submit" onPress={handleSubmit} />
                <Button title="Cancel" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: '80%',
    },
});
