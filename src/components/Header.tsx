import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Switch
} from 'react-native';

interface HeaderProps { 
  onChangeTheme: (value: Boolean) => void;  
}

export function Header({ onChangeTheme }: HeaderProps) {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () =>{
    setIsEnabled(previousState => !previousState);
    onChangeTheme(isEnabled)    
  } 

  return (
    <View style={styles.header}>   
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} 
        style={styles.switchStyle}       
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switchStyle:{
    position: 'absolute',
    right: 10,
    top: 35
  }
});
