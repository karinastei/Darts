import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import Sector from './Sector';
import ClickableCircle from './ClickableCircle';
import styles from '../config/Styles';
import {Colors, Scores, Zones} from '../config/DartboardZones';

const Dartboard = ({route}) => {
  const {players} = route.params || {players: []};

  const [clickedSections, setClickedSections] = useState([]);
  const [clickPositions, setClickPositions] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [playerScores, setPlayerScores] = useState(players.map(() => 301));
  const [currentTurnScores, setCurrentTurnScores] = useState([]);

  const updateScores = useCallback(
    (score, position) => {
      setClickedSections(prev => [...prev, score]);
      setClickPositions(prev => [...prev, position]);
      setCurrentTurnScores(prev => [...prev, score]);
      setPlayerScores(prevScores =>
        prevScores.map((s, idx) => (idx === currentPlayerIndex ? s - score : s)),
      );
    },
    [currentPlayerIndex],
  );

  const removeLastScore = useCallback(() => {
    if (clickedSections.length > 0) {
      setClickedSections(prev => prev.slice(0, -1));
      setClickPositions(prev => prev.slice(0, -1));
      setCurrentTurnScores(prev => prev.slice(0, -1));
      setPlayerScores(prevScores =>
        prevScores.map((s, idx) =>
          idx === currentPlayerIndex ? s + clickedSections.slice(-1)[0] : s,
        ),
      );
    }
  }, [clickedSections, currentPlayerIndex]);

  const nextPlayer = useCallback(() => {
    setCurrentPlayerIndex(prev => (prev + 1) % players.length);
    setClickPositions([]);
    setCurrentTurnScores([]);
  }, [players.length]);

  const renderZones = Zones.map(zone =>
    Scores.map((score, index) => (
      <Sector
        key={`${zone.multiplier}-${index}`}
        angle={index * (360 / Scores.length) + zone.adjuster}
        color={index % 2 === 0 ? zone.firstColor : zone.secondColor}
        score={score * zone.multiplier}
        scale={zone.scale}
        path={zone.path}
        handlePress={updateScores}
        multiplier={zone.multiplier}
      />
    )),
  );

  return (
    <View style={styles.container}>
      <View style={styles.scoreArea}>
        <ScrollView vertical={true}>
          {players.map((player, index) => (
            <Text
              key={index}
              style={index === currentPlayerIndex ? styles.boldScoreText : styles.scoreText}>
              {player}: {playerScores[index]}
            </Text>
          ))}
        </ScrollView>
      </View>
      <Svg height="500" width="510" style={styles.svgStyle}>
        <ClickableCircle color={Colors.teal} size={100} score={25} handlePress={updateScores} />
        <ClickableCircle color={Colors.blue} size={50} score={50} handlePress={updateScores} />
        {renderZones}
        {clickPositions.map((pos, index) => (
          <Circle key={index} cx={pos.x} cy={pos.y} r="5" fill="red" />
        ))}
      </Svg>
      <View style={styles.throwsArea}>
        <Text style={styles.scoreText}>
          THROWS {players[currentPlayerIndex]}: {currentTurnScores.join(', ')}
        </Text>
        <Text style={styles.scoreText}>
          UP NEXT: {players[(currentPlayerIndex + 1) % players.length]}
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={removeLastScore}>
            <Text style={styles.buttonText}>Remove last</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={nextPlayer}>
            <Text style={styles.buttonText}>Next player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dartboard;
