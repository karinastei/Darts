import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../config/DartboardZones';
import styles from '../config/Styles';
import {Alert} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

const Users = ({navigation}) => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');

  const addPlayer = () => {
    if (newPlayer.trim() !== '') {
      setPlayers(currentPlayers => [...currentPlayers, newPlayer.trim()]);
      setNewPlayer('');
    }
  };

  const removePlayer = player => {
    setPlayers(currentPlayers => currentPlayers.filter(item => item !== player));
  };

  const goToDartboard = async () => {
    console.log('API URL:', Config.APP_API_URL);
    if (players.length === 0) {
      Alert.alert('No Players', 'Please add at least one player before proceeding.');
    } else {
      try {
        const response = await axios.post(`${Config.APP_API_URL}/game/init`, {
          playerNames: players,
        });
        console.log('players', response.data.players);
        navigation.navigate('Dartboard', {
          players: response.data.players,
          gameId: response.data.game._id,
        });
      } catch (error) {
        Alert.alert('Error', `Failed to start game: ${error.message}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter player name"
            value={newPlayer}
            onChangeText={setNewPlayer}
          />
          <TouchableOpacity style={styles.button} onPress={addPlayer}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.playerItem}>
              <Text style={styles.scoreText}>{item}</Text>
              <TouchableOpacity style={styles.button} onPress={() => removePlayer(item)}>
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity style={styles.Dartbutton} onPress={goToDartboard}>
          <Text style={styles.buttonText}>Go to Dartboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Users;
