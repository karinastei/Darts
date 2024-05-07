import {StyleSheet} from 'react-native';

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
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
