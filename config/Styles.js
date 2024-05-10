import {StyleSheet} from 'react-native';
import { Colors } from './DartboardZones';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2b8fd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  playersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    width: 320,
    top: 10,
    fontSize: 18,
    fontWeight: '600',
    margin: 5,
    padding: 15,
    borderRadius: 15,
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
    bottom: 60,
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
  button: {
    margin: '1%',
    padding: '5',
    backgroundColor: '#dc244b',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
  },
  Dartbutton: {
    margin: '1%',
    padding: '5',
    backgroundColor: '#dc244b',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  playerName: {
    textAlign: 'center',
    color: Colors.blue,
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 8,
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  playerItem: {
    color: Colors.blue,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5
  },
  list: {
    width: '90%',
    height: '90%',
    alignItems: 'center'

  },
});

export default styles;
