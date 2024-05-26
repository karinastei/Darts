import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../config/Styles';
import axios from 'axios';
import Config from 'react-native-config';

const Scores = ({route, navigation}) => {
  const {winnerName, gameId} = route.params;
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${Config.APP_API_URL}/game/${gameId}/throws`);
      const data = response.data;
      const lastScores = getLastScores(data);
      setScores(lastScores);
    } catch (error) {
      console.error('Failed to fetch scores:', error);
    }
  };

  const getLastScores = data => {
    const sortedByDate = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const scoresMap = new Map();

    sortedByDate.forEach(item => {
      if (!scoresMap.has(item.player_id._id)) {
        scoresMap.set(item.player_id._id, item);
      }
    });

    return Array.from(scoresMap.values());
  };

  const renderScore = ({item}) => (
    <Text style={styles.scoreText}>
      {item.player_id.name}: {item.game_score}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.finalScoreArea}>
        <Text style={styles.scoreText}>Game Over</Text>
        <Text style={styles.scoreText}>Winner: {winnerName}</Text>
        <Text style={styles.scoreText}>final scores:</Text>
        <FlatList data={scores} renderItem={renderScore} keyExtractor={item => item._id} />
      </View>
      <TouchableOpacity
        style={styles.Dartbutton}
        onPress={() => navigation.navigate('Add players')}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scores;
