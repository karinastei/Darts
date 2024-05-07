import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import Sector from './Sector';
import ClickableCircle from './ClickableCircle';
import styles from '../config/Styles';
import {Colors, Scores, Zones} from '../config/DartboardZones';

const Dartboard = () => {
  const [clickedSections, setClickedSections] = useState([]);
  const [lastScore, setLastScore] = useState(null);
  const [clickPositions, setClickPositions] = useState([]);

  useEffect(() => {
    if (clickedSections.length > 0) {
      setLastScore(clickedSections[clickedSections.length - 1]);
    }
  }, [clickedSections]);

  const handlePress = (score, position) => {
    setClickedSections(prevClickedSections => [...prevClickedSections, score]);
    setClickPositions(prevPositions => [...prevPositions, position]);
    console.log('Scored:', score);
  };

  const onRemoveLast = () => {
    setClickedSections(prevClickedSections => {
      if (prevClickedSections.length > 0) {
        return prevClickedSections.slice(0, -1);
      }
      return prevClickedSections;
    });
    setClickPositions(prevPositions => {
      if (prevPositions.length > 0) {
        return prevPositions.slice(0, -1);
      }
      return prevPositions;
    });
  };

  const createSectors = useCallback(
    zone => {
      return Scores.map((score, index) => {
        return (
          <Sector
            key={index}
            angle={index * (360 / Scores.length) + zone.adjuster}
            color={index % 2 === 0 ? zone.firstColor : zone.secondColor}
            score={score * zone.multiplier}
            scale={zone.scale}
            path={zone.path}
            handlePress={handlePress}
            multiplier={zone.multiplier}
          />
        );
      });
    },
    [handlePress],
  );

  const renderedZones = Zones.map(zone => createSectors(zone));

  return (
    <View style={styles.container}>
      <Svg height="500" width="510" style={styles.svgStyle}>

        <ClickableCircle color={Colors.teal} size={100} score={25} handlePress={handlePress} />
        <ClickableCircle color={Colors.blue} size={50} score={50} handlePress={handlePress} />
        {renderedZones}
        {clickPositions.map((pos, index) => (
          <Circle key={index} cx={pos.x} cy={pos.y} r="5" fill="red" />
        ))}
      </Svg>
      <View style={styles.scoreArea}>
        <Text style={styles.scoreText}>Last Scored: {lastScore}</Text>
        <Text style={styles.scoreText}>Clicked Sections: {clickedSections.join(', ')}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={onRemoveLast}>
          <Text style={styles.buttonText}>Remove Last Added</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dartboard;
