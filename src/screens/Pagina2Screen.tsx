import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Pagina2Screen = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({

            headerBackTitle: 'Atras',
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <View>
                <Text style={styles.title}>Pagina2Screen</Text>
                <Button
                    title="Ir a Pagina 3"
                    onPress={() => navigator.navigate('Profile')}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={() =>
                        navigator.navigate('PersonScreen', {
                            id: 1,
                            name: 'Juan',
                        })
                    }>
                    <Text>Ir a Juan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={() =>
                        navigator.navigate('PersonScreen', {
                            id: 2,
                            name: 'Maria',
                        })
                    }>
                    <Text>Ir a Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Pagina2Screen;
