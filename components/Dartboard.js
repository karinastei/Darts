import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Svg} from 'react-native-svg';
import Sector from './Sector';
import ClickableCircle from './ClickableCircle';

const Dartboard = () => {
  const [clickedSections, setClickedSections] = useState([]);
  const [lastScore, setLastScore] = useState(null);

  useEffect(() => {
    if (clickedSections.length > 0) {
      setLastScore(clickedSections[clickedSections.length - 1]);
    }
  }, [clickedSections]);

  const handlePress = score => {
    setClickedSections(prevClickedSections => [...prevClickedSections, score]);
    console.log('Scored:', score);
  };

  const onRemoveLast = () => {
    setClickedSections(prevClickedSections => {
      if (prevClickedSections.length > 0) {
        return prevClickedSections.slice(0, -1);
      }
      return prevClickedSections;
    });
  };

  const Colors = {
    white: '#eff7f6',
    gray: '#1f1c22',
    teal: 'teal',
    blue: '#032174',
  };
  const Scores = [1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20];

  const createSectors = useCallback(
    zone => {
      return Scores.map((score, index) => {
        const color = index % 2 === 0 ? zone.firstColor : zone.secondColor;
        const angle = index * (360 / Scores.length) + zone.adjuster;
        const path = zone.path;
        return (
          <Sector
            key={index}
            angle={angle}
            color={color}
            score={score}
            scale={zone.scale}
            path={path}
            handlePress={handlePress}
            multiplier={zone.multiplier}
          />
        );
      });
    },
    [handlePress],
  );

  const Zone1 = createSectors({
    firstColor: Colors.white,
    secondColor: Colors.gray,
    path: `m 270, 166.1 c 11.08081,2.09695 17.89058,4.21752 26.0654,8.7312 l -20.85888,40.55923 c -4.73662,-1.9265 -7.57247,-3.35174 -12.22309,-4.03166 z`,
    multiplier: 1,
    scale: 1,
    adjuster: 0,
  });
  const Zone2 = createSectors({
    firstColor: Colors.teal,
    secondColor: Colors.blue,
    path: `m 272.5 ,144.5 c 12.07815,1.93674 23.16092,5.55319 33.20363,10.92475 l -10.25688,20.27521 c -8.92566,-4.43257 -17.51949,-7.31821 -26.19079,-8.44403 z`,
    multiplier: 3,
    scale: 1,
    adjuster: 0,
  });
  const Zone3 = createSectors({
    firstColor: Colors.white,
    secondColor: Colors.gray,
    path: `m 279,105 c 16,2.68 31.86675,7.72435 46.28235,15.44994 l -20.30756,39.94046 c -10.3529,-5.42988 -21.33462,-9.20909 -33.12629,-10.86219 z`,
    multiplier: 1,
    scale: 1,
    adjuster: 0,
  });
  const Zone4 = createSectors({
    firstColor: Colors.teal,
    secondColor: Colors.blue,
    path: `m 227.8,84.5 3.24403,20.132085 c 17.47906,-3.285385 33.49746,-2.645672 48.94673,-0.09541 l 3.14862,-20.132085 c -18.28593,-1.759787 -36.54458,-1.706852 -55.33938,0.09541 z`,
    multiplier: 2,
    scale: 1,
    adjuster: 18,
  });

  return (
    <View style={styles.container}>
      <Svg height="500" width="500" style={styles.svgStyle}>
        <ClickableCircle color={'teal'} size={100} score={25} handlePress={handlePress} />
        <ClickableCircle color={'#032174'} size={50} score={50} handlePress={handlePress} />
        {Zone1}
        {Zone2}
        {Zone3}
        {Zone4}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aab2ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  svgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: 0,
  },
  scoreArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    width: 320,
    bottom: 80,
    fontSize: 18,
    fontWeight: '600',
    margin: 5,
    padding: 15,
    borderRadius: 15,
  },
  scoreText: {
    color: '#032174',
    fontSize: 18,
  },
  removeButton: {
    margin: '25',
    padding: '5',
    width: 200,
    backgroundColor: '#dc244b',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default Dartboard;
