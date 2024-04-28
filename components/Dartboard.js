import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import Sector from './Sector';
import ClickableCircle from './ClickableCircle';

const Dartboard = () => {
  const [clickedSections, setClickedSections] = useState([]);
  const [lastScore, setLastScore] = useState(null); // State to hold the last clicked score

  useEffect(() => {
    if (clickedSections.length > 0) {
      setLastScore(clickedSections[clickedSections.length - 1]);
    }
  }, [clickedSections]); // Update lastScore when clickedSections changes

  const handlePress = score => {
    setClickedSections(prevClickedSections => [...prevClickedSections, score]);
    console.log('Scored:', score);
  };

  const onRemoveLast = () => {
    setClickedSections(prevClickedSections => {
      if (prevClickedSections.length > 0) {
        return prevClickedSections.slice(0, -1);  // Remove the last score from the array
      }
      return prevClickedSections;  // Return the array unchanged if it's already empty
    });
    console.log('Last score removed');
  };

  function createSectors(firstColor, secondColor, path, multiplier) {
    const sectors = [
      {angle: 0, color: firstColor, score: 1},
      {angle: 18, color: secondColor, score: 18},
      {angle: 36, color: firstColor, score: 4},
      {angle: 54, color: secondColor, score: 13},
      {angle: 72, color: firstColor, score: 6},
      {angle: 90, color: secondColor, score: 10},
      {angle: 108, color: firstColor, score: 15},
      {angle: 126, color: secondColor, score: 2},
      {angle: 144, color: firstColor, score: 17},
      {angle: 162, color: secondColor, score: 3},
      {angle: 180, color: firstColor, score: 19},
      {angle: 198, color: secondColor, score: 7},
      {angle: 216, color: firstColor, score: 16},
      {angle: 234, color: secondColor, score: 8},
      {angle: 252, color: firstColor, score: 11},
      {angle: 270, color: secondColor, score: 14},
      {angle: 288, color: firstColor, score: 9},
      {angle: 306, color: secondColor, score: 12},
      {angle: 324, color: firstColor, score: 5},
      {angle: 342, color: secondColor, score: 20},
    ];

    return {
      sectors: sectors,
      defaultPath: path,
      multiplier: multiplier,
    };
  }
  const Sectors1 = createSectors(
    '#eff7f6',
    '#1f1c22',
    `m 270, 166.1 c 11.08081,2.09695 17.89058,4.21752 26.0654,8.7312 l -20.85888,40.55923 c -4.73662,-1.9265 -7.57247,-3.35174 -12.22309,-4.03166 z`,
    1,
  );
  const Sectors2 = createSectors(
    'teal',
    '#032174',
    `m 272.5 ,144.5 c 12.07815,1.93674 23.16092,5.55319 33.20363,10.92475 l -10.25688,20.27521 c -8.92566,-4.43257 -17.51949,-7.31821 -26.19079,-8.44403 z`,
    3,
  );
  const Sectors3 = createSectors(
    '#eff7f6',
    '#1f1c22',
    `m 279,105 c 16,2.68 31.86675,7.72435 46.28235,15.44994 l -20.30756,39.94046 c -10.3529,-5.42988 -21.33462,-9.20909 -33.12629,-10.86219 z`,
    1,
  );
  const Sectors4 = createSectors(
    '#032174',
    'teal',
    `m 227.8,84.5 3.24403,20.132085 c 17.47906,-3.285385 33.49746,-2.645672 48.94673,-0.09541 l 3.14862,-20.132085 c -18.28593,-1.759787 -36.54458,-1.706852 -55.33938,0.09541 z`,
    2,
  );

  const renderSectors = ({sectors, defaultPath}, scale, zIndex) => {
    return sectors.map((sector, index) => (
      <Sector
        key={index}
        angle={sector.angle}
        color={sector.color}
        score={sector.score}
        scale={scale}
        path={defaultPath}
        handlePress={handlePress}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Svg height="500" width="500" style={styles.svgStyle}>
        <ClickableCircle color={'teal'} size={100} score={25} handlePress={handlePress} />
        <ClickableCircle color={'#032174'} size={50} score={50} handlePress={handlePress} />
        {renderSectors(Sectors1, 1)}
        {renderSectors(Sectors2, 1)}
        {renderSectors(Sectors3, 1)}
        {renderSectors(Sectors4, 1)}
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
  body:{

  },
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
    margin:'25',
    padding:'5',
    width: 200,
    backgroundColor: '#dc244b',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign:'center',
    color: 'white',
    fontSize: 16,
  },
});

export default Dartboard;
